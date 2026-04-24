const NDARequest = require("../models/NDARequest")
const User = require("../models/User")
const Document = require("../models/Document")
const { createNDA } = require("../services/pdfService")
const { sendNDA, notifyAdminNewProspect } = require("../services/emailService")
const { uploadFile, generateSignedUrl } = require("../services/s3Service")

exports.viewSignedNDA = async (req, res) => {
    try {
        const { id } = req.params
        const nda = await NDARequest.findById(id)
        if (!nda || !nda.s3Key) return res.status(404).send("NDA record or S3 document not found")

        const signedUrl = await generateSignedUrl(nda.s3Key)
        res.json({ url: signedUrl })
    } catch (error) {
        res.status(500).send("Failed to generate secure access link")
    }
}

exports.submitNDA = async (req, res) => {

    try {
        const { signingMethod, fullName, docIds } = req.body
        const email = req.user.email

        let titles = []
        if (docIds) {
            const idList = docIds.split(",").filter(id => id.trim().length === 24)
            const docs = await Document.find({ _id: { $in: idList } })
            titles = docs.map(d => d.title)
        }

        // generate watermarked NDA
        const pdfBytes = await createNDA(email, null, signingMethod, fullName, titles)

        // upload to S3
        const timestamp = Date.now()
        const s3Key = `NDAs/${timestamp}-${email.replace(/@/g, '_at_')}.pdf`
        const s3Url = await uploadFile(s3Key, Buffer.from(pdfBytes), "application/pdf")

        const nda = await NDARequest.create({
            email,
            fullName,
            s3Key,
            signedDocUrl: s3Url,
            status: "signed"
        })

        // mark NDA as signed and approve account
        await User.updateOne(
            { email },
            { ndaSigned: true, isApproved: true }
        )

        // send NDA copy to admin
        await sendNDA(email, pdfBytes)

        // notify admin about new prospect
        await notifyAdminNewProspect(email)

        let ndaObj = nda.toObject()
        if (ndaObj.signedDocUrl) ndaObj.signedDocUrl = Buffer.from(ndaObj.signedDocUrl).toString("base64")

        res.json({
            message: "NDA submitted successfully",
            nda: ndaObj
        })

    } catch (error) {


        res.status(500).json({
            error: "Failed to submit NDA",
            details: error.message
        })

    }

}

exports.getNDAs = async (req, res) => {
    try {
        const { search } = req.query
        let query = {}
        if (search) {
            query = {
                $or: [
                    { email: { $regex: search, $options: "i" } },
                    { fullName: { $regex: search, $options: "i" } }
                ]
            }
        }
        const ndas = await NDARequest.find(query).sort({ signedAt: -1 })

        const obfuscatedNDAs = ndas.map(n => {
            const nObj = n.toObject()
            if (nObj.signedDocUrl) nObj.signedDocUrl = Buffer.from(nObj.signedDocUrl).toString("base64")
            return nObj
        })

        res.json(obfuscatedNDAs)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch NDAs" })
    }
}

exports.previewNDA = async (req, res) => {
    try {
        const { fullName, docIds } = req.query
        const email = req.user.email
        if (!email) return res.status(400).send("Email required")

        let titles = []
        if (docIds) {
            const idList = docIds.split(",").filter(id => id.trim().length === 24)
            const docs = await Document.find({ _id: { $in: idList } })
            titles = docs.map(d => d.title)
        }

        const pdfBytes = await createNDA(email, null, null, fullName, titles)

        res.setHeader("Content-Type", "application/pdf")
        res.setHeader("Content-Disposition", "inline; filename=nda-preview.pdf")
        res.send(Buffer.from(pdfBytes))
    } catch (error) {
        res.status(500).send("Failed to generate preview")
    }
}