import { CheckCircle } from "lucide-react";

const BENEFITS = [
  "Works seamlessly for a single team",
  "Scales across multiple teams within a club",
  "Reduces administrative burden at every level",
  "Maintains clear financial and member overview",
  "Role-based access for coaches, admins and members",
  "Designed for both small teams and larger organizations",
];

export default function TeamsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual card */}
          <div className="order-2 lg:order-1">
            <div
              className="rounded-3xl p-10 border relative"
              style={{
                background: "hsl(var(--surface))",
                borderColor: "hsl(0 0% 100% / 0.08)",
              }}
            >
              {/* Mini club diagram */}
              <div className="text-center mb-6">
                <img
                  src="/favicon.ico"
                  alt="Sportnizer"
                  className="w-16 h-16 rounded-2xl mx-auto object-contain"
                />
                <p
                  className="mt-2 font-display font-bold text-lg"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  Your Club
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["Team A", "Team B", "Team C"].map((team) => (
                  <div
                    key={team}
                    className="rounded-xl p-3 text-center"
                    style={{
                      background: "hsl(0 0% 100% / 0.05)",
                      border: "1px solid hsl(0 0% 100% / 0.08)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg mx-auto mb-1.5 flex items-center justify-center text-xs font-bold font-display"
                      style={{ background: "hsl(var(--brand) / 0.20)", color: "hsl(var(--brand))" }}
                    >
                      {team[5]}
                    </div>
                    <span className="text-xs font-medium font-display" style={{ color: "hsl(0 0% 100% / 0.65)" }}>
                      {team}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 rounded-xl p-4"
                style={{
                  background: "hsl(0 0% 100% / 0.04)",
                  border: "1px solid hsl(0 0% 100% / 0.06)",
                }}
              >
                <p className="text-xs font-medium text-center font-display" style={{ color: "hsl(0 0% 100% / 0.50)" }}>
                  One platform — multiple teams, one clear overview
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="section-label">For Teams & Clubs</span>
            <h2 className="section-heading mb-5">
              Built for Teams.{" "}
              <span style={{ color: "hsl(var(--brand))" }}>Structured for Clubs.</span>
            </h2>
            <p className="section-sub mb-8">
              Whether you manage a single youth football team or oversee an entire club with multiple squads, Sportnizer gives you the structure to stay in control without drowning in administration.
            </p>

            <ul className="space-y-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                    style={{ color: "hsl(var(--brand))" }}
                  />
                  <span className="text-base" style={{ color: "hsl(0 0% 100% / 0.80)" }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
