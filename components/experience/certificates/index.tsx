import type { IDictionary } from "@/lib/i18n";

import { ICertificate } from "../types";
import { CertificateCard } from "./card";

interface ICertificateListProps {
  certificates: ICertificate[];
  content: IDictionary["certificates"];
}

export function CertificateList({
  certificates,
  content,
}: ICertificateListProps) {
  const certificateItems = certificates.map((certificate) => (
    <CertificateCard key={certificate.id} certificate={certificate} />
  ));

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
          {content.label}
        </p>
        <h2 className="text-foreground text-2xl font-semibold sm:text-3xl">
          {content.title}
        </h2>
        <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
          {content.subtitle}
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">{certificateItems}</div>
    </section>
  );
}
