"use client"

import { Navigation } from "@/components/navigation"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string | null
}

async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })

    if (!res.ok) {
      throw new Error("Failed to fetch repositories")
    }

    const repos: GitHubRepo[] = await res.json()

    // Sort by stars and take top 10
    return repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 10)
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return []
  }
}

export default async function ProjectsPage() {
  // Replace 'yourusername' with actual GitHub username
  const repos = await getGitHubRepos("vercel")

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: "#c7c7cc" }}>
              Projects
            </h1>
            <p style={{ color: "#6f717b" }}>Top repositories sorted by stars</p>
          </div>

          <div className="space-y-6">
            {repos.length === 0 ? (
              <p style={{ color: "#6f717b" }}>No repositories found. Update the GitHub username in the code.</p>
            ) : (
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.homepage || repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border p-6 transition-colors group"
                  style={{ borderColor: "rgba(111, 113, 123, 0.2)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(111, 113, 123, 0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(111, 113, 123, 0.2)")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold transition-colors" style={{ color: "#c7c7cc" }}>
                          {repo.name}
                        </h3>
                        {repo.language && (
                          <span className="text-xs" style={{ color: "#6f717b" }}>
                            {repo.language}
                          </span>
                        )}
                      </div>

                      <p className="text-sm" style={{ color: "#6f717b", lineHeight: "calc(1.25/0.875)" }}>
                        {repo.description || "No description available"}
                      </p>

                      <div className="flex items-center gap-4 text-xs" style={{ color: "#6f717b" }}>
                        <span>⭐ {repo.stargazers_count}</span>
                        <span>→</span>
                      </div>
                    </div>

                    <div
                      className="w-32 h-24 flex items-center justify-center text-xs flex-shrink-0"
                      style={{ backgroundColor: "rgba(111, 113, 123, 0.1)", color: "#6f717b" }}
                    >
                      Preview
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
