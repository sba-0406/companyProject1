import { useState, useEffect } from "react"
import api from "../api/adminApi"
import AdminLayout from "../components/AdminLayout"


const ALL_COMPLIANCES = []



const WIDGET_META = {
  Hero: { icon: "🏠", accent: "#1B6EF3", accentBg: "#EBF2FF", label: "Hero Banner", desc: "Main hero section with statistics & certifications. Read-only.", editable: false, removable: false },
  Compliances: { icon: "✅", accent: "#00875A", accentBg: "#E3FCEF", label: "Compliances", desc: "Select certifications and set their detail page URLs.", editable: true, removable: false },
  Controls: { icon: "🛡️", accent: "#7C3AED", accentBg: "#F5F3FF", label: "Security Controls", desc: "Edit security control categories and their items.", editable: true, removable: false },
  Resources: { icon: "📄", accent: "#0E7490", accentBg: "#ECFEFF", label: "Resources", desc: "Document library — managed via the Documents page. Read-only.", editable: false, removable: false },
}

const ADDABLE_WIDGETS = [
  { name: "Compliances", icon: "✅", desc: "Compliance certifications grid" },
  { name: "Controls", icon: "🛡️", desc: "Security control categories" },
]

const HIDDEN_WIDGETS = ["Hero", "Overview", "TrustedBy"]

const T = {
  font: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  navy: "#0C2340",
  blue: "#1B6EF3",
  blueHover: "#1558D6",
  border: "#DFE1E6",
  muted: "#6B778C",
  faint: "#97A0AF",
  bg: "#FAFBFC",
  green: "#00875A",
  greenBg: "#E3FCEF",
  greenDark: "#006644",
  red: "#DE350B",
  redBg: "#FFF0EE",
  redBorder: "#FFBDAD",
}

const st = {
  card: (visible) => ({
    background: "#fff",
    border: `1.5px solid ${visible ? T.border : "#EBECF0"}`,
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: visible ? "0 2px 10px rgba(12,35,64,.08)" : "none",
    opacity: visible ? 1 : 0.7,
    transition: "opacity .2s",
    fontFamily: T.font,
  }),
  row: (gap = 10) => ({ display: "flex", alignItems: "center", gap }),
  col: (gap = 12) => ({ display: "flex", flexDirection: "column", gap }),

  cardHd: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "18px 22px", flexWrap: "wrap", gap: "12px",
  },
  iconBox: (bg, size = 40) => ({
    width: size, height: size, borderRadius: "10px", background: bg,
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: size * 0.47, flexShrink: 0,
  }),

  // toggle
  track: (on) => ({
    width: "38px", height: "20px", borderRadius: "100px",
    background: on ? T.blue : "#C1C7D0",
    position: "relative", cursor: "pointer", transition: "background .2s", flexShrink: 0,
  }),
  thumb: (on) => ({
    position: "absolute", top: "2px", left: on ? "20px" : "2px",
    width: "16px", height: "16px", borderRadius: "50%", background: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,.25)", transition: "left .2s",
  }),

  // buttons
  btnBlue: (dis) => ({
    fontFamily: T.font, background: dis ? "#93c5fd" : T.blue, color: "#fff",
    border: "none", borderRadius: "100px", padding: "8px 20px",
    fontSize: "13px", fontWeight: 600, cursor: dis ? "not-allowed" : "pointer",
    letterSpacing: "-.1px", transition: "background .15s",
  }),
  btnGhost: {
    fontFamily: T.font, background: "transparent", color: "#344563",
    border: `1.5px solid #C1C7D0`, borderRadius: "100px", padding: "7px 16px",
    fontSize: "13px", fontWeight: 500, cursor: "pointer",
  },
  btnDanger: {
    fontFamily: T.font, background: T.redBg, color: T.red,
    border: `1.5px solid ${T.redBorder}`, borderRadius: "8px", padding: "6px 12px",
    fontSize: "12px", fontWeight: 600, cursor: "pointer",
  },
  btnAdd: {
    fontFamily: T.font, background: "#EBF2FF", color: T.blue,
    border: "1.5px solid #BFDBFE", borderRadius: "8px", padding: "7px 14px",
    fontSize: "12.5px", fontWeight: 600, cursor: "pointer", flexShrink: 0,
    whiteSpace: "nowrap",
  },

  edBody: {
    padding: "20px 22px", background: T.bg, borderTop: `1.5px solid #EBECF0`,
  },
  sectionLabel: {
    fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
    letterSpacing: ".07em", color: T.muted, marginBottom: "14px",
    display: "flex", alignItems: "center", gap: "6px",
  },

  input: {
    fontFamily: T.font, fontSize: "13px", border: `1.5px solid ${T.border}`,
    borderRadius: "8px", padding: "8px 12px", color: T.navy,
    background: "#fff", outline: "none", width: "100%", boxSizing: "border-box",
  },

  tag: {
    display: "inline-flex", alignItems: "center", gap: "5px",
    background: "#F0F3F8", border: `1px solid ${T.border}`,
    borderRadius: "100px", padding: "4px 10px 4px 12px",
    fontSize: "12px", color: "#344563", fontWeight: 500,
  },
  tagX: {
    background: "none", border: "none", padding: "0", lineHeight: 1,
    cursor: "pointer", color: T.faint, fontSize: "15px", fontWeight: 700,
    display: "flex", alignItems: "center",
  },

  hiddenBanner: {
    padding: "12px 22px", background: "#F5F7FA", borderTop: `1px solid #EBECF0`,
    fontSize: "12.5px", color: T.faint, fontStyle: "italic",
    display: "flex", alignItems: "center", gap: "6px",
  },
  readonlyBanner: {
    padding: "12px 22px", background: T.bg, borderTop: `1px solid #EBECF0`,
    fontSize: "12.5px", color: T.muted, display: "flex", alignItems: "center", gap: "6px",
  },
}

