import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold gradient-text">
              VIRAL APP BREWERY
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition">Terms</Link>
              <Link href="/privacy-policy" className="text-white">Privacy</Link>
              <Link href="/support" className="text-gray-300 hover:text-white transition">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-gray-400">Last updated: March 2026</p>
          </div>

          {/* Content */}
          <div className="glass p-8 sm:p-12 rounded-2xl prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                Viral App Brewery Pte. Ltd. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our websites, mobile applications, and services.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We comply with the Personal Data Protection Act 2012 of Singapore (PDPA) and apply EU General Data Protection Regulation (GDPR) standards where applicable.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Data Controller</h2>
              <p className="text-gray-300 leading-relaxed">
                Viral App Brewery Pte. Ltd., Singapore<br />
                Email: <a href="mailto:fyn@viralappbrewery.com" className="text-primary hover:underline">fyn@viralappbrewery.com</a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We may collect the following types of information:</p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Account Information</h3>
              <p className="text-gray-300">Name, email address, user ID, and account credentials.</p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Device Information</h3>
              <p className="text-gray-300">Device identifiers, operating system, IP address, and session information.</p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Usage Data</h3>
              <p className="text-gray-300">How you interact with our services, features used, and engagement metrics.</p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Transaction Data</h3>
              <p className="text-gray-300">Subscription status, payment records, and purchase history.</p>

              <h3 className="text-lg font-semibold text-white mt-6 mb-2">Communications</h3>
              <p className="text-gray-300">Support inquiries, feedback, and email communications.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To process transactions and manage subscriptions</li>
                <li>To communicate with you about updates and support</li>
                <li>To improve our services and develop new features</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Legal Bases for Processing</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><strong>Consent:</strong> Account creation, marketing communications</li>
                <li><strong>Contract Performance:</strong> Service delivery, subscription processing</li>
                <li><strong>Legitimate Interests:</strong> Service improvement, fraud prevention</li>
                <li><strong>Legal Obligations:</strong> Regulatory compliance, authority requests</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Data Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We may share your data with:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Service providers who assist in operating our services</li>
                <li>Payment processors for subscription management</li>
                <li>Analytics providers to improve our services</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We do NOT sell your personal data to third parties or share it with advertisers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Data Retention</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-gray-300 text-sm">
                  <thead>
                    <tr className="border-b border-dark-600">
                      <th className="text-left py-2 pr-4">Data Type</th>
                      <th className="text-left py-2">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-dark-700">
                      <td className="py-2 pr-4">Account data</td>
                      <td className="py-2">Until deletion or 3 years inactivity</td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="py-2 pr-4">Transaction data</td>
                      <td className="py-2">7 years (tax/legal compliance)</td>
                    </tr>
                    <tr className="border-b border-dark-700">
                      <td className="py-2 pr-4">Analytics data</td>
                      <td className="py-2">2 years (anonymized after)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Support communications</td>
                      <td className="py-2">3 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data, including encryption in transit (HTTPS/TLS), access controls, and secure storage practices. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your data may be transferred to and processed in countries outside Singapore. For EEA users, we ensure compliance with GDPR through adequacy decisions or Standard Contractual Clauses.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Data portability (receive data in machine-readable format)</li>
                <li>Object to direct marketing</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise your rights, contact us at <a href="mailto:fyn@viralappbrewery.com" className="text-primary hover:underline">fyn@viralappbrewery.com</a>. We will respond within one month.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Children&apos;s Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for users under 18. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Data Protection Authorities</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong>Singapore:</strong><br />
                Personal Data Protection Commission (PDPC)<br />
                Website: <a href="https://www.pdpc.gov.sg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">pdpc.gov.sg</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                For any questions about this Privacy Policy, please contact:<br /><br />
                Viral App Brewery Pte. Ltd.<br />
                Data Protection Officer<br />
                Email: <a href="mailto:fyn@viralappbrewery.com" className="text-primary hover:underline">fyn@viralappbrewery.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-dark-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Viral App Brewery. Singapore. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
