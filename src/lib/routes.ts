import type { SiteRoute } from "@/types/content";

// SEO-поля и URL перенесены из src/routes/routeConfig.js ветки refactor.
// Контент страниц переносится поэтапно из старых JSX-компонентов.
export const routes = [
  { path: "/", contentKey: "Home", crumb: "Главная", title: "Вызов педиатра на дом в Томске | Айболит", description: "Детская медицинская служба «Айболит» в Томске. Вызов педиатра на дом, консультации детских врачей, программы наблюдения за здоровьем ребёнка. Работаем с 2001 года. Телефон: +7 (3822) 60-92-43." },
  { path: "/o-nas/", contentKey: "About", crumb: "О нас", title: "О нас — детская медицинская служба «Айболит» в Томске", description: "Детская медицинская служба «Айболит» в Томске: педиатр на дом, детские специалисты, вакцинация, анализы на дому и патронаж новорожденных." },
  { path: "/o-nas/kontroliruyushie-organizacii/", contentKey: "ControllingOrgan", crumb: "Контролирующие организации", title: "Контролирующие организации | Айболит, Томск", description: "Контролирующие организации детской медицинской службы «Айболит» в Томске: сведения, контакты и информация для пациентов." },
  { path: "/o-nas/licenzii/", contentKey: "Licenses", crumb: "Лицензии", title: "Лицензия на медицинскую деятельность | Айболит, Томск", description: "Информация о лицензии на медицинскую деятельность детской медицинской службы «Айболит» в Томске. Документы и сведения для пациентов." },
  { path: "/o-nas/documents/", contentKey: "Documents", crumb: "Документы", title: "Документы детской медицинской службы «Айболит» | Томск", description: "Документы детской медицинской службы «Айболит» в Томске: лицензии, правила оказания медицинских услуг и информация для пациентов." },
  { path: "/o-nas/nashi-partnery/", contentKey: "OurPartners", crumb: "Наши партнеры", title: "Наши партнеры | Айболит в Томске", description: "Партнеры детской медицинской службы «Айболит» в Томске: страховые компании, программы ДМС и организации, с которыми мы сотрудничаем." },
  { path: "/o-nas/pravovaya-informaciya/", contentKey: "PravovyInformation", crumb: "Правовая информация", title: "Правовая информация | Айболит в Томске", description: "Правовая информация детской медицинской службы «Айболит» в Томске: сведения об организации, медицинских услугах и правах пациентов." },
  { path: "/o-nas/vacancies/", contentKey: "Vacancies", crumb: "Вакансии", title: "Вакансии в детской медицинской службе «Айболит» | Томск", description: "Вакансии детской медицинской службы «Айболит» в Томске. Актуальные предложения для врачей и медицинских специалистов." },
  { path: "/o-nas/map-site/", contentKey: "MapSite", crumb: "Карта сайта", title: "Карта сайта детской медицинской службы «Айболит»", description: "Карта сайта «Айболит»: услуги, врачи, программы наблюдения, информация для пациентов и полезные материалы о здоровье детей." },
  { path: "/doctors/", contentKey: "Doctors", crumb: "Педиатры", title: "Педиатры и детские врачи на дом в Томске | Айболит", description: "Педиатры и детские специалисты «Айболит» в Томске. Консультации, выезд врача на дом, патронаж новорожденных и программы наблюдения детей." },
  { path: "/doctors/sadovnikova-elena-gennadevna/", contentKey: "DoctorSadovnikova", crumb: "Садовникова Елена Геннадьевна", title: "Садовникова Елена Геннадьевна — педиатр, аллерголог | Айболит", description: "Садовникова Елена Геннадьевна — педиатр и аллерголог. Консультации и наблюдение детей, включая выезд врача на дом в Томске." },
  { path: "/doctors/petuhova-olga-viktorovna/", contentKey: "DoctorPetuhova", crumb: "Петухова Ольга Викторовна", title: "Петухова Ольга Викторовна — педиатр, гастроэнтеролог | Айболит", description: "Петухова Ольга Викторовна — педиатр и гастроэнтеролог. Консультации, наблюдение ребенка и выезд врача на дом в Томске." },
  { path: "/doctors/shevchenko-anastasiya-nikolaevna/", contentKey: "DoctorShevchenko", crumb: "Шевченко Анастасия Николаевна", title: "Шевченко Анастасия Николаевна — педиатр | Айболит", description: "Шевченко Анастасия Николаевна — врач-педиатр детской медицинской службы «Айболит» в Томске." },
  { path: "/doctors/ostrouhova-natalya-petrovna/", contentKey: "DoctorOstrouhova", crumb: "Остроухова Наталья Петровна", title: "Остроухова Наталья Петровна — педиатр | Айболит", description: "Остроухова Наталья Петровна — врач-педиатр детской медицинской службы «Айболит» в Томске." },
  { path: "/programmy-nablyudeniya-za-zdorovem/", contentKey: "Programs", crumb: "Программы", title: "Программы наблюдения за детьми | Айболит, Томск", description: "Программы наблюдения за здоровьем детей в Томске: регулярное наблюдение педиатра, профилактика, консультации и патронаж новорожденных на дому." },
  { path: "/programmy-nablyudeniya-za-zdorovem/malysh-houm-standart-ot-0-do-2-h-le/", contentKey: "ProgramOne", crumb: "Малыш Хоум от 0 до 2 лет", title: "Программа «Малыш Хоум» от 0 до 2 лет | Айболит", description: "Программа наблюдения за здоровьем ребенка от рождения до 2 лет с педиатром детской медицинской службы «Айболит» в Томске." },
  { path: "/programmy-nablyudeniya-za-zdorovem/zdorovyj-rebenok-houm-standart-ot-2/", contentKey: "ProgramTwo", crumb: "Здоровый ребенок с 2 до 5 лет", title: "Программа «Здоровый ребенок» от 2 до 5 лет | Айболит", description: "Программа наблюдения за здоровьем ребенка от 2 до 5 лет в детской медицинской службе «Айболит» в Томске." },
  { path: "/programmy-nablyudeniya-za-zdorovem/zdorovyj-rebenok-houm-midi-ot-2-h-l/", contentKey: "ProgramThree", crumb: "Педиатр рядом с 5 лет", title: "Программа наблюдения за ребенком | Айболит, Томск", description: "Программа наблюдения за здоровьем ребенка с педиатром детской медицинской службы «Айболит» в Томске." },
  { path: "/chek-up/", contentKey: "ChekUp", crumb: "Чек-апы", title: "Чек-ап ребенка на дому в Томске | Айболит", description: "Комплексный чек-ап здоровья ребенка в Томске. Обследование и консультации детских специалистов на дому в медицинской службе «Айболит»." },
  { path: "/uslugi-i-ceny/", contentKey: "Uslugi", crumb: "Услуги", title: "Вызов педиатра и врача на дом в Томске | Айболит", description: "Вызов педиатра и детского врача на дом в Томске. Анализы на дому, узкие специалисты, программы наблюдения и консультации для детей." },
  { path: "/uslugi-i-ceny/vyzov-pediatra-na-dom/", contentKey: "DoctorNaDom", crumb: "Врач на дом", title: "Вызов педиатра на дом в Томске | Айболит", description: "Вызов педиатра на дом в Томске. Детский врач проведет консультацию ребенка на дому в удобное для вас время." },
  { path: "/uslugi-i-ceny/pediatr/", contentKey: "Pediatr", crumb: "Педиатры", title: "Педиатр на дом в Томске | Айболит", description: "Консультация педиатра для ребенка в Томске. Вызов детского врача на дом в медицинской службе «Айболит»." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/", contentKey: "MedicalCertificates", crumb: "Справки", title: "Медицинские справки для ребенка в Томске | Айболит", description: "Оформление медицинских справок для детей в Томске: справка в школу, детский сад, бассейн, лагерь и другие медицинские документы." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/sanatorno-kurortnaya-karta-dlya-det/", contentKey: "SanatornoKurortnayaKarta", crumb: "Санаторно-курортная карта", title: "Санаторно-курортная карта для ребенка | Айболит", description: "Оформление санаторно-курортной карты для ребенка в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-v-shkolu/", contentKey: "SpravkavShkolu", crumb: "Справка в школу", title: "Справка в школу для ребенка в Томске | Айболит", description: "Оформление медицинской справки в школу для ребенка в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-v-detskii-sad/", contentKey: "SpravkavDetskiiSad", crumb: "Справка в детский сад", title: "Справка в детский сад в Томске | Айболит", description: "Оформление медицинской справки для ребенка в детский сад в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-v-bassein/", contentKey: "SpravkavBassein", crumb: "Справка в бассейн", title: "Справка в бассейн для ребенка в Томске | Айболит", description: "Оформление медицинской справки для посещения бассейна ребенком в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-o-sostoyanii-zdorovya-reben/", contentKey: "SpravkavZdorove", crumb: "Справка о состоянии здоровья", title: "Справка о состоянии здоровья ребенка | Айболит", description: "Оформление справки о состоянии здоровья ребенка в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-poforme-026-u/", contentKey: "SpravkaForma026u", crumb: "Справка — 026у", title: "Медицинская карта 026у для ребенка | Айболит", description: "Оформление медицинской карты 026у для ребенка в Томске." },
  { path: "/uslugi-i-ceny/medicinskie-spravki-rebenku/spravka-po-forme-079-u/", contentKey: "MedicinskayaSpravka079u", crumb: "Справка в лагерь — 079у", title: "Справка 079у для ребенка в Томске | Айболит", description: "Оформление медицинской справки 079у для ребенка перед поездкой в детский лагерь." },
  { path: "/pacientam/", contentKey: "ForPatients", crumb: "Пациентам", title: "Информация для пациентов | Айболит в Томске", description: "Информация для пациентов «Айболит»: специалисты, подготовка к исследованиям, способы оплаты, документы и полезные сведения." },
  { path: "/pacientam/prices/", contentKey: "Prices", crumb: "Цены", title: "Цены на услуги детской медицинской службы «Айболит» | Томск", description: "Цены на услуги педиатров и детских специалистов медицинской службы «Айболит» в Томске." },
  { path: "/pacientam/sposoby-oplaty/", contentKey: "SposobyOplaty", crumb: "Способы оплаты", title: "Способы оплаты | Айболит Томск", description: "Информация о способах оплаты медицинских услуг детской медицинской службы «Айболит»." },
  { path: "/pacientam/lekarstvennoe-obespechenie/", contentKey: "LekarstvennoeObespechenie", crumb: "Лекарственное обеспечение", title: "Лекарственное обеспечение | Айболит Томск", description: "Информация о лекарственном обеспечении пациентов детской медицинской службы «Айболит»." },
  { path: "/pacientam/pravila-podgotovki/", contentKey: "PravilaPodgotovki", crumb: "Правила подготовки к исследованиям", title: "Правила подготовки к исследованиям | Айболит", description: "Правила подготовки детей к медицинским исследованиям и анализам в детской медицинской службе «Айболит»." },
  { path: "/pacientam/svedeniya-o-specialistah/", contentKey: "SvedeniyaSpecialistah", crumb: "Сведения о специалистах", title: "Сведения о специалистах | Айболит Томск", description: "Сведения о врачах и медицинских специалистах детской медицинской службы «Айболит» в Томске." },
  { path: "/pacientam/nalogovyj-vychet/", contentKey: "NalogovyjVychet", crumb: "Налоговый вычет", title: "Налоговый вычет за медицинские услуги | Айболит", description: "Информация о получении налогового вычета за медицинские услуги в детской медицинской службе «Айболит»." },
  { path: "/pacientam/otzyvy/", contentKey: "Otzyvy", crumb: "Отзывы", title: "Отзывы о детской медицинской службе «Айболит» | Томск", description: "Отзывы пациентов о детской медицинской службе «Айболит» в Томске." },
  { path: "/blog/", contentKey: "Blog", crumb: "Блог", title: "Блог о здоровье детей | Айболит, Томск", description: "Блог детской медицинской службы «Айболит»: здоровье детей, вакцинация, уход за ребенком, советы педиатров и полезная информация для родителей." },
  { path: "/blog/detskij-nevrolog-na-dom/", contentKey: "Post1", crumb: "Детский невролог", title: "Детский невролог на дом в Томске | Айболит", description: "Когда ребенку необходим детский невролог и в каких случаях можно вызвать специалиста на дом в Томске." },
  { path: "/blog/kalendar-vakcinacija/", contentKey: "Post2", crumb: "Календарь вакцинаций", title: "Календарь вакцинации детей | Айболит, Томск", description: "Календарь вакцинации детей: основные прививки, сроки вакцинации и полезная информация для родителей." },
  { path: "/blog/detskij-hirurg-na-dom/", contentKey: "Post3", crumb: "Детский хирург", title: "Детский хирург на дом в Томске | Айболит", description: "Когда ребенку нужна консультация детского хирурга и когда специалист может приехать на дом." },
  { path: "/blog/patronaj-novorojdennogo/", contentKey: "Post4", crumb: "Патронаж новорожденного", title: "Патронаж новорожденного на дому в Томске | Айболит", description: "Патронаж новорожденного: наблюдение ребенка педиатром на дому и рекомендации родителям." },
  { path: "/blog/adaptaciya-k-detskomu-sadu/", contentKey: "Post5", crumb: "Адаптация в детском саду", title: "Адаптация ребенка к детскому саду | Айболит", description: "Полезные рекомендации родителям по адаптации ребенка к детскому саду." },
  { path: "/blog/kak-pomoch-rebenku-perenesti-jaru/", contentKey: "Post6", crumb: "Как помочь ребенку перенести жару", title: "Как помочь ребенку перенести жару | Айболит", description: "Рекомендации родителям о том, как помочь ребенку безопасно перенести жару." },
  { path: "/blog/detskii-lor-vrach-na-dom/", contentKey: "Post7", crumb: "Детский ЛОР врач на дом", title: "Детский ЛОР на дом в Томске | Айболит", description: "Когда ребенку нужна консультация ЛОР-врача и когда можно вызвать детского ЛОРа на дом." },
  { path: "/blog/vizov-pediatra-na-dom/", contentKey: "Post8", crumb: "Вызов педиатра на дом", title: "Вызов педиатра на дом в Томске | Айболит", description: "В каких случаях ребенку необходим осмотр педиатра и как вызвать детского врача на дом в Томске." },
  { path: "/blog/pentaksim/", contentKey: "Post9", crumb: "Пентаксим", title: "Пентаксим — вакцинация детей | Айболит, Томск", description: "Информация о вакцинации детей вакциной Пентаксим: показания, схема вакцинации и вопросы родителей." },
  { path: "/blog/kompleksnyj-osmotr-rebenka-na-domu/", contentKey: "Post10", crumb: "Чек-ап детский на дому", title: "Комплексный осмотр ребенка на дому в Томске | Айболит", description: "Комплексный осмотр и оценка состояния здоровья ребенка на дому." },
  { path: "/blog/sovetov-vracha-allergologa/", contentKey: "Post11", crumb: "Советы врача-аллерголога", title: "Советы детского аллерголога | Айболит, Томск", description: "Полезные рекомендации детского аллерголога для родителей." },
  { path: "/blog/vnimanie-pollinoz/", contentKey: "Post12", crumb: "Внимание, поллиноз!", title: "Поллиноз у детей: симптомы и рекомендации | Айболит", description: "Поллиноз у детей: основные симптомы, сезонные проявления и рекомендации родителям." },
  { path: "/kontakty/", contentKey: "Contacts", crumb: "Контакты", title: "Контакты детской медицинской службы «Айболит» | Томск", description: "Контакты «Айболит» в Томске: адрес, телефон и информация для записи на вызов педиатра и детских специалистов на дом." },
  { path: "/search/", contentKey: "SearchPage", crumb: "Поиск", title: "Поиск по сайту | Айболит", description: "Поиск информации на сайте детской медицинской службы «Айболит»." }
] satisfies readonly SiteRoute[];

