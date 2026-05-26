import { APP_STORE_URL_ANDROID, APP_STORE_URL_IOS } from "@/lib/app-links";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32">
      <div className="site-container">
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{ background: "hsl(var(--surface))" }}
        >
          {/* Decorative glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, hsl(var(--brand) / 0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative px-10 py-16 md:py-24 text-center">
            <span className="section-label mb-6">{t("cta.label")}</span>

            <h2
              className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              {t("cta.headingLine1")}
              <br />
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("cta.headingLine2")}
              </span>
            </h2>

            <p
              className="text-lg max-w-xl mx-auto mb-10"
              style={{ color: "hsl(0 0% 100% / 0.60)" }}
            >
              {t("cta.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={APP_STORE_URL_IOS}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                {t("cta.ctaIos")} <ArrowRight size={18} />
              </a>
              <a
                href={APP_STORE_URL_ANDROID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-outline text-base"
              >
                {t("cta.ctaAndroid")} <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-4">
              <a
                href="#download"
                className="text-sm transition-opacity hover:opacity-80"
                style={{ color: "hsl(0 0% 100% / 0.40)" }}
              >
                {t("cta.ctaSecondary")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
