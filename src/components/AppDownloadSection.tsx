import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { APP_STORE_URL_IOS, APP_STORE_URL_ANDROID, WEB_APP_URL } from "@/lib/app-links";

/** Apple App Store badge (SVG-based, matches official styling) */
function AppStoreBadge({ label }: { label: string }) {
  return (
    <svg
      width="160"
      height="54"
      viewBox="0 0 160 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <rect width="160" height="54" rx="9" fill="#000000" />
      <rect x="0.5" y="0.5" width="159" height="53" rx="8.5" stroke="white" strokeOpacity="0.25" />
      {/* Apple logo */}
      <path
        d="M24.6 18.9c-.9 1.1-2.4 1.9-3.8 1.8-.2-1.5.6-3.1 1.4-4.1.9-1.1 2.5-1.9 3.8-1.9.2 1.6-.5 3.1-1.4 4.2zm1.4 2.1c-2.1-.1-3.9 1.2-4.9 1.2-1 0-2.6-1.1-4.3-1.1-2.2 0-4.2 1.3-5.3 3.2-2.3 3.9-.6 9.7 1.6 12.9 1.1 1.6 2.4 3.3 4.1 3.3 1.6-.1 2.2-1 4.2-1 2 0 2.5 1 4.2 1 1.7 0 2.9-1.6 4-3.2.5-.7 1-1.5 1.3-2.3-3.4-1.3-4-6.1-.6-7.9-.9-1.3-2.4-2.1-4.3-2.1z"
        fill="white"
      />
      {/* "Download on the" text */}
      <text x="42" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fill="white" opacity="0.85">
        Download on the
      </text>
      {/* "App Store" text */}
      <text x="42" y="38" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="600" fill="white" letterSpacing="-0.3">
        App Store
      </text>
    </svg>
  );
}

/** Google Play badge (SVG-based, matches official styling) */
function GooglePlayBadge({ label }: { label: string }) {
  return (
    <svg
      width="160"
      height="54"
      viewBox="0 0 160 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <rect width="160" height="54" rx="9" fill="#000000" />
      <rect x="0.5" y="0.5" width="159" height="53" rx="8.5" stroke="white" strokeOpacity="0.25" />
      {/* Google Play triangle icon (simplified) */}
      <path d="M14 16l14.5 11L14 38V16z" fill="#EA4335" />
      <path d="M14 16l8.5 8.5-8.5 8.5V16z" fill="#FBBC05" />
      <path d="M14 16l14.5 11-6 4.5L14 16z" fill="#4285F4" />
      <path d="M14 38l14.5-11 6 4.5L14 38z" fill="#34A853" />
      {/* "Get it on" text */}
      <text x="42" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fill="white" opacity="0.85">
        Get it on
      </text>
      {/* "Google Play" text */}
      <text x="42" y="38" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="600" fill="white" letterSpacing="-0.3">
        Google Play
      </text>
    </svg>
  );
}

export default function AppDownloadSection() {
  const { t } = useTranslation();

  return (
    <section
      id="download"
      className="py-20 md:py-28"
      style={{ background: "hsl(var(--surface))" }}
      aria-labelledby="download-heading"
    >
      <div className="site-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">{t("appDownload.label")}</span>
          <h2
            id="download-heading"
            className="section-heading mb-4"
          >
            {t("appDownload.heading")}
            <span
              className="block"
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("appDownload.headingHighlight")}
            </span>
          </h2>
          <p className="section-sub">{t("appDownload.description")}</p>
        </div>

        {/* Cards: iOS + Android */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {/* iOS */}
          <a
            href={APP_STORE_URL_IOS}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("appDownload.iosAlt")}
            className="group block rounded-2xl p-6 border transition-all duration-200"
            style={{
              background: "hsl(var(--surface-elevated))",
              borderColor: "hsl(0 0% 100% / 0.08)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--brand) / 0.4)";
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 0% 100% / 0.08)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* QR code — hidden on small screens (can't scan on mobile) */}
            <div className="hidden sm:flex justify-center mb-5">
              <div
                className="rounded-xl p-3"
                style={{ background: "white" }}
              >
                <img
                  src="/qr-code-ios.png"
                  alt={t("appDownload.iosAlt")}
                  width={140}
                  height={140}
                  className="block"
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
            </div>

            <p
              className="hidden sm:block text-xs text-center mb-4 font-medium"
              style={{ color: "hsl(0 0% 100% / 0.45)" }}
            >
              {t("appDownload.iosQrLabel")}
            </p>

            {/* Badge always visible */}
            <div className="flex justify-center">
              <AppStoreBadge label={t("appDownload.iosAlt")} />
            </div>
          </a>

          {/* Android */}
          <a
            href={APP_STORE_URL_ANDROID}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("appDownload.androidAlt")}
            className="group block rounded-2xl p-6 border transition-all duration-200"
            style={{
              background: "hsl(var(--surface-elevated))",
              borderColor: "hsl(0 0% 100% / 0.08)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(var(--brand) / 0.4)";
              (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 0% 100% / 0.08)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* QR code — hidden on small screens */}
            <div className="hidden sm:flex justify-center mb-5">
              <div
                className="rounded-xl p-3"
                style={{ background: "white" }}
              >
                <img
                  src="/qr-code-android.png"
                  alt={t("appDownload.androidAlt")}
                  width={140}
                  height={140}
                  className="block"
                  style={{ imageRendering: "crisp-edges" }}
                />
              </div>
            </div>

            <p
              className="hidden sm:block text-xs text-center mb-4 font-medium"
              style={{ color: "hsl(0 0% 100% / 0.45)" }}
            >
              {t("appDownload.androidQrLabel")}
            </p>

            {/* Badge always visible */}
            <div className="flex justify-center">
              <GooglePlayBadge label={t("appDownload.androidAlt")} />
            </div>
          </a>
        </div>

        {/* Web app fallback */}
        <p className="text-center text-sm" style={{ color: "hsl(0 0% 100% / 0.40)" }}>
          {t("appDownload.webAppPrefix")}{" "}
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold transition-colors duration-150"
            style={{ color: "hsl(var(--brand))" }}
          >
            {t("appDownload.webAppLabel")} <ExternalLink size={12} />
          </a>
        </p>
      </div>
    </section>
  );
}
