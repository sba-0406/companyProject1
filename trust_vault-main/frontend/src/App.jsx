import { BrowserRouter, Routes, Route } from "react-router-dom"


import Home from "./pages/Home"
import NDA from "./pages/NDA"
import AdminDashboard from "./pages/AdminDashboard"
// import Domains from "./pages/Domains"
import Widgets from "./pages/Widgets"
import UploadDocs from "./pages/UploadDocs"
import ProspectRegister from "./pages/ProspectRegister"
import Admins from "./pages/Admins"
import NDAManagement from "./pages/NDAManagement"

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login />} /> */}

                <Route path="/nda" element={<NDA />} />

                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/ndas" element={<NDAManagement />} />

                {/* <Route path="/domains" element={<Domains />} /> */}

                <Route path="/widgets" element={<Widgets />} />

                <Route path="/upload" element={<UploadDocs />} />

                <Route path="/prospect-register" element={<ProspectRegister />} />

                <Route path="/admins" element={<Admins />} />

            </Routes>

        </BrowserRouter>
    )
}

export default App