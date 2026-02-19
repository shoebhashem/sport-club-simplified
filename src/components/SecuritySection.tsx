import { Shield, Lock, Eye, FileText } from "lucide-react";

const SECURITY_POINTS = [
  {
    icon: Shield,
    title: "Modern Technology Stack",
    description:
      "Sportnizer is built using modern, well-maintained technologies and carefully designed systems to ensure high security standards across the platform.",
  },
  {
    icon: Lock,
    title: "GDPR Compliance",
    description:
      "Personal data is handled in accordance with GDPR and applicable privacy regulations, including relevant California privacy requirements. We take data protection seriously.",
  },
  {
    icon: Eye,
    title: "Minimal Data Storage",
    description:
      "We store only the information that is necessary to provide the service. Unused data is removed responsibly, and we do not collect data beyond what is needed.",
  },
  {
    icon: FileText,
    title: "Transparent Principles",
    description:
      "Security, integrity and responsible data handling are fundamental principles of Sportnizer — not afterthoughts. Your members' data is treated with care.",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-24 md:py-32">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label-blue">Trust & Compliance</span>
          <h2 className="section-heading mb-4">Security and Data Protection</h2>
          <p className="section-sub">
            Managing a sports club means handling personal data for members — including youth members. We take that responsibility seriously and build Sportnizer with security and privacy at the core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SECURITY_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="feature-card flex gap-5">
                <div className="feature-icon-blue w-11 h-11 shrink-0">
                  <Icon size={20} style={{ color: "hsl(var(--accent-blue))" }} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base mb-1.5" style={{ color: "hsl(var(--navy))" }}>
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="text-center text-sm mt-10 max-w-xl mx-auto"
          style={{ color: "hsl(var(--foreground-muted))" }}
        >
          For detailed information about how we handle data, see our{" "}
          <a href="/privacy" style={{ color: "hsl(var(--accent-blue))" }} className="underline underline-offset-2">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms" style={{ color: "hsl(var(--accent-blue))" }} className="underline underline-offset-2">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </section>
  );
}
