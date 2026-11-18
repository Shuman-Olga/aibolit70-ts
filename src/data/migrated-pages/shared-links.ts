import type { ContentLink } from "@/types/migrated-page";

export const aboutLinks: ContentLink[] = [
  { label: "Контролирующие организации", href: ROUTES.controllingOrganizations },
  { label: "Лицензии", href: ROUTES.licenses },
  { label: "Документы", href: ROUTES.documents },
  { label: "Наши партнёры", href: ROUTES.partners },
  { label: "Правовая информация", href: ROUTES.legalInformation },
  { label: "Вакансии", href: ROUTES.vacancies },
  { label: "Карта сайта", href: ROUTES.siteMap },
];

export const serviceLinks: ContentLink[] = [
  { label: "Вызов педиатра на дом", href: ROUTES.pediatricianHome },
  { label: "Приём педиатра", href: ROUTES.pediatrician },
  { label: "Медицинские справки для детей", href: ROUTES.medicalCertificates },
  { label: "Программы наблюдения", href: ROUTES.observationPrograms },
  { label: "Чек-апы", href: ROUTES.checkUp },
];

export const certificateLinks: ContentLink[] = [
  { label: "Санаторно-курортная карта", href: ROUTES.sanatoriumCard },
  { label: "Справка в школу", href: ROUTES.schoolCertificate },
  { label: "Справка в детский сад", href: ROUTES.kindergartenCertificate },
  { label: "Справка в бассейн", href: ROUTES.poolCertificate },
  { label: "Справка о состоянии здоровья", href: ROUTES.healthCertificate },
  { label: "Медицинская карта 026/у", href: ROUTES.certificate026u },
  { label: "Справка в детский лагерь 079/у", href: ROUTES.certificate079u },
];
