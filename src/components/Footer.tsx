import { Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
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
                <span className="font-display font-bold text-lg tracking-tight" style={{ color: "hsl(var(--brand))" }}>
                  Clubnizer
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: "hsl(0 0% 100%)" }}>
                  Organizing Sports!
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.50)" }}>
              A structured sport club management platform designed to reduce administrative overhead so teams can focus on the sport.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-widest" style={{ color: "hsl(0 0% 100% / 0.40)" }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Features", href: "#features" },
                { label: "Our Story", href: "#story" },
                { label: "Security", href: "#security" },
                { label: "Privacy Policy", href: "/legal/privacy" },
                { label: "Terms of Service", href: "/legal/terms" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "hsl(0 0% 100% / 0.55)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--brand))")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 100% / 0.55)")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-widest" style={{ color: "hsl(0 0% 100% / 0.40)" }}>
              Contact & Support
            </h4>
            <a
              href="mailto:support@clubnizer.com"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: "hsl(0 0% 100% / 0.60)" }}
            >
              <Mail size={14} />
              support@clubnizer.com
            </a>
            <div className="mt-4">
              <a
                href="https://app.clubnizer.com"
                className="inline-flex items-center gap-1.5 text-sm font-semibold font-display"
                style={{ color: "hsl(var(--brand))" }}
              >
                Open Web App <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "hsl(0 0% 100% / 0.06)", color: "hsl(0 0% 100% / 0.30)" }}
        >
          <span>© {year} Clubnizer. All rights reserved.</span>
          <span>A structured platform for modern sports teams and clubs.</span>
        </div>
      </div>
    </footer>
  );
}
