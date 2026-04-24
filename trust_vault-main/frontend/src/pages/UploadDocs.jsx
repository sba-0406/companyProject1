import { useState, useEffect } from "react"
import api from "../services/api"
import AdminLayout from "../components/AdminLayout"

const COLORS = {
  navy: "#0C2340",
  navyLight: "#163354",
  navyMid: "#1e4070",
  blue: "#2563eb",
  blueLight: "#60a5fa",
  bluePale: "#eff6ff",
  white: "#ffffff",
  gray50: "#f8f9fb",
  gray100: "#f0f2f5",
  gray200: "#e2e6ec",
  gray300: "#c8cfd8",
  gray400: "#9aa3af",
  gray500: "#6b7583",
  gray700: "#374151",
  green: "#16a34a",
  greenBg: "#dcfce7",
  yellow: "#b45309",
  yellowBg: "#fef3c7",
  red: "#dc2626",
  redBg: "#fee2e2",
  redHover: "#b91c1c",
}

const styles = {
  pageWrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    paddingBottom: "60px",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  },

  // ─── Section Header ───────────────────────────────
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "24px",
  },
  sectionIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyMid} 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    flexShrink: 0,
  },
  sectionTitle: {
    fontSize: "17px",
    fontWeight: "700",
    color: COLORS.navy,
    margin: 0,
    letterSpacing: "-0.2px",
  },
  sectionSubtitle: {
    fontSize: "12px",
    color: COLORS.gray500,
    margin: 0,
  },

  // ─── Cards ────────────────────────────────────────
  card: {
    background: COLORS.white,
    border: `1px solid ${COLORS.gray200}`,
    borderRadius: "16px",
    padding: "32px",
    marginBottom: "28px",
    boxShadow: "0 2px 12px rgba(12,35,64,0.06)",
  },

  // ─── Form Elements ────────────────────────────────
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "12px",
    fontWeight: "700",
    color: COLORS.gray700,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    marginBottom: "7px",
  },
  labelSub: {
    fontWeight: "400",
    color: COLORS.gray400,
    textTransform: "none",
    letterSpacing: "0",
    fontSize: "11px",
  },
  input: {
    width: "100%",
    padding: "10px 14px",
    fontSize: "14px",
    color: COLORS.navy,
    background: COLORS.gray50,
    border: `1.5px solid ${COLORS.gray200}`,
    borderRadius: "10px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  inputFocus: {
    borderColor: COLORS.blue,
    boxShadow: `0 0 0 3px ${COLORS.bluePale}`,
    background: COLORS.white,
  },
  textarea: {
    resize: "vertical",
    minHeight: "72px",
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "20px",
  },

  // ─── File Upload Zone ─────────────────────────────
  dropzone: {
    border: `2px dashed ${COLORS.gray300}`,
    borderRadius: "12px",
    padding: "24px 20px",
    background: COLORS.gray50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    transition: "border-color 0.2s, background 0.2s",
    cursor: "default",
  },
  dropzoneActive: {
    borderColor: COLORS.blue,
    background: COLORS.bluePale,
  },
  dropzoneLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  dropzoneIcon: {
    fontSize: "28px",
    lineHeight: 1,
  },
  dropzoneName: {
    fontSize: "13px",
    fontWeight: "600",
    color: COLORS.gray700,
    maxWidth: "220px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  dropzoneHint: {
    fontSize: "11px",
    color: COLORS.gray400,
    marginTop: "2px",
  },
  fileBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    padding: "9px 18px",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "0.3px",
    color: COLORS.navy,
    background: COLORS.white,
    border: `1.5px solid ${COLORS.gray300}`,
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.18s",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },

  // ─── Action Buttons ───────────────────────────────
  btnRow: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    marginTop: "28px",
  },
  btnPrimary: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "13px 24px",
    fontSize: "14px",
    fontWeight: "700",
    color: COLORS.white,
    background: `linear-gradient(135deg, ${COLORS.blue} 0%, #1d4ed8 100%)`,
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "opacity 0.18s, transform 0.18s",
    boxShadow: `0 4px 16px rgba(37, 99, 235, 0.35)`,
    letterSpacing: "0.2px",
  },
  btnSecondary: {
    padding: "13px 22px",
    fontSize: "13px",
    fontWeight: "700",
    color: COLORS.gray500,
    background: COLORS.gray100,
    border: `1.5px solid ${COLORS.gray200}`,
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.18s",
    whiteSpace: "nowrap",
  },

  // ─── Repository Grid ──────────────────────────────
  repoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
  },
  docCard: {
    background: COLORS.white,
    border: `1.5px solid ${COLORS.gray200}`,
    borderRadius: "14px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
    position: "relative",
    overflow: "hidden",
  },
  docCardAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: `linear-gradient(90deg, ${COLORS.blue} 0%, ${COLORS.blueLight} 100%)`,
    borderRadius: "14px 14px 0 0",
  },
  docCardHover: {
    borderColor: COLORS.blue,
    boxShadow: `0 8px 28px rgba(37, 99, 235, 0.12)`,
    transform: "translateY(-2px)",
  },
  docIconWrap: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyMid} 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    flexShrink: 0,
  },
  docTitle: {
    fontSize: "13px",
    fontWeight: "700",
    color: COLORS.navy,
    lineHeight: "1.4",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  docDesc: {
    fontSize: "12px",
    color: COLORS.gray500,
    lineHeight: "1.5",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    flex: 1,
  },
  badgeRow: {
    display: "flex",
    gap: "6px",
    flexWrap: "wrap",
  },
  badge: (type) => ({
    fontSize: "10px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    padding: "3px 8px",
    borderRadius: "5px",
    ...(type === "public"
      ? { color: COLORS.green, background: COLORS.greenBg }
      : type === "private"
        ? { color: COLORS.yellow, background: COLORS.yellowBg }
        : { color: COLORS.navy, background: COLORS.gray100 }),
  }),
  docActions: {
    display: "flex",
    gap: "8px",
    paddingTop: "12px",
    borderTop: `1px solid ${COLORS.gray100}`,
    marginTop: "auto",
  },
  btnModify: {
    flex: 1,
    padding: "8px 0",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.4px",
    textTransform: "uppercase",
    color: COLORS.navy,
    background: COLORS.gray50,
    border: `1.5px solid ${COLORS.gray200}`,
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.18s",
  },
  btnDelete: {
    flex: 1,
    padding: "8px 0",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.4px",
    textTransform: "uppercase",
    color: COLORS.red,
    background: COLORS.redBg,
    border: "1.5px solid transparent",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.18s",
  },

  // ─── Empty State ──────────────────────────────────
  emptyState: {
    textAlign: "center",
    padding: "48px 24px",
  },
  emptyIcon: {
    fontSize: "48px",
    marginBottom: "12px",
    opacity: 0.4,
  },
  emptyText: {
    fontSize: "14px",
    color: COLORS.gray400,
    fontStyle: "italic",
  },

  // ─── Status Banner ────────────────────────────────
  editBanner: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 16px",
    background: COLORS.bluePale,
    border: `1.5px solid ${COLORS.blueLight}`,
    borderRadius: "10px",
    marginBottom: "24px",
    fontSize: "13px",
    fontWeight: "600",
    color: COLORS.blue,
  },

  // ─── Stats Row ────────────────────────────────────
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
    marginBottom: "28px",
  },
  statCard: {
    background: COLORS.white,
    border: `1px solid ${COLORS.gray200}`,
    borderRadius: "12px",
    padding: "16px 20px",
    boxShadow: "0 1px 6px rgba(12,35,64,0.05)",
  },
  statNum: {
    fontSize: "26px",
    fontWeight: "800",
    color: COLORS.navy,
    lineHeight: 1,
    marginBottom: "4px",
  },
  statLabel: {
    fontSize: "11px",
    fontWeight: "600",
    color: COLORS.gray400,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  // ─── Divider ─────────────────────────────────────
  divider: {
    height: "1px",
    background: COLORS.gray200,
    margin: "28px 0",
  },
}

