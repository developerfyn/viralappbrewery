import Link from "next/link";

export default function SupportPage() {
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
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition">Privacy</Link>
              <Link href="/support" className="text-white">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Support</span>
            </h1>
            <p className="text-gray-400 text-lg">
              We&apos;re here to help. Reach out and we&apos;ll get back to you within 24-48 hours.
            </p>
          </div>

          {/* Support Card */}
          <div className="glass p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Email Support</h2>
            <p className="text-gray-400 mb-6">
              For any questions, issues, or feedback about our apps or services, please email us directly.
            </p>

            <a
              href="mailto:fyn@viralappbrewery.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition transform hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              fyn@viralappbrewery.com
            </a>

            <p className="text-gray-500 text-sm mt-6">
              Response time: Within 24-48 hours
            </p>
          </div>

          {/* Additional Links */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/terms" className="glass p-6 rounded-2xl hover:border-primary/50 transition group">
              <h3 className="font-semibold mb-2 group-hover:text-primary transition">Terms of Use</h3>
              <p className="text-gray-400 text-sm">Read our terms and conditions</p>
            </Link>
            <Link href="/privacy-policy" className="glass p-6 rounded-2xl hover:border-primary/50 transition group">
              <h3 className="font-semibold mb-2 group-hover:text-primary transition">Privacy Policy</h3>
              <p className="text-gray-400 text-sm">Learn how we protect your data</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-dark-700 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Viral App Brewery. Singapore. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
