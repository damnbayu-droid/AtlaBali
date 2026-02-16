'use client'

import { ArrowRight, ChevronDown } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AtlasTicketForm } from '@/components/AtlasTicketForm'

export function HeroActions() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Dialog>
                    <DialogTrigger asChild>
                        <button
                            className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-2xl shadow-amber-500/30 flex items-center gap-2"
                        >
                            Explore Atlas Bali
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md bg-white">
                        <DialogHeader>
                            <DialogTitle>Option Ticket Atlas Bali Beachclub</DialogTitle>
                            <DialogDescription>
                                Fill out the form below to inquire about tickets and VIP reservations.
                            </DialogDescription>
                        </DialogHeader>
                        <AtlasTicketForm />
                    </DialogContent>
                </Dialog>
                <button
                    onClick={() => scrollToSection('visa-services')}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                    Visa & Business Services
                </button>
            </div>

            <button
                onClick={() => scrollToSection('atlas-bali')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
                aria-label="Scroll down"
            >
                <ChevronDown size={32} />
            </button>
        </>
    )
}
