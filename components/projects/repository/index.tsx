import type { IDictionary } from "@/lib/i18n";

import { IGitHubRepository } from "../types";
import { RepositoryCard } from "./card";

interface IRepositoryListProps {
  repositories: IGitHubRepository[];
  content: IDictionary["projects"];
}

export function RepositoryList({
  repositories,
  content,
}: IRepositoryListProps) {
  const repositoryItems = repositories.map((repository) => (
    <RepositoryCard
      key={repository.id}
      repository={repository}
      viewProjectLabel={content.viewProject}
      noDescriptionLabel={content.noDescription}
    />
  ));

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
          {content.label}
        </p>
        <h1 className="text-foreground text-3xl font-semibold sm:text-4xl">
          {content.title}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
          {content.subtitle}
        </p>
      </header>
      <div className="grid gap-5">{repositoryItems}</div>
    </section>
  );
}
