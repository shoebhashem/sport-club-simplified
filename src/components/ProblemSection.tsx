import { XCircle } from "lucide-react";

const PROBLEMS = [
  "Membership lists scattered across spreadsheets",
  "Manual tracking of membership fees with no clear overview",
  "Unclear picture of who has paid and who hasn't",
  "Complicated club systems that take weeks to learn",
  "Too many disconnected tools pulling in different directions",
  "Hours wasted on administration that should be spent on sport",
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-24 md:py-32"
      style={{ background: "hsl(var(--surface))" }}
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="section-label">The Challenge</span>
            <h2 className="section-heading mb-5">
              Too Much Administration.{" "}
              <span style={{ color: "hsl(var(--brand))" }}>Not Enough Sport.</span>
            </h2>
            <p className="section-sub mb-8">
              Club administrators and coaches know the feeling: you volunteer to help a team, and end up spending more time in spreadsheets than on the pitch. Managing sports club administration shouldn't require a full-time commitment.
            </p>
            <p className="section-sub">
              Clubnizer is built as a focused alternative to complex club management systems — clean, structured, and designed around what actually matters.
            </p>
          </div>

          {/* Problem list */}
          <div
            className="rounded-2xl p-8 border"
            style={{
              background: "hsl(var(--surface-elevated))",
              borderColor: "hsl(0 0% 100% / 0.08)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <h3
              className="font-display font-bold text-base mb-5 uppercase tracking-widest"
              style={{ color: "hsl(var(--foreground-muted))" }}
            >
              Does This Sound Familiar?
            </h3>
            <ul className="space-y-4">
              {PROBLEMS.map((problem) => (
                <li key={problem} className="problem-item">
                  <XCircle
                    size={20}
                    className="mt-0.5 shrink-0"
                    style={{ color: "hsl(0 70% 60%)" }}
                  />
                  <span className="text-base leading-snug" style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                    {problem}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 pt-6 border-t"
              style={{ borderColor: "hsl(0 0% 100% / 0.08)" }}
            >
              <p
                className="text-sm font-semibold font-display"
                style={{ color: "hsl(var(--brand))" }}
              >
                Clubnizer was built to solve exactly these problems — by someone who lived them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
