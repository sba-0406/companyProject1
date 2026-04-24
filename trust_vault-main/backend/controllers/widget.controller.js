const Widget = require("../models/Widget")
const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })

const s3 = new S3Client({
  region: process.env.S3_DOCS_REGION || "eu-north-1",
  credentials: {
    accessKeyId: process.env.S3_DOCS_KEY_ID,
    secretAccessKey: process.env.S3_DOCS_SECRET
  }
})

// Initialize default widgets if they don't exist
exports.initializeWidgets = async () => {
  try {
    const darwinboxSecurityControls = [
      {
        title: "Risk Profile",
        icon: "📊",
        bg: "#F4F5F7",
        items: [
          { label: "Data Access Level", description: "As a SaaS vendor selling to an enterprise customer, what type of data do you need access to?\nInternal" },
          { label: "Hosting", description: "Are you hosted only on one of the major cloud providers or do you have any on-premise systems?\nMajor Cloud Provider" }
        ]
      },
      {
        title: "Product Security",
        icon: "🛡️",
        bg: "#EBF2FF",
        items: [
          { label: "Audit Logging", description: "Customers have access to their log data in the console. Darwinbox Enterprise customers have access to event logging including login attempts and more. Per GDPR regulations, audit logs are retained for 365 days." },
          {
            label: "Data Security",
            description: "Darwinbox supports TLS 1.2 to encrypt network traffic between the customer application and Darwinbox. Darwinbox is not able to guarantee that all connections to our carriers partners are encrypted, as we work with their connection options.\n\nFor media traffic, we offer the following security options:\nWebRTC: DTLS-SRTP w/ Signalling over TLS\nSIP: TLS-SRTP\n\nAdditionally, we offer customers the ability to push their media traffic over private connectivity or an IPSec VPN through Darwinbox Interconnect. This option may not be available for all products.\n\nPer NIST guidance, Employee & User Passwords must meet these criteria:\nAt least 20 characters\nThree of four character types (uppercase, lowercase, numbers, special characters)\nCannot be any of your last 24 passwords\nPasswords rotation is no longer required\nAccounts lockout must occur after five invalid passwords attempts\nAt least one day must have elapsed since you last changed your password\nMulti-Factor Authentication (MFA) is required\n\nPer NIST guidance, Privileged Passwords must meet the following criteria:\nAt least 20 characters\nThree of four character types (uppercase, lowercase, numbers, special characters)\nCannot be any of your last 24 passwords\nPasswords rotation is no longer required\nAccounts lockout must occur after five invalid passwords attempts\nAt least one day must have elapsed since you last changed your password\nMulti-Factor Authentication (MFA) is required"
          },
          {
            label: "Service-Level Agreement",
            description: "Darwinbox defines Service Level Agreements (SLAs) to provide clear, measurable commitments to service availability and performance. With a typical uptime guarantee of 99.95%, SLAs ensure reliability across Darwinbox’s cloud-native platform. Unlike traditional Recovery Time Objectives (RTOs), which focus on recovery from downtime, SLAs emphasize continuous availability, leveraging Darwinbox’s globally distributed, redundant infrastructure to minimize disruptions proactively."
          }
        ]
      },
      {
        title: "Reports",
        icon: "📄",
        bg: "#FFF7D6",
        items: [
          { label: "Authy Pentest Report", description: "Auditor: Elttam\nAuthy Pentest Report complied by Doyensec." },
          { label: "Authy Pentest Remediation Schedule", description: "This is Authy's Remediation schedule taken as part of the Authy penetration test report." },
          { label: "BC/DR and Crisis Management", description: "Auditor: Darwinbox\nDarwinbox's Business Continuity, disaster recovery, and crisis management informational document." },
          { label: "Security Overview", description: "Auditor: Darwinbox\nhttps://www.darwinbox.com/en-us/legal/security-overview\nThis Security Overview is incorporated into and made a part of the agreement between Darwinbox and Customer covering Customer’s use of the Services, including any terms applicable to the processing of personal data set forth therein." },
          { label: "SendGrid Pen Test Report", description: "Auditor: Coalfire Certification, Inc.\nThis is the Penetration Test Report for the email product at Darwinbox, Sendgrid." },
          { label: "SendGrid SOC 2 Report", description: "Auditor: Coalfire Certification, Inc.\nThis is Sendgrid's SOC2 Report. This is an attestation that evaluates our company's ability to securely manage the data we collect from our customers and use during business operations." },
          { label: "Darwinbox ISO 27001, 27017, 27018", description: "Auditor: Coalfire Certification, Inc.\nThis is our ISO27001 standard certification." },
          { label: "Darwinbox ISO SOA", description: "Auditor: Coalfire Certification, Inc.\nThis is Darwinbox's ISO27001 Statement of Applicability. It states the ISO 27001 Annex A controls that our organization determined to be necessary for mitigating information security risk and the controls that were excluded." },
          { label: "Darwinbox PCI DSS AOC", description: "Auditor: 2 PCI Security Standards Council, LLC\nThis is Darwinbox's PCI-DSS Attestation of Compliance. The AOC is the official PCI SSC form for merchants and service providers to attest to the results of a PCI DSS assessment." },
          { label: "Darwinbox PCI DSS Responsibility Matrix", description: "A PCI Responsibility Matrix, also known as a Responsibility Allocation or Shared Responsibility Matrix, is a document that outlines and assigns specific tasks and obligations related to PCI DSS compliance among different parties involved in payment card processing." },
          { label: "Darwinbox Pen Test Report", description: "Auditor: ACROS Security\nThis is Darwinbox's site wide penetration test report." },
          { label: "Darwinbox Securing Payments", description: "This is a security whitepaper regarding how Darwinbox secures payments with Darwinbox programmable voice." },
          { label: "Darwinbox SOC 2 Report", description: "Auditor: Coalfire Certification, Inc.\nThis is Darwinbox's SOC2 Report. This is an attestation that evaluates our company's ability to securely manage the data we collect from our customers and use during business operations." }
        ]
      },
      {
        title: "Self-Assessments",
        icon: "📋",
        bg: "#E3FCEF",
        items: [
          { label: "CAIQ", description: "The Consensus Assessments Initiative Questionnaire (CAIQ) is a standardized security assessment tool developed by the Cloud Security Alliance (CSA). It's a questionnaire that cloud service providers (CSPs) complete to demonstrate their security practices and compliance with industry standards." },
          { label: "SIG Lite", description: "This is Darwinbox's SIG Lite Questionnaire. SIG Lite is a simplified version of the standard Security Information and Governance (SIG) questionnaire, tailored for assessing cybersecurity risks in third-party vendor relationships." }
        ]
      },
      {
        title: "Data Security",
        icon: "🔒",
        bg: "#FFEBE6",
        items: [
          {
            label: "Data Retention",
            description: "Retention of PII Associated with Your End Users\n\nDarwinbox generally processes your end users’ personal data for the purpose of providing the services you request under your Darwinbox account... (refer to Privacy Policy for full details)\nhttps://www.darwinbox.com/legal/privacy"
          },
          { label: "Encryption-at-rest", description: "Data flagged as PII will be field level encrypted with AES-256 encryption. Call recordings uses S3 SSE which is AES 256-Bit Encryption." },
          { label: "Encryption-in-transit", description: "For the Darwinbox Services, Customer Data is encrypted when in transit between Customer’s software application and the Services using TLS v1.2." }
        ]
      },
      {
        title: "Infrastructure",
        icon: "🏗️",
        bg: "#F4F5F7",
        items: [
          { label: "Amazon Web Services", description: "Darwinbox's infrastructure is housed in Amazon Web Services (AWS) data centres, which are secured by a professional security staff as well as a variety of physical controls at the perimeter and building ingress points." },
          { label: "Darwinbox Flex Network Diagram", description: "This is Darwinbox Flex Solution Architecture Diagram. A Solution architecture diagram involves creating a visual representation of the processes involved in a system and how they interact with each other." }
        ]
      },
      {
        title: "Legal",
        icon: "⚖️",
        bg: "#EBF2FF",
        items: [
          { label: "Subprocessors", description: "Darwinbox works with several subprocessors to provide its services, including Amazon (AWS), Google Cloud, Datadog, Confluent, and more. Detailed list available at https://www.darwinbox.com/en-us/legal/sub-processors" },
          { label: "Customer Audit Rights", description: "Per section 12.2 of the Darwinbox Data Protection Addendum: Customer Audit. Upon Customer’s written request at reasonable intervals, and subject to reasonable confidentiality controls, Darwinbox will make available to Customer a copy of Darwinbox’s most recent Audit Report." },
          { label: "Data Protection Agreement", description: "https://www.darwinbox.com/en-us/legal/data-protection-addendum" },
          { label: "Privacy Policy", description: "https://www.darwinbox.com/en-us/legal/privacy" },
          { label: "Service-Level Agreement", description: "https://www.darwinbox.com/en-us/legal/service-level-agreement" },
          { label: "Terms of Service", description: "https://www.darwinbox.com/en-us/legal/tos" }
        ]
      },
      {
        title: "Data Privacy",
        icon: "👤",
        bg: "#FEF0EB",
        items: [
          { label: "Cookies", description: "https://www.darwinbox.com/en-us/legal/privacy#cookies-and-tracking-technologies" },
          { label: "Data Breach Notifications", description: "https://www.darwinbox.com/en-us/legal/data-protection-addendum#:~:text=11.3%20Security%20Incident%20Notification" },
          { label: "Data Protection Officer", description: "Darwinbox has appointed a Data Protection Officer to oversee our ongoing compliance efforts." },
          { label: "GDPR", description: "https://www.darwinbox.com/en-us/gdpr" },
          { label: "Darwinbox BAA/HIPAA", description: "https://www.darwinbox.com/en-us/hipaa" }
        ]
      },
      {
        title: "Disaster Recovery Test Reports",
        icon: "🔄",
        bg: "#E3FCEF",
        items: [
          "Flex DR Test Report",
          { label: "Sendgrid Email DR Test Report", description: "This is Sendgrid's Disaster Recovery test report. A disaster recovery test is the examination of each step in a disaster recovery plan to ensure that an organization can recover data, restore business critical applications and continue operations after an interruption of services." },
          "SMS DR Test Report",
          "Verify DR Test Report",
          "Video DR Test Report",
          "Voice DR Test Report"
        ]
      },
      {
        title: "Incident Response",
        icon: "🚨",
        bg: "#FFEBE6",
        items: [
          {
            label: "External or Third Party Scan",
            description: "Darwinbox does not provide any specific responses to security evaluations such as third-party security scans such as Bitsight or Security Scorecard. Instead we suggest that customers directly evaluate specific Darwinbox services."
          },
          { label: "Report Security Threats", description: "Customers can report security threats here: https://www.darwinbox.com/en-us/security/vulnerability-disclosure-program" }
        ]
      }
    ]

    const defaultWidgets = [
      {
        widgetName: "Controls",
        isVisible: true,
        isEditable: true,
        config: {
          categories: darwinboxSecurityControls
        }
      },
      // ... existing widgets ...
      {
        widgetName: "Hero",
        isVisible: true,
        isEditable: false,
        config: {}
      },
      {
        widgetName: "Compliances",
        isVisible: true,
        isEditable: true,
        config: {
          items: [],
          urls: {},
          customItems: []
        }
      },
      {
        widgetName: "TrustedBy",
        isVisible: true,
        isEditable: false,
        config: {}
      },
      {
        widgetName: "Resources",
        isVisible: true,
        isEditable: false,
        config: {}
      }
    ]

    for (const widget of defaultWidgets) {
      if (widget.widgetName === "Controls") {
        // Force update for Controls to apply new Darwinbox data
        await Widget.findOneAndUpdate(
          { widgetName: "Controls" },
          { $set: widget },
          { upsert: true, new: true }
        )
      } else {
        const exists = await Widget.findOne({ widgetName: widget.widgetName })
        if (!exists) {
          await Widget.create(widget)
        }
      }
    }

    const compWidget = await Widget.findOne({ widgetName: "Compliances" })
    if (compWidget) {
      const updates = {}
      if (!compWidget.isEditable) updates.isEditable = true
      if (!compWidget.config?.urls) updates["config.urls"] = {}
      if (!compWidget.config?.customItems) updates["config.customItems"] = []

      // Migrate existing broken S3 URLs to proxy URLs
      if (compWidget.config?.customItems?.length > 0) {
        let migrated = false;
        const newCustomItems = compWidget.config.customItems.map(item => {
          if (item.logoUrl && item.logoUrl.includes('s3.eu-north-1.amazonaws.com')) {
            const fileName = item.logoUrl.split('/').pop();
            const proxyUrl = `${process.env.BACKEND_URL || 'http://localhost:5000'}/api/widgets/logo/${fileName}`;
            if (item.logoUrl !== proxyUrl) {
              item.logoUrl = proxyUrl;
              migrated = true;
            }
          }
          return item;
        });
        if (migrated) {
          updates["config.customItems"] = newCustomItems;
        }
      }

      if (Object.keys(updates).length > 0) {
        await Widget.updateOne({ widgetName: "Compliances" }, { $set: updates })
      }
    }
  } catch (err) {
    console.error("Initialize widgets failed:", err)
  }
}

