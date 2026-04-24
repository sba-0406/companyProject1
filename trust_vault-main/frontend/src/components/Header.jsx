export default function Header() {

    return (

        <header className="bg-white border-b border-trustBorder">

            <div className="container flex justify-between items-center py-4">

                <div className="text-xl font-semibold">
                    Trust Vault
                </div>

                <nav className="flex gap-6 text-sm text-trustMuted">

                    <a href="/">Home</a>
                    <a href="#">Compliance</a>
                    <a href="#">Security</a>
                    <a href="#">Resources</a>

                </nav>

            </div>

        </header>

    )
}