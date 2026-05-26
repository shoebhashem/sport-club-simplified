import heroBg from "@/assets/hero-bg.jpg";
import {
    APP_STORE_URL_ANDROID,
    APP_STORE_URL_IOS,
    WEB_APP_URL,
} from "@/lib/app-links";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
      aria-label="Hero"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.08 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 60%, hsl(43 100% 62% / 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative site-container pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <div className="section-label mb-4">{t("hero.label")}</div>

          {/* Free badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
            style={{
              background: "hsl(142 71% 45% / 0.15)",
              color: "hsl(142 71% 45%)",
              border: "1px solid hsl(142 71% 45% / 0.30)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "hsl(142 71% 45%)" }}
            />
            {t("hero.freeBadge")}
          </div>

          <h1
            className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            {t("hero.titleLine1")}
            <span
              className="block"
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("hero.titleLine2")}
            </span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: "hsl(0 0% 100% / 0.65)" }}
          >
            {t("hero.description")}
          </p>

          <div className="flex flex-col gap-4">
            {/* App store download badges */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a
                href={APP_STORE_URL_IOS}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.downloadIos")}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: "hsl(0 0% 100%)",
                  color: "hsl(0 0% 0%)",
                  boxShadow: "0 2px 12px hsl(0 0% 0% / 0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                {/* Apple logo */}
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14.95 11.55c-.02-2.42 1.98-3.58 2.07-3.64-1.13-1.65-2.88-1.87-3.5-1.9-1.49-.15-2.9.88-3.66.88-.76 0-1.93-.86-3.18-.84-1.63.02-3.14.95-3.98 2.41C.93 11.58 2.2 16.88 3.86 19.7c.82 1.39 1.79 2.94 3.06 2.89 1.23-.05 1.7-.79 3.19-.79 1.49 0 1.92.79 3.22.77 1.33-.02 2.16-1.41 2.97-2.8.94-1.61 1.33-3.17 1.35-3.25-.03-.01-2.68-1.03-2.7-4.97zM12.48 4.09c.68-.83 1.14-1.97 1.01-3.12-.98.04-2.16.65-2.86 1.47-.63.73-1.18 1.9-1.03 3.01 1.09.08 2.2-.56 2.88-1.36z" />
                </svg>
                <span>
                  <span className="block text-[10px] leading-none opacity-75 mb-0.5">
                    {t("hero.downloadOn")}
                  </span>
                  <span className="block font-bold text-base leading-tight">
                    {t("hero.appStore")}
                  </span>
                </span>
              </a>

              <a
                href={APP_STORE_URL_ANDROID}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("hero.downloadAndroid")}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: "hsl(0 0% 100%)",
                  color: "hsl(0 0% 0%)",
                  boxShadow: "0 2px 12px hsl(0 0% 0% / 0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.9";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                {/* Google Play icon */}
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M1.5 1.5L11.5 11L1.5 20.5V1.5Z" fill="#EA4335" />
                  <path d="M1.5 1.5L11.5 11L16.5 6L1.5 1.5Z" fill="#FBBC05" />
                  <path
                    d="M1.5 20.5L11.5 11L16.5 16L1.5 20.5Z"
                    fill="#34A853"
                  />
                  <path
                    d="M16.5 6L11.5 11L16.5 16L19.5 11L16.5 6Z"
                    fill="#4285F4"
                  />
                </svg>
                <span>
                  <span className="block text-[10px] leading-none opacity-75 mb-0.5">
                    {t("hero.getItOn")}
                  </span>
                  <span className="block font-bold text-base leading-tight">
                    {t("hero.googlePlay")}
                  </span>
                </span>
              </a>
            </div>

            {/* Web app fallback */}
            <div>
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-80"
                style={{ color: "hsl(0 0% 100% / 0.50)" }}
              >
                {t("hero.orUseWeb")} <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            className="mt-14 pt-10 grid grid-cols-3 gap-6 max-w-lg"
            style={{ borderTop: "1px solid hsl(0 0% 100% / 0.10)" }}
          >
            {[
              { value: t("hero.stat1Value"), label: t("hero.stat1Label") },
              { value: t("hero.stat2Value"), label: t("hero.stat2Label") },
              { value: t("hero.stat3Value"), label: t("hero.stat3Label") },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display font-bold text-xl md:text-2xl mb-0.5"
                  style={{ color: "hsl(var(--brand))" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "hsl(0 0% 100% / 0.45)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problem"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity hover:opacity-80"
        style={{ color: "hsl(0 0% 100% / 0.30)" }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium uppercase tracking-widest font-display">
          {t("hero.scroll")}
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
