"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="orb orb-purple w-96 h-96 -top-20 -left-20" />
      <div className="orb orb-cyan w-80 h-80 top-40 right-10" style={{ animationDelay: "2s" }} />
      <div className="orb orb-purple w-64 h-64 bottom-20 left-1/3" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          We Build Apps That
          <span className="gradient-text block">Go Viral</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-slide-up">
          Web & Mobile Development for Singapore Small Businesses.
          Modern, fast, and affordable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <a
            href="#portfolio"
            className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition"
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
