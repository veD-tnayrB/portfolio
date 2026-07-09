import type { Metadata } from "next";

import { RepositoryList } from "@/components/projects/repository";
import type {
  IGitHubRepository,
  IGitHubRepositoryResponse,
} from "@/components/projects/types";
import { getDictionary, isLocale } from "@/lib/i18n";

interface IProjectsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: IProjectsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(isLocale(lang) ? lang : "en");

  return {
    title: dictionary.pageTitles.projects,
    description: dictionary.pageDescriptions.projects,
  };
}

const MINIMUM_LANGUAGE_SHARE = 0.05;
const MAXIMUM_LANGUAGE_BADGES = 4;

// Unauthenticated GitHub API calls are limited to 60/hour per IP, which
// shared build servers exhaust quickly. Set GITHUB_TOKEN to lift the limit.
function getGitHubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "eynort-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function getRepositoryLanguages(
  username: string,
  repositoryName: string,
): Promise<string[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repositoryName}/languages`,
      {
        headers: getGitHubHeaders(),
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub responded with ${response.status}`);
    }

    const languageBytes: Record<string, number> = await response.json();
    const totalBytes = Object.values(languageBytes).reduce(
      (total, bytes) => total + bytes,
      0,
    );

    if (totalBytes === 0) {
      return [];
    }

    return Object.entries(languageBytes)
      .filter(([, bytes]) => bytes / totalBytes >= MINIMUM_LANGUAGE_SHARE)
      .sort(([, firstBytes], [, secondBytes]) => secondBytes - firstBytes)
      .slice(0, MAXIMUM_LANGUAGE_BADGES)
      .map(([name]) => name);
  } catch (error) {
    console.warn(
      `Could not fetch languages for ${repositoryName}, falling back to its primary language:`,
      error instanceof Error ? error.message : error,
    );
    return [];
  }
}

async function getGitHubRepositories(
  username: string,
): Promise<IGitHubRepository[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=100`,
      {
        headers: getGitHubHeaders(),
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repositories: IGitHubRepositoryResponse[] = await response.json();

    const featuredRepositoryIds = [
      "saasstarter",
      "administrator",
      "freemarket",
      "starflix",
      "courseslive",
    ];

    const toKey = (value: string) =>
      value.toLowerCase().replace(/[^a-z0-9]/g, "");

    // GitHub reports no languages at all for some forks.
    const languageFallbacks: Record<string, string[]> = {
      saasstarter: ["TypeScript"],
    };

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

    return Promise.all(
      featuredRepositories.map(async (repository) => {
        const languages = await getRepositoryLanguages(
          username,
          repository.name,
        );
        const fallbackLanguages =
          languageFallbacks[toKey(repository.name)] ??
          (repository.language ? [repository.language] : []);

        return {
          ...repository,
          languages: languages.length > 0 ? languages : fallbackLanguages,
        };
      }),
    );
  } catch (error) {
    console.error("Error fetching GitHub repositories", error);
    return [];
  }
}

export default async function ProjectsPage({ params }: IProjectsPageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(isLocale(lang) ? lang : "en");
  const repositories = await getGitHubRepositories("eynort");
  const hasRepositories = repositories.length > 0;

  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-5 pb-20 sm:px-6 lg:px-8">
        {hasRepositories ? (
          <RepositoryList
            repositories={repositories}
            content={dictionary.projects}
          />
        ) : (
          <section className="border-border/50 bg-card/30 space-y-4 rounded-3xl border p-8 text-center shadow-lg shadow-black/10">
            <h1 className="text-foreground text-2xl font-semibold sm:text-3xl">
              {dictionary.projects.emptyTitle}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              {dictionary.projects.emptyBodyPrefix}{" "}
              <a
                href="https://github.com/eynort"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4"
              >
                {dictionary.projects.emptyBodyLink}
              </a>
              .
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
