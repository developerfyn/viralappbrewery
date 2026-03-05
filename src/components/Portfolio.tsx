"use client";

import Image from "next/image";

const projects = [
  {
    title: "FitnessGO",
    tag: "Mobile App",
    description: "Calorie tracking and intermittent fasting app for iOS",
    image: "/fitnessgo.png",
    color: "from-primary to-purple-600",
    link: "https://fitnessgo.io/",
  },
  {
    title: "MyWeddingDress.app",
    tag: "Web Application",
    description: "AI-powered virtual wedding dress try-on experience",
    image: "/myweddingdress.png",
    color: "from-accent to-blue-600",
    link: "https://myweddingdress.app/",
  },
  {
    title: "Ledgerly",
    tag: "Client Website",
    description: "Professional website for Singapore freelance accounting services",
    image: "/ledgerly.png",
    color: "from-emerald-500 to-green-600",
    link: "https://ledgerly-sg.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real projects. Real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl glass card-glow"
            >
              {/* Project image */}
              <div className={`h-[500px] relative bg-gradient-to-br ${project.color} overflow-hidden`}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/50 text-sm">Screenshot</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-primary mb-2 block">
                  {project.tag}
                </span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>

                <div className="mt-4 flex items-center text-primary text-sm opacity-0 group-hover:opacity-100 transition">
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
