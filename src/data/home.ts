import { ROUTES } from "@/config/paths";

export const HOME_FEATURES = [
  { icon: "▦", title: "Опыт работы", detail: "с 2001 года", tone: "mint" },
  { icon: "⌂", title: "Вызов врача", detail: "на дом", tone: "yellow" },
  { icon: "♧", title: "Детские", detail: "специалисты", tone: "mint" },
  { icon: "♡", title: "Забота", detail: "и внимание", tone: "yellow" },
] as const;

export const HOME_SERVICES = [
  { icon: "＋", title: "Педиатр на дом", text: "Вызов детского врача домой в Томске.", href: ROUTES.pediatricianHome, link: "Вызвать педиатра" },
  { icon: "✳", title: "Детские специалисты", text: "Консультации профильных детских врачей.", href: ROUTES.doctors, link: "Выбрать врача" },
  { icon: "♡", title: "Программы наблюдения", text: "Плановое сопровождение здоровья ребёнка.", href: ROUTES.observationPrograms, link: "Подробнее" },
] as const;
