import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocalePath } from "@/hooks/use-locale-path";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { t, i18n } = useTranslation();
  const lp = useLocalePath();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // On sub-pages (e.g. /en/legal/privacy), anchor links must be prefixed
  // with the home path so the browser navigates to the homepage first.
  const isHomePage = location.pathname === `/${i18n.language}` || location.pathname === `/${i18n.language}/`;
  const homeAnchor = (anchor: string) => isHomePage ? anchor : `/${i18n.language}/${anchor}`;

  const NAV_LINKS = [
    { label: t("header.features"), href: homeAnchor("#features") },
    { label: t("header.pricing"), href: homeAnchor("#pricing") },
    { label: t("header.ourStory"), href: homeAnchor("#story") },
    { label: t("header.security"), href: homeAnchor("#security") },
    { label: t("tutorials.navLabel"), href: lp("/tutorials") },
    { label: t("header.contact"), href: homeAnchor("#contact") },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "hsl(var(--background-dark) / 0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid hsl(0 0% 100% / 0.06)" : "none",
      }}
    >
      <div className="site-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href={lp("/")} className="flex items-center gap-2.5 group">
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
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + Language Switcher */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a href={homeAnchor("#download")} className="btn-primary text-sm px-5 py-2.5">
            {t("header.getApp")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "hsl(0 0% 100%)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "hsl(var(--background-dark))" }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display font-medium text-base py-1"
              style={{ color: "hsl(0 0% 100% / 0.80)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="py-2">
            <LanguageSwitcher />
          </div>
          <a href={homeAnchor("#download")} className="btn-primary text-sm text-center mt-2">
            {t("header.getApp")}
          </a>
        </div>
      )}
    </header>
  );
}
