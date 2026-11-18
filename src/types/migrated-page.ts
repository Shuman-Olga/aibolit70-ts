import type { PageContentKey } from "@/types/content";

export type ContentLink = {
  label: string;
  href: string;
};

export type ContentSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: ContentLink[];
  note?: string;
};

export type MigratedPageCard = {
  title: string;
  description: string;
  href: string;
  meta?: string;
  image?: string;
};

export type MigratedPageProfile = {
  initials: string;
  role: string;
  experience: string;
  specialties: string[];
  image?: string;
};

export type MigratedPageHighlight = {
  title: string;
  description: string;
  mark: string;
};

export type MigratedPageAction = {
  title: string;
  description: string;
  label: string;
  href: string;
};

export type MigratedPage = {
  intro: string;
  cards?: MigratedPageCard[];
  profile?: MigratedPageProfile;
  highlights?: MigratedPageHighlight[];
  action?: MigratedPageAction;
  sections?: ContentSection[];
};

export type MigratedPageKey = PageContentKey;
