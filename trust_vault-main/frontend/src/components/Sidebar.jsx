import { Link } from "react-router-dom"
import "../App.css"

export default function Sidebar() {

  return (

    <div className="layout">

      <div className="sidebar">

        <h2 className="logo">Trust Center</h2>

        <nav className="nav">

          <Link to="/dashboard">Dashboard</Link>

          {/* <Link to="/domains">Manage Domains</Link> */}

          <Link to="/widgets">Widget Controls</Link>

          <Link to="/upload">Upload Docs</Link>

        </nav>

      </div>

    </div>

  )

}