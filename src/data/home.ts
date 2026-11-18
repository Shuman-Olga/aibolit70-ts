import { ROUTES } from "@/routing/paths";

export const HOME_FEATURES = [
  { icon: "⌂", title: "Вызов врача", detail: "Быстро и удобно", tone: "mint" },
  { icon: "♧", title: "Консультация", detail: "педиатра", tone: "mint" },
  { icon: "☺", title: "Детские", detail: "специалисты", tone: "mint" },
  { icon: "⌖", title: "Томск и пригород", detail: "Выезжаем к вам", tone: "mint" },
] as const;

export const HOME_SERVICES = [
  { icon: "＋", title: "Педиатр на дом", text: "Вызов детского врача домой в Томске.", href: ROUTES.pediatricianHome, link: "Вызвать педиатра" },
  { icon: "✳", title: "Детские специалисты", text: "Консультации профильных детских врачей.", href: ROUTES.doctors, link: "Выбрать врача" },
  { icon: "♡", title: "Программы наблюдения", text: "Плановое сопровождение здоровья ребёнка.", href: ROUTES.observationPrograms, link: "Подробнее" },
] as const;

