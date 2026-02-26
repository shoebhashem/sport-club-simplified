import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
      aria-label="Hero"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.08 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 60%, hsl(43 100% 62% / 0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative site-container pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-3xl">
          <div className="section-label mb-6">
            Sport Club Management Platform
          </div>

          <h1
            className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Sport Club Management
            <span
              className="block"
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              — Simplified.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: "hsl(0 0% 100% / 0.65)" }}
          >
            Manage members, events, attendance and membership fees in a clean and
            structured platform designed for modern sports teams and clubs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://app.sportnizer.com" className="btn-primary text-base">
              Try the Web App <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-hero-outline text-base">
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-14 pt-10 grid grid-cols-3 gap-6 max-w-lg"
            style={{ borderTop: "1px solid hsl(0 0% 100% / 0.10)" }}
          >
            {[
              { value: "Focused", label: "Platform" },
              { value: "Simple", label: "Setup" },
              { value: "Secure", label: "By Design" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display font-bold text-xl md:text-2xl mb-0.5"
                  style={{ color: "hsl(var(--brand))" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "hsl(0 0% 100% / 0.45)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problem"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity hover:opacity-80"
        style={{ color: "hsl(0 0% 100% / 0.30)" }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium uppercase tracking-widest font-display">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
