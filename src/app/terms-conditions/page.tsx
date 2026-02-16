
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
    title: 'Terms & Conditions - Editions Atlas',
    description: 'Terms and Conditions for using Editions Atlas services and website.',
}

export default function TermsConditions() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-slate-900 pb-12 pt-32">
                <Navbar />
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
                    <p className="text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-6 py-16 prose prose-slate">
                <h2>1. Agreement to Terms</h2>
                <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Editions Atlas ("we," "us," or "our"), concerning your access to and use of the https://editions-atlas.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>

                <h2>2. Intellectual Property Rights</h2>
                <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>

                <h2>3. User Representations</h2>
                <p>By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.</p>

                <h2>4. Disclaimer</h2>
                <p>The site is provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

                <h2>5. Limitation of Liability</h2>
                <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.</p>
            </main>
            <Footer />
        </div>
    )
}
