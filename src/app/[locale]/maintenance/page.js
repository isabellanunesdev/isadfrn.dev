import styles from "./styles.module.css";

import Link from "next/link";

import { useTranslations } from "next-intl";
import { FiLinkedin, FiTwitter, FiYoutube, FiGithub } from "react-icons/fi";

export default function Index() {
  const t = useTranslations("Maintenance");

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <p className={styles.message}>{t("message")}</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link
              href="https://www.linkedin.com/in/isadfrn/"
              className={styles.link}
              target="_blank"
            >
              <FiLinkedin />
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              href="https://twitter.com/isadfrn"
              className={styles.link}
              target="_blank"
            >
              <FiTwitter />
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              href="https://www.youtube.com/channel/UCgCWh9ELWp38Yu1PTU6rcSA"
              className={styles.link}
              target="_blank"
            >
              <FiYoutube />
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              href="https://github.com/isadfrn"
              className={styles.link}
              target="_blank"
            >
              <FiGithub />
            </Link>
          </li>
        </ul>
        <p className={styles.thanks}>{t("thanks")}</p>
      </section>
    </main>
  );
}
