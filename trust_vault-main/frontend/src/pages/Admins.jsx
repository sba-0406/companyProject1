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
}

export default function Admins() {
    const [admins, setAdmins] = useState([])
    const [newAdminEmail, setNewAdminEmail] = useState("")
    const [loading, setLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [newPermissions, setNewPermissions] = useState({
        approveRequests: false,
        uploadDocs: false,
        manageAdmins: false,
        manageWidgets: false
    })

    useEffect(() => { loadAdmins() }, [])

    async function loadAdmins() {
        try {
            setLoading(true)
            const res = await api.get("/admin/admins")
            setAdmins(res.data)
        } catch (err) {
            console.error("Error loading admins:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleAddAdmin = async (e) => {
        e.preventDefault()
        if (!newAdminEmail) return
        try {
            setIsSubmitting(true)
            await api.post("/admin/admins", {
                email: newAdminEmail,
                permissions: newPermissions
            })
            setNewAdminEmail("")
            setNewPermissions({
                approveRequests: false,
                uploadDocs: false,
                manageAdmins: false,
                manageWidgets: false
            })
            loadAdmins()
            alert("Admin added successfully")
        } catch (err) {
            alert(err.response?.data?.error || "Failed to add admin")
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleUpdatePermissions = async (id, permissions) => {
        try {
            await api.put(`/admin/admins/${id}/permissions`, { permissions })
            loadAdmins()
        } catch (err) {
            alert("Failed to update permissions")
        }
    }

    const handleRemoveAdmin = async (id, email) => {
        const currentUserStr = localStorage.getItem("user")
        const currentUser = currentUserStr ? JSON.parse(currentUserStr) : null

        if (currentUser && currentUser._id === id) {
            alert("You cannot remove yourself as an admin.")
            return
        }

        if (!window.confirm(`Remove admin privileges from ${email}?`)) return
        try {
            await api.delete(`/admin/admins/${id}`)
            loadAdmins()
        } catch (err) {
            alert("Failed to remove admin")
        }
    }

    return (
        <AdminLayout
            title="Admin Management"
            description="Add or remove administrator access to the Trust Center."
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto", paddingBottom: "40px" }}>

                {/* Add Admin Form */}
                <div style={{
                    background: C.white,
                    border: `1px solid ${C.gray200}`,
                    borderRadius: "16px",
                    padding: "24px",
                    marginBottom: "32px",
                    boxShadow: "0 2px 12px rgba(12,35,64,0.06)"
                }}>
                    <h2 style={{ fontSize: "16px", fontWeight: "800", color: C.navy, marginBottom: "16px" }}>Add New Administrator</h2>
                    <form onSubmit={handleAddAdmin} style={{ display: "flex", gap: "12px" }}>
                        <input
                            type="email"
                            placeholder="Enter user email (e.g. name@company.com)"
                            value={newAdminEmail}
                            onChange={(e) => setNewAdminEmail(e.target.value)}
                            required
                            style={{
                                flex: 1,
                                padding: "10px 16px",
                                borderRadius: "10px",
                                border: `1.5px solid ${C.gray200}`,
                                fontSize: "14px",
                                outline: "none",
                                transition: "border-color 0.2s"
                            }}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-blue-pill"
                            style={{ padding: "10px 24px" }}
                        >
                            {isSubmitting ? "Adding..." : "Add Admin"}
                        </button>
                    </form>
                    <div style={{ display: "flex", gap: "20px", marginTop: "16px" }}>
                        {Object.keys(newPermissions).map(p => (
                            <label key={p} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", cursor: "pointer", color: C.gray700 }}>
                                <input
                                    type="checkbox"
                                    checked={newPermissions[p]}
                                    onChange={(e) => setNewPermissions(prev => ({ ...prev, [p]: e.target.checked }))}
                                />
                                {p === 'approveRequests' ? 'Approve Requests' : p === 'uploadDocs' ? 'Upload Docs' : p === 'manageAdmins' ? 'Manage Admins' : 'Manage Widgets'}
                            </label>
                        ))}
                    </div>
                    <p style={{ fontSize: "12px", color: C.gray400, marginTop: "12px" }}>
                        Note: If the user does not exist in the system, a new administrator profile will be created automatically.
                    </p>
                </div>

                {/* Admins List */}
                <div style={{
                    background: C.white,
                    border: `1px solid ${C.gray200}`,
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(12,35,64,0.06)"
                }}>
                    <div style={{ padding: "18px 24px", borderBottom: `1px solid ${C.gray100}`, background: C.offWhite }}>
                        <h2 style={{ fontSize: "14px", fontWeight: "800", color: C.navy }}>Current Administrators</h2>
                    </div>

                    {loading ? (
                        <div style={{ padding: "40px", textAlign: "center", color: C.gray400 }}>Loading admins...</div>
                    ) : (
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr style={{ background: C.offWhite, borderBottom: `1.5px solid ${C.gray100}` }}>
                                    <th style={{ padding: "12px 24px", textAlign: "left", fontSize: "11px", fontWeight: "800", color: C.gray400, textTransform: "uppercase" }}>Name / Email</th>
                                    <th style={{ padding: "12px 24px", textAlign: "left", fontSize: "11px", fontWeight: "800", color: C.gray400, textTransform: "uppercase" }}>Permissions</th>
                                    <th style={{ padding: "12px 24px", textAlign: "right", fontSize: "11px", fontWeight: "800", color: C.gray400, textTransform: "uppercase" }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {admins.map((admin) => (
                                    <tr key={admin._id} style={{ borderBottom: `1px solid ${C.gray100}` }}>
                                        <td style={{ padding: "16px 24px" }}>
                                            <div style={{ fontSize: "14px", fontWeight: "700", color: C.navy }}>
                                                {admin.firstName} {admin.lastName}
                                            </div>
                                            <div style={{ fontSize: "12px", color: C.gray500 }}>{admin.email}</div>
                                        </td>
                                        <td style={{ padding: "16px 24px" }}>
                                            <div style={{ display: "flex", gap: "12px" }}>
                                                {['approveRequests', 'uploadDocs', 'manageAdmins', 'manageWidgets'].map(p => (
                                                    <label key={p} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: C.gray500, cursor: "pointer" }}>
                                                        <input
                                                            type="checkbox"
                                                            checked={admin.permissions?.[p] || false}
                                                            onChange={(e) => {
                                                                const updated = { ...admin.permissions, [p]: e.target.checked }
                                                                handleUpdatePermissions(admin._id, updated)
                                                            }}
                                                        />
                                                        {p === 'approveRequests' ? 'Approve' : p === 'uploadDocs' ? 'Upload' : p === 'manageAdmins' ? 'Manage' : 'Widgets'}
                                                    </label>
                                                ))}
                                            </div>
                                        </td>
                                        <td style={{ padding: "16px 24px", textAlign: "right" }}>
                                            <button
                                                onClick={() => handleRemoveAdmin(admin._id, admin.email)}
                                                style={{
                                                    padding: "6px 12px",
                                                    borderRadius: "6px",
                                                    border: "1px solid #ef4444",
                                                    color: "#ef4444",
                                                    background: "transparent",
                                                    fontSize: "11px",
                                                    fontWeight: "700",
                                                    cursor: "pointer",
                                                    transition: "all 0.2s"
                                                }}
                                                onMouseOver={(e) => { e.target.style.background = "#fef2f2" }}
                                                onMouseOut={(e) => { e.target.style.background = "transparent" }}
                                            >
                                                Remove Admin
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </AdminLayout>
    )
}
