import { IExperienceEntry } from "../types";
import { ExperienceTimelineItem } from "./item";

interface IExperienceTimelineProps {
  entries: IExperienceEntry[];
}

export function ExperienceTimeline({ entries }: IExperienceTimelineProps) {
  const timelineItems = entries.map((entry) => (
    <ExperienceTimelineItem key={entry.id} entry={entry} />
  ));

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
          Experience
        </p>
        <h1 className="text-foreground text-3xl font-semibold sm:text-4xl">
          Work History
        </h1>
        <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
          Full-stack product work, cloud migrations, and platform engineering —
          in close collaboration with technical and business leadership.
        </p>
      </header>
      <div className="grid gap-6">{timelineItems}</div>
    </section>
  );
}
