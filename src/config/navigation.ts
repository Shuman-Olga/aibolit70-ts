import { ROUTES } from "@/config/paths";

export type NavigationItem = {
  href: string;
  label: string;
};

export const MAIN_NAVIGATION = [
  { href: ROUTES.about, label: "О нас" },
  { href: ROUTES.services, label: "Услуги" },
  { href: ROUTES.doctors, label: "Врачи" },
  { href: ROUTES.prices, label: "Цены" },
  { href: ROUTES.reviews, label: "Отзывы" },
  { href: ROUTES.contacts, label: "Контакты" },
] as const satisfies readonly NavigationItem[];
