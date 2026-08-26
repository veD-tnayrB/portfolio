interface IHeroDictionary {
  role: string;
  availability: string;
  paragraphs: string[];
  downloadCv: string;
  cvHref: string;
}

interface ITimelineDictionary {
  label: string;
  title: string;
  subtitle: string;
}

interface ICertificatesDictionary {
  label: string;
  title: string;
  subtitle: string;
}

interface IProjectsDictionary {
  label: string;
  title: string;
  subtitle: string;
  viewProject: string;
  noDescription: string;
  emptyTitle: string;
  emptyBodyPrefix: string;
  emptyBodyLink: string;
}

interface IExperienceContentDictionary {
  entryTitle: string;
  entryDescription: string;
  entryHighlights: string[];
}

export interface IDictionary {
  siteDescription: string;
  pageTitles: { projects: string; experience: string };
  pageDescriptions: { projects: string; experience: string };
  nav: {
    about: string;
    projects: string;
    experience: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
  };
  hero: IHeroDictionary;
  timeline: ITimelineDictionary;
  certificates: ICertificatesDictionary;
  projects: IProjectsDictionary;
  experienceContent: IExperienceContentDictionary;
}
