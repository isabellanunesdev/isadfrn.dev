import "./globals.css";

import { Poppins } from "next/font/google";
import { useTranslations } from "next-intl";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400"]
});

export default function LocaleLayout({ children, params: { locale } }) {
  const t = useTranslations("Index");

  return (
    <html lang={locale} className={poppins.className}>
      <head>
        <link rel="icon" href="/images/icon.png" sizes="any" />
        <title>{t("page-title")}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
