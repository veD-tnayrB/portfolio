import { RepositoryList } from "@/components/projects/repository";
import type { IGitHubRepository } from "@/components/projects/types";

async function getGitHubRepositories(
  username: string,
): Promise<IGitHubRepository[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=100`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repositories: IGitHubRepository[] = await response.json();

    const featuredRepositoryIds = [
      "saasstarter",
      "administrator",
      "freemarket",
      "starflix",
      "courseslive",
    ];

    const toKey = (value: string) =>
      value.toLowerCase().replace(/[^a-z0-9]/g, "");

    const featuredRepositories = repositories
      .filter((repository) => {
        const repositoryKey = toKey(repository.name);
        return featuredRepositoryIds.includes(repositoryKey);
      })
      .sort((first, second) => {
        const firstIndex = featuredRepositoryIds.indexOf(toKey(first.name));
        const secondIndex = featuredRepositoryIds.indexOf(toKey(second.name));
        return firstIndex - secondIndex;
      });

    return featuredRepositories;
  } catch (error) {
    console.error("Error fetching GitHub repositories", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const repositories = await getGitHubRepositories("veD-tnayrB");
  const hasRepositories = repositories.length > 0;

  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-5 pb-20 sm:px-6 lg:px-8">
        {hasRepositories ? (
          <RepositoryList repositories={repositories} />
        ) : (
          <section className="border-border/50 bg-card/30 space-y-4 rounded-3xl border p-8 text-center shadow-lg shadow-black/10">
            <h1 className="text-foreground text-2xl font-semibold sm:text-3xl">
              Repositories unavailable
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Update the GitHub username in the source code to point to an
              account with public repositories.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
