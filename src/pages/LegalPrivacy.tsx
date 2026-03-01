import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPrivacy() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="site-container max-w-3xl">
          <span className="section-label mb-6">Legal</span>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-4" style={{ color: "hsl(0 0% 100%)" }}>
            Privacy Policy
          </h1>
          <p className="section-sub mb-2">
            <strong style={{ color: "hsl(0 0% 100% / 0.7)" }}>Version:</strong> PRIVACY_2026.1
          </p>
          <p className="section-sub mb-10">
            <strong style={{ color: "hsl(0 0% 100% / 0.7)" }}>Effective Date:</strong> February 25, 2026
          </p>

          <div className="space-y-10 legal-content">
            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                1. Introduction
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                This Privacy Policy explains how Clubnizer ("we," "us," or "our") collects, uses, shares, and protects personal data when you use our platform for sports club management ("Service"). We are committed to protecting your privacy and handling your data responsibly. This policy applies to all users of Clubnizer, including Club administrators, members, and guardians.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                2. Data Controller vs Data Processor Roles
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                Understanding who is responsible for your data depends on the context:
              </p>

              <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                2.1 Club Data (Clubnizer as Data Processor)
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(var(--foreground-muted))" }}>
                <strong>For data processed within Clubs</strong>, the Club acts as the Data Controller. This means the Club (through its administrators) determines why and how member data is processed within their organization. Clubnizer acts as a Data Processor, processing Club data only on behalf of and under the instructions of the Club. We do not independently determine the purposes of processing Club member data.
              </p>

              <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                2.2 Account Data (Clubnizer as Data Controller)
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                <strong>For data related to your Clubnizer account</strong> (such as your login credentials and account settings), Clubnizer acts as the Data Controller and processes such data to provide and maintain the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                3. Data We Collect
              </h2>
              {[
                { sub: "3.1 Account Data", items: ["Email address", "Display name", "Password (stored as a secure hash)"] },
                { sub: "3.2 Profile Data", items: ["Profile photo", "Phone number", "Date of birth (required for Youth Members)"], note: "You may optionally provide:" },
                { sub: "3.3 Club Membership Data", items: ["Club and group associations", "Roles within the Club (e.g., player, coach, admin)", "Guardian relationships (for Youth Members)"] },
                { sub: "3.4 Youth Member Data", items: ["Name", "Date of birth", "Guardian contact information"], note: "For Youth Members (users under 16):" },
                { sub: "3.5 Event and Attendance Data", items: ["Event RSVPs and responses", "Attendance records", "Participation history for statistical purposes"] },
                { sub: "3.6 Payment Data", items: ["Payment card details are processed by our payment provider (Stripe)", "We store transaction records and payment status", "We do not store full credit card numbers"] },
                { sub: "3.7 Usage Data", items: ["App interactions and feature usage", "Device information (platform, app version)", "Error logs and performance data"] },
              ].map((group) => (
                <div key={group.sub} className="mb-4">
                  <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                    {group.sub}
                  </h3>
                  {group.note && <p className="text-base mb-2" style={{ color: "hsl(var(--foreground-muted))" }}>{group.note}</p>}
                  <ul className="space-y-1.5 list-none">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-base" style={{ color: "hsl(var(--foreground-muted))" }}>
                        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--brand))" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-sm italic" style={{ color: "hsl(var(--foreground-muted))" }}>
                Note: Clubs are responsible for obtaining guardian consent before adding Youth Members. Clubnizer does not independently verify that such consent has been obtained.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                4. How We Use Data
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                We use the data we collect to:
              </p>
              <ul className="space-y-1.5 list-none">
                {[
                  "Create and maintain your account",
                  "Enable Club administration and member management",
                  "Facilitate event scheduling and communications",
                  "Process payments",
                  "Analyze usage patterns to improve features",
                  "Fix bugs and resolve technical issues",
                  "Send notifications about events and Club activities",
                  "Prevent unauthorized access and ensure security",
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
                5. Legal Basis for Processing
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                We process personal data based on: contract performance (to provide the Service), legitimate interests (security, fraud prevention, service improvement), controller-determined basis (for Club member data, the Club determines the applicable lawful basis), and legal obligations as required by applicable laws.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                6. Youth Members and Guardian Consent
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                Youth Members (users under 16 years of age) must be associated with a Guardian in the system. Youth Members cannot create accounts directly. Clubs and their administrators are solely responsible for obtaining appropriate consent from Guardians before adding Youth Members, ensuring Guardians are informed about data processing, and maintaining accurate Guardian contact information.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                <strong>Clubnizer does not independently verify that guardian consent has been obtained.</strong> We rely on Clubs to fulfill this responsibility. Guardians may exercise data subject rights on behalf of their Youth Members.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                7. Data Sharing
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                Your data is shared with the Club(s) you belong to, as determined by Club administrators. Certain information (such as name, profile photo, email, and role) may be visible to other members within the same Club.
              </p>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                We share data with service providers who process data on our behalf, including Google Cloud / Firebase (infrastructure, authentication, database), Stripe (payment processing), and email delivery providers.
              </p>
              <p className="text-base leading-relaxed font-semibold" style={{ color: "hsl(var(--foreground-muted))" }}>
                We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                8. International Data Transfers
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                Your data may be processed in countries other than your country of residence, including the United States and other countries where our service providers operate. When we transfer data internationally, we implement appropriate safeguards as required by applicable data protection laws. We cannot guarantee that data protection laws in all countries where data is processed will be equivalent to those in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                9. Data Retention
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                We retain your data while your account remains active and as necessary to provide the Service.
              </p>
              <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "hsl(0 0% 100%)" }}>
                Deleted Accounts & Removed Memberships
              </h3>
              <ul className="space-y-1.5 list-none mb-4">
                {[
                  "Deleted accounts and removed memberships are subject to a 30-day recovery period before permanent deletion",
                  "During the 30-day recovery period, reactivation may be possible",
                  "After the recovery period, data is permanently deleted from active systems",
                  "Backups may retain data for a limited period after deletion from the primary system",
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
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                Data export is available upon request. Clubs may request an export of their data, which will be provided in a structured, commonly used format. Requests must come from authorized club administrators. To request an export, contact us at{" "}
                <a href="mailto:support@clubnizer.com" style={{ color: "hsl(var(--accent-blue))" }}>support@clubnizer.com</a>.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                10. Your Rights
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                Under applicable data protection laws, you may have the right to:
              </p>
              <ul className="space-y-1.5 list-none mb-4">
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
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                <strong>For Club data:</strong> Contact your Club administrator, who as Data Controller can assist with requests relating to Club membership data. <strong>For account data:</strong> Contact us at{" "}
                <a href="mailto:privacy@clubnizer.com" style={{ color: "hsl(var(--accent-blue))" }}>privacy@clubnizer.com</a>. We aim to respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                11. Cookies and Tracking
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                We use essential cookies necessary for the Service to function, including authentication and session management, and security features. We may collect anonymized usage data to improve the Service. This does not include personal identifiers.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                12. Security
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. Our security measures include encryption of data in transit and at rest, access controls and authentication, and regular security reviews. However, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                13. Changes to This Policy
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                We may update this Privacy Policy from time to time. When we make changes, the "Last Updated" date will be revised. Material changes will be communicated via the Platform or email. Continued use of the Service after changes constitutes acceptance. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                14. Contact Us
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                For questions about this Privacy Policy or our data practices:{" "}
                <a href="mailto:privacy@clubnizer.com" style={{ color: "hsl(var(--accent-blue))" }}>privacy@clubnizer.com</a> (Privacy Inquiries) or{" "}
                <a href="mailto:support@clubnizer.com" style={{ color: "hsl(var(--accent-blue))" }}>support@clubnizer.com</a> (General Support). We aim to respond to all inquiries within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>
                15. Additional Information for Specific Jurisdictions
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                If you are located in the European Economic Area (EEA), you have the right to lodge a complaint with your local data protection authority if you believe we have not complied with applicable data protection laws. California residents may have additional rights under the California Consumer Privacy Act (CCPA). We do not sell personal information as defined under CCPA.
              </p>
            </section>

            <p className="text-sm italic pt-6 border-t" style={{ borderColor: "hsl(0 0% 100% / 0.08)", color: "hsl(var(--foreground-muted))" }}>
              By using Clubnizer, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
