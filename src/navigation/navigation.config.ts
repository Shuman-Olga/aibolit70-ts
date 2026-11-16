import { ROUTES } from "@/routing/paths";
import type { RoutePath } from "@/routing/paths";

export type NavigationLink = {
  readonly href: RoutePath;
  readonly label: string;
};

/** Navigation items may contain nested groups of any depth. */
export type NavigationItem = NavigationLink & {
  readonly children?: readonly NavigationItem[];
};

/** Shared menu tree for desktop and mobile navigation. */
/** Основное меню. Десктопная и мобильная версии используют одну структуру. */
export const MAIN_NAVIGATION = [
  {
    href: ROUTES.about,
    label: "О нас",
    children: [
      { href: ROUTES.about, label: "О службе" },
      { href: ROUTES.controllingOrganizations, label: "Контролирующие организации" },
      { href: ROUTES.licenses, label: "Лицензии" },
      { href: ROUTES.documents, label: "Документы" },
      { href: ROUTES.partners, label: "Наши партнёры" },
      { href: ROUTES.legalInformation, label: "Правовая информация" },
      { href: ROUTES.vacancies, label: "Вакансии" },
    ],
  },
  { href: ROUTES.services, label: "Услуги" },
  {
    href: ROUTES.observationPrograms,
    label: "Программы",
    children: [
      { href: ROUTES.observationPrograms, label: "Все программы" },
      { href: ROUTES.programBaby, label: "Малыш Хоум · 0–2 года" },
      { href: ROUTES.programHealthyChild, label: "Здоровый ребёнок · 2–5 лет" },
      { href: ROUTES.programPediatricianNearby, label: "Педиатр рядом · от 5 лет" },
    ],
  },
  {
    href: ROUTES.doctors,
    label: "Педиатры",
    children: [
      { href: ROUTES.doctors, label: "Все специалисты" },
      { href: ROUTES.doctorSadovnikova, label: "Садовникова Елена Геннадьевна" },
      { href: ROUTES.doctorPetuhova, label: "Петухова Ольга Викторовна" },
      { href: ROUTES.doctorShevchenko, label: "Шевченко Анастасия Николаевна" },
      { href: ROUTES.doctorOstrouhova, label: "Остроухова Наталья Петровна" },
    ],
  },
  {
    href: ROUTES.patients,
    label: "Пациентам",
    children: [
      { href: ROUTES.patients, label: "Информация пациентам" },
      { href: ROUTES.prices, label: "Цены" },
      { href: ROUTES.paymentMethods, label: "Способы оплаты" },
      { href: ROUTES.medicationSupply, label: "Лекарственное обеспечение" },
      { href: ROUTES.preparationRules, label: "Подготовка к исследованиям" },
      { href: ROUTES.specialists, label: "Сведения о специалистах" },
      { href: ROUTES.taxDeduction, label: "Налоговый вычет" },
      { href: ROUTES.reviews, label: "Отзывы" },
    ],
  },
  { href: ROUTES.contacts, label: "Контакты" },
] as const satisfies readonly NavigationItem[];
