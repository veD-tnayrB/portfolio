import { IExperienceEntry } from "../types";

interface IExperienceTimelineItemProps {
  entry: IExperienceEntry;
}

export function ExperienceTimelineItem({
  entry,
}: IExperienceTimelineItemProps) {
  return (
    <article className="border-border/50 bg-card/40 hover:border-border rounded-3xl border p-6 shadow-lg shadow-black/10 transition-colors duration-200 sm:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-foreground text-lg font-semibold sm:text-xl">
            {entry.title}
          </h3>
          <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase">
            {entry.company}
          </p>
        </div>
        <span className="text-muted-foreground text-sm font-medium sm:text-right">
          {entry.period}
        </span>
      </div>
      <p className="text-muted-foreground mt-4 text-sm leading-relaxed sm:text-base">
        {entry.description}
      </p>
    </article>
  );
}
