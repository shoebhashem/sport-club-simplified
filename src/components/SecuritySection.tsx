import { Shield, Lock, Eye, FileText, Server, Key } from "lucide-react";

const SECURITY_POINTS = [
  {
    icon: Shield,
    title: "Controller & Processor Structure",
    description:
      "Clubs and organizations act as Data Controllers, determining what personal data is entered and maintaining lawful basis. Sponizr operates as a Data Processor for club member data, handling it only according to club instructions. For account-level data, Sponizr acts as Data Controller.",
  },
  {
    icon: Server,
    title: "Modern Cloud Infrastructure",
    description:
      "Sponizr is built on modern cloud infrastructure with encryption in transit and at rest. Access controls and monitoring are in place to help protect against unauthorized access.",
  },
  {
    icon: Lock,
    title: "Designed with Data Protection in Mind",
    description:
      "Personal data is handled in accordance with applicable data protection laws, including GDPR. We implement appropriate technical and organizational measures to safeguard the data entrusted to us.",
  },
  {
    icon: Eye,
    title: "Minimal Data Collection",
    description:
      "We collect and store only the data necessary to provide the service. Sponizr does not sell personal data and does not use data for advertising purposes.",
  },
  {
    icon: Key,
    title: "Encryption & Access Controls",
    description:
      "Data is protected using industry-standard encryption. Access to systems and data is restricted based on role and necessity, following the principle of least privilege.",
  },
  {
    icon: FileText,
    title: "Responsible Deletion Practices",
    description:
      "Deleted accounts and removed memberships are subject to a temporary recovery period before permanent deletion. Clubs may request deletion at any time via support@sponizr.com.",
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
            Managing a sports club means handling personal data for members — including youth members. We take that responsibility seriously and build Sponizr with security and data protection at the core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECURITY_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="feature-card flex flex-col gap-4">
                <div className="feature-icon-blue w-11 h-11 shrink-0">
                  <Icon size={20} style={{ color: "hsl(var(--accent-blue))" }} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base mb-1.5" style={{ color: "hsl(0 0% 100%)" }}>
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
          <a href="/legal/privacy" style={{ color: "hsl(var(--accent-blue))" }} className="underline underline-offset-2">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/legal/terms" style={{ color: "hsl(var(--accent-blue))" }} className="underline underline-offset-2">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </section>
  );
}
