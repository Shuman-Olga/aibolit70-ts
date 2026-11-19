import { ROUTES } from "@/routing/paths";

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


export const HOME_DOCTORS = [
  {
    name: "Садовникова Елена Геннадьевна",
    role: "Педиатр · аллерголог",
    image: "https://aibolit70.ru/assets/img/Sadovnikova_Elena_Gennadevna.db0177a290870cb2e56d.jpg",
    href: ROUTES.doctorSadovnikova,
  },
  {
    name: "Петухова Ольга Викторовна",
    role: "Главный врач · педиатр",
    image: "https://aibolit70.ru/assets/img/Petuhova_Olga_Viktorovna.76ebfef56dfbc70d4541.jpg",
    href: ROUTES.doctorPetuhova,
  },
  {
    name: "Шевченко Анастасия Николаевна",
    role: "Педиатр · неонатолог",
    image: "https://aibolit70.ru/assets/img/Shevchenko_Anastasiya_Nikolaevna.2662c04317fcef503443.jpg",
    href: ROUTES.doctorShevchenko,
  },
  {
    name: "Остроухова Наталья Петровна",
    role: "Педиатр",
    image: "https://aibolit70.ru/assets/img/Ostrouhova_Natalya_Petrovna.8b4a4e6874c952e50656.jpg",
    href: ROUTES.doctorOstrouhova,
  },
] as const;
