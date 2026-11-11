export type PageContentKey =
  | "Home"
  | "About"
  | "ControllingOrgan"
  | "Licenses"
  | "Documents"
  | "OurPartners"
  | "PravovyInformation"
  | "Vacancies"
  | "MapSite"
  | "Doctors"
  | "DoctorSadovnikova"
  | "DoctorPetuhova"
  | "DoctorShevchenko"
  | "DoctorOstrouhova"
  | "Programs"
  | "ProgramOne"
  | "ProgramTwo"
  | "ProgramThree"
  | "ChekUp"
  | "Uslugi"
  | "DoctorNaDom"
  | "Pediatr"
  | "MedicalCertificates"
  | "SanatornoKurortnayaKarta"
  | "SpravkavShkolu"
  | "SpravkavDetskiiSad"
  | "SpravkavBassein"
  | "SpravkavZdorove"
  | "SpravkaForma026u"
  | "MedicinskayaSpravka079u"
  | "ForPatients"
  | "Prices"
  | "SposobyOplaty"
  | "LekarstvennoeObespechenie"
  | "PravilaPodgotovki"
  | "SvedeniyaSpecialistah"
  | "NalogovyjVychet"
  | "Otzyvy"
  | "Blog"
  | "Post1"
  | "Post2"
  | "Post3"
  | "Post4"
  | "Post5"
  | "Post6"
  | "Post7"
  | "Post8"
  | "Post9"
  | "Post10"
  | "Post11"
  | "Post12"
  | "Contacts"
  | "SearchPage";

export type SiteRoute = {
  path: `/${string}/` | "/";
  contentKey: PageContentKey;
  crumb: string;
  title: string;
  description: string;
  image?: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};