/* ══════════════════════════════════════════════════
   SMALL ATOMS
══════════════════════════════════════════════════ */
function Toggle({ on, onChange }) {
  return (
    <div style={{ ...st.row(8), cursor: "pointer", userSelect: "none" }} onClick={onChange}>
      <div style={st.track(on)}><div style={st.thumb(on)} /></div>
      <span style={{ fontSize: "13px", fontWeight: 600, color: on ? T.navy : T.faint }}>
        {on ? "Visible" : "Hidden"}
      </span>
    </div>
  )
}

function TagPill({ item, onRemove, onClick }) {
  const label = typeof item === "string" ? item : item.label
  const desc = typeof item === "object" ? item.description : ""
  return (
    <span
      style={{ ...st.tag, cursor: onClick ? "pointer" : "default", border: onClick ? `1px solid ${T.blue}` : st.tag.border }}
      title={desc || "Click to edit"}
      onClick={onClick}
    >
      {label}
      <button style={st.tagX} onClick={(e) => { e.stopPropagation(); onRemove(); }}>×</button>
    </span>
  )
}

function InlineAddRow({ placeholder, onAdd }) {
  const [val, setVal] = useState("")
  const go = () => { if (val.trim()) { onAdd(val.trim()); setVal("") } }
  return (
    <div style={st.row(8)}>
      <input
        style={st.input}
        value={val}
        placeholder={placeholder}
        onChange={e => setVal(e.target.value)}
        onKeyDown={e => e.key === "Enter" && go()}
        onFocus={e => e.target.style.borderColor = T.blue}
        onBlur={e => e.target.style.borderColor = T.border}
      />
      <button style={st.btnAdd} onClick={go}>+ Add</button>
    </div>
  )
}

