import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalTerms() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="site-container max-w-3xl">
          <span className="section-label mb-6">Legal</span>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-4" style={{ color: "hsl(0 0% 100%)" }}>
            Terms of Service
          </h1>
          <p className="section-sub mb-2">
            <strong style={{ color: "hsl(0 0% 100% / 0.7)" }}>Version:</strong> TERMS_2026.1
          </p>
          <p className="section-sub mb-10">
            <strong style={{ color: "hsl(0 0% 100% / 0.7)" }}>Effective Date:</strong> February 25, 2026
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>1. Introduction & Acceptance</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                Welcome to Sportnizer ("Service," "Platform," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of Sportnizer, a platform for managing sports clubs, groups, events, and member communications. By creating an account, accessing, or using Sportnizer, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>2. Definitions</h2>
              <ul className="space-y-2 list-none">
                {[
                  '"Club": An organization created on Sportnizer to manage sports teams, groups, and members.',
                  '"Club Administrator": A user with administrative privileges over a Club.',
                  '"Member": A user who belongs to one or more Clubs on the Platform.',
                  '"Youth Member": A member under the age of 16 who requires guardian association.',
                  '"Guardian": An adult user responsible for a Youth Member\'s participation.',
                  '"Data Controller": The entity that determines the purposes and means of processing personal data (Clubs, in the context of Club member data).',
                  '"Data Processor": The entity that processes personal data on behalf of a Data Controller (Sportnizer, in the context of Club member data).',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base" style={{ color: "hsl(var(--foreground-muted))" }}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--brand))" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>3. Account Registration</h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                To create an account, you must be at least 16 years of age (or have guardian consent if younger), provide accurate registration information, and maintain the security of your account credentials. You are responsible for all activities that occur under your account.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                <strong>If you create or administer a Club on Sportnizer, you represent and warrant that you have the authority to bind the Club (and, if applicable, the legal entity it represents) to these Terms, including the Data Processing provisions contained herein.</strong>
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>4. Club Administration & Data Controller Responsibilities</h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                Clubs and their designated administrators act as Data Controllers for personal data collected and processed within their Club. As Data Controllers, Club administrators determine the purposes for which member data is collected, are responsible for ensuring a lawful basis exists for processing, determine which members have access to other members' information, and are responsible for complying with applicable data protection laws.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                <strong>Club administrators are solely responsible for obtaining appropriate consent from guardians before adding Youth Members to the Platform.</strong> Sportnizer does not independently verify that guardian consent has been obtained.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>5. Sportnizer as Data Processor</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                Sportnizer acts solely as a Data Processor on behalf of Clubs for data processed within Clubs. We process personal data only on documented instructions from Clubs, do not independently determine the purposes or means of processing Club member data, do not use Club member data for our own purposes beyond providing and improving the Service, and implement appropriate technical and organizational measures to protect personal data. For data directly related to your Sportnizer account, Sportnizer acts as a Data Controller.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>6. Data Processing Agreement</h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                This section constitutes the Data Processing Agreement ("DPA") between Sportnizer (Processor) and Clubs (Controllers) as required under applicable data protection laws. Processing covers the provision of club management platform services for the duration of the Club's use of the Service.
              </p>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                Sportnizer engages sub-processors including Google Cloud / Firebase (infrastructure, authentication, database), Stripe (payment processing), and email delivery providers. We may update sub-processors from time to time and will communicate material changes via the Platform.
              </p>
              <p className="text-base leading-relaxed mb-3" style={{ color: "hsl(var(--foreground-muted))" }}>
                Sportnizer implements appropriate technical and organizational measures to protect personal data, including encryption of data in transit and at rest, access controls and authentication mechanisms, regular security assessments, and incident response procedures. We do not guarantee absolute security, as no method of transmission over the Internet or electronic storage is completely secure.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                In the event of a personal data breach affecting Club data, Sportnizer will notify the affected Club without undue delay and in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>7. Acceptable Use Policy</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                You agree not to use the Service for any unlawful purpose, upload or transmit harmful content, attempt to gain unauthorized access, interfere with the Service's operation, impersonate any person, harvest user information without consent, or use the Service to send unsolicited communications. We reserve the right to remove content that violates these standards.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>8. Intellectual Property</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                The Service, including its design, features, and content (excluding user content), is owned by Sportnizer and protected by intellectual property laws. You retain ownership of content you create on the Platform. By posting content, you grant Sportnizer a non-exclusive, worldwide, royalty-free license to use, display, and distribute such content solely for the purpose of providing the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>9. Service Availability</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                We aim to provide reliable service but do not guarantee uninterrupted, error-free, or secure operation. The Service is provided on an "as is" and "as available" basis. We may modify, suspend, or discontinue the Service at any time with reasonable notice where practicable.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>10. Limitation of Liability</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                To the maximum extent permitted by applicable law, Sportnizer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunities. Total aggregate liability shall not exceed the fees paid by you in the twelve (12) months preceding the claim. Some jurisdictions do not allow limitation of liability for certain damages; in such jurisdictions, our liability is limited to the greatest extent permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>11. Indemnification</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                You agree to indemnify and hold harmless Sportnizer from any claims arising from your use of the Service, violation of these Terms, or violation of any third-party rights. Club administrators additionally agree to indemnify Sportnizer for any claims arising from their failure to obtain proper guardian consent for Youth Members, establish lawful basis for processing member data, or fulfill their obligations as Data Controllers.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>12. Termination & Account Deletion</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                You may delete your account at any time through the Platform settings. Deleted accounts and removed memberships are subject to a temporary recovery period before permanent deletion. We may suspend or terminate your account if you violate these Terms, your account is inactive for an extended period, required by law, or necessary to protect the Service or other users. Upon termination, your right to access the Service will cease and your data will be handled according to our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>13. Changes to Terms</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                We may update these Terms from time to time. Material changes will be communicated via notice on the Platform or email. Continued use of the Service after changes take effect constitutes acceptance. If you do not agree to the changes, you must stop using the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>14. General Provisions</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                These Terms, together with the Privacy Policy, constitute the entire agreement between you and Sportnizer regarding the Service. If any provision is held to be invalid, the remaining provisions shall continue in full force. You may not assign these Terms without Sportnizer's prior written consent.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-3" style={{ color: "hsl(0 0% 100%)" }}>15. Contact Information</h2>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--foreground-muted))" }}>
                For questions about these Terms:{" "}
                <a href="mailto:support@sportnizer.com" style={{ color: "hsl(var(--accent-blue))" }}>support@sportnizer.com</a> (General Support) or{" "}
                <a href="mailto:legal@sportnizer.com" style={{ color: "hsl(var(--accent-blue))" }}>legal@sportnizer.com</a> (Legal Inquiries).
              </p>
            </section>

            <p className="text-sm italic pt-6 border-t" style={{ borderColor: "hsl(0 0% 100% / 0.08)", color: "hsl(var(--foreground-muted))" }}>
              By using Sportnizer, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
