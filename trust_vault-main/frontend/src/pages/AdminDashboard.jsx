import { useEffect, useState } from "react"
import api from "../services/api"
import AdminLayout from "../components/AdminLayout"

const C = {
    navy: "#0C2340",
    navyLight: "#163354",
    navyMid: "#1e4070",
    blue: "#1a6fc4",
    blueLight: "#3b8de0",
    bluePale: "#e8f0fb",
    bluePale2: "#dceaf8",
    white: "#ffffff",
    offWhite: "#f5f7fa",
    gray100: "#eef1f5",
    gray200: "#dde2ea",
    gray300: "#c3cad5",
    gray400: "#94a0b0",
    gray500: "#64748b",
    gray700: "#334155",
    green: "#15803d",
    greenBg: "#dcfce7",
    greenBorder: "#86efac",
    orange: "#F4811F",
    orangeBg: "#fff4eb",
}

function ApproveBtn({ onClick }) {
    const [hovered, setHovered] = useState(false)
    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "8px 18px",
                fontSize: "11px", fontWeight: "800",
                letterSpacing: "0.6px", textTransform: "uppercase",
                color: hovered ? C.white : C.navy,
                background: hovered
                    ? `linear-gradient(135deg, ${C.navy} 0%, ${C.navyMid} 100%)`
                    : C.white,
                border: `1.5px solid ${hovered ? C.navy : C.gray200}`,
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.18s ease",
                boxShadow: hovered ? `0 4px 14px rgba(12,35,64,0.2)` : "none",
                whiteSpace: "nowrap",
            }}
        >
            {hovered ? "✓ " : ""}Approve
        </button>
    )
}

function DeleteBtn({ onClick }) {
    const [hovered, setHovered] = useState(false)
    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "34px", height: "34px",
                fontSize: "14px",
                color: hovered ? "#ef4444" : C.gray300,
                background: hovered ? "#fef2f2" : "transparent",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.18s ease",
            }}
            title="Delete Request"
        >
            🗑
        </button>
    )
}

function StatusBadge({ count, type }) {
    const isPending = type === "pending"
    return (
        <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: isPending ? C.bluePale : C.greenBg,
            border: `1px solid ${isPending ? C.bluePale2 : C.greenBorder}`,
            borderRadius: "20px", padding: "4px 12px 4px 8px",
        }}>
            <div style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: isPending ? C.blue : C.green,
                boxShadow: `0 0 0 3px ${isPending ? C.bluePale2 : C.greenBg}`,
            }} />
            <span style={{ fontSize: "12px", fontWeight: "700", color: isPending ? C.blue : C.green }}>
                {count} {isPending ? "Pending" : "Approved"}
            </span>
        </div>
    )
}

function Avatar({ email }) {
    const safeEmail = email || "Guest"
    const initials = safeEmail.slice(0, 2).toUpperCase()
    const colors = [
        { bg: "#dceaf8", text: "#1a6fc4" },
        { bg: "#e0f2fe", text: "#0369a1" },
        { bg: "#ede9fe", text: "#6d28d9" },
        { bg: "#fce7f3", text: "#be185d" },
        { bg: "#dcfce7", text: "#15803d" },
    ]
    const col = colors[safeEmail.charCodeAt(0) % colors.length]
    return (
        <div style={{
            width: "36px", height: "34px", borderRadius: "10px",
            background: col.bg, color: col.text,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "12px", fontWeight: "800", flexShrink: 0,
            letterSpacing: "0.5px",
        }}>
            {initials}
        </div>
    )
}

