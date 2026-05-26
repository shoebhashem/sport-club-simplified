import { useLocalePath } from "@/hooks/use-locale-path";
import {
    APP_STORE_URL_ANDROID,
    APP_STORE_URL_IOS,
    WEB_APP_URL,
} from "@/lib/app-links";
import { ExternalLink, Mail, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const lp = useLocalePath();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t("header.features"), href: "#features" },
    { label: t("header.ourStory"), href: "#story" },
    { label: t("header.security"), href: "#security" },
    { label: t("footer.privacyPolicy"), href: lp("/legal/privacy") },
    { label: t("footer.termsOfService"), href: lp("/legal/terms") },
  ];

  return (
    <footer
      className="border-t mt-0"
      style={{
        background: "hsl(var(--background-dark))",
        borderColor: "hsl(0 0% 100% / 0.06)",
      }}
    >
      <div className="site-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/favicon.ico"
                alt="Clubnizer logo"
                className="w-9 h-9 rounded-xl object-contain"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="font-display font-bold text-lg tracking-tight"
                  style={{ color: "hsl(var(--brand))" }}
                >
                  Clubnizer
                </span>
                <span
                  className="text-[10px] font-medium tracking-widest uppercase"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  {t("header.tagline")}
                </span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "hsl(0 0% 100% / 0.50)" }}
            >
              {t("footer.brandDescription")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-display font-semibold text-sm mb-4 uppercase tracking-widest"
              style={{ color: "hsl(0 0% 100% / 0.40)" }}
            >
              {t("footer.navigation")}
            </h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "hsl(0 0% 100% / 0.55)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "hsl(var(--brand))")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "hsl(0 0% 100% / 0.55)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-display font-semibold text-sm mb-4 uppercase tracking-widest"
              style={{ color: "hsl(0 0% 100% / 0.40)" }}
            >
              {t("footer.contactSupport")}
            </h4>
            <a
              href="mailto:support@clubnizer.com"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "hsl(0 0% 100% / 0.60)" }}
            >
              <Mail size={14} />
              support@clubnizer.com
            </a>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={APP_STORE_URL_IOS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
                style={{ color: "hsl(0 0% 100% / 0.55)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "hsl(var(--brand))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "hsl(0 0% 100% / 0.55)")
                }
              >
                <Smartphone size={13} />
                {t("footer.downloadOnAppStore")}
              </a>
              <a
                href={APP_STORE_URL_ANDROID}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
                style={{ color: "hsl(0 0% 100% / 0.55)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "hsl(var(--brand))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "hsl(0 0% 100% / 0.55)")
                }
              >
                <Smartphone size={13} />
                {t("footer.downloadOnGooglePlay")}
              </a>
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold font-display"
                style={{ color: "hsl(var(--brand))" }}
              >
                {t("footer.openWebApp")} <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderColor: "hsl(0 0% 100% / 0.06)",
            color: "hsl(0 0% 100% / 0.30)",
          }}
        >
          <span>{t("footer.copyright", { year })}</span>
          <span>{t("footer.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
