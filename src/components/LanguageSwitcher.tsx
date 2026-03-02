import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { SUPPORTED_LANGUAGES } from "@/i18n/config";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current =
    SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) ||
    SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLanguage = (code: string) => {
    const pathWithoutLang =
      location.pathname.replace(/^\/[a-z]{2}/, "") || "";
    navigate(`/${code}${pathWithoutLang}${location.hash}`);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors"
        style={{
          color: "hsl(0 0% 100% / 0.70)",
          background: open ? "hsl(0 0% 100% / 0.08)" : "transparent",
        }}
        aria-label="Select language"
      >
        <Globe size={15} />
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 py-1 rounded-xl border min-w-[160px] z-50"
          style={{
            background: "hsl(var(--surface-elevated))",
            borderColor: "hsl(0 0% 100% / 0.10)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors"
              style={{
                color:
                  lang.code === i18n.language
                    ? "hsl(var(--brand))"
                    : "hsl(0 0% 100% / 0.75)",
                background:
                  lang.code === i18n.language
                    ? "hsl(var(--brand) / 0.08)"
                    : "transparent",
              }}
              onMouseEnter={(e) => {
                if (lang.code !== i18n.language) {
                  e.currentTarget.style.background = "hsl(0 0% 100% / 0.05)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  lang.code === i18n.language
                    ? "hsl(var(--brand) / 0.08)"
                    : "transparent";
              }}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
