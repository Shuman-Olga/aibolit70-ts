import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_DOCTORS } from "@/data/home";
import styles from "@/app/home.module.scss";

export function HomeDoctors() {
  return (
      <section className={`container ${styles.doctorsSection}`} aria-labelledby="doctors-title">
              <div className={styles.sectionHeading}>
                <h2 id="doctors-title">Наши <em>педиатры</em></h2>
                <p>Познакомьтесь с врачами, которые заботятся о здоровье детей.</p>
              </div>
              <div className={styles.doctorsGrid}>
                {HOME_DOCTORS.map((doctor) => (
                  <article className={styles.doctorCard} key={doctor.href}>
                    <Link href={doctor.href} className={styles.doctorPhotoLink} aria-label={`Подробнее о враче: ${doctor.name}`}>
                      <Image src={doctor.image} alt={doctor.name} width={320} height={360} sizes="(max-width: 720px) 82vw, (max-width: 980px) 42vw, 240px" className={styles.doctorPhoto} />
                    </Link>
                    <div className={styles.doctorInfo}>
                      <h3><Link href={doctor.href}>{doctor.name}</Link></h3>
                      <p>{doctor.role}</p>
                      <Link href={doctor.href} className={styles.doctorMore}>Подробнее о враче <ArrowRight size={15} /></Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
  );
}
