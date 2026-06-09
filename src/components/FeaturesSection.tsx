import { Users, MessageSquare, Calendar, ClipboardCheck, CreditCard, BookOpen, Plug } from "lucide-react";
import { useTranslation } from "react-i18next";

// Map each feature card (by index in the reordered list) to its icon, colour, and video file.
// The video filenames match what is present in /public/features/.
// Note: "member-management" file has a typo in the uploaded filename — handled here.
const FEATURE_CONFIG = [
  { icon: Users,          iconType: "brand", video: "feature-member-managment.mp4"  }, // typo in filename preserved
  { icon: MessageSquare,  iconType: "blue",  video: "feature-communication.mp4"     },
  { icon: Calendar,       iconType: "brand", video: "feature-event-planning.mp4"    },
  { icon: ClipboardCheck, iconType: "blue",  video: "feature-attendance.mp4"        },
  { icon: CreditCard,     iconType: "brand", video: "feature-fees-payments.mp4"     },
  { icon: BookOpen,       iconType: "blue",  video: "feature-accounting.mp4"        },
  { icon: Plug,           iconType: "brand", video: "feature-integrations.mp4"      },
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

        <div className="flex flex-col gap-6">
          {items.map((feature, i) => {
            const { icon: Icon, iconType, video } = FEATURE_CONFIG[i] || FEATURE_CONFIG[0];
            const isBrand = iconType === "brand";
            const videoSrc = `/features/${video}`;
            return (
              <article key={i} className="feature-card">
                {/*
                  Responsive layout:
                  - Mobile: text on top, video centered below
                  - sm+: text on left (flex-1), video on right at natural aspect ratio
                  This handles portrait phone recordings correctly — no cropping.
                */}
                <div className="flex flex-col sm:flex-row gap-6 sm:items-center">

                  {/* ── Text column ── */}
                  <div className="flex-1 min-w-0">
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
                  </div>

                  {/* ── Video column ── */}
                  {/* shrink-0 prevents the video from being squeezed by the text column.
                      The video renders at its natural aspect ratio — no cropping.
                      maxHeight caps tall portrait videos; width stays auto so nothing distorts. */}
                  <div className="shrink-0 flex justify-center sm:justify-end">
                    <video
                      src={videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-xl block"
                      style={{ maxHeight: "380px", width: "auto", maxWidth: "100%" }}
                      onError={(e) => { (e.currentTarget as HTMLVideoElement).style.display = "none"; }}
                    />
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
