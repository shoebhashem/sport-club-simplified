import { useTranslation } from "react-i18next";

export default function FounderSection() {
  const { t } = useTranslation();

  return (
    <section
      id="story"
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--surface))" }}
    >
      <div className="site-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">{t("founder.label")}</span>
            <h2 className="section-heading">{t("founder.heading")}</h2>
          </div>

          <div
            className="rounded-3xl p-10 md:p-14 border relative overflow-hidden"
            style={{
              background: "hsl(var(--surface-elevated))",
              borderColor: "hsl(0 0% 100% / 0.08)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 right-8 font-display font-black text-9xl leading-none select-none pointer-events-none"
              style={{ color: "hsl(var(--brand) / 0.10)" }}
            >
              "
            </div>

            <div className="relative space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                {t("founder.paragraph1")}
              </p>

              <p className="text-lg leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                {t("founder.paragraph2")}
              </p>

              <p className="text-lg leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                {t("founder.paragraph3")}
              </p>

              <div
                className="pt-6 mt-4 border-t"
                style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
              >
                <p
                  className="text-xl font-display font-bold leading-snug"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  {t("founder.goalPrefix")}{" "}
                  <span style={{ color: "hsl(var(--brand))" }}>
                    {t("founder.goalHighlight")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