/* ══════════════════════════════════════════════════
   COMPLIANCES EDITOR
══════════════════════════════════════════════════ */
function CompliancesEditor({ config, onChange }) {
  const selected = config?.items || ["iso27001-2022", "iso27701", "soc2", "gdpr", "ccpa", "iso9001"]
  const urls = config?.urls || {}
  const customItems = config?.customItems || []
  const [showAddForm, setShowAddForm] = useState(false)
  const [newName, setNewName] = useState("")
  const [newUrl, setNewUrl] = useState("")
  const [expandedUrl, setExpandedUrl] = useState(null) // id of tile whose URL input is open
  const [newLogoUrl, setNewLogoUrl] = useState("")
  const [uploading, setUploading] = useState(false)

  const allItems = [
    ...ALL_COMPLIANCES,
    ...customItems.map(c => ({ ...c, _custom: true }))
  ]

  const toggle = (id) => {
    const next = selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id]
    onChange({ ...config, items: next, urls, customItems })
  }

  const setUrl = (id, url) => {
    onChange({ ...config, items: selected, urls: { ...urls, [id]: url }, customItems })
  }

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    try {
      setUploading(true)
      const formData = new FormData()
      formData.append("file", file)
      const res = await api.post("/widgets/upload-logo", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      setNewLogoUrl(res.data.url)
    } catch (err) {
      alert("Logo upload failed")
    } finally {
      setUploading(false)
    }
  }

  const addCustom = () => {
    if (!newName.trim()) return
    const id = "custom-" + Date.now()
    const item = {
      id,
      name: newName.trim(),
      status: "c",
      logoUrl: newLogoUrl,
      svg: newLogoUrl ? null : `<svg viewBox="0 0 80 52" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="52" rx="5" fill="#344563"/><text x="40" y="32" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="10" fill="white">${newName.trim().slice(0, 12)}</text></svg>`
    }
    onChange({ ...config, items: [...selected, id], urls: { ...urls, [id]: newUrl.trim() }, customItems: [...customItems, item] })
    setNewName(""); setNewUrl(""); setNewLogoUrl(""); setShowAddForm(false)
  }

  const removeCustom = (id) => {
    const nextUrls = { ...urls }; delete nextUrls[id]
    onChange({ ...config, items: selected.filter(x => x !== id), urls: nextUrls, customItems: customItems.filter(c => c.id !== id) })
  }

  return (
    <div style={st.col(18)}>
      <div style={st.sectionLabel}>Click to toggle · {selected.length} selected · URLs open on click</div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "12px" }}>
        {allItems.map(comp => {
          const sel = selected.includes(comp.id)
          const urlVal = urls[comp.id] || ""
          const isExpanded = expandedUrl === comp.id
          return (
            <div
              key={comp.id}
              style={{
                border: `1.5px solid ${sel ? T.blue : T.border}`,
                borderRadius: "10px", padding: "10px 8px",
                background: sel ? "#EBF2FF" : "#fff",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                transition: "all .15s", position: "relative",
              }}
            >
              {/* remove custom */}
              {comp._custom && (
                <button
                  onClick={() => removeCustom(comp.id)}
                  style={{ position: "absolute", top: 4, left: 4, background: "none", border: "none", cursor: "pointer", fontSize: "12px", color: T.red, lineHeight: 1 }}
                  title="Remove"
                >×</button>
              )}

              {/* check badge */}
              {sel && (
                <div style={{
                  position: "absolute", top: 5, right: 5, width: 15, height: 15,
                  borderRadius: "50%", background: T.blue,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "9px", color: "#fff", fontWeight: 700,
                }}>✓</div>
              )}

              {/* toggle on click */}
              <div onClick={() => toggle(comp.id)} style={{ cursor: "pointer", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
                {comp.logoUrl ? (
                  <img src={comp.logoUrl} alt={comp.name} style={{ width: "56px", height: "36px", objectFit: "contain", borderRadius: "4px" }} />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: comp.svg }} style={{ width: "56px", height: "36px" }} />
                )}
                <div style={{ fontSize: "10px", fontWeight: 600, color: T.navy, textAlign: "center", lineHeight: 1.3 }}>{comp.name}</div>
                <span style={comp.status === "c"
                  ? { fontSize: "8px", fontWeight: 700, padding: "2px 7px", borderRadius: "100px", background: T.greenBg, color: T.greenDark, textTransform: "uppercase" }
                  : { fontSize: "8px", fontWeight: 700, padding: "2px 7px", borderRadius: "100px", background: "#FFF7D6", color: "#7A4A00", textTransform: "uppercase" }
                }>
                  {comp.status === "c" ? "Active" : "Soon"}
                </span>
              </div>

              {/* URL toggle */}
              <button
                onClick={() => setExpandedUrl(isExpanded ? null : comp.id)}
                style={{ fontFamily: T.font, fontSize: "9.5px", fontWeight: 600, color: urlVal ? T.blue : T.faint, background: "none", border: "none", cursor: "pointer", padding: "0", lineHeight: 1.4 }}
              >
                {urlVal ? "🔗 URL set" : "+ Set URL"}
              </button>

              {isExpanded && (
                <input
                  autoFocus
                  style={{ ...st.input, fontSize: "11px", padding: "5px 8px" }}
                  placeholder="https://..."
                  value={urlVal}
                  onChange={e => setUrl(comp.id, e.target.value)}
                  onFocus={e => e.target.style.borderColor = T.blue}
                  onBlur={e => { e.target.style.borderColor = T.border; setExpandedUrl(null) }}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Add Element */}
      {showAddForm ? (
        <div style={{ background: "#fff", border: `1.5px solid ${T.blue}`, borderRadius: "10px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: T.navy }}>Add Custom Compliance</div>
          <div style={st.row(8)}>
            <input style={st.input} placeholder="Name (e.g. HIPAA)" value={newName} onChange={e => setNewName(e.target.value)}
              onFocus={e => e.target.style.borderColor = T.blue} onBlur={e => e.target.style.borderColor = T.border} />
            <input style={st.input} placeholder="Detail Page URL (optional)" value={newUrl} onChange={e => setNewUrl(e.target.value)}
              onFocus={e => e.target.style.borderColor = T.blue} onBlur={e => e.target.style.borderColor = T.border}
              onKeyDown={e => e.key === "Enter" && addCustom()} />
          </div>
          <div style={st.col(5)}>
            <label style={{ fontSize: "11px", fontWeight: 700, color: T.muted, textTransform: "uppercase" }}>Logo (Optional)</label>
            <div style={st.row(10)}>
              <input type="file" accept="image/*" onChange={handleLogoUpload} style={{ fontSize: "12px" }} />
              {uploading && <span style={{ fontSize: "11px", color: T.blue }}>Uploading...</span>}
              {newLogoUrl && <span style={{ fontSize: "11px", color: T.green }}>✓ Ready</span>}
            </div>
          </div>
          <div style={st.row(8)}>
            <button style={st.btnBlue(uploading)} onClick={addCustom} disabled={uploading}>Add</button>
            <button style={st.btnGhost} onClick={() => { setShowAddForm(false); setNewName(""); setNewUrl(""); setNewLogoUrl("") }}>Cancel</button>
          </div>
        </div>
      ) : (
        <button
          style={{ ...st.btnAdd, alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "6px" }}
          onClick={() => setShowAddForm(true)}
        >
          + Add Element
        </button>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════════
   TRUSTED BY EDITOR
══════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════
   CONTROLS EDITOR
══════════════════════════════════════════════════ */
function ControlsEditor({ config, onChange }) {
  const cats = config?.categories || []
  const [showAddCat, setShowAddCat] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newIcon, setNewIcon] = useState("🔒")
  const [newBg, setNewBg] = useState("#EBF2FF")

  const updateCats = (next) => onChange({ ...config, categories: next })
  const [addingToIdx, setAddingToIdx] = useState(null)
  const [editingItemIdx, setEditingItemIdx] = useState(null)
  const [itemLabel, setItemLabel] = useState("")
  const [itemDesc, setItemDesc] = useState("")

  const addItem = (idx) => {
    if (!itemLabel.trim()) return
    const next = [...cats]
    const newItem = { label: itemLabel.trim(), description: itemDesc.trim() }

    if (editingItemIdx !== null) {
      const up = [...(next[idx].items || [])]
      up[editingItemIdx] = newItem
      next[idx] = { ...next[idx], items: up }
    } else {
      next[idx] = { ...next[idx], items: [...(next[idx].items || []), newItem] }
    }

    updateCats(next)
    cancelItem()
  }

  const cancelItem = () => {
    setItemLabel(""); setItemDesc(""); setAddingToIdx(null); setEditingItemIdx(null)
  }

  const editItem = (ci, ii, item) => {
    setAddingToIdx(ci)
    setEditingItemIdx(ii)
    setItemLabel(typeof item === "string" ? item : item.label)
    setItemDesc(typeof item === "object" ? item.description : "")
  }

  const removeItem = (ci, ii) => {
    const next = [...cats]
    next[ci] = { ...next[ci], items: next[ci].items.filter((_, i) => i !== ii) }
    updateCats(next)
    if (editingItemIdx === ii && addingToIdx === ci) cancelItem()
  }
  const removeCat = (i) => updateCats(cats.filter((_, idx) => idx !== i))

  const addCategory = () => {
    if (!newTitle.trim()) return
    updateCats([...cats, { title: newTitle.trim(), icon: newIcon, bg: newBg, items: [] }])
    setNewTitle(""); setNewIcon("🔒"); setNewBg("#EBF2FF"); setShowAddCat(false)
  }

  return (
    <div style={st.col(16)}>
      <div style={st.sectionLabel}>{cats.length} security categories</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "14px" }}>
        {cats.map((cat, ci) => (
          <div key={cat.title + ci} style={{
            background: "#fff", border: `1.5px solid ${T.border}`, borderRadius: "12px",
            padding: "18px", display: "flex", flexDirection: "column", gap: "12px",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={st.row(10)}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "8px", background: cat.bg || "#EBF2FF",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px",
                }}>{cat.icon || "🔒"}</div>
                <span style={{ fontSize: "13.5px", fontWeight: 700, color: T.navy }}>{cat.title}</span>
              </div>
              <button style={st.btnDanger} onClick={() => removeCat(ci)}>Remove</button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", minHeight: "28px" }}>
              {(cat.items || []).length === 0
                ? <span style={{ fontSize: "12px", color: T.faint, fontStyle: "italic" }}>No items yet</span>
                : cat.items.map((item, ii) => (
                  <TagPill
                    key={ii}
                    item={item}
                    onRemove={() => removeItem(ci, ii)}
                    onClick={() => editItem(ci, ii, item)}
                  />
                ))
              }
            </div>

            {addingToIdx === ci ? (
              <div style={{ ...st.col(8), background: "#f8fafc", padding: "12px", borderRadius: "8px", border: `1px dashed ${T.border}` }}>
                <input
                  style={st.input}
                  placeholder="Control Name (e.g. AWS)"
                  value={itemLabel}
                  onChange={e => setItemLabel(e.target.value)}
                  autoFocus
                />
                <textarea
                  style={{ ...st.input, minHeight: "60px", resize: "vertical" }}
                  placeholder="Explanation (How it's done...)"
                  value={itemDesc}
                  onChange={e => setItemDesc(e.target.value)}
                />
                <div style={st.row(8)}>
                  <button style={{ ...st.btnBlue(false), padding: "5px 15px", fontSize: "11px" }} onClick={() => addItem(ci)}>
                    {editingItemIdx !== null ? "Update Item" : "Add Item"}
                  </button>
                  <button style={{ ...st.btnGhost, padding: "4px 12px", fontSize: "11px" }} onClick={cancelItem}>Cancel</button>
                </div>
              </div>
            ) : (
              <button
                style={{ ...st.btnAdd, fontSize: "11px", padding: "5px 12px" }}
                onClick={() => setAddingToIdx(ci)}
              >
                + Add Control Item
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add Element */}
      {showAddCat ? (
        <div style={{ background: "#fff", border: `1.5px solid ${T.blue}`, borderRadius: "10px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: T.navy }}>Add New Category</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <input style={{ ...st.input, flex: "2 1 160px" }} placeholder="Category title" value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              onFocus={e => e.target.style.borderColor = T.blue} onBlur={e => e.target.style.borderColor = T.border}
              onKeyDown={e => e.key === "Enter" && addCategory()} />
            <input style={{ ...st.input, flex: "0 1 70px" }} placeholder="Icon" value={newIcon}
              onChange={e => setNewIcon(e.target.value)}
              onFocus={e => e.target.style.borderColor = T.blue} onBlur={e => e.target.style.borderColor = T.border} />
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <label style={{ fontSize: "11px", fontWeight: 600, color: T.muted, whiteSpace: "nowrap" }}>BG color</label>
              <input type="color" value={newBg} onChange={e => setNewBg(e.target.value)}
                style={{ width: "36px", height: "32px", border: `1.5px solid ${T.border}`, borderRadius: "6px", cursor: "pointer", padding: "2px" }} />
            </div>
          </div>
          <div style={st.row(8)}>
            <button style={st.btnBlue(false)} onClick={addCategory}>Add</button>
            <button style={st.btnGhost} onClick={() => { setShowAddCat(false); setNewTitle("") }}>Cancel</button>
          </div>
        </div>
      ) : (
        <button
          style={{ ...st.btnAdd, alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "6px" }}
          onClick={() => setShowAddCat(true)}
        >
          + Add Element
        </button>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════════
   ADD WIDGET MODAL
══════════════════════════════════════════════════ */
function AddWidgetModal({ existingNames, onAdd, onClose }) {
  const [selected, setSelected] = useState(null)
  const available = ADDABLE_WIDGETS.filter(w => !existingNames.includes(w.name))

  return (
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, background: "rgba(12,35,64,.55)",
        backdropFilter: "blur(5px)", zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
      }}
    >
      <div style={{
        background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "440px",
        boxShadow: "0 24px 64px rgba(12,35,64,.2)", fontFamily: T.font, overflow: "hidden",
      }}>
        <div style={{ padding: "18px 22px", borderBottom: `1.5px solid #EBECF0`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "15px", fontWeight: 700, color: T.navy }}>Add a Widget</span>
          <button style={{ ...st.tagX, fontSize: "20px", color: T.muted }} onClick={onClose}>×</button>
        </div>
        <div style={{ padding: "18px 22px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {available.length === 0
            ? <p style={{ fontSize: "13px", color: T.muted, textAlign: "center", padding: "16px 0" }}>All available widgets are already added.</p>
            : available.map(w => (
              <div
                key={w.name}
                onClick={() => setSelected(w.name)}
                style={{
                  display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px",
                  border: `1.5px solid ${selected === w.name ? T.blue : T.border}`,
                  borderRadius: "10px", cursor: "pointer",
                  background: selected === w.name ? "#EBF2FF" : "#fff",
                  transition: "all .15s",
                }}
              >
                <div style={st.iconBox("#EBF2FF", 36)}>{w.icon}</div>
                <div>
                  <div style={{ fontSize: "13.5px", fontWeight: 700, color: T.navy }}>{w.name}</div>
                  <div style={{ fontSize: "12px", color: T.muted }}>{w.desc}</div>
                </div>
                {selected === w.name && <span style={{ marginLeft: "auto", color: T.blue, fontWeight: 800, fontSize: "16px" }}>✓</span>}
              </div>
            ))
          }
        </div>
        <div style={{ padding: "14px 22px", borderTop: `1.5px solid #EBECF0`, display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button style={st.btnGhost} onClick={onClose}>Cancel</button>
          <button
            style={st.btnBlue(!selected)}
            onClick={() => { if (selected) { onAdd(selected); onClose() } }}
          >Add Widget</button>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════
   WIDGET CARD
══════════════════════════════════════════════════ */
function WidgetCard({ widget, data, onToggle, onSave, onDelete, onChange }) {
  const [savedState, setSavedState] = useState(false) // "idle"|true
  const meta = WIDGET_META[widget.widgetName] || {
    icon: "⚙️", accent: T.blue, accentBg: "#EBF2FF",
    label: widget.widgetName, desc: "", editable: true, removable: true,
  }
  const isOn = data?.isVisible

  const handleSave = async () => {
    await onSave(widget)
    setSavedState(true)
    setTimeout(() => setSavedState(false), 2200)
  }

  const renderEditor = () => {
    const cfg = data?.config || {}
    const upd = (newCfg) => onChange(widget._id, { ...data, config: newCfg })
    switch (widget.widgetName) {
      case "Compliances": return <CompliancesEditor config={cfg} onChange={upd} />
      case "Controls": return <ControlsEditor config={cfg} onChange={upd} />
      default: return null
    }
  }

  return (
    <div style={st.card(isOn)}>
      {/* header */}
      <div style={st.cardHd}>
        <div style={st.row(12)}>
          <div style={st.iconBox(meta.accentBg)}>{meta.icon}</div>
          <div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: T.navy, letterSpacing: "-.2px" }}>
              {meta.label || widget.widgetName}
            </div>
            <div style={{ fontSize: "12px", color: T.muted, marginTop: "2px" }}>{meta.desc}</div>
          </div>
        </div>

        <div style={{ ...st.row(10), flexWrap: "wrap" }}>
          <Toggle on={isOn} onChange={() => onToggle(widget._id, isOn)} />
          {isOn && meta.editable && (
            <button
              style={{
                ...st.btnBlue(false),
                background: savedState ? T.green : T.blue,
                minWidth: "120px", transition: "background .3s",
              }}
              onClick={handleSave}
            >
              {savedState ? "✓ Saved!" : "Save changes"}
            </button>
          )}
          {meta.removable && (
            <button style={st.btnDanger} onClick={() => onDelete(widget._id)}>Remove widget</button>
          )}
        </div>
      </div>

      {/* editor */}
      {isOn && meta.editable && (
        <div style={st.edBody}>{renderEditor()}</div>
      )}

      {/* read-only note */}
      {isOn && !meta.editable && (
        <div style={st.readonlyBanner}>🔒 Content is managed elsewhere and cannot be edited here.</div>
      )}

      {/* hidden banner */}
      {!isOn && (
        <div style={st.hiddenBanner}>👁 This section is hidden from the public Trust Center page.</div>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════ */
// export default function Widgets() {
//   const [widgets, setWidgets] = useState([])
//   const [formData, setFormData] = useState({})
//   const [loading, setLoading] = useState(true)
//   const [showAdd, setShowAdd] = useState(false)

//   const fetchWidgets = async () => {
//     try {
//       setLoading(true)
//       const res = await api.get("/widgets")
//       setWidgets(res.data)
//       const map = {}
//       res.data.forEach(w => { map[w._id] = { ...w } })
//       setFormData(map)
//     } catch (err) {
//       console.error(err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => { fetchWidgets() }, [])

//   const handleToggle = (id, cur) => setFormData(p => ({ ...p, [id]: { ...p[id], isVisible: !cur } }))
//   const handleChange = (id, nxt) => setFormData(p => ({ ...p, [id]: nxt }))

//   const handleSave = async (widget) => {
//     try {
//       await api.put(`/widgets/${widget._id}`, { ...formData[widget._id], updatedAt: new Date() })
//       fetchWidgets()
//     } catch (e) { alert(`Error saving ${widget.widgetName}`); console.error(e) }
//   }

//   const handleDelete = async (id) => {
//     if (!window.confirm("Remove this widget from the Trust Center?")) return
//     try {
//       await api.delete(`/admin/widgets/${id}`)
//       fetchWidgets()
//     } catch (e) { alert("Error removing widget"); console.error(e) }
//   }

//   const handleAdd = async (widgetName) => {
//     const defaults = {
//       Compliances: { config: { items: ["iso27001-2022", "iso27701", "soc2", "gdpr", "ccpa", "iso9001"], urls: {}, customItems: [] } },
//       TrustedBy: { config: { companies: DEFAULT_COMPANIES } },
//       Controls: {
//         config: {
//           categories: [
//             { icon: "🛡️", bg: "#EFF6FF", title: "Product security", items: ["Production System User Review", "Vulnerability Remediation Process"] },
//             { icon: "🔒", bg: "#F0FDF4", title: "Data security", items: ["Identity Validation", "Production Databases Access Restriction"] },
//             { icon: "🌐", bg: "#FDF4FF", title: "Network security", items: ["Impact analysis", "Limit Network Connections"] },
//           ]
//         }
//       },
//     }
//     try {
//       await api.post("/admin/widgets", { widgetName, isVisible: true, isEditable: true, ...(defaults[widgetName] || {}) })
//       fetchWidgets()
//     } catch (e) { alert("Error adding widget"); console.error(e) }
//   }

//   if (loading) return (
//     <AdminLayout title="Widget Manager">
//       <div style={{ textAlign: "center", padding: "80px 0", color: T.faint, fontSize: "14px", fontFamily: T.font }}>
//         Loading widgets…
//       </div>
//     </AdminLayout>
//   )

//   const existingNames = widgets.map(w => w.widgetName)
//   const visibleWidgets = widgets.filter(w => !HIDDEN_WIDGETS.includes(w.widgetName))
//   const canAdd = ADDABLE_WIDGETS.some(w => !existingNames.includes(w.name))
//   const visibleCount = visibleWidgets.filter(w => formData[w._id]?.isVisible).length

//   return (
//     <AdminLayout
//       title="Widget Manager"
//       description="Control which sections appear on the Trust Center and configure their content."
//     >
//       {/* top bar */}
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
//         <div style={{ fontSize: "13px", color: T.muted, fontFamily: T.font }}>
//           {visibleCount} of {visibleWidgets.length} sections visible
//         </div>
//         {canAdd && (
//           <button style={{ ...st.btnBlue(false), display: "flex", alignItems: "center", gap: "6px" }} onClick={() => setShowAdd(true)}>
//             + Add Widget
//           </button>
//         )}
//       </div>

//       {/* cards */}
//       <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
//         {visibleWidgets.map(widget => (
//           <WidgetCard
//             key={widget._id}
//             widget={widget}
//             data={formData[widget._id]}
//             onToggle={handleToggle}
//             onSave={handleSave}
//             onDelete={handleDelete}
//             onChange={handleChange}
//           />
//         ))}
//       </div>

//       {showAdd && (
//         <AddWidgetModal
//           existingNames={existingNames}
//           onAdd={handleAdd}
//           onClose={() => setShowAdd(false)}
//         />
//       )}
//     </AdminLayout>
//   )
// }

// ... ALL YOUR IMPORTS + CODE ABOVE REMAINS SAME

export default function Widgets() {
  const [widgets, setWidgets] = useState([])
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(true)
  const [showAdd, setShowAdd] = useState(false)

  const fetchWidgets = async () => {
    try {
      setLoading(true)
      const res = await api.get("/widgets")
      setWidgets(res.data)
      const map = {}
      res.data.forEach(w => { map[w._id] = { ...w } })
      setFormData(map)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchWidgets() }, [])

  const handleToggle = async (id, cur) => {
    const newVisibility = !cur;
    try {
      setFormData(p => ({ ...p, [id]: { ...p[id], isVisible: newVisibility } }));

      await api.put(`/widgets/${id}`, { ...formData[id], isVisible: newVisibility, updatedAt: new Date() });
      // fetchWidgets(); // Optional: refetch to ensure sync, but local update is faster
    } catch (e) {
      alert("Error updating widget visibility");
      console.error(e);
      // Revert UI change on error
      setFormData(p => ({ ...p, [id]: { ...p[id], isVisible: cur } }));
    }
  };

  const handleChange = (id, nxt) =>
    setFormData(p => ({ ...p, [id]: nxt }))

  const handleSave = async (widget) => {
    try {
      await api.put(`/widgets/${widget._id}`, {
        ...formData[widget._id],
        updatedAt: new Date()
      })
      fetchWidgets()
    } catch (e) {
      alert(`Error saving ${widget.widgetName}`)
      console.error(e)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Remove this widget from the Trust Center?")) return
    try {
      await api.delete(`/admin/widgets/${id}`)
      fetchWidgets()
    } catch (e) {
      alert("Error removing widget")
      console.error(e)
    }
  }

  const handleAdd = async (widgetName) => {
    const defaults = {
      Compliances: {
        config: {
          items: ["iso27001-2022", "iso27701", "soc2", "gdpr", "ccpa", "iso9001"],
          urls: {},
          customItems: []
        }
      },
      Controls: {
        config: {
          categories: [
            {
              icon: "🛡️",
              bg: "#EFF6FF",
              title: "Product security",
              items: ["Production System User Review", "Vulnerability Remediation Process"]
            },
            {
              icon: "🔒",
              bg: "#F0FDF4",
              title: "Data security",
              items: ["Identity Validation", "Production Databases Access Restriction"]
            },
            {
              icon: "🌐",
              bg: "#FDF4FF",
              title: "Network security",
              items: ["Impact analysis", "Limit Network Connections"]
            }
          ]
        }
      },
    }

    try {
      await api.post("/admin/widgets", {
        widgetName,
        isVisible: true,
        isEditable: true,
        ...(defaults[widgetName] || {})
      })
      fetchWidgets()
    } catch (e) {
      alert("Error adding widget")
      console.error(e)
    }
  }

  if (loading) return (
    <AdminLayout title="Widget Manager">
      <div style={{
        textAlign: "center",
        padding: "80px 0",
        color: T.faint,
        fontSize: "14px",
        fontFamily: T.font
      }}>
        Loading widgets…
      </div>
    </AdminLayout>
  )

  const existingNames = widgets.map(w => w.widgetName)
  const visibleWidgets = widgets.filter(w => !HIDDEN_WIDGETS.includes(w.widgetName))
  const canAdd = ADDABLE_WIDGETS.some(w => !existingNames.includes(w.name))

  // ✅ DEDUPLICATION: Keep only the first instance of each widget type
  const deduplicatedWidgets = []
  const seenWidgetNames = new Set()
  for (const widget of visibleWidgets) {
    if (!seenWidgetNames.has(widget.widgetName)) {
      deduplicatedWidgets.push(widget)
      seenWidgetNames.add(widget.widgetName)
    }
  }

  const visibleCount = deduplicatedWidgets.filter(w => formData[w._id]?.isVisible).length

  // ✅ SORTING LOGIC ADDED HERE
  const ORDER = ["Hero", "Controls", "Compliances", "Resources"]

  const sortedWidgets = [...deduplicatedWidgets].sort(
    (a, b) => {
      const aIndex = ORDER.indexOf(a.widgetName)
      const bIndex = ORDER.indexOf(b.widgetName)

      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex)
    }
  )

  return (
    <AdminLayout
      title="Widget Manager"
      description="Control which sections appear on the Trust Center and configure their content."
    >
      {/* top bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        flexWrap: "wrap",
        gap: "10px"
      }}>
        <div style={{
          fontSize: "13px",
          color: T.muted,
          fontFamily: T.font
        }}>
          {visibleCount} of {visibleWidgets.length} sections visible
        </div>

        {canAdd && (
          <button
            style={{ ...st.btnBlue(false), display: "flex", alignItems: "center", gap: "6px" }}
            onClick={() => setShowAdd(true)}
          >
            + Add Widget
          </button>
        )}
      </div>

      {/* cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {sortedWidgets.map(widget => (
          <WidgetCard
            key={widget._id}
            widget={widget}
            data={formData[widget._id]}
            onToggle={handleToggle}
            onSave={handleSave}
            onDelete={handleDelete}
            onChange={handleChange}
          />
        ))}
      </div>

      {showAdd && (
        <AddWidgetModal
          existingNames={existingNames}
          onAdd={handleAdd}
          onClose={() => setShowAdd(false)}
        />
      )}
    </AdminLayout>
  )
}