// ─── Focus-aware Input ─────────────────────────────
function FocusInput({ as: As = "input", style = {}, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <As
      {...props}
      style={{
        ...styles.input,
        ...(As === "textarea" ? styles.textarea : {}),
        ...(focused ? styles.inputFocus : {}),
        ...style,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

// ─── Hover-aware DocCard ───────────────────────────
function DocCard({ doc, onEdit, onDelete }) {
  const [hovered, setHovered] = useState(false)
  const [deleteBtnHovered, setDeleteBtnHovered] = useState(false)
  const [modifyBtnHovered, setModifyBtnHovered] = useState(false)

  return (
    <div
      style={{
        ...styles.docCard,
        ...(hovered ? styles.docCardHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.docCardAccent} />
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
        <div style={styles.docIconWrap}>📄</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={styles.docTitle}>{doc.title}</div>
          <div style={{ ...styles.badgeRow, marginTop: "6px" }}>
            <span style={styles.badge("category")}>{doc.category || "General"}</span>
            <span style={styles.badge(doc.accessTier)}>{doc.accessTier}</span>
          </div>
        </div>
      </div>
      {doc.description && (
        <p style={styles.docDesc}>{doc.description}</p>
      )}
      <div style={styles.docActions}>
        <button
          style={{
            ...styles.btnModify,
            ...(modifyBtnHovered ? { background: COLORS.gray100, borderColor: COLORS.navy } : {}),
          }}
          onMouseEnter={() => setModifyBtnHovered(true)}
          onMouseLeave={() => setModifyBtnHovered(false)}
          onClick={() => onEdit(doc)}
        >
          ✏️ Edit
        </button>
        <button
          style={{
            ...styles.btnDelete,
            ...(deleteBtnHovered ? { background: COLORS.red, color: COLORS.white } : {}),
          }}
          onMouseEnter={() => setDeleteBtnHovered(true)}
          onMouseLeave={() => setDeleteBtnHovered(false)}
          onClick={() => onDelete(doc._id)}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  )
}

// ─── Main Component ────────────────────────────────
export default function UploadDocs() {
  const [docs, setDocs] = useState([])
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [accessTier, setAccessTier] = useState("private")
  const [category, setCategory] = useState("Compliance")
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [dropzoneHovered, setDropzoneHovered] = useState(false)
  const [primaryBtnHovered, setPrimaryBtnHovered] = useState(false)

  useEffect(() => { fetchDocs() }, [])

  const fetchDocs = async () => {
    try {
      setLoading(true)
      const res = await api.get("/admin/docs")
      setDocs(res.data)
    } catch (err) {
      console.error("Failed to fetch docs:", err)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setTitle(""); setDescription(""); setFile(null)
    setAccessTier("private"); setCategory("Compliance"); setEditingId(null)
  }

  const upload = async () => {
    if (!title) return alert("Please provide a title")
    if (!editingId && !file) return alert("Please select a file to upload")
    try {
      setUploading(true)
      const formData = new FormData()
      if (file) formData.append("file", file)
      formData.append("title", title)
      formData.append("description", description)
      formData.append("category", category)
      formData.append("accessTier", accessTier)
      if (editingId) {
        await api.put(`/admin/docs/${editingId}`, formData, { headers: { "Content-Type": "multipart/form-data" } })
        alert("Document updated!")
      } else {
        await api.post("/admin/docs/upload", formData, { headers: { "Content-Type": "multipart/form-data" } })
        alert("Document uploaded!")
      }
      resetForm(); fetchDocs()
    } catch (err) {
      alert("Action failed: " + (err.response?.data?.details || err.message))
    } finally {
      setUploading(false)
    }
  }

  const deleteDoc = async (id) => {
    if (!window.confirm("Permanently delete this document from S3?")) return
    try {
      await api.delete(`/admin/docs/${id}`)
      fetchDocs()
    } catch { alert("Delete failed") }
  }

  const startEdit = (doc) => {
    setEditingId(doc._id); setTitle(doc.title)
    setDescription(doc.description || ""); setAccessTier(doc.accessTier)
    setCategory(doc.category || "Compliance")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Derived stats
  const totalDocs = docs.length
  const publicDocs = docs.filter(d => d.accessTier === "public").length
  const privateDocs = docs.filter(d => d.accessTier === "private").length

  if (loading) return (
    <AdminLayout title="Admin Dashboard">
      <div style={{ padding: "80px 0", textAlign: "center" }}>
        <div style={{ fontSize: "32px", marginBottom: "12px" }}>⏳</div>
        <p style={{ color: COLORS.gray400, fontWeight: 600, fontSize: "14px" }}>Syncing document repository…</p>
      </div>
    </AdminLayout>
  )

  return (
    <AdminLayout
      title="Document Management"
      description="Upload new artifacts or manage your existing repository."
    >
      <div style={styles.pageWrapper}>

        {/* ── Stats Row ─────────────────────────────── */}
        <div style={styles.statsRow}>
          {[
            { num: totalDocs, label: "Total Documents", icon: "📚" },
            { num: publicDocs, label: "Public Access", icon: "🌐" },
            { num: privateDocs, label: "Private (Approval)", icon: "🔒" },
          ].map(({ num, label, icon }) => (
            <div key={label} style={styles.statCard}>
              <div style={{ fontSize: "20px", marginBottom: "6px" }}>{icon}</div>
              <div style={styles.statNum}>{num}</div>
              <div style={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>

        {/* ── Upload / Edit Form ────────────────────── */}
        <div style={styles.card}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionIcon}>{editingId ? "✏️" : "⬆️"}</div>
            <div>
              <h3 style={styles.sectionTitle}>{editingId ? "Modify Document" : "Upload New Document"}</h3>
              <p style={styles.sectionSubtitle}>{editingId ? "Update metadata or replace the file" : "Add a new artifact to the Trust Center"}</p>
            </div>
          </div>

          {editingId && (
            <div style={styles.editBanner}>
              <span>⚠️</span>
              <span>Editing mode — you're modifying an existing document. Cancel to discard changes.</span>
            </div>
          )}

          {/* Title */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Document Title</label>
            <FocusInput
              placeholder="e.g. SOC 2 Type II Report 2026"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Description <span style={styles.labelSub}>(Optional)</span></label>
            <FocusInput
              as="textarea"
              placeholder="Briefly describe the document's purpose and contents…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Category + Access Level */}
          <div style={styles.twoCol}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Category</label>
              <FocusInput
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Compliance">Compliance</option>
                <option value="Security">Security</option>
                <option value="Policies">Policies</option>
                <option value="Audits">Audits</option>
              </FocusInput>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Access Level</label>
              <FocusInput
                as="select"
                value={accessTier}
                onChange={(e) => setAccessTier(e.target.value)}
              >
                <option value="private">🔒 Private (Requires Approval)</option>
                <option value="public">🌐 Public (Open to All)</option>
              </FocusInput>
            </div>
          </div>

          {/* File Dropzone */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              File (PDF){" "}
              {editingId && <span style={styles.labelSub}>— leave empty to keep current</span>}
            </label>
            <div
              style={{
                ...styles.dropzone,
                ...(dropzoneHovered || file ? styles.dropzoneActive : {}),
              }}
              onMouseEnter={() => setDropzoneHovered(true)}
              onMouseLeave={() => setDropzoneHovered(false)}
            >
              <div style={styles.dropzoneLeft}>
                <span style={styles.dropzoneIcon}>{file ? "📎" : "📁"}</span>
                <div>
                  <div style={styles.dropzoneName}>{file ? file.name : "No file selected"}</div>
                  <div style={styles.dropzoneHint}>PDF · Max 10 MB</div>
                </div>
              </div>
              <label style={styles.fileBtn}>
                <span>{editingId ? "🔁 Replace" : "📂 Browse"}</span>
                <input
                  type="file"
                  accept=".pdf"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </div>
          </div>

          {/* Actions */}
          <div style={styles.btnRow}>
            <button
              style={{
                ...styles.btnPrimary,
                ...(uploading || primaryBtnHovered ? { opacity: uploading ? 0.7 : 0.9 } : {}),
              }}
              onClick={upload}
              disabled={uploading}
              onMouseEnter={() => setPrimaryBtnHovered(true)}
              onMouseLeave={() => setPrimaryBtnHovered(false)}
            >
              {uploading
                ? "⏳ Applying Changes…"
                : editingId
                  ? "✅ Update Document"
                  : "⬆️ Upload to Trust Center"}
            </button>
            {editingId && (
              <button style={styles.btnSecondary} onClick={resetForm}>✕ Cancel</button>
            )}
          </div>
        </div>

        {/* ── Repository ───────────────────────────── */}
        <div style={styles.card}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionIcon}>🗂️</div>
            <div>
              <h3 style={styles.sectionTitle}>Document Repository</h3>
              <p style={styles.sectionSubtitle}>{docs.length} artifact{docs.length !== 1 ? "s" : ""} in the Trust Center</p>
            </div>
          </div>

          <div style={styles.divider} />

          {docs.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📭</div>
              <p style={styles.emptyText}>The repository is currently empty.<br />Upload your first document above.</p>
            </div>
          ) : (
            <div style={styles.repoGrid}>
              {docs.map(doc => (
                <DocCard
                  key={doc._id}
                  doc={doc}
                  onEdit={startEdit}
                  onDelete={deleteDoc}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </AdminLayout>
  )
}


