'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowRight, ExternalLink, Menu, X, Shield, FileCheck, Clock, ChevronDown, Sun, Music, Sparkles, Calendar, Building2, Users, Globe, FileText, Briefcase, Monitor, Zap, CodeXml } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AtlasTicketForm } from '@/components/AtlasTicketForm'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const visaServices = [
    { id: 1, name: 'B1 Visa on Arrival / Extension', description: 'Tourist visa for short stays with extension options', popular: true, url: 'https://indonesianvisas.com/services/B1' },
    { id: 2, name: 'C1 Visit Visa', description: 'Single entry visa for tourism or family visits', url: 'https://indonesianvisas.com' },
    { id: 3, name: 'C2 Business Visa', description: 'For business meetings and commercial activities', url: 'https://indonesianvisas.com' },
    { id: 4, name: 'C12 Pre-Investment Visa', description: 'For exploring investment opportunities', url: 'https://indonesianvisas.com' },
    { id: 5, name: 'D1 Tourist Visa', description: 'Extended tourist visa for longer stays', url: 'https://indonesianvisas.com' },
    { id: 6, name: 'D2 Business Visa', description: 'Multiple entry business visa', url: 'https://indonesianvisas.com' },
    { id: 7, name: 'D12 Pre-Investment Visa', description: 'Long-term investment exploration visa', url: 'https://indonesianvisas.com' },
    { id: 8, name: 'E33G Digital Nomad Visa', description: 'Work remotely from Indonesia legally', popular: true, url: 'https://indonesianvisas.com' },
    { id: 9, name: 'E28A Investment KITAS', description: 'Residence permit for investors', popular: true, url: 'https://indonesianvisas.com' },
    { id: 10, name: 'Custom Visa Services', description: 'Tailored solutions for unique situations', url: 'https://indonesianvisas.com' },
  ]

  const businessServices = [
    { id: 1, name: 'Local PT Company', description: 'Indonesian-owned company formation with local partner arrangements', icon: Users },
    { id: 2, name: 'Virtual Office', description: 'Professional business address and mail handling services', icon: Globe },
    { id: 3, name: 'NIB & OSS Licensing', description: 'Business identification and online single submission registration', icon: FileText },
    { id: 4, name: 'KBLI Registration', description: 'Business classification code registration and compliance', icon: Briefcase },
    { id: 5, name: 'Tax & Compliance', description: 'Ongoing tax filing and regulatory compliance services', icon: Shield },
  ]

  const webServices = [
    { name: 'Corporate Website', price: 'From $500', description: 'Professional websites that establish credibility and showcase your business', icon: Monitor },
    { name: 'Landing Page', price: 'From $300', description: 'High-converting pages designed to capture leads and drive action', icon: Zap },
    { name: 'Business System', price: 'Custom Quote', description: 'Complex business systems and applications tailored to your needs', icon: CodeXml },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <div className={`font-semibold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                <span className="font-light">EDITIONS</span>
                <span className="font-bold ml-1">ATLAS</span>
              </div>
            </a>

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2938&auto=format&fit=crop"
            alt="Atlas Beach Fest Bali Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-amber-300 text-sm font-medium tracking-wider uppercase mb-8">
            Premium Lifestyle Destination
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            <span className="font-light">Atlas Bali</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              World-Class Experience
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Beach, Music, Events, and Premium Experiences in Bali. Your gateway to Indonesia's most exclusive lifestyle destination.
          </p>

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

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm mb-4">Trusted Services</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/70">
              <span className="text-sm font-medium">Indonesian Visas</span>
              <span className="w-1 h-1 bg-white/30 rounded-full hidden sm:block" />
              <span className="text-sm font-medium">Company Formation</span>
              <span className="w-1 h-1 bg-white/30 rounded-full hidden sm:block" />
              <span className="text-sm font-medium">Web Development</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('atlas-bali')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Atlas Bali Section */}
      <section id="atlas-bali" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-sm font-medium tracking-wider uppercase mb-4">
              Lifestyle Destination
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Atlas Bali</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A world-class lifestyle and entertainment destination. Experience the perfect blend of beach culture, music, and premium hospitality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2940&auto=format&fit=crop"
                  alt="Atlas Bali Beach Club"
                  width={800}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full mb-2">
                    Featured
                  </span>
                  <h3 className="text-2xl font-bold text-white">Atlas Beach Fest</h3>
                  <p className="text-white/80 text-sm">Bali's Premier Entertainment Venue</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">World-Class Events</p>
                    <p className="text-sm text-slate-500">International Artists</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Experience Bali's Most Iconic Destination</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Atlas Bali represents the pinnacle of entertainment and lifestyle in Southeast Asia. With stunning beachfront views, world-renowned DJs, exceptional dining, and an atmosphere that defines modern Bali, Atlas is where unforgettable memories are made.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sun className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Beach Club</h4>
                    <p className="text-sm text-slate-500">World-class beachfront experience with premium amenities</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Music className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Live Events</h4>
                    <p className="text-sm text-slate-500">International artists and unforgettable performances</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Premium Dining</h4>
                    <p className="text-sm text-slate-500">Exquisite culinary experiences by renowned chefs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Exclusive Events</h4>
                    <p className="text-sm text-slate-500">Private parties and corporate gatherings</p>
                  </div>
                </div>
              </div>

              <a
                href="https://indonesianvisas.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors group"
                aria-label="Visit Atlas Bali Visa Services"
              >
                Visit Atlas Bali
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-100">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-2">
                150K+
              </p>
              <p className="text-sm text-slate-500">Annual Visitors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-2">
                200+
              </p>
              <p className="text-sm text-slate-500">Events Per Year</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-2">
                50+
              </p>
              <p className="text-sm text-slate-500">International Artists</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-2">
                #1
              </p>
              <p className="text-sm text-slate-500">Beach Club in Bali</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Services Section */}
      <section id="visa-services" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium tracking-wider uppercase mb-4">
              Immigration Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Indonesian Visa Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Fast, Legal, and Reliable visa processing. Navigate Indonesia's immigration requirements with confidence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-slate-600">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">100% Legal Compliance</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <FileCheck className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Transparent Process</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Fast Processing</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visaServices.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border ${service.popular ? 'border-amber-200' : 'border-transparent'
                  }`}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between">
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://indonesianvisas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              View All Visa Services
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Company Formation Section */}
      <section id="company-formation" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium tracking-wider uppercase mb-4">
              Business Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Company Formation in Indonesia</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Start your business journey in Indonesia with professional company registration and corporate services.
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 mb-12 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Featured Service
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  PT PMA (Foreign-Owned Company)
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Establish a fully foreign-owned company in Indonesia with 100% ownership rights. The most popular choice for international investors and entrepreneurs.
                </p>
                <a
                  href="https://balihelp.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors group"
                >
                  Start Your Company
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Full foreign ownership allowed',
                  'Access to all business sectors',
                  'Professional registration support',
                  'Complete legal compliance',
                  'Tax registration included',
                  'Bank account assistance',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="w-5 h-5 bg-emerald-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    </div>
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Additional Business Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {businessServices.map((service) => {
                const Icon = service.icon
                return (
                  <a
                    key={service.id}
                    href="https://balihelp.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">{service.name}</h4>
                    <p className="text-sm text-slate-500">{service.description}</p>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://balihelp.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              View All Company Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Web Design Section */}
      <section id="web-design" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium tracking-wider uppercase mb-4">
                Digital Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Website Design & Development</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Professional web development services for businesses in Indonesia and beyond. We create stunning, high-performance websites that drive results.
              </p>

              <div className="space-y-4 mb-8">
                {webServices.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                    >
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-white">{service.name}</h4>
                          <span className="text-sm text-purple-400 font-medium">{service.price}</span>
                        </div>
                        <p className="text-sm text-white/60">{service.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <a
                href="https://indodesign.website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                Order a Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop"
                  alt="Web Development"
                  width={800}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Modern Web Solutions</h3>
                  <p className="text-white/80">From concept to deployment, we handle it all</p>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-purple-600 p-4 rounded-xl shadow-xl hidden lg:block">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">100+</p>
                  <p className="text-sm text-white/80">Projects Delivered</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-amber-500 p-4 rounded-xl shadow-xl hidden lg:block">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">98%</p>
                  <p className="text-sm text-white/80">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <button onClick={() => scrollToSection('atlas-bali')} className="text-sm text-slate-400 hover:text-white transition-colors">
                    Atlas Bali
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('visa-services')} className="text-sm text-slate-400 hover:text-white transition-colors">
                    Visa Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('company-formation')} className="text-sm text-slate-400 hover:text-white transition-colors">
                    Company Formation
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('web-design')} className="text-sm text-slate-400 hover:text-white transition-colors">
                    Web Design
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Disclaimer
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

      {/* Domain Links Bar */}
      <div className="bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Editions Atlas. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <a
                href="https://indonesianvisas.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                indonesianvisas.com
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://balihelp.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                balihelp.id
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://indodesign.website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                indodesign.website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
