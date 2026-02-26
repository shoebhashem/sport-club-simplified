import { CheckCircle } from "lucide-react";

const TIERS = [
  {
    name: "Free",
    price: "€0",
    period: "",
    description: "Get started with your first team",
    features: ["Up to 50 members"],
    highlighted: false,
  },
  {
    name: "Basic",
    price: "€29",
    period: "/month",
    description: "For growing clubs with more members",
    features: ["Up to 500 members"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€49",
    period: "/month",
    description: "For established clubs and organizations",
    features: ["Up to 2,000 members"],
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    period: "",
    description: "For large organizations with custom needs",
    features: ["Unlimited members", "Custom configuration", "Dedicated support"],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32" style={{ background: "hsl(var(--surface))" }}>
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Pricing</span>
          <h2 className="section-heading mb-4">
            Accessible Pricing for{" "}
            <span style={{ color: "hsl(var(--brand))" }}>Clubs of All Sizes</span>
          </h2>
          <p className="section-sub">
            Sponizr is designed to remain cost-efficient and accessible. Transparent pricing that scales with your organization — no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="rounded-2xl p-6 border flex flex-col"
              style={{
                background: tier.highlighted ? "hsl(var(--surface-elevated))" : "hsl(0 0% 100% / 0.03)",
                borderColor: tier.highlighted ? "hsl(var(--brand) / 0.40)" : "hsl(0 0% 100% / 0.08)",
                boxShadow: tier.highlighted ? "var(--shadow-md)" : "none",
              }}
            >
              {tier.highlighted && (
                <span
                  className="text-[10px] font-bold uppercase tracking-widest mb-3 self-start px-2.5 py-1 rounded-full"
                  style={{ background: "hsl(var(--brand) / 0.15)", color: "hsl(var(--brand))" }}
                >
                  Popular
                </span>
              )}
              <h3 className="font-display font-bold text-lg mb-1" style={{ color: "hsl(0 0% 100%)" }}>
                {tier.name}
              </h3>
              <div className="mb-3">
                <span className="font-display font-black text-3xl" style={{ color: "hsl(0 0% 100%)" }}>
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm" style={{ color: "hsl(var(--foreground-muted))" }}>{tier.period}</span>
                )}
              </div>
              <p className="text-sm mb-5" style={{ color: "hsl(var(--foreground-muted))" }}>
                {tier.description}
              </p>
              <ul className="space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle size={15} className="shrink-0" style={{ color: "hsl(var(--brand))" }} />
                    <span style={{ color: "hsl(0 0% 100% / 0.80)" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          className="text-center text-sm mt-8 max-w-lg mx-auto"
          style={{ color: "hsl(var(--foreground-muted))" }}
        >
          Sponizr is continuously optimized to remain accessible for clubs of all sizes. Pricing is also available in SEK, NOK, and DKK.
        </p>
      </div>
    </section>
  );
}