function createRouteIndex(items: readonly SiteRoute[]): Map<string, SiteRoute> {
  const index = new Map<string, SiteRoute>();

  for (const route of items) {
    const path = normalizeRoutePath(route.path);
    if (index.has(path)) {
      throw new Error(`Duplicate route path detected: ${path}`);
    }
    index.set(path, route);
  }

  return index;
}

export const routeByPath = createRouteIndex(routes);

export function normalizeRoutePath(path: string): string {
  const pathname = path.trim().split(/[?#]/, 1)[0].replace(/\/{2,}/g, "/");
  if (!pathname || pathname === "/") return "/";
  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

/** Resolve a URL path regardless of leading/trailing slashes. */
export function getRouteByPath(path: string): SiteRoute | undefined {
  return routeByPath.get(normalizeRoutePath(path));
}

/** Resolve the Next.js catch-all route segments. */
export function getRouteBySlug(slug: readonly string[]): SiteRoute | undefined {
  return getRouteByPath(slug.join("/"));
}

/** Parameters for statically generating every registered non-home page. */
export function getStaticRouteParams(): { slug: string[] }[] {
  return routes
    .filter((route) => route.path !== "/")
    .map((route) => ({ slug: route.path.split("/").filter(Boolean) }));
}

export function getBreadcrumbs(route: SiteRoute) {
  const segments = normalizeRoutePath(route.path).split("/").filter(Boolean);
  return segments.map((segment, index) => {
    const currentPath = `/${segments.slice(0, index + 1).join("/")}/`;
    const currentRoute = routeByPath.get(currentPath);
    return {
      label: currentRoute?.crumb ?? segment.replaceAll("-", " "),
      href: index < segments.length - 1 && currentRoute ? currentPath : undefined,
    };
  });
}
