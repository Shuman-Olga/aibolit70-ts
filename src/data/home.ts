import { ROUTES } from "@/routing/paths";
import { HOME_DOCTORS } from "@/data/doctors";

export const HOME_FEATURES = [
  { icon: "home", title: "Вызов врача на дом", detail: "Быстро и удобно" },
  { icon: "stethoscope", title: "Консультация педиатра", detail: "Опытные специалисты" },
  { icon: "baby", title: "Детские специалисты", detail: "Узкие специалисты" },
  { icon: "location", title: "Томск и пригород", detail: "Выезжаем к вам" },
] as const;

export const HOME_SERVICES = [
  { icon: "＋", title: "Педиатр на дом", text: "Вызов детского врача домой в Томске.", href: ROUTES.pediatricianHome, link: "Вызвать педиатра" },
  { icon: "✳", title: "Детские специалисты", text: "Консультации профильных детских врачей.", href: ROUTES.doctors, link: "Выбрать врача" },
  { icon: "♡", title: "Программы наблюдения", text: "Плановое сопровождение здоровья ребёнка.", href: ROUTES.observationPrograms, link: "Подробнее" },
] as const;


export { HOME_DOCTORS };
