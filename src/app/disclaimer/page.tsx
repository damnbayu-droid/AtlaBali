
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
    title: 'Disclaimer - Editions Atlas',
    description: 'Disclaimer for Editions Atlas regarding affiliations and third-party services.',
}

export default function Disclaimer() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-slate-900 pb-12 pt-32">
                <Navbar />
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Disclaimer</h1>
                    <p className="text-slate-400">Important Information</p>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-6 py-16 prose prose-slate">
                <h2>Affiliation Disclaimer</h2>
                <p><strong>Editions Atlas</strong> is an independent service provider and informational platform. We are <strong>not affiliated, associated, authorized, endorsed by, or in any way officially connected with</strong> Atlas Beach Fest, Atlas Beach Club, or any of their subsidiaries or affiliates.</p>
                <p>The official website for Atlas Beach Fest can be found at <a href="https://atlasbeachfest.com" target="_blank" rel="nofollow">atlasbeachfest.com</a>.</p>
                <p>The names "Atlas Bali", "Atlas Beach Fest", and "Atlas Beach Club" as well as related names, marks, emblems, and images are registered trademarks of their respective owners.</p>

                <h2>Service Disclaimer</h2>
                <p>We provide visa assistance, company formation, and web design services through our own network and partners. References to "Atlas" in our business name "Editions Atlas" refer to our brand identity and are not intended to confuse or mislead consumers regarding our relationship with the Atlas Beach Fest brand.</p>

                <h2>External Links Disclaimer</h2>
                <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
                <p>We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.</p>
            </main>
            <Footer />
        </div>
    )
}
