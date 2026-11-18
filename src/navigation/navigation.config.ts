import { ROUTES } from "@/routing/paths";
import type { RoutePath } from "@/routing/paths";

/** Navigation nodes reference routes; visible labels live in route-registry. */
export type NavigationItem = {
  readonly href: RoutePath;
  readonly children?: readonly NavigationItem[];
};

/** Shared menu tree for desktop and mobile navigation. */
export const MAIN_NAVIGATION = [
  {
    href: ROUTES.about,
    children: [
      { href: ROUTES.about },
      { href: ROUTES.controllingOrganizations },
      { href: ROUTES.licenses },
      { href: ROUTES.documents },
      { href: ROUTES.partners },
      { href: ROUTES.legalInformation },
      { href: ROUTES.vacancies },
    ],
  },
  { href: ROUTES.services },
  {
    href: ROUTES.observationPrograms,
    children: [
      { href: ROUTES.observationPrograms },
      { href: ROUTES.programBaby },
      { href: ROUTES.programHealthyChild },
      { href: ROUTES.programPediatricianNearby },
    ],
  },
  {
    href: ROUTES.doctors,
    children: [
      { href: ROUTES.doctors },
      { href: ROUTES.doctorSadovnikova },
      { href: ROUTES.doctorPetuhova },
      { href: ROUTES.doctorShevchenko },
      { href: ROUTES.doctorOstrouhova },
    ],
  },
  {
    href: ROUTES.patients,
    children: [
      { href: ROUTES.patients },
      { href: ROUTES.prices },
      { href: ROUTES.paymentMethods },
      { href: ROUTES.medicationSupply },
      { href: ROUTES.preparationRules },
      { href: ROUTES.specialists },
      { href: ROUTES.taxDeduction },
      { href: ROUTES.reviews },
    ],
  },
  { href: ROUTES.contacts },
] as const satisfies readonly NavigationItem[];
