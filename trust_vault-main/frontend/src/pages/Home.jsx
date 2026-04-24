import { useEffect, useState } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"
import logoUrl from "../logo.webp"

// ── All compliance definitions — must stay in sync with Widgets.jsx ──────────
const ALL_COMPLIANCES = []

function ControlCard({ cat, onOpenControl }) {
    const [showAll, setShowAll] = useState(false)
    const isRiskProfile = cat.title === "Risk Profile"
    const itemsToShow = showAll ? cat.items : cat.items?.slice(0, 3)
    const hasMore = cat.items?.length > 3

    return (
        <div className="ctrl-card" id={`card-${cat.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="ctrl-head">
                <div className="ctrl-icon" style={{ background: cat.bg || "var(--blue-pill-bg)" }}>{cat.icon || "🔒"}</div>
                <div className="ctrl-name">{cat.title}</div>
            </div>
            <div className="ctrl-items">
                {itemsToShow?.map((item, i) => {
                    const isObj = typeof item === "object"
                    const label = isObj ? item.label : item
                    const hasDesc = isObj && item.description

                    if (isRiskProfile && isObj) {
                        return (
                            <div key={i} className="ctrl-kv-row">
                                <span className="ctrl-key">{label}</span>
                                <span className="ctrl-val">{item.description.split('\n')[1] || item.description}</span>
                            </div>
                        )
                    }

                    return (
                        <div key={i} className="ctrl-item">
                            <span className="ctrl-check">✓</span>{" "}
                            {hasDesc ? (
                                <button
                                    className="ctrl-link-btn"
                                    onClick={() => onOpenControl(cat, item)}
                                    title="Click to view details"
                                >
                                    {label}
                                </button>
                            ) : (
                                <span style={{ fontSize: '13px' }}>{label}</span>
                            )}
                        </div>
                    )
                })}
            </div>
            {hasMore && (
                <button className="ctrl-more" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "View less controls ↑" : `View ${cat.items.length - 3} more controls`}
                </button>
            )}
        </div>
    )
}

function ControlDrawer({ cat, activeItem, onClose }) {
    useEffect(() => {
        if (activeItem && cat) {
            const label = typeof activeItem === "object" ? activeItem.label : activeItem;
            const element = document.getElementById(`section-${label.replace(/\s+/g, '-').toLowerCase()}`);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [activeItem, cat]);

    if (!cat) return null;

    return (
        <div className="drawer-overlay" onClick={onClose}>
            <div className="drawer-content" onClick={e => e.stopPropagation()}>
                <div className="drawer-header">
                    <div className="drawer-header-left">
                        <div className="drawer-icon-box" style={{ background: cat.bg || "#EBF2FF" }}>
                            {cat.icon || "🛡️"}
                        </div>
                        <h2 className="drawer-title">{cat.title}</h2>
                    </div>
                    <button className="drawer-close" onClick={onClose}>×</button>
                </div>

                <div className="drawer-body">
                    {cat.items?.map((item, idx) => {
                        const label = typeof item === "object" ? item.label : item;
                        const desc = typeof item === "object" ? item.description : "";
                        const isActive = activeItem && (typeof item === "object" ? item.label === activeItem.label : item === activeItem);

                        return (
                            <div key={idx} className={`drawer-section ${isActive ? 'active' : ''}`} id={`section-${label.replace(/\s+/g, '-').toLowerCase()}`}>
                                <h3 className="section-title">
                                    <span className="section-check">✓</span>
                                    {label}
                                </h3>
                                {desc && (
                                    <div className="section-desc">
                                        {desc.split('\n').map((line, i) => (
                                            <p key={i} style={{ marginBottom: line.trim() === '' ? '12px' : '8px' }}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    const [documents, setDocuments] = useState([])
    const [widgets, setWidgets] = useState([])
    const [controls, setControls] = useState(null)
    const [user, setUser] = useState(null)
    const [activeSec, setActiveSec] = useState("overview")
    const [resTab, setResTab] = useState("All")
    const [selectedDoc, setSelectedDoc] = useState(null)
    const [requestReason, setRequestReason] = useState("")
    const [regReason, setRegReason] = useState("")
    const [selectedDocs, setSelectedDocs] = useState([]) // For bulk request
    const [requestEmail, setRequestEmail] = useState("")
    const [requestOTP, setRequestOTP] = useState("")
    const [requestStep, setRequestStep] = useState(1)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [modalMode, setModalMode] = useState("login") // "login" or "request"
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [company, setCompany] = useState("")
    const [termsAccepted, setTermsAccepted] = useState(false)
    const [updatesAccepted, setUpdatesAccepted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [viewingDocId, setViewingDocId] = useState(null)
    const [activeControl, setActiveControl] = useState(null)
    const [viewerBlobUrl, setViewerBlobUrl] = useState(null)
    const [isViewerOpen, setIsViewerOpen] = useState(false)
    const [zoomedLogo, setZoomedLogo] = useState(null)

    const navigate = useNavigate()

    const handleNavClick = (id) => {
        setActiveSec(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const isWidgetVisible = (widgetName) => {
        const widget = widgets.find(w => w.widgetName === widgetName)
        return widget ? widget.isVisible : true // Default to true if not found
    }

    const getVisibleSections = () => {
        const sections = [
            { id: "overview", label: "Overview", visible: isWidgetVisible("Hero") },
            { id: "compliances", label: "Compliances", visible: isWidgetVisible("Compliances") },
            { id: "controls", label: "Controls", visible: isWidgetVisible("Controls") },
            { id: "resources", label: "Resources", visible: isWidgetVisible("Resources") }
        ]
        return sections.filter(s => s.visible)
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const docId = params.get("docId")
        const docIds = params.get("docIds")
        const step = params.get("step")


        if (step === "4" && (docId || docIds)) {
            setRequestStep(4)
            setModalMode("request")
            setIsLoginModalOpen(true)
        }

        if ((docId || docIds) && documents.length > 0) {
            const rawIds = (docIds || docId).split(",")
            const found = documents.filter(d => rawIds.includes(String(d._id)))
            console.log("[DEBUG] Found docs for restoration:", found)
            if (found.length > 0) {
                setSelectedDocs(found)
                setSelectedDoc(found[0])
                // Only clear URL after we've successfully matched documents
                window.history.replaceState({}, document.title, "/")
            } else {
                // Fallback to placeholders if docs loaded but IDs not found
                const placeholders = rawIds.map(id => ({ _id: id, title: "Document " + id }))
                setSelectedDocs(placeholders)
                setSelectedDoc(placeholders[0])
            }
        } else if (docId || docIds) {
            // Initial placeholders while documents load
            const rawIds = (docIds || docId).split(",")
            const placeholders = rawIds.map(id => ({ _id: id, title: "Loading..." }))
            setSelectedDocs(placeholders)
            setSelectedDoc(placeholders[0])
        }
    }, [documents])

    useEffect(() => {
        loadData()
        const storedUser = localStorage.getItem("user")
        if (storedUser && storedUser !== "null") {
            const parsedUser = JSON.parse(storedUser)
            if (parsedUser?.email) {
                setUser(parsedUser)
                fetchUserData(parsedUser.email)
            }
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        window.location.href = "/"
    }

    async function loadData() {
        try {
            const [docsRes, widgetsRes] = await Promise.all([
                api.get("/documents"),
                api.get("/widgets")
            ])
            setDocuments(docsRes.data)
            setWidgets(widgetsRes.data)
            const ctrl = widgetsRes.data.find(w => w.widgetName === "Controls")
            if (ctrl) setControls(ctrl)
        } catch (err) {
            console.error(err)
        }
    }

    async function fetchUserData(email) {
        try {
            const res = await api.get(`/auth/user/${email}?t=${Date.now()}`)
            setUser(res.data)
            localStorage.setItem("user", JSON.stringify(res.data))
        } catch (err) {
            console.error("Failed to refresh user data:", err)
        }
    }

    async function handleRequestAccess(e) {
        e.preventDefault()
        console.log("[DEBUG] handleRequestAccess called:", { selectedDocs, requestReason, userEmail: user?.email })

        if (selectedDocs.length === 0) {
            alert("No documents selected. Please try selecting the documents again.")
            console.error("Missing selectedDocs", { selectedDocs })
            return
        }
        if (!requestReason) {
            alert("Please provide a reason for your request.")
            return
        }

        setIsSubmitting(true)
        try {
            for (const doc of selectedDocs) {
                await api.post("/documents/request", {
                    documentId: doc._id,
                    reason: requestReason,
                    company: user?.company || company,
                    email: user?.email,
                    termsAccepted: user?.termsAccepted || termsAccepted,
                    marketingUpdates: user?.marketingUpdates || updatesAccepted
                })
            }
            alert("Access request sent to admin")
            setIsLoginModalOpen(false)
            setRequestReason("")
            setRegReason("")
            setSelectedDocs([])
        } catch (err) {
            console.error(err)
            alert("Failed to send request")
        } finally {
            setIsSubmitting(false)
        }
    }

    async function handleViewDocument(doc) {
        try {
            setViewingDocId(doc._id)
            const res = await api.post("/documents/view", {
                documentId: doc._id,
                email: user?.email || "Guest"
            }, { responseType: 'blob' })
            const blob = new Blob([res.data], { type: 'application/pdf' })
            const url = URL.createObjectURL(blob)
            setViewerBlobUrl(url + '#toolbar=0')
            setIsViewerOpen(true)
        } catch (err) {
            console.error(err)
            alert("Failed to view document")
        } finally {
            setViewingDocId(null)
        }
    }

    async function handleDownloadDocument(doc) {
        try {
            setViewingDocId(doc._id)
            const res = await api.post("/documents/view", {
                documentId: doc._id,
                email: user?.email || "Guest"
            }, { responseType: 'blob' })
            const blob = new Blob([res.data], { type: 'application/pdf' })
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `${doc.title || 'document'}.pdf`)
            document.body.appendChild(link)
            link.click()
            link.remove()
            URL.revokeObjectURL(url)
        } catch (err) {
            console.error(err)
            alert("Failed to download document")
        } finally {
            setViewingDocId(null)
        }
    }

    const handleKeyDown = (e, callback) => {
        if (e.key === 'Enter') { e.preventDefault(); callback() }
    }

    const openRequestModal = (docs) => {
        const docArray = Array.isArray(docs) ? docs : [docs]
        setSelectedDocs(docArray)
        setSelectedDoc(docArray[0]) // Fallback for single-doc logic
        setModalMode("request")
        console.log("[DEBUG] openRequestModal: user=", user)
        if (user) {
            if (user.role === "prospect" && !user.ndaSigned) {
                console.log("[DEBUG] Redirecting to Step 3 (NDA) because user is prospect and ndaSigned is false")
                setRequestStep(3)
            } else {
                console.log("[DEBUG] Redirecting to Step 4 (Reason)")
                setRequestStep(4)
            }
        } else {
            console.log("[DEBUG] No user logged in, starting from Step 1")
            setRequestStep(1)
            setRequestReason("")
        }
        setIsLoginModalOpen(true)
    }

    const nextStep = async () => {
        if (modalMode === "request") {
            if (requestStep === 1) {
                try {
                    setIsSubmitting(true)
                    const res = await api.post("/auth/check-email", { email: requestEmail })
                    if (res.data.exists) {
                        await api.post("/auth/send-otp", { email: requestEmail })
                        setRequestStep(2)
                    } else {
                        // New user: change to login mode step 2 (registration)
                        setModalMode("login")
                        setRequestStep(2)
                    }
                } catch (err) {
                    alert(err.response?.data?.error || "Failed to check email")
                } finally {
                    setIsSubmitting(false)
                }
            } else if (requestStep === 2) {
                try {
                    setIsSubmitting(true)
                    const res = await api.post("/auth/verify-otp", { email: requestEmail, otp: requestOTP })
                    const userData = res.data.user
                    const token = res.data.token
                    console.log("[DEBUG] nextStep: userData=", userData)
                    setUser(userData)
                    localStorage.setItem("user", JSON.stringify(userData))
                    if (token) localStorage.setItem("token", token)
                    await loadData() // Refresh documents after login
                    if (userData.role === "prospect" && !userData.ndaSigned) {
                        console.log("[DEBUG] Redirecting to Step 3 (NDA) because userData is prospect and ndaSigned is false")
                        setRequestStep(3)
                    } else if (userData.accessibleDocs?.includes(selectedDoc?._id) || userData.role === "admin") {
                        console.log("[DEBUG] Closing modal (Doc already accessible or Admin)")
                        setIsLoginModalOpen(false)
                    } else {
                        console.log("[DEBUG] Redirecting to Step 4 (Reason)")
                        setRequestStep(4)
                    }
                } catch (err) {
                    alert(err.response?.data?.message || "Invalid OTP")
                } finally {
                    setIsSubmitting(false)
                }
            }
        } else {
            await handleLoginNext()
        }
    }

    const handleLoginNext = async () => {
        if (requestStep === 1) { // Screen 0: Email Entry
            try {
                setIsSubmitting(true)
                const res = await api.post("/auth/check-email", { email: requestEmail })
                if (res.data.exists) {
                    await api.post("/auth/send-otp", { email: requestEmail })
                    setRequestStep(4) // New Step 4 for OTP
                } else {
                    setRequestStep(2)
                }
            } catch (err) {
                alert(err.response?.data?.error || "Error checking email")
            } finally {
                setIsSubmitting(false)
            }
        } else if (requestStep === 2) { // Screen 1: Registration
            if (!termsAccepted) { alert("Please accept the terms to continue."); return }
            try {
                setIsSubmitting(true)
                await api.post("/auth/register-prospect", {
                    email: requestEmail,
                    firstName,
                    lastName,
                    company,
                    reason: regReason,
                    termsAccepted,
                    marketingUpdates: updatesAccepted
                })
                await api.post("/auth/send-otp", { email: requestEmail })
                setRequestStep(4)
            } catch (err) {
                alert(err.response?.data?.error || "Registration failed")
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    const handleLoginVerify = async (e) => {
        e.preventDefault()
        try {
            setIsSubmitting(true)
            const res = await api.post("/auth/verify-otp", { email: requestEmail, otp: requestOTP })
            const userData = res.data.user
            const token = res.data.token
            setUser(userData)
            localStorage.setItem("user", JSON.stringify(userData))
            if (token) localStorage.setItem("token", token)
            await loadData() // Refresh documents after login

            if (userData.role === "admin") {
                setIsLoginModalOpen(false)
                navigate("/")
            } else if (selectedDoc || selectedDocs.length > 0) {
                setModalMode("request")
                if (userData.role === "prospect" && !userData.ndaSigned) {
                    setRequestStep(3)
                } else {
                    setRequestStep(4)
                }
            } else {
                setIsLoginModalOpen(false)
            }
        } catch (err) {
            alert("Invalid OTP")
        } finally {
            setIsSubmitting(false)
        }
    }

    const getActiveCompliances = () => {
        const compWidget = widgets.find(w => w.widgetName === "Compliances")
        if (!compWidget) return []
        const selectedIds = compWidget.config?.items ?? []
        const urls = compWidget.config?.urls ?? {}
        const customItems = compWidget.config?.customItems ?? []
        const allDefs = [...ALL_COMPLIANCES, ...customItems]
        return allDefs
            .filter(c => selectedIds.includes(c.id))
            .map(c => ({ ...c, detailUrl: urls[c.id] || "" }))
    }


    const resCategories = ["All", "Compliance", "Security", "Policies", "Audits"]
    const baseDocs = resTab === "All"
        ? documents
        : documents.filter(d => d.category === resTab)

    // Backend now handles filtering based on user status
    const filteredDocs = baseDocs

    return (
        <div className="trust-wrapper">
            <header className="header">
                <div className="header-inner">
                    <a className="logo" href="/">
                        <img src={logoUrl} alt="Darwinbox" className="logo-img" />
                        <div className="logo-divider"></div>
                        <span className="logo-tag">Trust Center</span>
                    </a>
                    <div className="hdr-cta">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-700">{user?.email}</span>
                                {(() => {
                                    if (user.role !== "admin") return null


                                    const perms = user.permissions || {}
                                    const allowedItems = [
                                        { path: "/admin", show: perms.approveRequests },
                                        { path: "/widgets", show: perms.manageWidgets },
                                        { path: "/admins", show: perms.manageAdmins },
                                        { path: "/upload", show: perms.uploadDocs }
                                    ].filter(item => item.show)

                                    if (allowedItems.length === 0) return null
                                    return (
                                        <button className="btn btn-blue-pill" onClick={() => navigate(allowedItems[0].path)}>Dashboard</button>
                                    )
                                })()}
                                <button className="btn btn-outline" onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <button className="btn btn-blue-pill" onClick={() => {
                                    setIsLoginModalOpen(true);
                                    setModalMode("login");
                                    setRequestStep(1);
                                    setRequestEmail("");
                                    setRequestOTP("");
                                    setRegReason("");
                                    setRequestReason("");
                                    setFirstName("");
                                    setLastName("");
                                    setCompany("");
                                    setTermsAccepted(false);
                                    setSelectedDoc(null);
                                    setSelectedDocs([]);
                                }}>Login</button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <nav className="sec-nav">
                <div className="sec-nav-inner">
                    {getVisibleSections().map(section => (
                        <button key={section.id} className={`sec-tab ${activeSec === section.id ? "on" : ""}`} onClick={() => handleNavClick(section.id)}>
                            {section.label}
                        </button>
                    ))}
                </div>
            </nav>

            <section className="hero" id="overview">
                {isWidgetVisible("Hero") && (
                    <div className="hero-inner">
                        <div className="hero-grid">
                            <div>
                                <div className="hero-kicker">
                                    <span className="cdot" style={{ background: "#36B37E", marginRight: "4px" }}></span>
                                    Live · Continuously Monitored
                                </div>
                                <h1>Security & Trust for<br /><em>the World of Work</em></h1>
                                <p className="hero-desc">Darwinbox is a cloud-native, mobile-first, AI-powered Human Capital Management platform trusted by 1000+ enterprises across 130+ countries.</p>
                                <div className="hero-stats">
                                    <div><div className="stat-n">1000+</div><div className="stat-l">Enterprises</div></div>
                                    <div><div className="stat-n">130+</div><div className="stat-l">Countries</div></div>
                                    <div><div className="stat-n">17+</div><div className="stat-l">Assurances</div></div>
                                </div>
                            </div>
                            <div className="hero-card">
                                <div className="hc-label">Active Certifications</div>
                                <div className="cert-wrap">
                                    <span className="cpill"><span className="cdot"></span>ISO 27001:2022</span>
                                    <span className="cpill"><span className="cdot"></span>ISO 27701</span>
                                    <span className="cpill"><span className="cdot"></span>SOC 2</span>
                                    <span className="cpill"><span className="cdot"></span>GDPR</span>
                                    <span className="cpill"><span className="cdot"></span>CCPA</span>
                                    <span className="cpill"><span className="cdot"></span>ISO 9001</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <main className="main">
                {isWidgetVisible("Compliances") && (
                    <section className="section" id="compliances">
                        <div className="sec-hd">
                            <h2 className="sec-title">Compliances</h2>
                        </div>
                        <div className="compliance-logo-grid">
                            {getActiveCompliances().map(comp => (
                                <div
                                    key={comp.id}
                                    className="comp-logo-card"
                                    onClick={() => {
                                        console.log("Zooming logo:", comp.name);
                                        setZoomedLogo(comp);
                                    }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="comp-logo-image" style={{ backgroundColor: "transparent", padding: 0, overflow: "hidden" }}>
                                        {comp.logoUrl ? (
                                            <img src={comp.logoUrl} alt={comp.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                        ) : (
                                            <div dangerouslySetInnerHTML={{ __html: comp.svg }} style={{ width: "100%", height: "100%" }} />
                                        )}
                                    </div>
                                    <div className="comp-logo-name">{comp.name}</div>
                                    <span className={`comp-badge ${comp.status === "c" ? "cb-green" : "cb-amber"}`}>
                                        {comp.status === "c" ? "Active" : "Coming Soon"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}


                {isWidgetVisible("Controls") && (
                    <section className="section" id="controls">
                        <div className="mon-pill" role="status"><span className="blink" aria-hidden="true">●</span> Continuously monitored</div>
                        <div className="ctrl-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                            {controls?.config?.categories?.map((cat, idx) => (
                                <ControlCard key={idx} cat={cat} onOpenControl={(category, item) => setActiveControl({ category, item })} />
                            ))}
                        </div>
                    </section>
                )}

                {isWidgetVisible("Resources") && (
                    <section className="section" id="resources">
                        <div className="sec-hd">
                            <h2 className="sec-title">Resources</h2>
                        </div>
                        <div className="res-tab-bar">
                            {resCategories.map(c => (
                                <button key={c} className={`rtab ${resTab === c ? "on" : ""}`} onClick={() => setResTab(c)}>
                                    {c}
                                </button>
                            ))}
                        </div>
                        {selectedDocs.length > 0 && (
                            <div className="bulk-actions-bar">
                                <div className="bulk-info">
                                    <span>{selectedDocs.length} documents selected</span>
                                    <button className="text-blue-600 underline text-sm" onClick={() => setSelectedDocs([])}>Clear all</button>
                                </div>
                                <button className="btn btn-blue-pill" onClick={() => openRequestModal(selectedDocs)}>
                                    Request Access for {selectedDocs.length} {selectedDocs.length === 1 ? 'Item' : 'Items'}
                                </button>
                            </div>
                        )}
                        <div className="res-grid">
                            {filteredDocs.length > 0 ? filteredDocs.map(doc => (
                                <div key={doc._id} className={`res-item ${selectedDocs.some(d => d._id === doc._id) ? 'selected' : ''}`}>
                                    {doc.accessTier === "private" && !user?.accessibleDocs?.some(id => String(id) === String(doc._id)) && user?.role !== "admin" && (
                                        <div className="res-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={selectedDocs.some(d => d._id === doc._id)}
                                                onChange={(e) => {
                                                    if (e.target.checked) setSelectedDocs(prev => [...prev, doc])
                                                    else setSelectedDocs(prev => prev.filter(d => d._id !== doc._id))
                                                }}
                                            />
                                        </div>
                                    )}
                                    <div className="res-left">
                                        <div className="res-icon">📄</div>
                                        <div className="flex flex-col gap-3">
                                            <div>
                                                <div className="res-name">{doc.title}</div>
                                                <div className="res-type">
                                                    {doc.category || "General"} · PDF
                                                    <span className={`res-badge ${doc.accessTier === 'public' ? 'res-badge-public' : 'res-badge-private'}`}>
                                                        {doc.accessTier}
                                                    </span>
                                                </div>
                                            </div>
                                            {doc.accessTier === "public" || user?.role === "admin" || user?.accessibleDocs?.some(id => String(id) === String(doc._id)) ? (
                                                <div className="flex gap-2">
                                                    <button onClick={() => handleViewDocument(doc)} className="res-view-btn" disabled={viewingDocId === doc._id}>
                                                        {viewingDocId === doc._id ? "Processing..." : "View"}
                                                    </button>
                                                    <button onClick={() => handleDownloadDocument(doc)} className="res-view-btn" style={{ background: 'var(--gray-100)', color: 'var(--navy)' }} disabled={viewingDocId === doc._id}>
                                                        Download
                                                    </button>
                                                </div>
                                            ) : (
                                                <button onClick={() => openRequestModal(doc)} className="res-btn-request">
                                                    <span className="lock-icon">🔒</span>
                                                    <span className="request-text">Request Access</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="py-10 text-gray-500 text-center col-span-full">No documents found in this category.</div>
                            )}
                        </div>
                    </section>
                )}
            </main>

            <footer className="footer">
                <div className="footer-inner">
                    <div className="flex flex-col gap-2">
                        <img src={logoUrl} alt="Darwinbox" style={{ height: '24px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
                        <div>© 2026 Darwinbox Inc. All rights reserved.</div>
                    </div>
                    <div className="footer-links">
                        <a href="/">Privacy Policy</a>
                        <span className="footer-sep">|</span>
                        <a href="/">Terms of Service</a>
                        <span className="footer-sep">|</span>
                        <a href="/">Security Policy</a>
                    </div>
                </div>
            </footer>

            {/* REVAMPED UNIFIED MODAL */}
            {isLoginModalOpen && (
                <div className="overlay">
                    <div className="modal" style={{ maxWidth: '540px', padding: '10px' }}>
                        <div className="modal-hd" style={{ border: 'none', paddingBottom: 0 }}>
                            <div className="modal-title" style={{ width: '100%', textAlign: 'center' }}>
                                {(modalMode === "login" && requestStep !== 3) && <div style={{ color: '#F15A24', fontSize: '24px', marginBottom: '10px' }}>🔑</div>}
                                {(modalMode === "request") && <div style={{ fontSize: '18px', fontWeight: '700' }}>Request Access</div>}
                            </div>
                            <button className="modal-x" onClick={() => setIsLoginModalOpen(false)}>×</button>
                        </div>
                        <div className="modal-body" style={{ textAlign: 'center', padding: '0 30px 30px' }}>
                            {modalMode === "login" && (
                                <>
                                    {requestStep === 1 && (
                                        <>
                                            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>Get access to Darwinbox's Trust Center</h2>
                                            <p style={{ color: '#6B778C', fontSize: '14px', marginBottom: '24px' }}>To get started, please enter your email</p>
                                            <div className="form-group" style={{ textAlign: 'left' }}>
                                                <label className="form-label" style={{ fontSize: '12px', fontWeight: '600' }}>Work email <span style={{ color: 'red' }}>*</span></label>
                                                <input type="email" className="form-input" value={requestEmail} onChange={(e) => setRequestEmail(e.target.value)} placeholder="john@example.com" required onKeyDown={(e) => handleKeyDown(e, handleLoginNext)} />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '30px' }}>
                                                <button className="btn btn-outline" onClick={() => setIsLoginModalOpen(false)}>Back to Trust Center</button>
                                                <button className="btn btn-blue-pill" onClick={handleLoginNext} disabled={isSubmitting}>{isSubmitting ? "Wait..." : "Continue"}</button>
                                            </div>
                                        </>
                                    )}
                                    {requestStep === 2 && (
                                        <>
                                            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', textAlign: 'left' }}>Request Access</h2>
                                            <p style={{ color: '#6B778C', fontSize: '14px', marginBottom: '24px', textAlign: 'left' }}>Please provide the following details to get access to Darwinbox's Trust Center</p>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', textAlign: 'left' }}>
                                                <div className="form-group">
                                                    <label className="form-label">First name <span style={{ color: 'red' }}>*</span></label>
                                                    <input type="text" className="form-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Jane" required />
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Last name <span style={{ color: 'red' }}>*</span></label>
                                                    <input type="text" className="form-input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Smith" required />
                                                </div>
                                            </div>
                                            <div className="form-group" style={{ textAlign: 'left', marginTop: '12px' }}>
                                                <label className="form-label">Work email <span style={{ color: 'red' }}>*</span></label>
                                                <input type="email" className="form-input" value={requestEmail} disabled />
                                            </div>
                                            <div className="form-group" style={{ textAlign: 'left', marginTop: '12px' }}>
                                                <label className="form-label">Company name <span style={{ color: 'red' }}>*</span></label>
                                                <input type="text" className="form-input" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Security, Inc." required />
                                            </div>
                                            <div className="form-group" style={{ textAlign: 'left', marginTop: '12px' }}>
                                                <label className="form-label">Reason <span style={{ color: 'red' }}>*</span></label>
                                                <select className="form-input" value={regReason} onChange={(e) => setRegReason(e.target.value)} required>
                                                    <option value="">Select a reason</option>
                                                    <option value="I'm an existing customer">I'm an existing customer</option>
                                                    <option value="I'm a prospective customer">I'm a prospective customer</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div style={{ textAlign: 'left', marginTop: '20px', fontSize: '13px', color: '#344563' }}>
                                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                                                    <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} style={{ marginTop: '3px' }} />
                                                    <span>I have read and agree to the Trust Center terms. <span style={{ color: 'red' }}>*</span><br /><a href="#" style={{ color: '#1B6EF3', textDecoration: 'none' }}>Trust Center Terms of Use</a></span>
                                                </label>
                                                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                                    <input type="checkbox" checked={updatesAccepted} onChange={(e) => setUpdatesAccepted(e.target.checked)} style={{ marginTop: '3px' }} />
                                                    <span>I would like to get updates from Darwinbox's Trust Center via email</span>
                                                </label>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '30px' }}>
                                                <button className="btn btn-outline" onClick={() => setRequestStep(1)}>Back</button>
                                                <button className="btn btn-blue-pill" style={{ background: '#F15A24' }} onClick={handleLoginNext} disabled={isSubmitting}>{isSubmitting ? "Wait..." : "Submit Request"}</button>
                                            </div>
                                        </>
                                    )}
                                    {requestStep === 3 && (
                                        <>
                                            <div style={{ color: '#F15A24', fontSize: '32px', marginBottom: '15px' }}>✈️</div>
                                            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Request sent</h2>
                                            <p style={{ color: '#6B778C', fontSize: '14px', marginBottom: '8px' }}>Your request has been sent to Darwinbox.</p>
                                            <p style={{ color: '#6B778C', fontSize: '14px', marginBottom: '20px' }}>Once your request is approved, a login link will be sent to:<br /><strong>{requestEmail}</strong><br /><button onClick={() => setRequestStep(1)} style={{ color: '#1B6EF3', background: 'none', border: 'none', fontSize: '12px', cursor: 'pointer', marginTop: '8px' }}>Change email address</button></p>
                                            <button className="btn btn-blue-pill" style={{ background: '#F15A24', width: '100%' }} onClick={() => setIsLoginModalOpen(false)}>Back to Trust Center</button>
                                        </>
                                    )}
                                    {requestStep === 4 && (
                                        <form onSubmit={handleLoginVerify}>
                                            <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>Enter Verification Code</h2>
                                            <p style={{ color: '#6B778C', fontSize: '14px', marginBottom: '24px' }}>A code has been sent to <strong>{requestEmail}</strong></p>
                                            <div className="form-group" style={{ textAlign: 'left' }}>
                                                <label className="form-label">OTP</label>
                                                <input type="text" className="form-input" value={requestOTP} onChange={(e) => setRequestOTP(e.target.value)} placeholder="123456" required />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '30px' }}>
                                                <button type="button" className="btn btn-outline" onClick={() => setRequestStep(1)}>Back</button>
                                                <button type="submit" className="btn btn-blue-pill" disabled={isSubmitting}>{isSubmitting ? "Verifying..." : "Login"}</button>
                                            </div>
                                        </form>
                                    )}
                                </>
                            )}

                            {modalMode === "request" && (
                                <>
                                    {requestStep === 1 && (
                                        <div className="form-group" style={{ textAlign: 'left' }}>
                                            <p className="text-sm text-gray-600 mb-4">Enter your corporate email address to continue.</p>
                                            <label className="form-label">Email Address</label>
                                            <input type="email" className="form-input" value={requestEmail} onChange={(e) => setRequestEmail(e.target.value)} onKeyDown={(e) => handleKeyDown(e, nextStep)} placeholder="user@company.com" required />
                                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                                                <button className="btn btn-outline" onClick={() => setIsLoginModalOpen(false)}>Cancel</button>
                                                <button className="btn btn-blue-pill" onClick={nextStep} disabled={isSubmitting}>{isSubmitting ? "Wait..." : "Next"}</button>
                                            </div>
                                        </div>
                                    )}
                                    {requestStep === 2 && (
                                        <div className="form-group" style={{ textAlign: 'left' }}>
                                            <p className="text-sm text-gray-600 mb-4">An OTP has been sent to <strong>{requestEmail}</strong>.</p>
                                            <label className="form-label">Enter OTP</label>
                                            <input type="text" className="form-input" value={requestOTP} onChange={(e) => setRequestOTP(e.target.value)} onKeyDown={(e) => handleKeyDown(e, nextStep)} placeholder="123456" required />
                                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                                                <button className="btn btn-outline" onClick={() => setRequestStep(1)}>Back</button>
                                                <button className="btn btn-blue-pill" onClick={nextStep} disabled={isSubmitting}>{isSubmitting ? "Verifying..." : "Verify"}</button>
                                            </div>
                                        </div>
                                    )}
                                    {requestStep === 3 && (
                                        <div style={{ textAlign: 'center' }}>
                                            <div style={{ fontSize: "40px", marginBottom: "10px" }}>📝</div>
                                            <h3 className="font-bold mb-2">NDA Required</h3>
                                            <p className="text-sm text-gray-600 mb-6">You need to sign our Non-Disclosure Agreement before requesting private documents.</p>
                                            <button className="btn btn-blue-pill w-full" onClick={() => {
                                                const ids = selectedDocs.map(d => d._id).join(",")
                                                navigate(`/nda?redirect=home&docIds=${ids}`)
                                            }}>Go to NDA Form</button>
                                        </div>
                                    )}
                                    {requestStep === 4 && (
                                        <div className="form-group" style={{ textAlign: 'left' }}>
                                            <p className="text-sm text-gray-600 mb-4">
                                                You are requesting access to {selectedDocs.length > 1 ? (
                                                    <strong>{selectedDocs.length} documents</strong>
                                                ) : (
                                                    <strong>{selectedDoc?.title}</strong>
                                                )}.
                                            </p>
                                            <label className="form-label">Reason for Request</label>
                                            <textarea className="form-input" rows="3" value={requestReason} onChange={(e) => setRequestReason(e.target.value)} required placeholder="e.g. Audit requirement, Vendor assessment..."></textarea>
                                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
                                                <button className="btn btn-outline" onClick={() => setIsLoginModalOpen(false)}>Cancel</button>
                                                <button className="btn btn-blue-pill" onClick={handleRequestAccess} disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit Request"}</button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ── CONTROL EXPLANATION DRAWER ─────────────────────────────────── */}
            {activeControl && (
                <ControlDrawer
                    cat={activeControl.category}
                    activeItem={activeControl.item}
                    onClose={() => setActiveControl(null)}
                />
            )}

            {isViewerOpen && (
                <div className="overlay" style={{ background: "rgba(0,0,0,0.85)", zIndex: 9999 }}>
                    <div className="modal" style={{ maxWidth: "1200px", width: "95vw", height: "90vh", display: "flex", flexDirection: "column", padding: 0 }}>
                        <div className="modal-hd" style={{ background: "white", padding: "12px 24px", borderBottom: "1px solid #eee" }}>
                            {/* <span className="modal-title" style={{ fontWeight: 700 }}>Secure Document Viewer</span> */}
                            <button className="modal-x" onClick={() => {
                                if (viewerBlobUrl) URL.revokeObjectURL(viewerBlobUrl.split('#')[0])
                                setIsViewerOpen(false);
                                setViewerBlobUrl(null);
                            }}>×</button>
                        </div>
                        <div className="modal-body" style={{ flex: 1, padding: 0, overflow: 'hidden', position: 'relative', background: '#525659' }}>
                            <iframe
                                src={viewerBlobUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 'none' }}
                                title="Document Preview"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Logo Zoom Modal */}
            {zoomedLogo && (
                <div className="overlay" onClick={() => setZoomedLogo(null)} style={{ zIndex: 10000 }}>
                    <div className="zoom-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" style={{ top: "-40px", right: "0", color: "white" }} onClick={() => setZoomedLogo(null)}>×</button>
                        <div className="zoom-image-container">
                            {zoomedLogo.logoUrl ? (
                                <img src={zoomedLogo.logoUrl} alt={zoomedLogo.name} className="zoomed-image" />
                            ) : (
                                <div dangerouslySetInnerHTML={{ __html: zoomedLogo.svg }} className="zoomed-svg" />
                            )}
                        </div>
                        <div className="zoom-info">
                            <h3>{zoomedLogo.name}</h3>
                            {zoomedLogo.description && <p>{zoomedLogo.description}</p>}
                            {zoomedLogo.detailUrl && (
                                <a href={zoomedLogo.detailUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: "inline-block", marginTop: "1rem" }}>
                                    View Details
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}