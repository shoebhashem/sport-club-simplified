import { Users, Calendar, ClipboardCheck, CreditCard, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

const FEATURE_ICONS = [
  { icon: Users, iconType: "brand" },
  { icon: Calendar, iconType: "blue" },
  { icon: ClipboardCheck, iconType: "brand" },
  { icon: CreditCard, iconType: "blue" },
  { icon: MessageSquare, iconType: "brand" },
];

interface FeatureItem {
  title: string;
  description: string;
  points: string[];
  note?: string;
}

export default function FeaturesSection() {
  const { t } = useTranslation();
  const items = t("features.items", { returnObjects: true }) as FeatureItem[];

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{t("features.label")}</span>
          <h2 className="section-heading mb-4">
            {t("features.heading")}{" "}
            <span style={{ color: "hsl(var(--brand))" }}>{t("features.headingHighlight")}</span>
          </h2>
          <p className="section-sub">
            {t("features.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((feature, i) => {
            const { icon: Icon, iconType } = FEATURE_ICONS[i] || FEATURE_ICONS[0];
            const isBrand = iconType === "brand";
            return (
              <article key={i} className="feature-card">
                <div className={isBrand ? "feature-icon" : "feature-icon-blue"}>
                  <Icon
                    size={22}
                    style={{ color: isBrand ? "hsl(var(--navy))" : "hsl(var(--accent-blue))" }}
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--foreground-muted))" }}>
                  {feature.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {feature.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: isBrand ? "hsl(var(--brand))" : "hsl(var(--accent-blue))" }}
                      />
                      <span style={{ color: "hsl(0 0% 100% / 0.80)" }}>{point}</span>
                    </li>
                  ))}
                </ul>
                {feature.note && (
                  <p
                    className="text-xs leading-relaxed mt-3 pt-3 border-t italic"
                    style={{ borderColor: "hsl(0 0% 100% / 0.08)", color: "hsl(var(--foreground-muted))" }}
                  >
                    {feature.note}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
