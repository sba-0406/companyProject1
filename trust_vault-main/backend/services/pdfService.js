const { PDFDocument, rgb } = require("pdf-lib")
const s3Service = require("./s3Service")

exports.createNDA = async (email, signature, signingMethod, fullName, documentTitles = []) => {

    const template = await s3Service.getFile("templates/nda-template.pdf")

    const pdfDoc = await PDFDocument.load(template)

    const pages = pdfDoc.getPages()

    // add signature or docusign note to last page
    const lastPage = pages[pages.length - 1]

    // Hide DISCLOSING PARTY signature area (assuming it's at y=170-220)
    lastPage.drawRectangle({
        x: 50,
        y: 170,
        width: 500,
        height: 60,
        color: rgb(1, 1, 1) // white
    })

    // Formatting date for India (IST) as per user location (+05:30)
    const now = new Date()
    const formattedDate = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'Asia/Kolkata'
    })

    if (fullName) {
        // Draw "Signed by : {name}" on the signature line
        lastPage.drawText(`Signed by : ${fullName}`, {
            x: 160,
            y: 135,
            size: 11,
            color: rgb(0, 0, 0.4)
        })

        // Draw "Date : {date}" on the date line
        lastPage.drawText(`Date : ${formattedDate}`, {
            x: 440,
            y: 112,
            size: 11,
            color: rgb(0, 0, 0.4)
        })
    }

    if (signingMethod === 'docusign') {
        lastPage.drawText("Digitally Signed via DocuSign", {
            x: 100,
            y: 150,
            size: 14,
            color: rgb(0, 0, 1)
        })
        lastPage.drawText(`User: ${email}`, {
            x: 100,
            y: 130,
            size: 10,
            color: rgb(0, 0, 0)
        })
        lastPage.drawText(`Date: ${formattedDate}`, {
            x: 100,
            y: 115,
            size: 10,
            color: rgb(0, 0, 0)
        })
    }

    // Add Annexure for Requested Documents
    if (documentTitles && documentTitles.length > 0) {
        const annexPage = pdfDoc.addPage([595.28, 841.89]) // A4
        annexPage.drawText("ANNEXURE A: REQUESTED DOCUMENTS", {
            x: 50,
            y: 780,
            size: 15,
            color: rgb(0.1, 0.1, 0.4)
        })
        annexPage.drawText("This agreement specifically covers access to the following confidential resources:", {
            x: 50,
            y: 755,
            size: 10,
            color: rgb(0.4, 0.4, 0.4)
        })

        let yPos = 720
        documentTitles.forEach((title, i) => {
            if (yPos < 50) return // Basic overflow protection
            annexPage.drawText(`${i + 1}. ${title}`, {
                x: 70,
                y: yPos,
                size: 11,
                color: rgb(0, 0, 0)
            })
            yPos -= 22
        })

        annexPage.drawText(`Authenticated for: ${email}`, {
            x: 50,
            y: 40,
            size: 8,
            color: rgb(0.6, 0.6, 0.6)
        })
    }

    // Flatten form fields to remove interactive blue boxes
    const form = pdfDoc.getForm()
    try {
        form.flatten()
    } catch (e) {
    }

    const pdfBytes = await pdfDoc.save()

    return pdfBytes
}