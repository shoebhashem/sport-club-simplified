import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Our Story", href: "#story" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src="/favicon.ico"
            alt="Sportnizer logo"
            className="w-9 h-9 rounded-xl object-contain"
          />
          <div className="flex flex-col leading-none">
            <span
              className="font-display font-bold text-lg tracking-tight"
              style={{ color: "hsl(var(--brand))" }}
            >
              Sportnizer
            </span>
            <span
              className="text-[10px] font-medium tracking-widest uppercase"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              Organizing Sports!
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.sportnizer.com" className="btn-primary text-sm px-5 py-2.5">
            Try the Web App
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
          <a href="https://app.sportnizer.com" className="btn-primary text-sm text-center mt-2">
            Try the Web App
          </a>
        </div>
      )}
    </header>
  );
}
