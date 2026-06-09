import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

interface VideoItem {
  title: string;
  description: string;
  role: string;
  youtubeId: string;
}

const YOUTUBE_PLAYLIST = "https://www.youtube.com/playlist?list=PL_ZUxH87x2iiXugsGvShuwFjkhOh7ucF_";

export default function Tutorials() {
  const { t } = useTranslation();

  const videos = t("tutorials.videos", { returnObjects: true }) as VideoItem[];

  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="site-container max-w-5xl">
          {/* Page header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label mb-4">{t("tutorials.pageTitle")}</span>
            <h1
              className="font-display font-black text-4xl md:text-5xl mb-4 leading-tight"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              {t("tutorials.teaserHeading")}
            </h1>
            <p className="section-sub">{t("tutorials.pageDescription")}</p>

            {/* Playlist link */}
            <a
              href={YOUTUBE_PLAYLIST}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: "hsl(var(--brand))" }}
            >
              {t("tutorials.playlistLabel")} <ExternalLink size={14} />
            </a>
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ background: "hsl(var(--surface))" }}
              >
                {/* YouTube embed */}
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                {/* Meta */}
                <div className="p-5">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest mb-2 px-2 py-0.5 rounded-full"
                    style={{
                      background: "hsl(var(--brand) / 0.12)",
                      color: "hsl(var(--brand))",
                    }}
                  >
                    {video.role}
                  </span>
                  <h2
                    className="font-display font-bold text-lg mb-1"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    {video.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
