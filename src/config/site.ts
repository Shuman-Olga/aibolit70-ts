export const SITE = {
  url: "https://aibolit70.ru",
  name: "Айболит",
  fullName: "Детская медицинская служба «Айболит»",
  phone: "+7 (3822) 60-92-43",
  address: {
    street: "ул. Герцена 68, строение 2",
    city: "Томск",
    country: "RU",
  },
  hours: {
    weekdays: "Пн–пт: 08:00–19:00",
    saturday: "Сб: 09:00–14:00",
  },
  logo: "https://aibolit70.ru/assets/img/aibolit_logo.8b947efb21c1e40192ec.png",
  social: {
    vk: "https://vk.com/aibolittomsk",
  },
  assets: {
    defaultOgImage: "/assets/img/aibolit.png",
    homeHero: "/chick-doctor-scene.png",
  },
} as const;

export const SITE_URL = SITE.url;
export const SITE_NAME = SITE.name;
export const SITE_FULL_NAME = SITE.fullName;
export const SITE_PHONE = SITE.phone;
export const SITE_ADDRESS = SITE.address;
export const SITE_SOCIAL = [SITE.social.vk] as const;
export const SITE_HOURS = SITE.hours;
export const SITE_LOGO = SITE.logo;
export const DEFAULT_OG_IMAGE = SITE.assets.defaultOgImage;
export const DEFAULT_DESCRIPTION =
  "Детская медицинская служба «Айболит» в Томске. Вызов педиатра на дом, консультации детских врачей и программы наблюдения за здоровьем ребёнка.";

export const PHONE_HREF = `tel:${SITE_PHONE.replace(/[^+0-9]/g, "")}`;
