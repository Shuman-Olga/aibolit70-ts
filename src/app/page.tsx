import { getRouteByPath } from "@/routing";
import { createPageMetadata } from "@/lib/seo";
import styles from "./home.module.scss";
import { HomeHero } from "@/components/home/home-hero";
import { HomeServices } from "@/components/home/home-services";
import { HomeDoctors } from "@/components/home/home-doctors";
import { HomeProcess } from "@/components/home/home-process";
import { HomeTrust } from "@/components/home/home-trust";
import { HomeReviews } from "@/components/home/home-reviews";
import { HomeFaq } from "@/components/home/home-faq";
import { HomeCta } from "@/components/home/home-cta";

const homeRoute = getRouteByPath("/");
if (!homeRoute) {
  throw new Error("Homepage route is missing from the route registry.");
}
export const metadata = createPageMetadata(homeRoute);

export default function HomePage() {
  return (
    <main className={styles.home}>
      <HomeHero />
      <HomeServices />
      <HomeDoctors />
      <HomeProcess />
      <HomeTrust />
      <HomeReviews />
      <HomeFaq />
      <HomeCta />
    </main>
  );
}
