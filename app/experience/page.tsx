import { CertificateList } from "@/components/experience/certificates";
import { ExperienceTimeline } from "@/components/experience/timeline";
import type {
  ICertificate,
  IExperienceEntry,
} from "@/components/experience/types";

const experienceEntries: IExperienceEntry[] = [
  {
    id: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    company: "Company Name",
    period: "2022 — Present",
    description:
      "Designing resilient backend services, shaping API contracts, and driving cost-efficient architectures across globally distributed teams.",
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    company: "Previous Company",
    period: "2020 — 2022",
    description:
      "Delivered cross-functional web initiatives with Next.js, React, and Node.js, collaborating closely with product and design stakeholders.",
  },
];

const certificates: ICertificate[] = [
  {
    id: "aws-certified-solutions-architect",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    link: "https://aws.amazon.com/certification/",
  },
  {
    id: "professional-certificate-ai",
    name: "Professional Certificate in Artificial Intelligence",
    issuer: "Coursera",
    year: "2022",
    link: "https://www.coursera.org",
  },
];

export default function ExperiencePage() {
  return (
    <main className="bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pt-20 pb-20 sm:px-6 lg:px-8">
        <ExperienceTimeline entries={experienceEntries} />
        <CertificateList certificates={certificates} />
      </div>
    </main>
  );
}
