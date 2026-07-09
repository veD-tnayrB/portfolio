import { IExperienceEntry } from "../types";

interface IExperienceTimelineItemProps {
  entry: IExperienceEntry;
}

export function ExperienceTimelineItem({
  entry,
}: IExperienceTimelineItemProps) {
  const highlightItems = entry.highlights.map((highlight) => (
    <li
      key={highlight}
      className="text-muted-foreground text-sm leading-relaxed sm:text-base"
    >
      {highlight}
    </li>
  ));

  return (
    <article className="border-border/50 bg-card/40 hover:border-border relative rounded-3xl border p-6 shadow-lg shadow-black/10 transition-colors duration-200 sm:p-8">
      <span
        aria-hidden="true"
        className="bg-primary border-background absolute top-8 -left-[29px] h-[9px] w-[9px] rounded-full border sm:top-10 sm:-left-[37px]"
      />
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
      {highlightItems.length > 0 ? (
        <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-primary">
          {highlightItems}
        </ul>
      ) : null}
    </article>
  );
}
