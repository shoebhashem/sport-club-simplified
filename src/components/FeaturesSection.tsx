import { Users, Calendar, ClipboardCheck, CreditCard, MessageSquare } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    iconType: "brand",
    title: "Member Management",
    description:
      "Keep all your member records organized and accessible. Manage roles, parent and player structures, and maintain a clear overview of everyone in your club.",
    points: [
      "Organized member records",
      "Role-based access control",
      "Parent and guardian structure for youth members",
    ],
  },
  {
    icon: Calendar,
    iconType: "blue",
    title: "Event & Training Planning",
    description:
      "Plan sessions, matches and club events with ease. Send invitations and track availability so you always know who's coming.",
    points: [
      "Create sessions and matches",
      "Send invitations to members",
      "Track availability and responses",
    ],
  },
  {
    icon: ClipboardCheck,
    iconType: "brand",
    title: "Attendance Tracking",
    description:
      "Get a clear overview of attendance across all training sessions and events. Historical records let you spot patterns and keep everyone accountable.",
    points: [
      "Clear attendance overview",
      "Historical attendance records",
      "Track participation trends",
    ],
  },
  {
    icon: CreditCard,
    iconType: "blue",
    title: "Membership Fee & Payment Management",
    description:
      "Get a clean overview of membership fee status. Know exactly who has paid and who hasn't — with secure online payments to reduce manual follow-ups.",
    points: [
      "Track who has paid",
      "See outstanding payments at a glance",
      "Secure online payments",
      "Reduced administrative workload",
    ],
    note: "Payments are processed through secure third-party payment infrastructure. Payment capabilities are continuously evolving.",
  },
  {
    icon: MessageSquare,
    iconType: "brand",
    title: "Structured Communication",
    description:
      "Targeted communication without chaos. Share announcements and updates at club, group, or subgroup level — reaching the right people with the right information.",
    points: [
      "Club-wide announcements",
      "Group-level updates",
      "Subgroup coordination",
      "Role-based visibility",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Features</span>
          <h2 className="section-heading mb-4">
            Everything You Need to{" "}
            <span style={{ color: "hsl(var(--brand))" }}>Organize Your Club</span>
          </h2>
          <p className="section-sub">
            Five focused pillars of club administration — designed to replace scattered tools with one clear, structured platform for sports team management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const isBrand = feature.iconType === "brand";
            return (
              <article key={feature.title} className="feature-card">
                <div className={isBrand ? "feature-icon" : "feature-icon-blue"}>
                  <Icon
                    size={22}
                    style={{ color: isBrand ? "hsl(var(--navy))" : "hsl(var(--accent-blue))" }}
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--foreground-muted))" }}>
                  {feature.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: isBrand ? "hsl(var(--brand))" : "hsl(var(--accent-blue))" }}
                      />
                      <span style={{ color: "hsl(0 0% 100% / 0.80)" }}>{point}</span>
                    </li>
                  ))}
                </ul>
                {feature.note && (
                  <p
                    className="text-xs leading-relaxed mt-3 pt-3 border-t italic"
                    style={{ borderColor: "hsl(0 0% 100% / 0.08)", color: "hsl(var(--foreground-muted))" }}
                  >
                    {feature.note}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