function Row({ r, onApprove, onDelete, isLast, type }) {
    const [hovered, setHovered] = useState(false)
    const dateStr = r.requestedAt
        ? new Date(r.requestedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
        : null

    return (
        <tr
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: hovered ? C.offWhite : C.white,
                transition: "background 0.15s",
                borderBottom: isLast ? "none" : `1px solid ${C.gray100}`,
            }}
        >

            {/* Requester */}
            <td style={{ padding: "16px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Avatar email={r.email} />
                    <div>
                        <div style={{ fontSize: "13px", fontWeight: "700", color: C.navy, lineHeight: 1.3 }}>
                            {r.email}
                        </div>
                        {dateStr && (
                            <div style={{ fontSize: "10px", color: C.gray400, marginTop: "3px", fontWeight: "600", letterSpacing: "0.3px" }}>
                                {dateStr}
                            </div>
                        )}
                    </div>
                </div>
            </td>


            {/* User Kind */}
            <td style={{ padding: "16px 20px" }}>
                <div style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    padding: "4px 10px", borderRadius: "20px",
                    fontSize: "10px", fontWeight: "800", textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    background: r.userRole === "customer" ? C.bluePale : C.gray100,
                    color: r.userRole === "customer" ? C.blue : C.gray500,
                    border: `1px solid ${r.userRole === "customer" ? C.bluePale2 : C.gray200}`
                }}>
                    {r.userRole === "customer" ? "Client" : "Prospect"}
                </div>
            </td>

            {/* Document Info */}
            <td style={{ padding: "16px 20px" }}>
                {(r.documentName || r.documentId?.title) ? (
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        background: C.bluePale, border: `1px solid ${C.bluePale2}`,
                        borderRadius: "7px", padding: "5px 10px",
                    }}>
                        <span style={{ fontSize: "12px" }}>📄</span>
                        <span style={{ fontSize: "12px", fontWeight: "700", color: C.blue }}>
                            {r.documentName || r.documentId?.title}
                        </span>
                    </div>
                ) : (
                    <span style={{ fontSize: "12px", color: C.gray400, fontStyle: "italic" }}>—</span>
                )}
            </td>

            {/* Reason */}
            <td style={{ padding: "16px 20px", maxWidth: "220px" }}>
                {r.reason ? (
                    <div style={{
                        fontSize: "12px", color: C.gray500, fontStyle: "italic",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }} title={r.reason}>
                        "{r.reason}"
                    </div>
                ) : (
                    <span style={{ fontSize: "12px", color: C.gray300, fontStyle: "italic" }}>No reason provided</span>
                )}
            </td>

            {/* Approved By */}
            {type === "approved" && (
                <td style={{ padding: "16px 20px" }}>
                    <div style={{ fontSize: "12px", color: C.gray700, fontWeight: "600" }}>
                        {r.approvedBy?.email || "Prior Approval"}
                    </div>
                </td>
            )}

            {/* Action */}
            <td style={{ padding: "16px 20px", textAlign: "right" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
                    <DeleteBtn onClick={() => onDelete(r._id)} />
                    {type === "pending" && <ApproveBtn onClick={() => onApprove(r._id)} />}
                </div>
            </td>
        </tr>
    )
}

