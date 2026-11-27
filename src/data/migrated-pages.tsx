import type { PageContentKey } from "@/types/content";
import type { MigratedPage } from "@/types/migrated-page";
import { aboutPages } from "@/data/migrated-pages/about";
import { servicesPages } from "@/data/migrated-pages/services";
import { doctorsPages } from "@/data/migrated-pages/doctors";
import { programsPages } from "@/data/migrated-pages/programs";

/** Page content grouped by site section; text and page keys are preserved. */
export const MIGRATED_PAGES: Partial<Record<PageContentKey, MigratedPage>> = {
  ...aboutPages,
  ...servicesPages,
  ...doctorsPages,
  ...programsPages,
};
