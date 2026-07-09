import type { IDictionary } from "@/lib/i18n";

import { IExperienceEntry } from "../types";
import { ExperienceTimelineItem } from "./item";

interface IExperienceTimelineProps {
  entries: IExperienceEntry[];
  content: IDictionary["timeline"];
}

export function ExperienceTimeline({
  entries,
  content,
}: IExperienceTimelineProps) {
  const timelineItems = entries.map((entry) => (
    <ExperienceTimelineItem key={entry.id} entry={entry} />
  ));

  return (
    <section className="space-y-8">
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
      <div className="border-border/60 ml-1 grid gap-6 border-l pl-6 sm:pl-8">
        {timelineItems}
      </div>
    </section>
  );
}
