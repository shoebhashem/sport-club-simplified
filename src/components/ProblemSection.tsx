import { XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProblemSection() {
  const { t } = useTranslation();
  const problems = t("problem.problems", { returnObjects: true }) as string[];

  return (
    <section
      id="problem"
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--surface))" }}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="section-label">{t("problem.label")}</span>
            <h2 className="section-heading mb-5">
              {t("problem.heading")}{" "}
              <span style={{ color: "hsl(var(--brand))" }}>{t("problem.headingHighlight")}</span>
            </h2>
            <p className="section-sub mb-8">
              {t("problem.description")}
            </p>
            <p className="section-sub">
              {t("problem.descriptionSecondary")}
            </p>
          </div>

          {/* Problem list */}
          <div
            className="rounded-2xl p-8 border"
            style={{
              background: "hsl(var(--surface-elevated))",
              borderColor: "hsl(0 0% 100% / 0.08)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <h3
              className="font-display font-bold text-base mb-5 uppercase tracking-widest"
              style={{ color: "hsl(var(--foreground-muted))" }}
            >
              {t("problem.listTitle")}
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="problem-item">
                  <XCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                    style={{ color: "hsl(0 70% 60%)" }}
                  />
                  <span className="text-base leading-snug" style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                    {problem}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 pt-6 border-t"
              style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
            >
              <p
                className="text-sm font-semibold font-display"
                style={{ color: "hsl(var(--brand))" }}
              >
                {t("problem.tagline")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
