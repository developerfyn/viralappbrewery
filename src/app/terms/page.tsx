import Link from "next/link";

export default function TermsPage() {
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
              <Link href="/terms" className="text-white">Terms</Link>
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition">Privacy</Link>
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
              Terms of <span className="gradient-text">Use</span>
            </h1>
            <p className="text-gray-400">Last updated: March 2026</p>
          </div>

          {/* Content */}
          <div className="glass p-8 sm:p-12 rounded-2xl prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the services provided by Viral App Brewery Pte. Ltd. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), including our websites, mobile applications, and related services (collectively, the &quot;Service&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. Your continued use of the Service constitutes your binding acceptance of these Terms of Use, including any changes or modifications. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">User Accounts</h2>
              <p className="text-gray-300 leading-relaxed">
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Acceptable Use</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, or impair the Service. Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Using the Service for any illegal purposes</li>
                <li>Violating intellectual property rights</li>
                <li>Posting obscene or offensive material</li>
                <li>Distributing malware or harmful code</li>
                <li>Impersonating others or creating false accounts</li>
                <li>Attempting to extract data through automated systems without authorization</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of Viral App Brewery Pte. Ltd. and are protected by Singapore and international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">User Content</h2>
              <p className="text-gray-300 leading-relaxed">
                You retain ownership of any content you submit to the Service. By submitting content, you grant us a nonexclusive, perpetual, transferable, fully sub-licensable, royalty-free license to use, reproduce, modify, and display such content in connection with providing and improving the Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Subscriptions and Payments</h2>
              <p className="text-gray-300 leading-relaxed">
                Some features of our Service may require a paid subscription. Subscription fees are billed in advance on a recurring basis. You may cancel your subscription at least 24 hours before the end of the current billing period. In-app purchases are final and non-refundable except where required by applicable law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">AI-Generated Content</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Service may include AI-powered features that generate suggestions, recommendations, or content. You acknowledge that AI-generated outputs are provided as suggestions only and may vary based on input quality and other factors. We do not guarantee the accuracy, completeness, or suitability of AI-generated content.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                VIRAL APP BREWERY PROVIDES THE SERVICE &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED SGD $100.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Singapore. Any disputes arising from these Terms shall be resolved through the Singapore International Arbitration Centre (SIAC) with English as the language of arbitration.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-white">Data Protection</h2>
              <p className="text-gray-300 leading-relaxed">
                We comply with the Personal Data Protection Act 2012 of Singapore (PDPA). For users in the European Economic Area, we also comply with the General Data Protection Regulation (GDPR). For more information, please see our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:fyn@viralappbrewery.com" className="text-primary hover:underline">
                  fyn@viralappbrewery.com
                </a>
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
