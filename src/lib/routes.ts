import type { SiteRoute } from "@/types/content";

// SEO-поля и URL перенесены из src/routes/routeConfig.js ветки refactor.
// Контент страниц переносится поэтапно из старых JSX-компонентов.
export const routes: SiteRoute[] = [
  { path: "/", component: "Home", crumb: "Главная", title: "Вызов педиатра на дом в Томске | Айболит", description: "Детская медицинская служба «Айболит» в Томске. Вызов педиатра на дом, консультации детских врачей, программы наблюдения за здоровьем ребёнка. Работаем с 2001 года. Телефон: +7 (3822) 60-92-43." },
  { path: "/o-nas/", component: "About", crumb: "О нас", title: "О нас — детская медицинская служба «Айболит» в Томске", description: "Детская медицинская служба «Айболит» в Томске: педиатр на дом, детские специалисты, вакцинация, анализы на дому и патронаж новорожденных." },
  { path: "/o-nas/kontroliruyushie-organizacii/", component: "ControllingOrgan", crumb: "Контролирующие организации", title: "Контролирующие организации | Айболит, Томск", description: "Контролирующие организации детской медицинской службы «Айболит» в Томске: сведения, контакты и информация для пациентов." },
  { path: "/o-nas/licenzii/", component: "Licenses", crumb: "Лицензии", title: "Лицензия на медицинскую деятельность | Айболит, Томск", description: "Информация о лицензии на медицинскую деятельность детской медицинской службы «Айболит» в Томске. Документы и сведения для пациентов." },
  { path: "/o-nas/documents/", component: "Documents", crumb: "Документы", title: "Документы детской медицинской службы «Айболит» | Томск", description: "Документы детской медицинской службы «Айболит» в Томске: лицензии, правила оказания медицинских услуг и информация для пациентов." },
  { path: "/o-nas/nashi-partnery/", component: "OurPartners", crumb: "Наши партнеры", title: "Наши партнеры | Айболит в Томске", description: "Партнеры детской медицинской службы «Айболит» в Томске: страховые компании, программы ДМС и организации, с которыми мы сотрудничаем." },
  { path: "/o-nas/pravovaya-informaciya/", component: "PravovyInformation", crumb: "Правовая информация", title: "Правовая информация | Айболит в Томске", description: "Правовая информация детской медицинской службы «Айболит» в Томске: сведения об организации, медицинских услугах и правах пациентов." },
  { path: "/o-nas/vacancies/", component: "Vacancies", crumb: "Вакансии", title: "Вакансии в детской медицинской службе «Айболит» | Томск", description: "Вакансии детской медицинской службы «Айболит» в Томске. Актуальные предложения для врачей и медицинских специалистов." },
  { path: "/o-nas/map-site/", component: "MapSite", crumb: "Карта сайта", title: "Карта сайта детской медицинской службы «Айболит»", description: "Карта сайта «Айболит»: услуги, врачи, программы наблюдения, информация для пациентов и полезные материалы о здоровье детей." },
  { path: "/doctors/", component: "Doctors", crumb: "Педиатры", title: "Педиатры и детские врачи на дом в Томске | Айболит", description: "Педиатры и детские специалисты «Айболит» в Томске. Консультации, выезд врача на дом, патронаж новорожденных и программы наблюдения детей." },
  { path: "/doctors/sadovnikova-elena-gennadevna/", component: "DoctorSadovnikova", crumb: "Садовникова Елена Геннадьевна", title: "Садовникова Елена Геннадьевна — педиатр, аллерголог | Айболит", description: "Садовникова Елена Геннадьевна — педиатр и аллерголог. Консультации и наблюдение детей, включая выезд врача на дом в Томске." },
  { path: "/doctors/petuhova-olga-viktorovna/", component: "DoctorPetuhova", crumb: "Петухова Ольга Викторовна", title: "Петухова Ольга Викторовна — педиатр, гастроэнтеролог | Айболит", description: "Петухова Ольга Викторовна — педиатр и гастроэнтеролог. Консультации, наблюдение ребенка и выезд врача на дом в Томске." },
  { path: "/doctors/shevchenko-anastasiya-nikolaevna/", component: "DoctorShevchenko", crumb: "Шевченко Анастасия Николаевна", title: "Шевченко Анастасия Николаевна — педиатр | Айболит", description: "Шевченко Анастасия Николаевна — врач-педиатр детской медицинской службы «Айболит» в Томске." },
  { path: "/doctors/ostrouhova-natalya-petrovna/", component: "DoctorOstrouhova", crumb: "Остроухова Наталья Петровна", title: "Остроухова Наталья Петровна — педиатр | Айболит", description: "Остроухова Наталья Петровна — врач-педиатр детской медицинской службы «Айболит» в Томске." },
  { path: "/programmy-nablyudeniya-za-zdorovem/", component: "Programs", crumb: "Программы", title: "Программы наблюдения за детьми | Айболит, Томск", description: "Программы наблюдения за здоровьем детей в Томске: регулярное наблюдение педиатра, профилактика, консультации и патронаж новорожденных на дому." },
  { path: "/programmy-nablyudeniya-za-zdorovem/malysh-houm-standart-ot-0-do-2-h-le/", component: "ProgramOne", crumb: "Малыш Хоум от 0 до 2 лет", title: "Программа «Малыш Хоум» от 0 до 2 лет | Айболит", description: "Программа наблюдения за здоровьем ребенка от рождения до 2 лет с педиатром детской медицинской службы «Айболит» в Томске." },
  { path: "/programmy-nablyudeniya-za-zdorovem/zdorovyj-rebenok-houm-standart-ot-2/", component: "ProgramTwo", crumb: "Здоровый ребенок с 2 до 5 лет", title: "Программа «Здоровый ребенок» от 2 до 5 лет | Айболит", description: "Программа наблюдения за здоровьем ребенка от 2 до 5 лет в детской медицинской службе «Айболит» в Томске." },
  { path: "/programmy-nablyudeniya-za-zdorovem/zdorovyj-rebenok-houm-midi-ot-2-h-l/", component: "ProgramThree", crumb: "Педиатр рядом с 5 лет", title: "Программа наблюдения за ребенком | Айболит, Томск", description: "Программа наблюдения за здоровьем ребенка с педиатром детской медицинской службы «Айболит» в Томске." },
  { path: "/chek-up/", component: "ChekUp", crumb: "Чек-апы", title: "Чек-ап ребенка на дому в Томске | Айболит", description: "Комплексный чек-ап здоровья ребенка в Томске. Обследование и консультации детских специалистов на дому в медицинской службе «Айболит»." },
  { path: "/uslugi-i-ceny/", component: "Uslugi", crumb: "Услуги", title: "Вызов педиатра и врача на дом в Томске | Айболит", description: "Вызов педиатра и детского врача на дом в Томске. Анализы на дому, узкие специалисты, программы наблюдения и консультации для детей." },
  { path: "/uslugi-i-ceny/vyzov-pediatra-na-dom/", component: "DoctorNaDom", crumb: "Врач на дом", title: "Вызов педиатра на дом в Томске | Айболит", description: "Вызов педиатра на дом в Томске. Детский врач проведет консультацию ребенка на дому в удобное для вас время." },
  { path: "/uslugi-i-ceny/pediatr/", component: "Pediatr", crumb: "Педиатры", title: "Педиатр на дом в Томске | Айболит", description: "Консультация педиатра для ребенка в Томске. Вызов детского врача на дом в медицинской службе «Айболит»." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/", component: "MedicalCertificates", crumb: "Справки", title: "Медицинские справки для ребенка в Томске | Айболит", description: "Оформление медицинских справок для детей в Томске: справка в школу, детский сад, бассейн, лагерь и другие медицинские документы." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/sanatorno-kurortnaya-karta-dlya-det/", component: "SanatornoKurortnayaKarta", crumb: "Санаторно-курортная карта", title: "Санаторно-курортная карта для ребенка | Айболит", description: "Оформление санаторно-курортной карты для ребенка в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-v-shkolu/", component: "SpravkavShkolu", crumb: "Справка в школу", title: "Справка в школу для ребенка в Томске | Айболит", description: "Оформление медицинской справки в школу для ребенка в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-v-detskii-sad/", component: "SpravkavDetskiiSad", crumb: "Справка в детский сад", title: "Справка в детский сад в Томске | Айболит", description: "Оформление медицинской справки для ребенка в детский сад в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-v-bassein/", component: "SpravkavBassein", crumb: "Справка в бассейн", title: "Справка в бассейн для ребенка в Томске | Айболит", description: "Оформление медицинской справки для посещения бассейна ребенком в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-o-sostoyanii-zdorovya-reben/", component: "SpravkavZdorove", crumb: "Справка о состоянии здоровья", title: "Справка о состоянии здоровья ребенка | Айболит", description: "Оформление справки о состоянии здоровья ребенка в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-poforme-026-u/", component: "SpravkaForma026u", crumb: "Справка — 026у", title: "Медицинская карта 026у для ребенка | Айболит", description: "Оформление медицинской карты 026у для ребенка в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-po-forme-079-u/", component: "MedicinskayaSpravka079u", crumb: "Справка в лагерь — 079у", title: "Справка 079у для ребенка в Томске | Айболит", description: "Оформление медицинской справки 079у для ребенка перед поездкой в детский лагерь." },
  { path: "/pacientam/", component: "ForPatients", crumb: "Пациентам", title: "Информация для пациентов | Айболит в Томске", description: "Информация для пациентов «Айболит»: специалисты, подготовка к исследованиям, способы оплаты, документы и полезные сведения." },
  { path: "/pacientam/prices/", component: "Prices", crumb: "Цены", title: "Цены на услуги детской медицинской службы «Айболит» | Томск", description: "Цены на услуги педиатров и детских специалистов медицинской службы «Айболит» в Томске." },
  { path: "/pacientam/sposoby-oplaty/", component: "SposobyOplaty", crumb: "Способы оплаты", title: "Способы оплаты | Айболит Томск", description: "Информация о способах оплаты медицинских услуг детской медицинской службы «Айболит»." },
  { path: "/pacientam/lekarstvennoe-obespechenie/", component: "LekarstvennoeObespechenie", crumb: "Лекарственное обеспечение", title: "Лекарственное обеспечение | Айболит Томск", description: "Информация о лекарственном обеспечении пациентов детской медицинской службы «Айболит»." },
  { path: "/pacientam/pravila-podgotovki/", component: "PravilaPodgotovki", crumb: "Правила подготовки к исследованиям", title: "Правила подготовки к исследованиям | Айболит", description: "Правила подготовки детей к медицинским исследованиям и анализам в детской медицинской службе «Айболит»." },
  { path: "/pacientam/svedeniya-o-specialistah/", component: "SvedeniyaSpecialistah", crumb: "Сведения о специалистах", title: "Сведения о специалистах | Айболит Томск", description: "Сведения о врачах и медицинских специалистах детской медицинской службы «Айболит» в Томске." },
  { path: "/pacientam/nalogovyj-vychet/", component: "NalogovyjVychet", crumb: "Налоговый вычет", title: "Налоговый вычет за медицинские услуги | Айболит", description: "Информация о получении налогового вычета за медицинские услуги в детской медицинской службе «Айболит»." },
  { path: "/pacientam/otzyvy/", component: "Otzyvy", crumb: "Отзывы", title: "Отзывы о детской медицинской службе «Айболит» | Томск", description: "Отзывы пациентов о детской медицинской службе «Айболит» в Томске." },
  { path: "/blog/", component: "Blog", crumb: "Блог", title: "Блог о здоровье детей | Айболит, Томск", description: "Блог детской медицинской службы «Айболит»: здоровье детей, вакцинация, уход за ребенком, советы педиатров и полезная информация для родителей." },
  { path: "/blog/detskij-nevrolog-na-dom/", component: "Post1", crumb: "Детский невролог", title: "Детский невролог на дом в Томске | Айболит", description: "Когда ребенку необходим детский невролог и в каких случаях можно вызвать специалиста на дом в Томске." },
  { path: "/blog/kalendar-vakcinacija/", component: "Post2", crumb: "Календарь вакцинаций", title: "Календарь вакцинации детей | Айболит, Томск", description: "Календарь вакцинации детей: основные прививки, сроки вакцинации и полезная информация для родителей." },
  { path: "/blog/detskij-hirurg-na-dom/", component: "Post3", crumb: "Детский хирург", title: "Детский хирург на дом в Томске | Айболит", description: "Когда ребенку нужна консультация детского хирурга и когда специалист может приехать на дом." },
  { path: "/blog/patronaj-novorojdennogo/", component: "Post4", crumb: "Патронаж новорожденного", title: "Патронаж новорожденного на дому в Томске | Айболит", description: "Патронаж новорожденного: наблюдение ребенка педиатром на дому и рекомендации родителям." },
  { path: "/blog/adaptaciya-k-detskomu-sadu/", component: "Post5", crumb: "Адаптация в детском саду", title: "Адаптация ребенка к детскому саду | Айболит", description: "Полезные рекомендации родителям по адаптации ребенка к детскому саду." },
  { path: "/blog/kak-pomoch-rebenku-perenesti-jaru/", component: "Post6", crumb: "Как помочь ребенку перенести жару", title: "Как помочь ребенку перенести жару | Айболит", description: "Рекомендации родителям о том, как помочь ребенку безопасно перенести жару." },
  { path: "/blog/detskii-lor-vrach-na-dom/", component: "Post7", crumb: "Детский ЛОР врач на дом", title: "Детский ЛОР на дом в Томске | Айболит", description: "Когда ребенку нужна консультация ЛОР-врача и когда можно вызвать детского ЛОРа на дом." },
  { path: "/blog/vizov-pediatra-na-dom/", component: "Post8", crumb: "Вызов педиатра на дом", title: "Вызов педиатра на дом в Томске | Айболит", description: "В каких случаях ребенку необходим осмотр педиатра и как вызвать детского врача на дом в Томске." },
  { path: "/blog/pentaksim/", component: "Post9", crumb: "Пентаксим", title: "Пентаксим — вакцинация детей | Айболит, Томск", description: "Информация о вакцинации детей вакциной Пентаксим: показания, схема вакцинации и вопросы родителей." },
  { path: "/blog/kompleksnyj-osmotr-rebenka-na-domu/", component: "Post10", crumb: "Чек-ап детский на дому", title: "Комплексный осмотр ребенка на дому в Томске | Айболит", description: "Комплексный осмотр и оценка состояния здоровья ребенка на дому." },
  { path: "/blog/sovetov-vracha-allergologa/", component: "Post11", crumb: "Советы врача-аллерголога", title: "Советы детского аллерголога | Айболит, Томск", description: "Полезные рекомендации детского аллерголога для родителей." },
  { path: "/blog/vnimanie-pollinoz/", component: "Post12", crumb: "Внимание, поллиноз!", title: "Поллиноз у детей: симптомы и рекомендации | Айболит", description: "Поллиноз у детей: основные симптомы, сезонные проявления и рекомендации родителям." },
  { path: "/kontakty/", component: "Contacts", crumb: "Контакты", title: "Контакты детской медицинской службы «Айболит» | Томск", description: "Контакты «Айболит» в Томске: адрес, телефон и информация для записи на вызов педиатра и детских специалистов на дом." },
  { path: "/search/", component: "SearchPage", crumb: "Поиск", title: "Поиск по сайту | Айболит", description: "Поиск информации на сайте детской медицинской службы «Айболит»." }
];

export const routeByPath = new Map(
  routes.map((route) => [normalizeRoutePath(route.path), route]),
);

export function normalizeRoutePath(path: string): string {
  if (!path || path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}/`;
}

export function getRouteBySlug(slug: string[]): SiteRoute | undefined {
  return routeByPath.get(normalizeRoutePath(slug.join("/")));
}

export function getBreadcrumbs(route: SiteRoute) {
  const segments = normalizeRoutePath(route.path).split("/").filter(Boolean);
  return segments.map((segment, index) => {
    const currentPath = `/${segments.slice(0, index + 1).join("/")}/`;
    const currentRoute = routeByPath.get(currentPath);
    return {
      label: currentRoute?.crumb ?? segment.replaceAll("-", " "),
      href: index === segments.length - 1 ? undefined : currentPath,
    };
  });
}
