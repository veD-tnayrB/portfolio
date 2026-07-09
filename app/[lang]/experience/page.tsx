import type { Metadata } from "next";

import { CertificateList } from "@/components/experience/certificates";
import { ExperienceTimeline } from "@/components/experience/timeline";
import type {
  ICertificate,
  IExperienceEntry,
} from "@/components/experience/types";
import { getDictionary, isLocale } from "@/lib/i18n";

interface IExperiencePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: IExperiencePageProps): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = getDictionary(isLocale(lang) ? lang : "en");

  return {
    title: dictionary.pageTitles.experience,
    description: dictionary.pageDescriptions.experience,
  };
}

const certificates: ICertificate[] = [
  {
    id: "cs50",
    name: "CS50's Introduction to Computer Science",
    issuer: "Harvard University",
    year: "2024",
    link: "https://certificates.cs50.io/ac058300-240f-4a0b-b236-50501cb1f624.png?size=letter",
  },
  {
    id: "free-code-camp-algorithms",
    name: "Free Code Camp Algorithms and Data Structures",
    issuer: "Free Code Camp",
    year: "2021",
    link: "https://www.freecodecamp.org/espanol/certification/bryantdev_/javascript-algorithms-and-data-structures",
  },
  {
    id: "free-code-camp-responsive-web-design",
    name: "Free Code Camp Responsive Web Design",
    issuer: "Free Code Camp",
    year: "2021",
    link: "https://www.freecodecamp.org/espanol/certification/bryantdev_/responsive-web-design",
  },
];

export default async function ExperiencePage({
  params,
}: IExperiencePageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(isLocale(lang) ? lang : "en");

  const experienceEntries: IExperienceEntry[] = [
    {
      id: "full-stack-developer",
      title: dictionary.experienceContent.entryTitle,
      company: "Baleares Group",
      period: "2022 — Present",
      description: dictionary.experienceContent.entryDescription,
      highlights: dictionary.experienceContent.entryHighlights,
    },
  ];

  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pt-5 pb-20 sm:px-6 lg:px-8">
        <ExperienceTimeline
          entries={experienceEntries}
          content={dictionary.timeline}
        />
        <CertificateList
          certificates={certificates}
          content={dictionary.certificates}
        />
      </div>
    </main>
  );
}
