export default function FounderSection() {
  return (
    <section
      id="story"
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--surface))" }}
    >
      <div className="site-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Our Story</span>
            <h2 className="section-heading">Built From the Sidelines</h2>
          </div>

          <div
            className="rounded-3xl p-10 md:p-14 border relative overflow-hidden"
            style={{
              background: "hsl(var(--surface-elevated))",
              borderColor: "hsl(var(--border))",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 right-8 font-display font-black text-9xl leading-none select-none pointer-events-none"
              style={{ color: "hsl(var(--brand) / 0.08)" }}
            >
              "
            </div>

            <div className="relative space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>
                Sportnizer was created from real involvement in youth sports. Through volunteering as a coach and being closely involved in organizing teams, training sessions and matches, it became clear how much time was spent on administration instead of focusing on the sport itself.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>
                Managing members, tracking attendance and following up on membership fees often felt more complicated than necessary. There were spreadsheets, separate messaging apps, manual payment lists — and none of it talked to each other.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: "hsl(var(--foreground))" }}>
                Sportnizer was built to simplify the essentials — creating structure without unnecessary complexity. Not because it was a business idea first, but because there was a genuine need.
              </p>

              <div
                className="pt-6 mt-4 border-t"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <p
                  className="text-xl font-display font-bold leading-snug"
                  style={{ color: "hsl(var(--navy))" }}
                >
                  The goal is simple:{" "}
                  <span style={{ color: "hsl(var(--brand))" }}>
                    Make organizing sports easier, calmer and more efficient.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
