"use client"

import { Navigation } from "@/components/navigation"

const workExperience = [
  {
    id: 1,
    title: "Senior Backend Engineer",
    company: "Company Name",
    period: "2022 - Present",
    description:
      "Building scalable backend systems and APIs. Working with Node.js, PostgreSQL, and cloud infrastructure.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Previous Company",
    period: "2020 - 2022",
    description: "Developed web applications using React, Next.js, and various backend technologies.",
  },
]

const certificates = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    link: "https://aws.amazon.com/certification/",
  },
  {
    id: 2,
    name: "Professional Certificate in AI",
    issuer: "Coursera",
    year: "2022",
    link: "https://www.coursera.org",
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="space-y-16">
          {/* Work Experience Section */}
          <section>
            <h1 className="text-4xl font-bold mb-12" style={{ color: "#c7c7cc" }}>
              Experience
            </h1>

            <div className="space-y-10">
              {workExperience.map((job) => (
                <div key={job.id} className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: "#c7c7cc" }}>
                        {job.title}
                      </h3>
                      <p style={{ color: "#6f717b" }}>{job.company}</p>
                    </div>
                    <span className="text-sm whitespace-nowrap" style={{ color: "#6f717b" }}>
                      {job.period}
                    </span>
                  </div>
                  <p style={{ color: "#c7c7cc", lineHeight: "calc(1.25/0.875)" }}>{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#c7c7cc" }}>
              Certificates
            </h2>

            <div className="space-y-6">
              {certificates.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border p-5 transition-colors group"
                  style={{ borderColor: "rgba(111, 113, 123, 0.2)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(111, 113, 123, 0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(111, 113, 123, 0.2)")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold transition-colors" style={{ color: "#c7c7cc" }}>
                        {cert.name}
                      </h3>
                      <p className="text-sm" style={{ color: "#6f717b" }}>
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm" style={{ color: "#6f717b" }}>
                        {cert.year}
                      </span>
                      <div className="text-xs mt-1" style={{ color: "#6f717b" }}>
                        →
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
