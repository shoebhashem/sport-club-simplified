import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="site-container max-w-3xl">
          <span className="section-label mb-6">Legal</span>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-4" style={{ color: "hsl(var(--navy))" }}>
            Privacy Policy
          </h1>
          <p className="section-sub mb-10">Last updated: February 2026</p>

          <div className="space-y-10" style={{ color: "hsl(var(--foreground))" }}>
            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(var(--navy))" }}>
                1. Introduction
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                Sportnizer ("we", "our", "us") is committed to protecting the personal data of our users. This Privacy Policy explains what data we collect, how we use it, and what rights you have regarding your personal information. We handle all personal data in accordance with the General Data Protection Regulation (GDPR) and applicable privacy regulations.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(var(--navy))" }}>
                2. Data We Collect
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
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(var(--navy))" }}>
                3. How We Use Your Data
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                Data is used solely to provide and improve the Sportnizer platform. We do not sell personal data to third parties. Data is not used for advertising purposes. We use data to deliver the services described on this website, maintain platform security, and respond to support requests.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(var(--navy))" }}>
                4. Data Retention
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                We store data only for as long as necessary to fulfill the purposes described in this policy. Unused accounts and data are removed responsibly. You may request deletion of your data at any time by contacting support@sportnizer.com.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(var(--navy))" }}>
                5. Your Rights
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
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(var(--navy))" }}>
                6. Security
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or loss. Security is a core principle of how Sportnizer is built and maintained.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(var(--navy))" }}>
                7. Contact
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
