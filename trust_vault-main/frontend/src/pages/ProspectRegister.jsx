import { useState, useRef, useEffect } from "react"
import api from "../services/api"
import { useNavigate } from "react-router-dom"
import SignatureCanvas from "react-signature-canvas"

export default function ProspectRegister() {
    const [step, setStep] = useState(1) // 1: Email, 2: OTP, 3: NDA, 4: Success
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [user, setUser] = useState(null)
    const sigRef = useRef()
    const navigate = useNavigate()
    const logoUrl = "https://darwinbox.com/wp-content/themes/darwinbox/assets/img/logo.png"

    // Step 1: Send OTP
    async function sendOTP() {
        if (!email) return setError("Please enter your email")
        setLoading(true)
        setError("")
        try {
            await api.post("/auth/send-otp", { email, source: "prospect" })
            setStep(2)
        } catch (err) {
            setError(err.response?.data?.error || "Failed to send OTP")
        } finally {
            setLoading(false)
        }
    }

    // Step 2: Verify OTP
    async function verifyOTP() {
        if (!otp) return alert("Please enter the OTP")
        setLoading(true)
        try {
            const res = await api.post("/auth/verify-otp", { email, otp })
            const userData = res.data.user
            setUser(userData)
            localStorage.setItem("user", JSON.stringify(userData))

            if (userData.ndaSigned) {
                setStep(4)
            } else {
                navigate("/nda")
            }
        } catch (err) {
            alert("Invalid or expired OTP")
        } finally {
            setLoading(false)
        }
    }

    // Step 3: Sign NDA
    async function submitNDA() {
        if (!sigRef.current || sigRef.current.isEmpty()) {
            return alert("Please provide your signature")
        }

        setLoading(true)
        const signature = sigRef.current.getTrimmedCanvas().toDataURL("image/png")

        try {
            await api.post("/nda/submit", {
                email,
                signature
            })

            // Update local user state
            const updatedUser = { ...user, ndaSigned: true }
            setUser(updatedUser)
            localStorage.setItem("user", JSON.stringify(updatedUser))

            setStep(4)
        } catch (err) {
            console.error(err)
            alert("Failed to submit NDA")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="trust-wrapper min-h-screen flex flex-col bg-gray-50">
            {/* HEADER */}
            <header className="header">
                <div className="header-inner">
                    <a className="logo" href="/">
                        <img src={logoUrl} alt="Darwinbox" className="logo-img" />
                        <div className="logo-divider"></div>
                        <span className="logo-tag">Trust Center</span>
                    </a>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center py-20">
                <div className="w-full px-6" style={{ maxWidth: '40%' }}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

                        {/* Progress Stepper */}

                        {step === 1 && (
                            <div className="animate-fade-in">
                                <div className="text-center mb-8">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Prospect Registration</h1>
                                    <p className="text-gray-500">Request access to Darwinbox Trust Center as a potential partner or customer.</p>
                                </div>
                                {error && <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-sm">{error}</div>}
                                <div className="space-y-6">
                                    <div className="form-group">
                                        <label className="form-label">Work Email</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="name@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button className="btn btn-blue-pill w-full justify-center py-4 text-lg" onClick={sendOTP} disabled={loading}>
                                        {loading ? "Sending..." : "Verify Email & Continue"}
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="animate-fade-in">
                                <div className="text-center mb-8">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Email</h1>
                                    <p className="text-gray-500">We've sent a 6-digit code to <strong>{email}</strong></p>
                                </div>
                                <div className="space-y-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-input text-center text-2xl tracking-widest font-bold"
                                            placeholder="000000"
                                            maxLength="6"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                        />
                                    </div>
                                    <button className="btn btn-blue-pill w-full justify-center py-4 text-lg" onClick={verifyOTP} disabled={loading}>
                                        {loading ? "Verifying..." : "Verify Code"}
                                    </button>
                                    <button className="w-full text-sm font-semibold  hover:underline" onClick={() => setStep(1)}>
                                        Change email address
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="animate-fade-in">
                                <div className="text-center mb-8">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign NDA</h1>
                                    <p className="text-gray-500">Please review and sign the Non-Disclosure Agreement to proceed.</p>
                                </div>

                                <div className="mb-8 border rounded-xl overflow-hidden shadow-inner bg-gray-50 h-[300px]">
                                    <iframe src="/nda-template.pdf" width="100%" height="100%" title="NDA" />
                                </div>

                                <div className="space-y-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Draw your signature below:</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 p-2">
                                        <SignatureCanvas
                                            ref={sigRef}
                                            penColor="black"
                                            canvasProps={{
                                                width: 500,
                                                height: 150,
                                                className: "w-full h-full bg-white rounded-lg"
                                            }}
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="btn btn-outline flex-1 justify-center py-3" onClick={() => sigRef.current.clear()}>Clear</button>
                                        <button className="btn btn-blue-pill flex-1 justify-center py-3" onClick={submitNDA} disabled={loading}>
                                            {loading ? "Submitting..." : "Sign & Request Access"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="animate-fade-in text-center py-8">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Submitted!</h1>
                                <p className="text-gray-500 mb-10 max-w-sm mx-auto">
                                    Your NDA has been signed and your registration is pending administrator review.
                                    We'll notify you once your account is approved.
                                </p>
                                <button className="btn btn-blue-pill px-10 py-3" onClick={() => navigate("/")}>
                                    Go to Dashboard
                                </button>
                            </div>
                        )}

                    </div>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        <p>Already a client? <a href="/login" className="text-blue-600 font-semibold hover:underline">Client Login</a></p>
                    </div>
                </div>
            </main>
        </div>
    )
}
