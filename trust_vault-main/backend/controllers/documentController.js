const Document = require("../models/Document")
const AccessRequest = require("../models/AccessRequest")
const { notifyAdminNewRequest } = require("../services/emailService")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")
const { PDFDocument, rgb, degrees } = require("pdf-lib")
const User = require("../models/User")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })

// Shared S3 Client
const { S3Client, PutObjectCommand, GetObjectCommand, HeadObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3")
require("dotenv").config()
const s3 = new S3Client({
    region: process.env.S3_DOCS_REGION || "eu-north-1",
    credentials: {
        accessKeyId: process.env.S3_DOCS_KEY_ID,
        secretAccessKey: process.env.S3_DOCS_SECRET
    }
})

exports.getDocuments = async (req, res) => {
    try {
        const user = req.user
        let query = {}

        if (!user) {
            // Guest: only public docs
            query.accessTier = "public"
        }
        // Logged-in users (Admins, Customers, Prospects) get all docs 
        // to allow them to see the catalog and request access.

        const docs = await Document.find(query)

        // Obfuscate S3 URLs
        const obfuscatedDocs = docs.map(doc => {
            const docObj = doc.toObject()
            if (docObj.s3Url) {
                docObj.s3Url = Buffer.from(docObj.s3Url).toString("base64")
            }
            return docObj
        })

        res.json(obfuscatedDocs)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.requestAccess = async (req, res) => {
    try {
        const { documentId, reason, termsAccepted, marketingUpdates, company: bodyCompany } = req.body
        const email = req.user.email

        let company = bodyCompany
        if (!company) {
            const user = await require("../models/User").findOne({ email })
            company = user?.company
        }

        const doc = await require("../models/Document").findById(documentId)

        const request = await AccessRequest.create({
            email,
            company,
            documentId,
            documentName: doc ? doc.title : "Document",
            reason,
            status: "pending",
            termsAccepted: !!termsAccepted,
            marketingUpdates: !!marketingUpdates
        })

        await notifyAdminNewRequest(request)
        res.json(request)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.uploadDoc = async (req, res) => {
    try {
        const { title, description, accessTier, category } = req.body
        const file = req.file

        if (!file) {
            return res.status(400).json({ error: "No file uploaded" })
        }

        const fileName = `${Date.now()}-${file.originalname}`
        const command = new PutObjectCommand({
            Bucket: process.env.S3_DOCS_BUCKET,
            Key: `docs/${fileName}`,
            Body: file.buffer,
            ContentType: file.mimetype
        })

        await s3.send(command)

        const doc = new Document({
            title,
            description,
            accessTier,
            category,
            s3Url: `https://${process.env.S3_DOCS_BUCKET}.s3.${process.env.S3_DOCS_REGION || 'eu-north-1'}.amazonaws.com/docs/${fileName}`
        })

        await doc.save()
        let docObj = doc.toObject()
        if (docObj.s3Url) docObj.s3Url = Buffer.from(docObj.s3Url).toString("base64")
        res.json({ message: "Uploaded successfully", doc: docObj })
    } catch (err) {
        res.status(500).json({ error: "Upload failed", details: err.message })
    }
}

exports.uploadMiddleware = upload.single("file")

exports.updateDocument = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, accessTier, category } = req.body

        let updateData = { title, description, accessTier, category }

        if (req.file) {
            const fileName = `${Date.now()}-${req.file.originalname}`
            const uploadParams = {
                Bucket: process.env.S3_DOCS_BUCKET,
                Key: fileName,
                Body: req.file.buffer,
                ContentType: req.file.mimetype
            }
            await s3.send(new PutObjectCommand(uploadParams))
            updateData.s3Url = `https://${process.env.S3_DOCS_BUCKET}.s3.${process.env.S3_DOCS_REGION}.amazonaws.com/${fileName}`
        }

        const doc = await Document.findByIdAndUpdate(id, updateData, { new: true })
        if (!doc) return res.status(404).json({ error: "Document not found" })

        let docObj = doc.toObject()
        if (docObj.s3Url) docObj.s3Url = Buffer.from(docObj.s3Url).toString("base64")
        res.json({ message: "Updated successfully", doc: docObj })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.deleteDocument = async (req, res) => {
    try {
        const { id } = req.params
        const doc = await Document.findById(id)

        if (!doc) return res.status(404).json({ error: "Document not found" })

        // Delete from S3
        if (doc.s3Url) {
            try {
                const url = new URL(doc.s3Url);
                const encodedKey = url.pathname.startsWith('/') ? url.pathname.substring(1) : url.pathname;
                const key = decodeURIComponent(encodedKey);
                await s3.send(new DeleteObjectCommand({
                    Bucket: process.env.S3_DOCS_BUCKET,
                    Key: key
                }))
            } catch (e) {
            }
        }

        await Document.findByIdAndDelete(id)
        res.json({ message: "Deleted successfully" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.getViewUrl = async (req, res) => {
    try {
        const { documentId } = req.body
        const user = req.user
        const email = user.email

        const doc = await Document.findById(documentId)

        if (!doc) {
            return res.status(404).json({ error: "Document not found" })
        }

        // Authorization Check
        const isAdmin = user.role === "admin"
        const isCustomer = user.role === "customer"
        const isPublic = doc.accessTier === "public"
        const isAuthorized = user.accessibleDocs?.some(id => String(id) === String(documentId))

        if (!isAdmin && !isCustomer && !isPublic && !isAuthorized) {
            return res.status(403).json({ error: "Access denied. Please request access to view this document." })
        }

        const watermarkText = email || "Guest - Public View"

        // Extract key from s3Url robustly
        let key;
        try {
            const urlObj = new URL(doc.s3Url);
            const encodedKey = urlObj.pathname.startsWith('/') ? urlObj.pathname.substring(1) : urlObj.pathname;
            key = decodeURIComponent(encodedKey);
        } catch (e) {
            // Fallback to old method if URL constructor fails
            const urlParts = doc.s3Url.split(".amazonaws.com/");
            const encodedKey = urlParts[1];
            key = decodeURIComponent(encodedKey);
        }

        if (!key) {
            return res.status(500).json({ error: "Invalid S3 URL stored for this document" })
        }

        const command = new GetObjectCommand({
            Bucket: process.env.S3_DOCS_BUCKET,
            Key: key
        })

        const s3Response = await s3.send(command)
        const pdfBytes = await s3Response.Body.transformToByteArray()

        // Watermarking Logic: Only for non-public documents
        if (doc.accessTier !== "public") {
            const pdfDoc = await PDFDocument.load(pdfBytes)
            const pages = pdfDoc.getPages()

            for (const page of pages) {
                const { width, height } = page.getSize()
                const fontSize = 14
                const opacity = 0.4

                // Draw a grid of watermarks
                for (let x = 50; x < width; x += 250) {
                    for (let y = 50; y < height; y += 200) {
                        page.drawText(watermarkText, {
                            x: x,
                            y: y,
                            size: fontSize,
                            color: rgb(0.5, 0.5, 0.5),
                            rotate: degrees(45),
                            opacity: opacity,
                        })
                    }
                }
            }
            const modifiedPdfBytes = await pdfDoc.save()
            res.setHeader("Content-Type", "application/pdf")
            res.setHeader("Content-Disposition", "inline; filename=document.pdf")
            return res.send(Buffer.from(modifiedPdfBytes))
        }

        // For public docs, send original without watermark
        res.setHeader("Content-Type", "application/pdf")
        res.setHeader("Content-Disposition", "inline; filename=document.pdf")
        res.send(Buffer.from(pdfBytes))

    } catch (err) {
        res.status(500).json({
            error: "Failed to generate watermarked document",
            details: err.message,
            stack: err.stack
        })
    }
}