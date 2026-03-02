import { Shield, Lock, Eye, FileText, Server, Key } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocalePath } from "@/hooks/use-locale-path";

const SECURITY_ICONS = [Shield, Server, Lock, Eye, Key, FileText];

interface SecurityItem {
  title: string;
  description: string;
}

export default function SecuritySection() {
  const { t } = useTranslation();
  const lp = useLocalePath();
  const items = t("security.items", { returnObjects: true }) as SecurityItem[];

  return (
    <section id="security" className="py-24 md:py-32">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label-blue">{t("security.label")}</span>
          <h2 className="section-heading mb-4">{t("security.heading")}</h2>
          <p className="section-sub">
            {t("security.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((point, i) => {
            const Icon = SECURITY_ICONS[i] || Shield;
            return (
              <div key={i} className="feature-card flex flex-col gap-4">
                <div className="feature-icon-blue w-11 h-11 shrink-0">
                  <Icon size={20} style={{ color: "hsl(var(--accent-blue))" }} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base mb-1.5" style={{ color: "hsl(0 0% 100%)" }}>
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="text-center text-sm mt-10 max-w-xl mx-auto"
          style={{ color: "hsl(var(--foreground-muted))" }}
        >
          {t("security.legalNote")}{" "}
          <a href={lp("/legal/privacy")} style={{ color: "hsl(var(--accent-blue))" }} className="underline underline-offset-2">
            {t("security.privacyPolicy")}
          </a>{" "}
          {t("security.and")}{" "}
          <a href={lp("/legal/terms")} style={{ color: "hsl(var(--accent-blue))" }} className="underline underline-offset-2">
            {t("security.termsOfService")}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
