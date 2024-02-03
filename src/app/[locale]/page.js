import styles from "./styles.module.css";

import Link from "next/link";

import { useTranslations } from "next-intl";
import { FiArrowDown } from "react-icons/fi";

export default function Index({ params: { locale } }) {
  const t = useTranslations("Index");

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h1 className={styles.title}>{t("title")}</h1>
        <h2 className={styles.headline}>{t("healine")}</h2>

        <Link href={`${locale}/maintenance`} className={styles.link}>
          <FiArrowDown />
        </Link>
      </section>
    </main>
  );
}
