import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocalePath } from "@/hooks/use-locale-path";

const FIRST_VIDEO_ID = "lv84Tl69raY";

export default function TutorialsTeaser() {
  const { t } = useTranslation();
  const lp = useLocalePath();

  return (
    <section className="py-16 md:py-20">
      <div className="site-container">
        <div
          className="rounded-3xl overflow-hidden"
          style={{ background: "hsl(var(--surface))" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Video embed */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%", minHeight: "240px" }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                src={`https://www.youtube.com/embed/${FIRST_VIDEO_ID}?rel=0&modestbranding=1`}
                title={t("tutorials.videos.0.title")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Text side */}
            <div className="flex flex-col justify-center px-8 py-10">
              <span className="section-label mb-4">{t("tutorials.teaserLabel")}</span>
              <h2
                className="font-display font-black text-3xl md:text-4xl leading-tight mb-4"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                {t("tutorials.teaserHeading")}
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                {t("tutorials.teaserDescription")}
              </p>
              <a
                href={lp("/tutorials")}
                className="btn-primary self-start text-sm"
              >
                {t("tutorials.teaserCta")} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
