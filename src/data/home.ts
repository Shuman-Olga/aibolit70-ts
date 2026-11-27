import { ROUTES } from "@/routing/paths";
import { HOME_DOCTORS } from "@/data/doctors";

export const HOME_FEATURES = [
  { icon: "home", title: "Вызов врача на дом", detail: "Быстро и удобно" },
  { icon: "stethoscope", title: "Консультация педиатра", detail: "Опытные специалисты" },
  { icon: "baby", title: "Детские специалисты", detail: "Узкие специалисты" },
  { icon: "location", title: "Томск и пригород", detail: "Выезжаем к вам" },
] as const;

export const HOME_SERVICE_CARDS = [
  { number: "01", icon: "plus", title: "Педиатр на дом", text: "Консультация детского врача дома, когда ребёнку комфортнее оставаться в привычной обстановке.", href: ROUTES.pediatricianHome, link: "Вызвать педиатра" },
  { number: "02", icon: "search", title: "Детские специалисты", text: "Знакомьтесь с врачами службы и выбирайте специалиста для консультации ребёнка.", href: ROUTES.doctors, link: "Наши врачи" },
  { number: "03", icon: "heart", title: "Программы наблюдения", text: "Продуманное сопровождение здоровья малыша и ребёнка на разных этапах взросления.", href: ROUTES.observationPrograms, link: "Выбрать программу" },
  { number: "04", icon: "asterisk", title: "Справки и документы", text: "Информация об оформлении медицинских справок для детского сада, школы и других случаев.", href: ROUTES.medicalCertificates, link: "Все услуги" },
] as const;

export { HOME_DOCTORS };
