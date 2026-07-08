import type { Metadata } from "next";

import { CertificateList } from "@/components/experience/certificates";
import { ExperienceTimeline } from "@/components/experience/timeline";
import type {
  ICertificate,
  IExperienceEntry,
} from "@/components/experience/types";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work history and certifications of Bryant Caballero — Full Stack Developer with experience in React, Next.js, Node.js, TypeScript, and Google Cloud.",
};

const experienceEntries: IExperienceEntry[] = [
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    company: "Baleares Group",
    period: "2022 — Present",
    description:
      "Full-stack development and requirements analysis for clients across multiple industries, building scalable web applications with React, Node.js, and TypeScript in close collaboration with product designers.",
    highlights: [
      'Designed and built the foundations of "Administrator", a modular base platform that became the company\'s core system, powering 3 products in production and setting the team\'s reference architecture and technical standards.',
      "Led the migration of all backend services from GCP virtual machines to Cloud Run — isolating environments, automating deployments, and reducing operational and maintenance costs.",
      "Migrated every frontend environment from Apache-based virtual machines to Firebase Hosting, standardizing the infrastructure and simplifying deployments.",
      "Partnered directly with the CEO and CTO to define technical guidelines, architectures, and solutions for client projects.",
    ],
  },
];

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

export default function ExperiencePage() {
  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pt-5 pb-20 sm:px-6 lg:px-8">
        <ExperienceTimeline entries={experienceEntries} />
        <CertificateList certificates={certificates} />
      </div>
    </main>
  );
}
