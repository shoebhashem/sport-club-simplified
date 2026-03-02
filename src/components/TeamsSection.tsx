import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function TeamsSection() {
  const { t } = useTranslation();
  const benefits = t("teams.benefits", { returnObjects: true }) as string[];
  const teams = [
    { key: "teamA", label: t("teams.teamA") },
    { key: "teamB", label: t("teams.teamB") },
    { key: "teamC", label: t("teams.teamC") },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual card */}
          <div className="order-2 lg:order-1">
            <div
              className="rounded-3xl p-10 border relative"
              style={{
                background: "hsl(var(--surface))",
                borderColor: "hsl(0 0% 100% / 0.08)",
              }}
            >
              {/* Mini club diagram */}
              <div className="text-center mb-6">
                <img
                  src="/favicon.ico"
                  alt="Clubnizer"
                  className="w-16 h-16 rounded-2xl mx-auto object-contain"
                />
                <p
                  className="mt-2 font-display font-bold text-lg"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  {t("teams.yourClub")}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {teams.map((team) => (
                  <div
                    key={team.key}
                    className="rounded-xl p-3 text-center"
                    style={{
                      background: "hsl(0 0% 100% / 0.05)",
                      border: "1px solid hsl(0 0% 100% / 0.08)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg mx-auto mb-1.5 flex items-center justify-center text-xs font-bold font-display"
                      style={{ background: "hsl(var(--brand) / 0.20)", color: "hsl(var(--brand))" }}
                    >
                      {team.label.slice(-1)}
                    </div>
                    <span className="text-xs font-medium font-display" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
                      {team.label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 rounded-xl p-4"
                style={{
                  background: "hsl(0 0% 100% / 0.04)",
                  border: "1px solid hsl(0 0% 100% / 0.06)",
                }}
              >
                <p className="text-xs font-medium text-center font-display" style={{ color: "hsl(0 0% 100% / 0.50)" }}>
                  {t("teams.diagramCaption")}
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="section-label">{t("teams.label")}</span>
            <h2 className="section-heading mb-5">
              {t("teams.heading")}{" "}
              <span style={{ color: "hsl(var(--brand))" }}>{t("teams.headingHighlight")}</span>
            </h2>
            <p className="section-sub mb-8">
              {t("teams.description")}
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                    style={{ color: "hsl(var(--brand))" }}
                  />
                  <span className="text-base" style={{ color: "hsl(0 0% 100% / 0.80)" }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
