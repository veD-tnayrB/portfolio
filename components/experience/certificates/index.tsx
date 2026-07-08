import { ICertificate } from "../types";
import { CertificateCard } from "./card";

interface ICertificateListProps {
  certificates: ICertificate[];
}

export function CertificateList({ certificates }: ICertificateListProps) {
  const certificateItems = certificates.map((certificate) => (
    <CertificateCard key={certificate.id} certificate={certificate} />
  ));

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-primary text-xs font-semibold tracking-[0.35em] uppercase">
          Certifications
        </p>
        <h2 className="text-foreground text-2xl font-semibold sm:text-3xl">
          Continuous Learning
        </h2>
        <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
          Structured programs that ground my day-to-day work in computer
          science fundamentals, algorithms, and web development.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">{certificateItems}</div>
    </section>
  );
}
