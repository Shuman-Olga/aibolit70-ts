import { ROUTES } from "@/config/paths";

export type NavigationLink = {
  href: string;
  label: string;
};

export type NavigationItem = NavigationLink & {
  children?: readonly NavigationLink[];
};

export const MAIN_NAVIGATION = [
  {
    href: ROUTES.about,
    label: "О нас",
    children: [
      { href: ROUTES.about, label: "О службе" },
      { href: "/o-nas/kontroliruyushie-organizacii/", label: "Контролирующие организации" },
      { href: "/o-nas/licenzii/", label: "Лицензии" },
      { href: "/o-nas/documents/", label: "Документы" },
      { href: "/o-nas/nashi-partnery/", label: "Наши партнёры" },
      { href: "/o-nas/pravovaya-informaciya/", label: "Правовая информация" },
      { href: "/o-nas/vacancies/", label: "Вакансии" },
    ],
  },
  { href: ROUTES.services, label: "Услуги" },
  {
    href: ROUTES.observationPrograms,
    label: "Программы",
    children: [
      { href: ROUTES.observationPrograms, label: "Все программы" },
      { href: "/programmy-nablyudeniya-za-zdorovem/malysh-houm-standart-ot-0-do-2-h-le/", label: "Малыш Хоум · 0–2 года" },
      { href: "/programmy-nablyudeniya-za-zdorovem/zdorovyj-rebenok-houm-standart-ot-2/", label: "Здоровый ребёнок · 2–5 лет" },
      { href: "/programmy-nablyudeniya-za-zdorovem/zdorovyj-rebenok-houm-midi-ot-2-h-l/", label: "Педиатр рядом · от 5 лет" },
    ],
  },
  {
    href: ROUTES.doctors,
    label: "Педиатры",
    children: [
      { href: ROUTES.doctors, label: "Все специалисты" },
      { href: "/doctors/sadovnikova-elena-gennadevna/", label: "Садовникова Елена Геннадьевна" },
      { href: "/doctors/petuhova-olga-viktorovna/", label: "Петухова Ольга Викторовна" },
      { href: "/doctors/shevchenko-anastasiya-nikolaevna/", label: "Шевченко Анастасия Николаевна" },
      { href: "/doctors/ostrouhova-natalya-petrovna/", label: "Остроухова Наталья Петровна" },
    ],
  },
  {
    href: ROUTES.patients,
    label: "Пациентам",
    children: [
      { href: ROUTES.patients, label: "Информация пациентам" },
      { href: ROUTES.prices, label: "Цены" },
      { href: "/pacientam/sposoby-oplaty/", label: "Способы оплаты" },
      { href: "/pacientam/lekarstvennoe-obespechenie/", label: "Лекарственное обеспечение" },
      { href: "/pacientam/pravila-podgotovki/", label: "Подготовка к исследованиям" },
      { href: "/pacientam/svedeniya-o-specialistah/", label: "Сведения о специалистах" },
      { href: "/pacientam/nalogovyj-vychet/", label: "Налоговый вычет" },
      { href: ROUTES.reviews, label: "Отзывы" },
    ],
  },
  { href: ROUTES.contacts, label: "Контакты" },
] as const satisfies readonly NavigationItem[];
