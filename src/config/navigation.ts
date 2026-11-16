/**
 * Единый источник URL и структуры навигации сайта.
 * При добавлении страницы сначала задаём её путь в ROUTES,
 * затем используем этот ключ в меню и других компонентах.
 */
export const ROUTES = {
  home: "/",
  about: "/o-nas/",
  controllingOrganizations: "/o-nas/kontroliruyushie-organizacii/",
  licenses: "/o-nas/licenzii/",
  documents: "/o-nas/documents/",
  partners: "/o-nas/nashi-partnery/",
  legalInformation: "/o-nas/pravovaya-informaciya/",
  vacancies: "/o-nas/vacancies/",
  siteMap: "/o-nas/map-site/",

  services: "/uslugi-i-ceny/",
  pediatricianHome: "/uslugi-i-ceny/vyzov-pediatra-na-dom/",
  doctors: "/doctors/",
  doctorSadovnikova: "/doctors/sadovnikova-elena-gennadevna/",
  doctorPetuhova: "/doctors/petuhova-olga-viktorovna/",
  doctorShevchenko: "/doctors/shevchenko-anastasiya-nikolaevna/",
  doctorOstrouhova: "/doctors/ostrouhova-natalya-petrovna/",

  observationPrograms: "/programmy-nablyudeniya-za-zdorovem/",
  programBaby: "/programmy-nablyudeniya-za-zdorovem/malysh-houm-standart-ot-0-do-2-h-le/",
  programHealthyChild: "/programmy-nablyudeniya-za-zdorovem/zdorovyj-rebenok-houm-standart-ot-2/",
  programPediatricianNearby: "/programmy-nablyudeniya-za-zdorovem/zdorovyj-rebenok-houm-midi-ot-2-h-l/",

  patients: "/pacientam/",
  prices: "/pacientam/prices/",
  paymentMethods: "/pacientam/sposoby-oplaty/",
  medicationSupply: "/pacientam/lekarstvennoe-obespechenie/",
  preparationRules: "/pacientam/pravila-podgotovki/",
  specialists: "/pacientam/svedeniya-o-specialistah/",
  taxDeduction: "/pacientam/nalogovyj-vychet/",
  reviews: "/pacientam/otzyvy/",

  blog: "/blog/",
  contacts: "/kontakty/",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

export type NavigationLink = {
  readonly href: RoutePath;
  readonly label: string;
};

export type NavigationItem = NavigationLink & {
  readonly children?: readonly NavigationLink[];
};

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
