import type { SiteRoute } from "@/types/content";
import { ROUTES } from "@/config/navigation";

// SEO-поля и URL перенесены из src/routes/routeConfig.js ветки refactor.
// Контент страниц переносится поэтапно из старых JSX-компонентов.
export const routes = [
  { path: ROUTES.home, contentKey: "Home", crumb: "Главная", title: "Вызов педиатра на дом в Томске — детская медицинская служба «Айболит»", description: "Детская медицинская служба «Айболит» в Томске. Вызов педиатра и детских врачей на дом, консультации специалистов и программы наблюдения за здоровьем ребёнка. Работаем с 2001 года.", image: "/chick-doctor-scene.png", keywords: ["вызов педиатра на дом Томск", "детский врач на дом Томск", "вызвать педиатра Томск", "детская медицинская служба Айболит", "детские врачи Томск"] },
  { path: ROUTES.about, contentKey: "About", crumb: "О нас", title: "О нас — детская медицинская служба «Айболит» в Томске", description: "Детская медицинская служба «Айболит» в Томске: педиатр на дом, детские специалисты, вакцинация, анализы на дому и патронаж новорожденных." },
  { path: ROUTES.controllingOrganizations, contentKey: "ControllingOrgan", crumb: "Контролирующие организации", title: "Контролирующие организации | Айболит, Томск", description: "Контролирующие организации детской медицинской службы «Айболит» в Томске: сведения, контакты и информация для пациентов." },
  { path: ROUTES.licenses, contentKey: "Licenses", crumb: "Лицензии", title: "Лицензия на медицинскую деятельность | Айболит, Томск", description: "Информация о лицензии на медицинскую деятельность детской медицинской службы «Айболит» в Томске. Документы и сведения для пациентов." },
  { path: ROUTES.documents, contentKey: "Documents", crumb: "Документы", title: "Документы детской медицинской службы «Айболит» | Томск", description: "Документы детской медицинской службы «Айболит» в Томске: лицензии, правила оказания медицинских услуг и информация для пациентов." },
  { path: ROUTES.partners, contentKey: "OurPartners", crumb: "Наши партнеры", title: "Наши партнеры | Айболит в Томске", description: "Партнеры детской медицинской службы «Айболит» в Томске: страховые компании, программы ДМС и организации, с которыми мы сотрудничаем." },
  { path: ROUTES.legalInformation, contentKey: "PravovyInformation", crumb: "Правовая информация", title: "Правовая информация | Айболит в Томске", description: "Правовая информация детской медицинской службы «Айболит» в Томске: сведения об организации, медицинских услугах и правах пациентов." },
  { path: ROUTES.vacancies, contentKey: "Vacancies", crumb: "Вакансии", title: "Вакансии в детской медицинской службе «Айболит» | Томск", description: "Вакансии детской медицинской службы «Айболит» в Томске. Актуальные предложения для врачей и медицинских специалистов." },
  { path: ROUTES.siteMap, contentKey: "MapSite", crumb: "Карта сайта", title: "Карта сайта детской медицинской службы «Айболит»", description: "Карта сайта «Айболит»: услуги, врачи, программы наблюдения, информация для пациентов и полезные материалы о здоровье детей." },
  { path: ROUTES.doctors, contentKey: "Doctors", crumb: "Педиатры", title: "Педиатры и детские врачи на дом в Томске | Айболит", description: "Педиатры и детские специалисты «Айболит» в Томске. Консультации, выезд врача на дом, патронаж новорожденных и программы наблюдения детей." },
  { path: ROUTES.doctorSadovnikova, contentKey: "DoctorSadovnikova", crumb: "Садовникова Елена Геннадьевна", title: "Садовникова Елена Геннадьевна — педиатр, аллерголог | Айболит", description: "Садовникова Елена Геннадьевна — педиатр и аллерголог. Консультации и наблюдение детей, включая выезд врача на дом в Томске." },
  { path: ROUTES.doctorPetuhova, contentKey: "DoctorPetuhova", crumb: "Петухова Ольга Викторовна", title: "Петухова Ольга Викторовна — педиатр, гастроэнтеролог | Айболит", description: "Петухова Ольга Викторовна — педиатр и гастроэнтеролог. Консультации, наблюдение ребенка и выезд врача на дом в Томске." },
  { path: ROUTES.doctorShevchenko, contentKey: "DoctorShevchenko", crumb: "Шевченко Анастасия Николаевна", title: "Шевченко Анастасия Николаевна — педиатр | Айболит", description: "Шевченко Анастасия Николаевна — врач-педиатр детской медицинской службы «Айболит» в Томске." },
  { path: ROUTES.doctorOstrouhova, contentKey: "DoctorOstrouhova", crumb: "Остроухова Наталья Петровна", title: "Остроухова Наталья Петровна — педиатр | Айболит", description: "Остроухова Наталья Петровна — врач-педиатр детской медицинской службы «Айболит» в Томске." },
  { path: ROUTES.observationPrograms, contentKey: "Programs", crumb: "Программы", title: "Программы наблюдения за детьми | Айболит, Томск", description: "Программы наблюдения за здоровьем детей в Томске: регулярное наблюдение педиатра, профилактика, консультации и патронаж новорожденных на дому." },
  { path: ROUTES.programBaby, contentKey: "ProgramOne", crumb: "Малыш Хоум от 0 до 2 лет", title: "Программа «Малыш Хоум» от 0 до 2 лет | Айболит", description: "Программа наблюдения за здоровьем ребенка от рождения до 2 лет с педиатром детской медицинской службы «Айболит» в Томске." },
  { path: ROUTES.programHealthyChild, contentKey: "ProgramTwo", crumb: "Здоровый ребенок с 2 до 5 лет", title: "Программа «Здоровый ребенок» от 2 до 5 лет | Айболит", description: "Программа наблюдения за здоровьем ребенка от 2 до 5 лет в детской медицинской службе «Айболит» в Томске." },
  { path: ROUTES.programPediatricianNearby, contentKey: "ProgramThree", crumb: "Педиатр рядом с 5 лет", title: "Программа наблюдения за ребенком | Айболит, Томск", description: "Программа наблюдения за здоровьем ребенка с педиатром детской медицинской службы «Айболит» в Томске." },
  { path: ROUTES.checkUp, contentKey: "ChekUp", crumb: "Чек-апы", title: "Чек-ап ребенка на дому в Томске | Айболит", description: "Комплексный чек-ап здоровья ребенка в Томске. Обследование и консультации детских специалистов на дому в медицинской службе «Айболит»." },
  { path: ROUTES.services, contentKey: "Uslugi", crumb: "Услуги", title: "Вызов педиатра и врача на дом в Томске | Айболит", description: "Вызов педиатра и детского врача на дом в Томске. Анализы на дому, узкие специалисты, программы наблюдения и консультации для детей." },
  { path: ROUTES.pediatricianHome, contentKey: "DoctorNaDom", crumb: "Врач на дом", title: "Вызов педиатра на дом в Томске | Айболит", description: "Вызов педиатра на дом в Томске. Детский врач проведет консультацию ребенка на дому в удобное для вас время." },
  { path: ROUTES.pediatrician, contentKey: "Pediatr", crumb: "Педиатры", title: "Педиатр на дом в Томске | Айболит", description: "Консультация педиатра для ребенка в Томске. Вызов детского врача на дом в медицинской службе «Айболит»." },
  { path: ROUTES.medicalCertificates, contentKey: "MedicalCertificates", crumb: "Справки", title: "Медицинские справки для ребенка в Томске | Айболит", description: "Оформление медицинских справок для детей в Томске: справка в школу, детский сад, бассейн, лагерь и другие медицинские документы." },
  { path: ROUTES.sanatoriumCard, contentKey: "SanatornoKurortnayaKarta", crumb: "Санаторно-курортная карта", title: "Санаторно-курортная карта для ребенка | Айболит", description: "Оформление санаторно-курортной карты для ребенка в Томске." },
  { path: ROUTES.schoolCertificate, contentKey: "SpravkavShkolu", crumb: "Справка в школу", title: "Справка в школу для ребенка в Томске | Айболит", description: "Оформление медицинской справки в школу для ребенка в Томске." },
  { path: ROUTES.kindergartenCertificate, contentKey: "SpravkavDetskiiSad", crumb: "Справка в детский сад", title: "Справка в детский сад в Томске | Айболит", description: "Оформление медицинской справки для ребенка в детский сад в Томске." },
  { path: ROUTES.poolCertificate, contentKey: "SpravkavBassein", crumb: "Справка в бассейн", title: "Справка в бассейн для ребенка в Томске | Айболит", description: "Оформление медицинской справки для посещения бассейна ребенком в Томске." },
  { path: ROUTES.healthCertificate, contentKey: "SpravkavZdorove", crumb: "Справка о состоянии здоровья", title: "Справка о состоянии здоровья ребенка | Айболит", description: "Оформление справки о состоянии здоровья ребенка в Томске." },
  { path: ROUTES.certificate026u, contentKey: "SpravkaForma026u", crumb: "Справка — 026у", title: "Медицинская карта 026у для ребенка | Айболит", description: "Оформление медицинской карты 026у для ребенка в Томске." },
  { path: ROUTES.certificate079u, contentKey: "MedicinskayaSpravka079u", crumb: "Справка в лагерь — 079у", title: "Справка 079у для ребенка в Томске | Айболит", description: "Оформление медицинской справки 079у для ребенка перед поездкой в детский лагерь." },
  { path: ROUTES.patients, contentKey: "ForPatients", crumb: "Пациентам", title: "Информация для пациентов | Айболит в Томске", description: "Информация для пациентов «Айболит»: специалисты, подготовка к исследованиям, способы оплаты, документы и полезные сведения." },
  { path: ROUTES.prices, contentKey: "Prices", crumb: "Цены", title: "Цены на услуги детской медицинской службы «Айболит» | Томск", description: "Цены на услуги педиатров и детских специалистов медицинской службы «Айболит» в Томске." },
  { path: ROUTES.paymentMethods, contentKey: "SposobyOplaty", crumb: "Способы оплаты", title: "Способы оплаты | Айболит Томск", description: "Информация о способах оплаты медицинских услуг детской медицинской службы «Айболит»." },
  { path: ROUTES.medicationSupply, contentKey: "LekarstvennoeObespechenie", crumb: "Лекарственное обеспечение", title: "Лекарственное обеспечение | Айболит Томск", description: "Информация о лекарственном обеспечении пациентов детской медицинской службы «Айболит»." },
  { path: ROUTES.preparationRules, contentKey: "PravilaPodgotovki", crumb: "Правила подготовки к исследованиям", title: "Правила подготовки к исследованиям | Айболит", description: "Правила подготовки детей к медицинским исследованиям и анализам в детской медицинской службе «Айболит»." },
  { path: ROUTES.specialists, contentKey: "SvedeniyaSpecialistah", crumb: "Сведения о специалистах", title: "Сведения о специалистах | Айболит Томск", description: "Сведения о врачах и медицинских специалистах детской медицинской службы «Айболит» в Томске." },
  { path: ROUTES.taxDeduction, contentKey: "NalogovyjVychet", crumb: "Налоговый вычет", title: "Налоговый вычет за медицинские услуги | Айболит", description: "Информация о получении налогового вычета за медицинские услуги в детской медицинской службе «Айболит»." },
  { path: ROUTES.reviews, contentKey: "Otzyvy", crumb: "Отзывы", title: "Отзывы о детской медицинской службе «Айболит» | Томск", description: "Отзывы пациентов о детской медицинской службе «Айболит» в Томске." },
  { path: ROUTES.blog, contentKey: "Blog", crumb: "Блог", title: "Блог о здоровье детей | Айболит, Томск", description: "Блог детской медицинской службы «Айболит»: здоровье детей, вакцинация, уход за ребенком, советы педиатров и полезная информация для родителей." },
  { path: ROUTES.blogNeurolog, contentKey: "Post1", crumb: "Детский невролог", title: "Детский невролог на дом в Томске | Айболит", description: "Когда ребенку необходим детский невролог и в каких случаях можно вызвать специалиста на дом в Томске." },
  { path: ROUTES.blogVaccination, contentKey: "Post2", crumb: "Календарь вакцинаций", title: "Календарь вакцинации детей | Айболит, Томск", description: "Календарь вакцинации детей: основные прививки, сроки вакцинации и полезная информация для родителей." },
  { path: ROUTES.blogSurgeon, contentKey: "Post3", crumb: "Детский хирург", title: "Детский хирург на дом в Томске | Айболит", description: "Когда ребенку нужна консультация детского хирурга и когда специалист может приехать на дом." },
  { path: ROUTES.blogNewborn, contentKey: "Post4", crumb: "Патронаж новорожденного", title: "Патронаж новорожденного на дому в Томске | Айболит", description: "Патронаж новорожденного: наблюдение ребенка педиатром на дому и рекомендации родителям." },
  { path: ROUTES.blogKindergarten, contentKey: "Post5", crumb: "Адаптация в детском саду", title: "Адаптация ребенка к детскому саду | Айболит", description: "Полезные рекомендации родителям по адаптации ребенка к детскому саду." },
  { path: ROUTES.blogHeat, contentKey: "Post6", crumb: "Как помочь ребенку перенести жару", title: "Как помочь ребенку перенести жару | Айболит", description: "Рекомендации родителям о том, как помочь ребенку безопасно перенести жару." },
  { path: ROUTES.blogEnt, contentKey: "Post7", crumb: "Детский ЛОР врач на дом", title: "Детский ЛОР на дом в Томске | Айболит", description: "Когда ребенку нужна консультация ЛОР-врача и когда можно вызвать детского ЛОРа на дом." },
  { path: ROUTES.blogPediatrician, contentKey: "Post8", crumb: "Вызов педиатра на дом", title: "Вызов педиатра на дом в Томске | Айболит", description: "В каких случаях ребенку необходим осмотр педиатра и как вызвать детского врача на дом в Томске." },
  { path: ROUTES.blogPentaxim, contentKey: "Post9", crumb: "Пентаксим", title: "Пентаксим — вакцинация детей | Айболит, Томск", description: "Информация о вакцинации детей вакциной Пентаксим: показания, схема вакцинации и вопросы родителей." },
  { path: ROUTES.blogCheckUp, contentKey: "Post10", crumb: "Чек-ап детский на дому", title: "Комплексный осмотр ребенка на дому в Томске | Айболит", description: "Комплексный осмотр и оценка состояния здоровья ребенка на дому." },
  { path: ROUTES.blogAllergist, contentKey: "Post11", crumb: "Советы врача-аллерголога", title: "Советы детского аллерголога | Айболит, Томск", description: "Полезные рекомендации детского аллерголога для родителей." },
  { path: ROUTES.blogPollinosis, contentKey: "Post12", crumb: "Внимание, поллиноз!", title: "Поллиноз у детей: симптомы и рекомендации | Айболит", description: "Поллиноз у детей: основные симптомы, сезонные проявления и рекомендации родителям." },
  { path: ROUTES.contacts, contentKey: "Contacts", crumb: "Контакты", title: "Контакты детской медицинской службы «Айболит» | Томск", description: "Контакты «Айболит» в Томске: адрес, телефон и информация для записи на вызов педиатра и детских специалистов на дом." },
  { path: ROUTES.search, contentKey: "SearchPage", crumb: "Поиск", title: "Поиск по сайту | Айболит", description: "Поиск информации на сайте детской медицинской службы «Айболит»." }
] satisfies readonly SiteRoute[];

