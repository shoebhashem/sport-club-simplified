import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export default function PricingSection() {
  const { t } = useTranslation();
  const tiers = t("pricing.tiers", { returnObjects: true }) as PricingTier[];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((tier, i) => {
            const highlighted = false;
            const hasPeriod = tier.price !== "Contact us" && tier.price !== "Kontakta oss" && tier.price !== "Kontakt oss" && tier.price !== "Kontakt os" && tier.price !== "Kontaktieren Sie uns" && tier.price !== "Contactez-nous" && tier.price !== "Contattaci" && tier.price !== "Contáctanos" && i > 0;
            return (
              <div
                key={i}
                className="rounded-2xl p-6 border flex flex-col"
                style={{
                  background: highlighted ? "hsl(var(--surface-elevated))" : "hsl(0 0% 100% / 0.03)",
                  borderColor: highlighted ? "hsl(var(--brand) / 0.40)" : "hsl(0 0% 100% / 0.08)",
                  boxShadow: highlighted ? "var(--shadow-md)" : "none",
                }}
              >
                {highlighted && (
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest mb-3 self-start px-2.5 py-1 rounded-full"
                    style={{ background: "hsl(var(--brand) / 0.15)", color: "hsl(var(--brand))" }}
                  >
                    {t("pricing.popular")}
                  </span>
                )}
                <h3 className="font-display font-bold text-lg mb-1" style={{ color: "hsl(0 0% 100%)" }}>
                  {tier.name}
                </h3>
                <div className="mb-3">
                  <span className="font-display font-black text-3xl" style={{ color: "hsl(0 0% 100%)" }}>
                    {tier.price}
                  </span>
                  {hasPeriod && (
                    <span className="text-sm" style={{ color: "hsl(var(--foreground-muted))" }}>{t("pricing.perMonth")}</span>
                  )}
                </div>
                <p className="text-sm mb-5" style={{ color: "hsl(var(--foreground-muted))" }}>
                  {tier.description}
                </p>
                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={15} className="shrink-0" style={{ color: "hsl(var(--brand))" }} />
                      <span style={{ color: "hsl(0 0% 100% / 0.80)" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p
          className="text-center text-sm mt-8 max-w-lg mx-auto"
          style={{ color: "hsl(var(--foreground-muted))" }}
        >
          {t("pricing.footnote")}
        </p>
      </div>
    </section>
  );
}
