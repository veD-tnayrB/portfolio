import { IGitHubRepository } from "../types";

interface IRepositoryCardProps {
  repository: IGitHubRepository;
}

export function RepositoryCard({ repository }: IRepositoryCardProps) {
  const targetLink = repository.homepage || repository.html_url;

  const languageBadges = repository.languages.map((language) => (
    <span
      key={language}
      className="bg-primary/10 text-primary inline-flex h-6 items-center rounded-full px-3 text-xs font-medium"
    >
      {language}
    </span>
  ));

  return (
    <a
      href={targetLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border/50 bg-card/30 hover:border-border focus-visible:ring-primary flex flex-col gap-4 rounded-3xl border p-6 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h3 className="text-foreground text-lg font-semibold sm:text-xl">
            {repository.name}
          </h3>
          {languageBadges.length > 0 ? (
            <div className="flex flex-wrap gap-2">{languageBadges}</div>
          ) : null}
        </div>
        <div className="text-muted-foreground flex items-center gap-2 text-sm font-medium sm:text-base">
          <span aria-hidden="true">⭐</span>
          <span>{repository.stargazers_count}</span>
        </div>
      </header>
      <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
        {repository.description ?? "Project description coming soon."}
      </p>
      <span className="text-muted-foreground group-hover:text-foreground text-sm font-semibold transition-colors duration-200">
        View project →
      </span>
    </a>
  );
}
