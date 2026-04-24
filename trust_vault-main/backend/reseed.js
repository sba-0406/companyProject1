const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const WidgetSchema = new mongoose.Schema({
    widgetName: { type: String, required: true, unique: true },
    isVisible: { type: Boolean, default: true },
    isEditable: { type: Boolean, default: true },
    config: { type: mongoose.Schema.Types.Mixed, default: {} }
}, { timestamps: true });

const Widget = mongoose.model('Widget', WidgetSchema);

const darwinboxSecurityControls = [
    {
        title: "Risk Profile",
        icon: "📊",
        bg: "#F4F5F7",
        items: [
            { label: "Data Access Level", description: "All customer data is classified as Restricted.\nInternal" },
            { label: "Hosting", description: "AWS data centres are secured by professional security staff.\nMajor Cloud Provider" },
            { label: "Architecture", description: "The platform is designed with a multi-tenant architecture and strong isolation.\nCloud Native" }
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
                description: "Darwinbox supports TLS 1.2 to encrypt network traffic between the customer application and Darwinbox. Darwinbox is not able to guarantee that all connections to our carriers partners are encrypted, as we work with their connection options.\n\nFor media traffic, we offer the following security options:\nWebRTC: DTLS-SRTP w/ Signalling over TLS\nSIP: TLS-SRTP\n\nAdditionally, we offer customers the ability to push their media traffic over private connectivity or an IPSec VPN through Darwinbox Interconnect. This option may not be available for all products."
            },
            {
                label: "Service-Level Agreement",
                description: "Darwinbox defines Service Level Agreements (SLAs) to provide clear, measurable commitments to service availability and performance. With a typical uptime guarantee of 99.95%, SLAs ensure reliability across Darwinbox’s cloud-native platform."
            }
        ]
    },
    {
        title: "Reports",
        icon: "📄",
        bg: "#F4F5F7",
        items: [
            { label: "Authy Pentest Report", description: "Auditor: Elttam\nAuthy Pentest Report complied by Doyensec." },
            { label: "Authy Pentest Remediation Schedule", description: "This is Authy's Remediation schedule taken as part of the Authy penetration test report." },
            { label: "BC/DR and Crisis Management", description: "Auditor: Darwinbox\nDarwinbox's Business Continuity, disaster recovery, and crisis management informational document." },
            { label: "Security Overview", description: "Auditor: Darwinbox\nhttps://www.darwinbox.com/en-us/legal/security-overview\nThis Security Overview is incorporated into and made a part of the agreement." },
            { label: "SendGrid Pen Test Report", description: "Auditor: Coalfire Certification, Inc.\nThis is the Penetration Test Report for the email product at Darwinbox, Sendgrid." },
            { label: "SendGrid SOC 2 Report", description: "Auditor: Coalfire Certification, Inc.\nThis is Sendgrid's SOC2 Report." },
            { label: "Darwinbox ISO 27001, 27017, 27018", description: "Auditor: Coalfire Certification, Inc.\nThis is our ISO27001 standard certification." },
            { label: "Darwinbox ISO SOA", description: "Auditor: Coalfire Certification, Inc.\nThis is Darwinbox's ISO27001 Statement of Applicability." },
            { label: "Darwinbox PCI DSS AOC", description: "Auditor: 2 PCI Security Standards Council, LLC\nThis is Darwinbox's PCI-DSS Attestation of Compliance." },
            { label: "Darwinbox PCI DSS Responsibility Matrix", description: "A PCI Responsibility Matrix outlines and assigns specific tasks and obligations." },
            { label: "Darwinbox Pen Test Report", description: "Auditor: ACROS Security\nThis is Darwinbox's site wide penetration test report." },
            { label: "Darwinbox Securing Payments", description: "This is a security whitepaper regarding how Darwinbox secures payments." },
            { label: "Darwinbox SOC 2 Report", description: "Auditor: Coalfire Certification, Inc.\nThis is Darwinbox's SOC2 Report." }
        ]
    },
    {
        title: "Self-Assessments",
        icon: "📋",
        bg: "#E3FCEF",
        items: [
            { label: "CAIQ", description: "Consensus Assessments Initiative Questionnaire (CAIQ)." },
            { label: "SIG Lite", description: "This is Darwinbox's SIG Lite Questionnaire." }
        ]
    },
    {
        title: "Data Security",
        icon: "🔒",
        bg: "#FFEBE6",
        items: [
            {
                label: "Data Retention",
                description: "Retention of PII Associated with Your End Users\n\nDarwinbox generally processes your end users’ personal data. https://www.darwinbox.com/legal/privacy"
            },
            { label: "Encryption-at-rest", description: "Data flagged as PII will be field level encrypted with AES-256 encryption." },
            { label: "Encryption-in-transit", description: "For the Darwinbox Services, Customer Data is encrypted using TLS v1.2." }
        ]
    },
    {
        title: "Infrastructure",
        icon: "🏗️",
        bg: "#F4F5F7",
        items: [
            { label: "Amazon Web Services", description: "Darwinbox's infrastructure is housed in Amazon Web Services (AWS) data centres." },
            { label: "Darwinbox Flex Network Diagram", description: "This is Darwinbox Flex Solution Architecture Diagram." }
        ]
    },
    {
        title: "Legal",
        icon: "⚖️",
        bg: "#EBF2FF",
        items: [
            { label: "Subprocessors", description: "Darwinbox works with several subprocessors including Amazon (AWS), Google Cloud, Datadog. https://www.darwinbox.com/en-us/legal/sub-processors" },
            { label: "Customer Audit Rights", description: "Per Darwinbox Data Protection Addendum: Customer Audit." },
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
            { label: "Data Breach Notifications", description: "https://www.darwinbox.com/en-us/legal/data-protection-addendum" },
            { label: "Data Protection Officer", description: "Darwinbox has appointed a Data Protection Officer." },
            { label: "GDPR", description: "https://www.darwinbox.com/en-us/gdpr" },
            { label: "Darwinbox BAA/HIPAA", description: "https://www.darwinbox.com/en-us/hipaa" }
        ]
    },
    {
        title: "Disaster Recovery Test Reports",
        icon: "🔄",
        bg: "#F4F5F7",
        items: [
            { label: "Flex Disaster Recovery Test Report", description: "Evidence of the disaster recovery testing conducted for Darwinbox Flex." },
            { label: "Programmable Messaging Disaster Recovery Test Report", description: "Evidence of the disaster recovery testing conducted for Programmable Messaging." },
            { label: "Programmable Voice Disaster Recovery Test Report", description: "Evidence of the disaster recovery testing conducted for Programmable Voice." },
            { label: "SendGrid Disaster Recovery Test Report", description: "Evidence of the disaster recovery testing conducted for Sendgrid." }
        ]
    },
    {
        title: "Acceptable Use Policy",
        icon: "📜",
        bg: "#E3FCEF",
        items: [
            { label: "Acceptable Use Policy", description: "The AUP defines the rules and guidelines for using Darwinbox services." },
            { label: "Messaging Policy", description: "Policies specific to messaging services to ensure compliance and avoid abuse." }
        ]
    },
    {
        title: "Incident Response",
        icon: "🚨",
        bg: "#FFEBE6",
        items: [
            {
                label: "External or Third Party Scan",
                description: "Darwinbox does not provide specific responses to third-party security scans. Instead we suggest direct evaluation."
            },
            { label: "Report Security Threats", description: "Customers can report security threats here: https://www.darwinbox.com/en-us/security/vulnerability-disclosure-program" }
        ]
    }
];

async function run() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const result = await Widget.findOneAndUpdate(
            { widgetName: "Controls" },
            {
                widgetName: "Controls",
                isVisible: true,
                isEditable: true,
                config: { categories: darwinboxSecurityControls }
            },
            { upsert: true, new: true }
        );

        console.log('Successfully updated Controls widget!');
        process.exit(0);
    } catch (error) {
        console.error('Error reseeding:', error);
        process.exit(1);
    }
}

run();
