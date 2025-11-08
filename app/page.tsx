"use client"

import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left side - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-[#6f717b]/10 flex items-center justify-center">
              <span className="text-[#6f717b] text-sm">Portrait Image</span>
            </div>
          </div>

          {/* Right side - Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4" style={{ color: "#c7c7cc" }}>
                Your Name
              </h1>
              <p className="text-xl" style={{ color: "#6f717b" }}>
                Backend & AI Engineer
              </p>
            </div>

            <div className="space-y-4 max-w-xl" style={{ color: "#c7c7cc", lineHeight: "calc(1.25/0.875)" }}>
              <p>
                I'm a software engineer focused on building scalable backend systems and AI-powered applications. I
                believe in writing clean, maintainable code that solves real problems.
              </p>
              <p style={{ color: "#6f717b" }}>
                Currently working on innovative projects at the intersection of web development and artificial
                intelligence. Passionate about open source and building tools that empower developers.
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "#6f717b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c7c7cc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6f717b")}
              >
                GitHub →
              </a>
              <a
                href="mailto:you@example.com"
                className="transition-colors"
                style={{ color: "#6f717b" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c7c7cc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6f717b")}
              >
                Email →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
