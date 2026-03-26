import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PricingSection() {
  const { t } = useTranslation();
  const features = t("pricing.freeFeatures", { returnObjects: true }) as string[];

  return (
    <section id="pricing" className="py-24 md:py-32" style={{ background: "hsl(var(--surface))" }}>
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">{t("pricing.label")}</span>
          <h2 className="section-heading mb-4">
            {t("pricing.heading")}{" "}
            <span style={{ color: "hsl(var(--brand))" }}>{t("pricing.headingHighlight")}</span>
          </h2>
          <p className="section-sub">
            {t("pricing.subheading")}
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div
            className="rounded-2xl p-8 border flex flex-col items-center text-center"
            style={{
              background: "hsl(var(--surface-elevated))",
              borderColor: "hsl(var(--brand) / 0.40)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <span
              className="text-[11px] font-bold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
              style={{ background: "hsl(142 71% 45% / 0.15)", color: "hsl(142 71% 45%)" }}
            >
              {t("pricing.freeBadge")}
            </span>

            <div className="mb-2">
              <span className="font-display font-black text-5xl" style={{ color: "hsl(0 0% 100%)" }}>
                {t("pricing.freePrice")}
              </span>
            </div>

            <p className="text-base mb-6" style={{ color: "hsl(var(--foreground-muted))" }}>
              {t("pricing.freeDescription")}
            </p>

            <ul className="space-y-3 w-full text-left mb-6">
              {features.map((f, j) => (
                <li key={j} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle size={16} className="shrink-0" style={{ color: "hsl(var(--brand))" }} />
                  <span style={{ color: "hsl(0 0% 100% / 0.80)" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
