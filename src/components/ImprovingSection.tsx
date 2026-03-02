import { Zap, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ImprovingSection() {
  const { t } = useTranslation();
  const contactTopics = t("improving.contactTopics", { returnObjects: true }) as string[];

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--surface))" }}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Continuously Improving */}
          <div>
            <span className="section-label">{t("improving.roadmapLabel")}</span>
            <h2 className="section-heading mb-5">{t("improving.roadmapHeading")}</h2>
            <p className="section-sub mb-6">
              {t("improving.roadmapDescription")}
            </p>
            <p className="section-sub mb-8">
              {t("improving.roadmapDescription2")}
            </p>

            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "hsl(var(--surface-elevated))",
                borderColor: "hsl(0 0% 100% / 0.08)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="feature-icon w-10 h-10">
                  <Zap size={18} style={{ color: "hsl(var(--navy))" }} />
                </div>
                <h3 className="font-display font-bold text-base" style={{ color: "hsl(0 0% 100%)" }}>
                  {t("improving.feedbackTitle")}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                {t("improving.feedbackDescription")}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="section-label-blue">{t("improving.contactLabel")}</span>
            <h2 className="section-heading mb-5">{t("improving.contactHeading")}</h2>
            <p className="section-sub mb-8">
              {t("improving.contactDescription")}
            </p>

            <a
              href="mailto:support@clubnizer.com"
              className="feature-card flex items-center gap-4 group cursor-pointer no-underline"
              style={{ textDecoration: "none" }}
            >
              <div className="feature-icon-blue w-12 h-12 shrink-0">
                <Mail size={22} style={{ color: "hsl(var(--accent-blue))" }} />
              </div>
              <div>
                <p className="font-display font-semibold text-base mb-0.5" style={{ color: "hsl(0 0% 100%)" }}>
                  support@clubnizer.com
                </p>
                <p className="text-sm" style={{ color: "hsl(var(--foreground-muted))" }}>
                  {t("improving.emailLabel")}
                </p>
              </div>
            </a>

            <div className="mt-6 space-y-3">
              {contactTopics.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "hsl(var(--accent-blue))" }}
                  />
                  <span style={{ color: "hsl(var(--foreground-muted))" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
