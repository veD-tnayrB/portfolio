import { ICertificate } from "../types";

interface ICertificateCardProps {
  certificate: ICertificate;
}

export function CertificateCard({ certificate }: ICertificateCardProps) {
  return (
    <a
      href={certificate.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border/50 bg-card/30 hover:border-border focus-visible:ring-primary flex flex-col gap-3 rounded-2xl border p-6 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-foreground text-base font-semibold sm:text-lg">
            {certificate.name}
          </h3>
          <p className="text-muted-foreground text-xs tracking-[0.25em] uppercase">
            {certificate.issuer}
          </p>
        </div>
        <span className="text-muted-foreground text-xs font-medium sm:text-sm">
          {certificate.year}
        </span>
      </div>
      <span className="text-muted-foreground group-hover:text-foreground text-xs font-semibold transition-colors duration-200">
        View credential →
      </span>
    </a>
  );
}
