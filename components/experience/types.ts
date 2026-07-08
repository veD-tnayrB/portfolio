export interface IExperienceEntry {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ICertificate {
  id: string;
  name: string;
  issuer: string;
  year: string;
  link: string;
}
