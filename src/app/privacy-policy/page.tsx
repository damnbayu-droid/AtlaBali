
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
    title: 'Privacy Policy - Editions Atlas',
    description: 'Privacy Policy for Editions Atlas. Learn how we collect, use, and protect your data.',
}

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-slate-900 pb-12 pt-32">
                <Navbar />
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-slate-400">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-6 py-16 prose prose-slate">
                <p>At Editions Atlas, accessible from https://editions-atlas.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Editions Atlas and how we use it.</p>

                <h2>Consent</h2>
                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                <h2>Information we collect</h2>
                <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>

                <h2>How we use your information</h2>
                <p>We use the information we collect in various ways, including to:</p>
                <ul>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>

                <h2>Log Files</h2>
                <p>Editions Atlas follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

                <h2>Cookies and Web Beacons</h2>
                <p>Like any other website, Editions Atlas uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            </main>
            <Footer />
        </div>
    )
}
