import { ROUTES } from "@/routing/paths";

export const HOME_FEATURES = [
  { icon: "home", title: "Вызов врача на дом", detail: "Быстро и удобно" },
  { icon: "stethoscope", title: "Консультация педиатра", detail: "Опытные специалисты" },
  { icon: "baby", title: "Детские специалисты", detail: "Узкие специалисты" },
  { icon: "location", title: "Здоровье вашего ребёнка", detail: "Наша главная забота" },
] as const;

export const HOME_SERVICES = [
  { icon: "＋", title: "Педиатр на дом", text: "Вызов детского врача домой в Томске.", href: ROUTES.pediatricianHome, link: "Вызвать педиатра" },
  { icon: "✳", title: "Детские специалисты", text: "Консультации профильных детских врачей.", href: ROUTES.doctors, link: "Выбрать врача" },
  { icon: "♡", title: "Программы наблюдения", text: "Плановое сопровождение здоровья ребёнка.", href: ROUTES.observationPrograms, link: "Подробнее" },
] as const;

