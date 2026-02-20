import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="site-container max-w-3xl">
          <span className="section-label mb-6">Legal</span>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-4" style={{ color: "hsl(0 0% 100%)" }}>
            Privacy Policy
          </h1>
          <p className="section-sub mb-10">Last updated: February 2026</p>

          <div className="space-y-10">
            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                1. Introduction
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                Sportnizer ("we", "our", "us") is committed to protecting the personal data of our users. This Privacy Policy explains what data we collect, how we use it, and what rights you have regarding your personal information. We handle all personal data in accordance with the General Data Protection Regulation (GDPR) and applicable international privacy standards.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                2. Data Roles and Responsibilities
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                Sportnizer operates under a clear controller–processor structure:
              </p>
              <ul className="space-y-2 list-none">
                {[
                  "Clubs and organizations using Sportnizer act as Data Controllers. They determine what personal data is entered and are responsible for maintaining a lawful basis for processing.",
                  "Sportnizer acts as a Data Processor. We process personal data only according to the instructions of the club or organization.",
                  "Sportnizer does not sell personal data to third parties.",
                  "Sportnizer does not use personal data for advertising purposes.",
                  "Data entered by clubs remains under the control and ownership of the respective club or organization.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base" style={{ color: "hsl(var(--foreground-muted))" }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--brand))" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                3. Data We Collect
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                We collect only the data necessary to provide the Sportnizer service. This may include:
              </p>
              <ul className="space-y-2 list-none">
                {[
                  "Account information (name, email address)",
                  "Club and team member records entered by administrators",
                  "Attendance and event data",
                  "Membership fee payment status",
                  "Usage data for platform improvement",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base" style={{ color: "hsl(var(--foreground-muted))" }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--brand))" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                4. How We Use Your Data
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                Data is used solely to provide and improve the Sportnizer platform. We do not sell personal data to third parties. Data is not used for advertising purposes. We use data to deliver the services described on this website, maintain platform security, and respond to support requests.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                5. Data Retention and Portability
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--foreground-muted))" }}>
                We store data only for as long as necessary to fulfill the purposes described in this policy.
              </p>

              <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                Data Deletion
              </h3>
              <ul className="space-y-2 list-none mb-4">
                {[
                  "Clubs may request deletion of their data at any time by contacting support@sportnizer.com.",
                  "Upon receiving a deletion request, data enters a 30–60 day grace period during which restoration is possible.",
                  "After the grace period, data is permanently deleted from active systems.",
                  "Encrypted backups may temporarily retain data as part of standard technical operations and are automatically overwritten over time.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base" style={{ color: "hsl(var(--foreground-muted))" }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--accent-blue))" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                Data Export
              </h3>
              <ul className="space-y-2 list-none">
                {[
                  "Clubs may request an export of their data at any time.",
                  "Data will be provided in a structured, commonly used format.",
                  "Export requests must come from authorized club administrators.",
                  "Exports are provided within a reasonable timeframe following the request.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base" style={{ color: "hsl(var(--foreground-muted))" }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--accent-blue))" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                6. Your Rights
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                Under GDPR and applicable regulations, you have the right to:
              </p>
              <ul className="space-y-2 list-none">
                {[
                  "Access the personal data we hold about you",
                  "Request correction of inaccurate data",
                  "Request deletion of your personal data",
                  "Object to or restrict how we process your data",
                  "Request a copy of your data in a portable format",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base" style={{ color: "hsl(var(--foreground-muted))" }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--accent-blue))" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                7. Security
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or loss. This includes encryption, access controls, and regular security reviews. Security is a core principle of how Sportnizer is built and maintained.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                8. Contact
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                For any privacy-related questions or requests, please contact us at{" "}
                <a href="mailto:support@sportnizer.com" style={{ color: "hsl(var(--accent-blue))" }}>
                  support@sportnizer.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
