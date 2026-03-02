import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/i18n/config";

export default function SEOHead() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const baseUrl = "https://clubnizer.com";

  return (
    <Helmet>
      <html lang={lang} />
      <title>{t("seo.title")}</title>
      <meta name="description" content={t("seo.description")} />
      <meta name="keywords" content={t("seo.keywords")} />

      {/* Open Graph */}
      <meta property="og:title" content={t("seo.title")} />
      <meta property="og:description" content={t("seo.description")} />
      <meta property="og:locale" content={lang} />
      <meta property="og:url" content={`${baseUrl}/${lang}`} />
      <meta property="og:site_name" content="Clubnizer" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t("seo.title")} />
      <meta name="twitter:description" content={t("seo.description")} />

      {/* Canonical */}
      <link rel="canonical" href={`${baseUrl}/${lang}`} />

      {/* Hreflang tags for all supported languages */}
      {SUPPORTED_LANGUAGES.map((l) => (
        <link
          key={l.code}
          rel="alternate"
          hrefLang={l.hreflang}
          href={`${baseUrl}/${l.code}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
    </Helmet>
  );
}
