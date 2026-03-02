import heroBg from "@/assets/hero-bg.jpg";
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
          <div className="section-label mb-6">
            {t("hero.label")}
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

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://app.clubnizer.com" className="btn-primary text-base">
              {t("hero.ctaPrimary")} <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-hero-outline text-base">
              {t("hero.ctaSecondary")}
            </a>
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
                <div className="text-sm" style={{ color: "hsl(0 0% 100% / 0.45)" }}>
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
        <span className="text-xs font-medium uppercase tracking-widest font-display">{t("hero.scroll")}</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
