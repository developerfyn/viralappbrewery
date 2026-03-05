"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            VIRAL APP BREWERY
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-gray-300 hover:text-white transition">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-white transition">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white transition">
              Terms
            </Link>
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition">
              Privacy
            </Link>
            <Link href="/support" className="text-gray-300 hover:text-white transition">
              Support
            </Link>
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="#services" className="block py-2 text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="#portfolio" className="block py-2 text-gray-300 hover:text-white">
              Portfolio
            </Link>
            <Link href="/contact" className="block py-2 text-gray-300 hover:text-white">
              Contact
            </Link>
            <Link href="/terms" className="block py-2 text-gray-300 hover:text-white">
              Terms
            </Link>
            <Link href="/privacy-policy" className="block py-2 text-gray-300 hover:text-white">
              Privacy
            </Link>
            <Link href="/support" className="block py-2 text-gray-300 hover:text-white">
              Support
            </Link>
            <Link href="#contact" className="block py-2 text-primary">
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
