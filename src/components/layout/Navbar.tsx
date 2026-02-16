'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-3">
                        <div className={`font-semibold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                            <span className="font-light">EDITIONS</span>
                            <span className="font-bold ml-1">ATLAS</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center">
                        <a
                            href="https://wa.me/6285727041992"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/25"
                        >
                            Contact Us
                        </a>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg border-t">
                    <div className="px-6 py-4">
                        <a
                            href="https://wa.me/6285727041992"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
