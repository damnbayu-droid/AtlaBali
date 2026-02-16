import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <div className="font-semibold text-xl tracking-tight mb-4">
                            <span className="font-light">EDITIONS</span>
                            <span className="font-bold ml-1">ATLAS</span>
                        </div>
                        <p className="text-slate-400 mb-6 max-w-md">
                            Your premier gateway to Bali's lifestyle and comprehensive business services in Indonesia. Discover exclusive experiences, streamline your visa applications, and establish your company with expert guidance.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#atlas-bali" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Atlas Bali
                                </Link>
                            </li>
                            <li>
                                <Link href="/#visa-services" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Visa Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/#company-formation" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Company Formation
                                </Link>
                            </li>
                            <li>
                                <Link href="/#web-design" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Web Design
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Disclaimer
                                </Link>
                            </li>
                            <li className="pt-4 mt-4 border-t border-slate-800">
                                <a href="mailto:contact@editions-atlas.com" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                                    contact@editions-atlas.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800">
                    <p className="text-slate-500 text-xs">
                        <strong>Disclaimer:</strong> This website is not affiliated with, endorsed by, or connected to Atlas Bali or any official Atlas entities. All links to external websites are provided for informational purposes only. We do not claim ownership or representation of any third-party services mentioned.
                    </p>
                </div>
            </div>
        </footer>
    )
}
