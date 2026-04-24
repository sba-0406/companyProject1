const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")
require("dotenv").config()

const s3 = new S3Client({
    region: process.env.S3_DOCS_REGION || "eu-north-1",
    credentials: {
        accessKeyId: process.env.S3_DOCS_KEY_ID,
        secretAccessKey: process.env.S3_DOCS_SECRET
    }
})

const BUCKET_NAME = process.env.S3_DOCS_BUCKET || "trust-center-docs"

exports.uploadFile = async (key, buffer, contentType) => {
    const params = {
        Bucket: BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: contentType
    }
    await s3.send(new PutObjectCommand(params))
    return `https://${BUCKET_NAME}.s3.${process.env.S3_DOCS_REGION || 'eu-north-1'}.amazonaws.com/${key}`
}

exports.generateSignedUrl = async (key, expiresIn = 3600) => {
    const command = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key
    })
    return await getSignedUrl(s3, command, { expiresIn })
}

exports.getFile = async (key) => {
    const { GetObjectCommand } = require("@aws-sdk/client-s3")
    const command = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key
    })
    const response = await s3.send(command)
    const streamToBuffer = (stream) =>
        new Promise((resolve, reject) => {
            const chunks = []
            stream.on("data", (chunk) => chunks.push(chunk))
            stream.on("error", reject)
            stream.on("end", () => resolve(Buffer.concat(chunks)))
        })
    return await streamToBuffer(response.Body)
}