function createRouteIndex(items: readonly SiteRoute[]): ReadonlyMap<string, SiteRoute> {
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
  const pathname = path.trim().split(/[?#]/, 1)[0].replace(/\\/{2,}/g, "/");
  if (!pathname || pathname === "/") return "/";
  return `/${pathname.replace(/^\\/+|\\/+$/g, "")}/`;
}

/** Resolve a URL path regardless of leading/trailing or repeated slashes. */
export function getRouteByPath(path: string): SiteRoute | undefined {
  return routeByPath.get(normalizeRoutePath(path));
}

/** Resolve the Next.js catch-all route segments. */
export function getRouteBySlug(slug: readonly string[]): SiteRoute | undefined {
  return getRouteByPath(slug.join("/"));
}

/** Static params for all registered pages except the separately rendered homepage. */
export function getStaticRouteParams(): { slug: string[] }[] {
  return routes
    .filter((route) => normalizeRoutePath(route.path) !== "/")
    .map((route) => ({ slug: normalizeRoutePath(route.path).split("/").filter(Boolean) }));
}

/**
 * Build breadcrumbs only from registered pages.
 * The nearest registered parent is used, so URL segments never become fake links.
 */
export function getBreadcrumbs(route: SiteRoute) {
  const currentPath = normalizeRoutePath(route.path);
  const ancestors = routes
    .filter((candidate) => {
      const candidatePath = normalizeRoutePath(candidate.path);
      return candidatePath !== currentPath &&
        candidatePath !== "/" &&
        currentPath.startsWith(candidatePath);
    })
    .sort((a, b) => normalizeRoutePath(a.path).length - normalizeRoutePath(b.path).length);

  return [
    { label: "Главная", href: "/" },
    ...ancestors.map((ancestor) => ({
      label: ancestor.crumb,
      href: normalizeRoutePath(ancestor.path),
    })),
    { label: route.crumb },
  ];
}