exports.getWidgets = async (req, res) => {
  try {
    await exports.initializeWidgets()
    const widgets = await Widget.find()
    res.json(widgets)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.updateWidget = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body

    const updateFields = { updatedAt: new Date() }
    if (updateData.widgetName) updateFields.widgetName = updateData.widgetName
    if (updateData.isVisible !== undefined) updateFields.isVisible = updateData.isVisible
    if (updateData.isEditable !== undefined) updateFields.isEditable = updateData.isEditable
    if (updateData.config !== undefined) updateFields.config = updateData.config

    const widget = await Widget.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { returnDocument: 'after' }
    )

    if (!widget) {
      return res.status(404).json({ message: "Widget not found" })
    }

    res.json(widget)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.createWidget = async (req, res) => {
  try {
    const { widgetName, isVisible, isEditable, config } = req.body
    const exists = await Widget.findOne({ widgetName })
    if (exists) {
      return res.status(409).json({ message: "Widget already exists" })
    }
    const widget = await Widget.create({ widgetName, isVisible, isEditable, config: config || {} })
    res.status(201).json(widget)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.deleteWidget = async (req, res) => {
  try {
    const widget = await Widget.findByIdAndDelete(req.params.id)
    if (!widget) return res.status(404).json({ message: "Widget not found" })
    res.json({ message: "Widget removed" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.uploadLogo = async (req, res) => {
  try {
    const file = req.file
    if (!file) return res.status(400).json({ error: "No file uploaded" })

    const fileName = `${Date.now()}-${file.originalname}`
    const command = new PutObjectCommand({
      Bucket: process.env.S3_DOCS_BUCKET,
      Key: `logos/${fileName}`,
      Body: file.buffer,
      ContentType: file.mimetype
    })

    await s3.send(command)

    // Return the backend proxy URL instead of the direct S3 URL
    const proxyUrl = `${process.env.BACKEND_URL || 'http://localhost:5000'}/api/widgets/logo/${fileName}`

    res.json({ message: "Logo uploaded successfully", url: proxyUrl })
  } catch (err) {
    res.status(500).json({ error: "Logo upload failed", details: err.message })
  }
}

exports.getLogo = async (req, res) => {
  try {
    const { key } = req.params
    const command = new GetObjectCommand({
      Bucket: process.env.S3_DOCS_BUCKET,
      Key: `logos/${key}`
    })

    const s3Response = await s3.send(command)
    res.setHeader("Content-Type", s3Response.ContentType || "image/png")
    res.setHeader("Cache-Control", "public, max-age=31536000") // Cache for 1 year
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin") // Fix for browser blocking cross-port images

    const stream = s3Response.Body
    stream.pipe(res)
  } catch (err) {
    res.status(404).json({ error: "Logo not found" })
  }
}

exports.uploadMiddleware = upload.single("file")