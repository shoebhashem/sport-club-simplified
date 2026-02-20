import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="site-container">
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{ background: "hsl(var(--surface))" }}
        >
          {/* Decorative glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, hsl(var(--brand) / 0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative px-10 py-16 md:py-24 text-center">
            <span className="section-label mb-6">
              Get Started Today
            </span>

            <h2
              className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-5"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              Spend More Time
              <br />
              <span
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                on the Field.
              </span>
            </h2>

            <p
              className="text-lg max-w-xl mx-auto mb-10"
              style={{ color: "hsl(0 0% 100% / 0.60)" }}
            >
              Let Sportnizer organize the structure — so you can focus on the sport.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.sportnizer.com" className="btn-primary text-base">
                Get Started <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-hero-outline text-base">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