export default function AdminDashboard() {
    const [requests, setRequests] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState("pending") // pending | approved
    const [searchQuery, setSearchQuery] = useState("")
    const [searchColumn, setSearchColumn] = useState("email")

    useEffect(() => { loadData() }, [])

    async function loadData() {
        try {
            setLoading(true)
            const reqRes = await api.get("/admin/access-requests")
            setRequests(reqRes.data)
        } catch (err) {
            console.error("Error loading admin data:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleSingleApprove = async (requestId) => {
        const request = requests.find(r => String(r._id) === String(requestId))
        if (!request) {
            console.error("Request not found:", requestId)
            return
        }

        if (!window.confirm(`Approve access for ${request.email}?`)) return

        try {
            const adminStr = localStorage.getItem("user")
            const admin = adminStr ? JSON.parse(adminStr) : null

            // Get the specific document requested
            const requestedDocId = request.documentId?._id || request.documentId
            const documentIds = requestedDocId ? [requestedDocId] : []

            await api.post(`/admin/approve/${requestId}`, {
                adminId: admin?._id,
                adminEmail: admin?.email,
                documentIds
            })

            alert("Access Approved!")
            loadData()
        } catch (err) {
            console.error(err)
            alert("Approval failed")
        }
    }

    const deleteRequest = async (id) => {
        if (!window.confirm("Delete this request forever?")) return
        try {
            await api.delete(`/admin/access-requests/${id}`)
            loadData()
        } catch {
            alert("Delete failed")
        }
    }

    if (loading) return (
        <AdminLayout title="Admin Dashboard">
            <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>⏳</div>
                <p style={{ color: C.gray400, fontWeight: 600, fontSize: "14px" }}>Loading requests…</p>
            </div>
        </AdminLayout>
    )

    const pendingDocs = requests.filter(r => r.status === "pending")
    const approvedDocs = requests.filter(r => r.status === "approved")
    const filteredApproved = approvedDocs.filter(r => {
        if (!searchQuery) return true
        const q = searchQuery.toLowerCase()
        if (searchColumn === "email") return r.email?.toLowerCase().includes(q)
        if (searchColumn === "userRole") return r.userRole?.toLowerCase().includes(q)
        if (searchColumn === "approvedBy") return r.approvedBy?.email?.toLowerCase().includes(q)
        return true
    })
    const totalRequests = requests.length

    return (
        <AdminLayout
            title="Access Requests"
            description="Review and manage access grants for private security documents."
        >
            <div style={{
                maxWidth: "1280px", margin: "0 auto",
                fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
                paddingBottom: "48px",
            }}>

                {/* ── Stats Row ─────────────────────────────── */}
                <div style={{
                    display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "12px", marginBottom: "24px",
                }}>
                    {[
                        { icon: "📬", num: pendingDocs.length, label: "Pending", accent: C.blue, accentBg: C.bluePale },
                        { icon: "✅", num: approvedDocs.length, label: "Approved Hist", accent: C.green, accentBg: C.greenBg },
                        { icon: "📊", num: totalRequests, label: "Total Recs", accent: C.orange, accentBg: C.orangeBg },
                    ].map(({ icon, num, label, accent, accentBg }) => (
                        <div key={label} style={{
                            background: C.white,
                            border: `1px solid ${C.gray200}`,
                            borderRadius: "14px",
                            padding: "18px 22px",
                            boxShadow: "0 1px 8px rgba(12,35,64,0.05)",
                            display: "flex", alignItems: "center", gap: "14px",
                        }}>
                            <div style={{
                                width: "44px", height: "44px", borderRadius: "12px",
                                background: accentBg,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "20px", flexShrink: 0,
                            }}>
                                {icon}
                            </div>
                            <div>
                                <div style={{ fontSize: "26px", fontWeight: "800", color: accent, lineHeight: 1 }}>{num}</div>
                                <div style={{ fontSize: "11px", fontWeight: "600", color: C.gray400, textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "3px" }}>{label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Tabs ── */}
                <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
                    {[
                        { id: "pending", label: "Pending Approval", count: pendingDocs.length },
                        { id: "approved", label: "Approved History", count: approvedDocs.length }
                    ].map(t => (
                        <button
                            key={t.id}
                            onClick={() => setActiveTab(t.id)}
                            style={{
                                padding: "10px 20px", borderRadius: "10px",
                                border: `1.5px solid ${activeTab === t.id ? (activeTab === "pending" ? C.blue : C.green) : C.gray200}`,
                                background: activeTab === t.id ? (activeTab === "pending" ? C.bluePale : C.greenBg) : C.white,
                                color: activeTab === t.id ? (activeTab === "pending" ? C.blue : C.green) : C.gray500,
                                fontSize: "13px", fontWeight: "700",
                                cursor: "pointer", transition: "all 0.18s",
                                display: "flex", alignItems: "center", gap: "8px"
                            }}
                        >
                            {t.label}
                            {t.count > 0 && (
                                <span style={{
                                    background: activeTab === t.id ? (activeTab === "pending" ? C.blue : C.green) : C.gray300,
                                    color: C.white, fontSize: "10px", fontWeight: "800",
                                    padding: "2px 6px", borderRadius: "6px"
                                }}>
                                    {t.count}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* ── Table Card ───────────────────────────── */}
                <div style={{
                    background: C.white,
                    border: `1px solid ${C.gray200}`,
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 2px 16px rgba(12,35,64,0.07)",
                }}>

                    {/* Card Header */}
                    <div style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "18px 24px",
                        borderBottom: `1px solid ${C.gray100}`,
                        background: C.offWhite,
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{
                                width: "32px", height: "32px", borderRadius: "9px",
                                background: activeTab === "pending"
                                    ? `linear-gradient(135deg, ${C.navy}, ${C.navyMid})`
                                    : `linear-gradient(135deg, ${C.green}, #166534)`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "14px",
                            }}>{activeTab === "pending" ? "📬" : "✅"}</div>
                            <div>
                                <div style={{ fontSize: "14px", fontWeight: "800", color: C.navy }}>
                                    {activeTab === "pending" ? "Pending Requests" : "Approval History"}
                                </div>
                                <div style={{ fontSize: "11px", color: C.gray400 }}>
                                    {activeTab === "pending" ? "Awaiting your review" : "Past access grants"}
                                </div>
                            </div>
                        </div>
                        <StatusBadge count={activeTab === "pending" ? pendingDocs.length : approvedDocs.length} type={activeTab} />
                    </div>

                    {/* Search Bar - only for Approved History */}
                    {activeTab === "approved" && (
                        <div style={{
                            padding: "12px 24px",
                            borderBottom: `1px solid ${C.gray100}`,
                            background: C.white,
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}>
                            <div style={{ fontSize: "14px", color: C.gray500 }}>🔍</div>
                            <select
                                value={searchColumn}
                                onChange={(e) => setSearchColumn(e.target.value)}
                                style={{
                                    padding: "6px 10px",
                                    borderRadius: "8px",
                                    border: `1px solid ${C.gray200}`,
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    color: C.navy,
                                    background: C.offWhite,
                                    cursor: "pointer",
                                    outline: "none"
                                }}
                            >
                                <option value="email">Requester Email</option>
                                <option value="userRole">Kind (Role)</option>
                                <option value="approvedBy">Approved By</option>
                            </select>
                            <input
                                type="text"
                                placeholder={`Search by ${searchColumn === "email" ? "email" : searchColumn === "userRole" ? "kind" : "admin email"}...`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    flex: 1,
                                    padding: "8px 12px",
                                    borderRadius: "8px",
                                    border: `1px solid ${C.gray200}`,
                                    fontSize: "13px",
                                    color: C.navy,
                                    outline: "none",
                                    transition: "border-color 0.2s",
                                }}
                                onFocus={(e) => e.target.style.borderColor = C.blue}
                                onBlur={(e) => e.target.style.borderColor = C.gray200}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        color: C.gray400,
                                        fontSize: "12px",
                                        fontWeight: "700",
                                        cursor: "pointer",
                                        padding: "4px 8px"
                                    }}
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    )}

                    {/* Table */}
                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr style={{ borderBottom: `1.5px solid ${C.gray100}`, background: C.offWhite }}>
                                    {[
                                        "Requester",
                                        "Kind",
                                        "Document",
                                        "Reason",
                                        ...(activeTab === "approved" ? ["Approved By"] : []),
                                        "Action"
                                    ].map((h, i) => (
                                        <th key={h} style={{
                                            padding: "12px 20px",
                                            fontSize: "10px", fontWeight: "800",
                                            textTransform: "uppercase", letterSpacing: "0.8px",
                                            color: C.gray400,
                                            textAlign: (i === (activeTab === "approved" ? 6 : 5)) ? "right" : "left",
                                            whiteSpace: "nowrap",
                                        }}>
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {(activeTab === "pending" ? pendingDocs : filteredApproved).length === 0 ? (
                                    <tr>
                                        <td colSpan={activeTab === "approved" ? 5 : 4} style={{ padding: "60px 24px", textAlign: "center" }}>
                                            <div style={{ fontSize: "36px", marginBottom: "10px" }}>📭</div>
                                            <p style={{ fontSize: "14px", color: C.gray400, fontStyle: "italic" }}>
                                                {searchQuery ? "No matching records found." : `No ${activeTab} requests found.`}
                                            </p>
                                        </td>
                                    </tr>
                                ) : (
                                    (activeTab === "pending" ? pendingDocs : filteredApproved).map((r, idx, arr) => (
                                        <Row
                                            key={r._id}
                                            r={r}
                                            type={activeTab}
                                            onApprove={handleSingleApprove}
                                            onDelete={deleteRequest}
                                            isLast={idx === arr.length - 1}
                                        />
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    {(activeTab === "pending" ? pendingDocs : filteredApproved).length > 0 && (
                        <div style={{
                            padding: "12px 24px",
                            borderTop: `1px solid ${C.gray100}`,
                            background: C.offWhite,
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                        }}>
                            <span style={{ fontSize: "11px", color: C.gray400 }}>
                                Showing {(activeTab === "pending" ? pendingDocs : filteredApproved).length} {activeTab} item{(activeTab === "pending" ? pendingDocs : filteredApproved).length !== 1 ? "s" : ""}
                            </span>
                            <span style={{ fontSize: "11px", color: C.gray400 }}>
                                {activeTab === "pending" ? "Manual approval required for each access request" : "Previously granted access requests"}
                            </span>
                        </div>
                    )}
                </div>

            </div>
        </AdminLayout>
    )
}