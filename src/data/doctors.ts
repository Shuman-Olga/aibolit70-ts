import { ROUTES } from "@/routing/paths";

/** Shared doctor identity and portrait data used by the homepage and profile pages. */
export const DOCTORS = {
  sadovnikova: {
    name: "Садовникова Елена Геннадьевна",
    role: "Педиатр · аллерголог",
    image: "https://aibolit70.ru/assets/img/Sadovnikova_Elena_Gennadevna.db0177a290870cb2e56d.jpg",
    initials: "ЕС",
    href: ROUTES.doctorSadovnikova,
  },
  petuhova: {
    name: "Петухова Ольга Викторовна",
    role: "Главный врач · педиатр",
    image: "https://aibolit70.ru/assets/img/Petuhova_Olga_Viktorovna.76ebfef56dfbc70d4541.jpg",
    initials: "ОП",
    href: ROUTES.doctorPetuhova,
  },
  shevchenko: {
    name: "Шевченко Анастасия Николаевна",
    role: "Педиатр · неонатолог",
    image: "https://aibolit70.ru/assets/img/Shevchenko_Anastasiya_Nikolaevna.2662c04317fcef503443.jpg",
    initials: "АШ",
    href: ROUTES.doctorShevchenko,
  },
  ostrouhova: {
    name: "Остроухова Наталья Петровна",
    role: "Педиатр",
    image: "https://aibolit70.ru/assets/img/Ostrouhova_Natalya_Petrovna.8b4a4e6874c952e50656.jpg",
    initials: "НО",
    href: ROUTES.doctorOstrouhova,
  },
} as const;

export const HOME_DOCTORS = Object.values(DOCTORS);
