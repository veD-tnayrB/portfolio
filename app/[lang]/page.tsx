import { AboutHero } from "@/components/about/hero";
import { getDictionary, isLocale } from "@/lib/i18n";

interface IAboutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: IAboutPageProps) {
  const { lang } = await params;
  const dictionary = getDictionary(isLocale(lang) ? lang : "en");

  return (
    <main className="bg-background">
      <AboutHero content={dictionary.hero} />
    </main>
  );
}
