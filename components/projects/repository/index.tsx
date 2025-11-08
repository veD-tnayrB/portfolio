import { IGitHubRepository } from "../types";
import { RepositoryCard } from "./card";

interface IRepositoryListProps {
  repositories: IGitHubRepository[];
}

export function RepositoryList({ repositories }: IRepositoryListProps) {
  const repositoryItems = repositories.map((repository) => (
    <RepositoryCard key={repository.id} repository={repository} />
  ));

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
          Projects
        </p>
        <h1 className="text-foreground text-3xl font-semibold sm:text-4xl">
          Open Source Highlights
        </h1>
        <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
          A curated selection of GitHub repositories ranked by community
          interest. These projects showcase my approach to developer experience,
          performance, and maintainability.
        </p>
      </header>
      <div className="grid gap-5">{repositoryItems}</div>
    </section>
  );
}
