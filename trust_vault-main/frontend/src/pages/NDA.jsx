import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

export default function NDA() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [fullName, setFullName] = useState("")
    const [debouncedFullName, setDebouncedFullName] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const logoUrl = "https://darwinbox.com/wp-content/themes/darwinbox/assets/img/logo.png"

    const params = new URLSearchParams(window.location.search)
    const docIds = params.get("docIds") || params.get("docId") || ""

    useEffect(() => {
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
            const parsed = JSON.parse(storedUser)
            setUser(parsed)
            if (parsed.firstName && parsed.lastName) {
                const initialName = `${parsed.firstName} ${parsed.lastName}`
                setFullName(initialName)
                setDebouncedFullName(initialName)
            }
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedFullName(fullName)
        }, 800)
        return () => clearTimeout(timer)
    }, [fullName])

    const submit = async (e) => {
        e.preventDefault()
        if (!user) return alert("User not found")
        if (!fullName.trim()) return alert("Please enter your full name for the legal e-signature")
        if (isSubmitting) return

        setIsSubmitting(true)
        try {
            await api.post("/nda/submit", {
                email: user.email,
                fullName: fullName,
                docIds: docIds
            })

            alert("NDA submitted successfully!")
            if (docIds) {
                navigate(`/?docIds=${docIds}&step=4`)
            } else {
                navigate("/")
            }
        } catch (err) {
            console.error(err)
            alert("Failed to submit NDA. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const mockDocuSign = () => {
        alert("Redirecting to DocuSign... (Mock Agreement)")
        setTimeout(() => {
            alert("DocuSign signature captured. You can now submit.")
            // Real integration would callback here
        }, 1500)
    }

    return (
        <div className="trust-wrapper min-h-screen bg-gray-50 flex flex-col">
            {/* HEADER */}
            <header className="header">
                <div className="header-inner">
                    <div className="logo">
                        <img src={logoUrl} alt="Darwinbox" className="logo-img" />
                        <div className="logo-divider"></div>
                        <span className="logo-tag">Trust Center</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex justify-center py-10 px-6">
                <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    <div className="bg-navy p-8 text-center text-white">
                        <h1 className="text-3xl font-bold mb-2">Sign NDA</h1>
                        <p className="text-blue-100 opacity-80 text-sm">Please review and provide your E-signature to proceed.</p>
                    </div>

                    <div className="p-8">
                        {/* DOCUMENT PREVIEW */}
                        <div className="mb-10">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-gray-800 text-lg">Document Preview</h3>
                                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">Confidential</span>
                            </div>
                            <div className="border-2 border-gray-100 rounded-xl overflow-hidden bg-gray-50 shadow-inner">
                                <iframe
                                    src={`${process.env.REACT_APP_API_URL}/nda/preview?email=${user?.email}&fullName=${encodeURIComponent(debouncedFullName)}&docIds=${docIds}`}
                                    width="100%"
                                    height="700"
                                    title="NDA Document"
                                    className="border-none"
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <div className="mb-8">
                                <h3 className="font-bold text-gray-800 text-lg mb-1">Accept & Sign</h3>
                                <p className="text-sm text-gray-500">Please provide your legal E-signature below</p>
                            </div>

                            <form onSubmit={submit}>
                                <div className="flex flex-col items-center gap-6">
                                    <div className="w-full max-w-md">
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name (Legal E-Signature)</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-400 focus:outline-none transition-all shadow-sm"
                                            placeholder="Enter your full name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                        />
                                        <p className="mt-3 text-[11px] text-gray-400 text-center italic">
                                            By typing your name above, you agree that this constitutes your legal signature.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 flex flex-col items-center gap-4">
                                    <button
                                        type="submit"
                                        className="btn btn-blue-pill py-3 px-12 text-lg justify-center w-full md:w-auto shadow-lg shadow-blue-200"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Submitting..." : "Sign & Request Access"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}