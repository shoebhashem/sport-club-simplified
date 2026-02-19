import { Zap, Mail } from "lucide-react";

export default function ImprovingSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--surface))" }}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Continuously Improving */}
          <div>
            <span className="section-label">Roadmap</span>
            <h2 className="section-heading mb-5">Continuously Improving</h2>
            <p className="section-sub mb-6">
              Sportnizer is actively evolving and continuously improving based on real-world use and feedback from sports teams and clubs. We are committed to building a sports club management platform that grows together with the needs of modern sports organizations.
            </p>
            <p className="section-sub mb-8">
              Every update is guided by practical experience — not trends. Features are added when they genuinely reduce administrative overhead and improve clarity for administrators and coaches.
            </p>

            <div
              className="rounded-2xl p-6 border"
              style={{
                background: "hsl(var(--surface-elevated))",
                borderColor: "hsl(var(--border))",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="feature-icon w-10 h-10">
                  <Zap size={18} style={{ color: "hsl(var(--navy))" }} />
                </div>
                <h3 className="font-display font-bold text-base" style={{ color: "hsl(var(--navy))" }}>
                  Feedback-Driven Development
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                Every suggestion counts. If you encounter a bug, have a feature idea, or want to share feedback from real club use, we want to hear from you.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="section-label-blue">Get In Touch</span>
            <h2 className="section-heading mb-5">Questions or Feedback?</h2>
            <p className="section-sub mb-8">
              For suggestions, questions or bug reports, reach out directly. Your experience using Sportnizer shapes what gets built next.
            </p>

            <a
              href="mailto:support@sportnizer.com"
              className="feature-card flex items-center gap-4 group cursor-pointer no-underline"
              style={{ textDecoration: "none" }}
            >
              <div className="feature-icon-blue w-12 h-12 shrink-0">
                <Mail size={22} style={{ color: "hsl(var(--accent-blue))" }} />
              </div>
              <div>
                <p className="font-display font-semibold text-base mb-0.5" style={{ color: "hsl(var(--navy))" }}>
                  support@sportnizer.com
                </p>
                <p className="text-sm" style={{ color: "hsl(var(--foreground-muted))" }}>
                  For support, feedback and bug reports
                </p>
              </div>
            </a>

            <div className="mt-6 space-y-3">
              {[
                "Bug reports and technical issues",
                "Feature suggestions from real use",
                "General questions about the platform",
                "Feedback on your club management experience",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "hsl(var(--accent-blue))" }}
                  />
                  <span style={{ color: "hsl(var(--foreground-muted))" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
