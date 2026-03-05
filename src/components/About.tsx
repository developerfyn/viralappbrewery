"use client";

const stats = [
  { value: "5+", label: "Apps Shipped" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "SG", label: "Based & Operating" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Built in <span className="gradient-text">Singapore</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              We&apos;re a Singapore-based indie studio obsessed with building apps people actually use.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              No bloated teams, no endless meetings—just fast, quality development.
              We understand local businesses because we are one.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center glass p-6 rounded-2xl">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
