import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function AdminLayout({ children, title, description }) {
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        navigate("/")
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const superAdmins = (process.env.REACT_APP_SUPER_ADMIN_EMAILS || "").split(",").map(e => e.trim().toLowerCase())
    const isSuper = superAdmins.includes(user.email?.toLowerCase())
    const perms = user.permissions || {}

    const navItems = [
        { label: "Dashboard", path: "/admin", active: location.pathname === "/admin", show: isSuper || perms.approveRequests },
        { label: "Signed NDAs", path: "/admin/ndas", active: location.pathname === "/admin/ndas", show: isSuper || perms.approveRequests },
        { label: "Security Controls", path: "/widgets", active: location.pathname === "/widgets", show: isSuper || perms.manageWidgets },
        { label: "Manage Admins", path: "/admins", active: location.pathname === "/admins", show: isSuper || perms.manageAdmins },
        { label: "Upload Docs", path: "/upload", active: location.pathname === "/upload", show: isSuper || perms.uploadDocs }
    ].filter(item => item.show)

    // Authorization Guard
    useEffect(() => {
        if (!user.email) {
            navigate("/")
            return
        }
        const currentPathAllowed = navItems.some(item => item.path === location.pathname)
        if (!currentPathAllowed && !isSuper) {
            // Redirect to first available or home
            if (navItems.length > 0) {
                navigate(navItems[0].path)
            } else {
                navigate("/")
            }
        }
    }, [location.pathname, user.email, navItems.length, isSuper, navigate])

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <div className="admin-sidebar-logo">
                        Trust Admin
                    </div>
                </div>

                <nav className="admin-nav">
                    {navItems.map(item => (
                        <button
                            key={item.label}
                            className={`admin-nav-item ${item.active ? 'active' : ''}`}
                            onClick={() => navigate(item.path)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="admin-sidebar-footer">
                    <button className="admin-nav-item" onClick={() => navigate("/")}>
                        ← View Center
                    </button>
                    <button className="admin-nav-item text-red-600" onClick={handleLogout} style={{ marginTop: '8px' }}>
                        Logout
                    </button>
                </div>
            </aside>

            <main className="admin-main">
                <header className="admin-page-header">
                    <h1 className="admin-page-title">{title}</h1>
                    {description && <p className="admin-page-desc">{description}</p>}
                </header>

                <div className="admin-content">
                    {children}
                </div>
            </main>
        </div>
    )
}
