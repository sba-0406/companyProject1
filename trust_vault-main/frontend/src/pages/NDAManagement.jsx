import { useEffect, useState } from "react"
import axios from "axios"
import api from "../services/api"
import AdminLayout from "../components/AdminLayout"

const C = {
    navy: "#0C2340",
    blue: "#1a6fc4",
    bluePale: "#e8f0fb",
    white: "#ffffff",
    gray100: "#eef1f5",
    gray200: "#dde2ea",
    gray400: "#94a0b0",
    gray500: "#64748b",
}

export default function NDAManagement() {
    const [ndas, setNdas] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [viewingNdaId, setViewingNdaId] = useState(null)
    const [isViewerOpen, setIsViewerOpen] = useState(false)
    const [viewerBlobUrl, setViewerBlobUrl] = useState("")

    useEffect(() => {
        fetchNDAs()
    }, [])

    const fetchNDAs = async (search = "") => {
        try {
            setLoading(true)
            const res = await api.get(`/admin/ndas?search=${search}`)
            setNdas(res.data)
        } catch (err) {
            console.error("Error fetching NDAs:", err)
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        fetchNDAs(searchTerm)
    }

    const handleViewNDA = async (id) => {
        try {
            setViewingNdaId(id)
            // 1. Get the signed URL from backend
            const res = await api.get(`/admin/ndas/view/${id}`)
            const { url: signedUrl } = res.data

            if (!signedUrl) throw new Error("No URL returned from server")

            // 2. Fetch the actual PDF from S3 without credentials/interceptors
            const fileRes = await axios.get(signedUrl, { responseType: 'blob' })

            const blob = new Blob([fileRes.data], { type: 'application/pdf' })
            const url = URL.createObjectURL(blob)
            setViewerBlobUrl(url + '#toolbar=0')
            setIsViewerOpen(true)
        } catch (err) {
            console.error("Error viewing NDA:", err)
            alert("Failed to load NDA document")
        } finally {
            setViewingNdaId(null)
        }
    }

    return (
        <AdminLayout
            title="Signed NDAs"
            description="Manage and search through signed Non-Disclosure Agreements."
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                {/* Search Bar */}
                <div style={{ marginBottom: "24px" }}>
                    <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px" }}>
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                flex: 1, padding: "12px 18px", borderRadius: "12px",
                                border: `1.5px solid ${C.gray200}`, fontSize: "14px",
                                outline: "none", transition: "border 0.2s"
                            }}
                        />
                        <button type="submit" className="btn btn-blue-pill" style={{ padding: "0 24px" }}>
                            Search
                        </button>
                        {searchTerm && (
                            <button
                                type="button"
                                className="btn btn-outline"
                                onClick={() => { setSearchTerm(""); fetchNDAs(""); }}
                            >
                                Clear
                            </button>
                        )}
                    </form>
                </div>

                {/* Table */}
                <div style={{
                    background: C.white, borderRadius: "16px", border: `1px solid ${C.gray200}`,
                    overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
                }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ background: "#f8fafc", borderBottom: `2px solid ${C.gray100}` }}>
                                {["Full Name", "Email Address", "Signed Date", "Actions"].map(h => (
                                    <th key={h} style={{
                                        padding: "16px 20px", textAlign: "left", fontSize: "11px",
                                        fontWeight: "800", textTransform: "uppercase", color: C.gray400,
                                        letterSpacing: "0.5px"
                                    }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="4" style={{ padding: "40px", textAlign: "center", color: C.gray400 }}>
                                        Loading records...
                                    </td>
                                </tr>
                            ) : ndas.length === 0 ? (
                                <tr>
                                    <td colSpan="4" style={{ padding: "40px", textAlign: "center", color: C.gray400 }}>
                                        No signed NDAs found.
                                    </td>
                                </tr>
                            ) : (
                                ndas.map((nda, idx) => (
                                    <tr key={nda._id} style={{
                                        borderBottom: idx === ndas.length - 1 ? "none" : `1px solid ${C.gray100}`,
                                        transition: "background 0.1s"
                                    }}>
                                        <td style={{ padding: "16px 20px", fontSize: "14px", fontWeight: "700", color: C.navy }}>
                                            {nda.fullName || "—"}
                                        </td>
                                        <td style={{ padding: "16px 20px", fontSize: "14px", color: C.gray500 }}>
                                            {nda.email}
                                        </td>
                                        <td style={{ padding: "16px 20px", fontSize: "13px", color: C.gray400 }}>
                                            {new Date(nda.signedAt || nda.requestedAt).toLocaleDateString("en-GB", {
                                                day: "2-digit", month: "short", year: "numeric"
                                            })}
                                        </td>
                                        <td style={{ padding: "16px 20px" }}>
                                            <button
                                                onClick={() => handleViewNDA(nda._id)}
                                                disabled={viewingNdaId === nda._id}
                                                className="btn btn-outline"
                                                style={{ fontSize: "12px", padding: "6px 12px" }}
                                            >
                                                {viewingNdaId === nda._id ? "Opening..." : "View Document 📄"}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* SECURE DOCUMENT VIEWER MODAL */}
            {isViewerOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.85)', zIndex: 9999,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
                }}>
                    <div style={{
                        background: 'white', borderRadius: '16px', width: '95vw', maxWidth: '1200px',
                        height: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden'
                    }}>
                        <div style={{
                            padding: '16px 24px', borderBottom: '1px solid #eee',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                        }}>
                            <span style={{ fontWeight: 700, color: C.navy }}>NDA Document Viewer</span>
                            <button
                                onClick={() => {
                                    if (viewerBlobUrl) URL.revokeObjectURL(viewerBlobUrl.split('#')[0])
                                    setIsViewerOpen(false)
                                    setViewerBlobUrl("")
                                }}
                                style={{
                                    border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer',
                                    color: C.gray500, lineHeight: 1
                                }}
                            >
                                &times;
                            </button>
                        </div>
                        <div style={{ flex: 1, background: '#f1f5f9' }}>
                            <iframe
                                src={viewerBlobUrl}
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                title="NDA Viewer"
                            />
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    )
}
