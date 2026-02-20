import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="site-container max-w-3xl">
          <span className="section-label mb-6">Legal</span>
          <h1
            className="font-display font-black text-4xl md:text-5xl mb-4"
            style={{ color: "hsl(var(--navy))" }}
          >
            Terms of Service
          </h1>
          <p className="section-sub mb-10">Last updated: February 2026</p>

          <div className="space-y-10">
            {[
              {
                title: "1. Acceptance of Terms",
                content:
                  "These Terms of Service govern your access to and use of the Sportnizer platform available at sportnizer.com and related applications. By creating a club account or using Sportnizer, you agree to be bound by these Terms. If you do not agree, you may not use the service.",
              },
              {
                title: "2. Service Description",
                content:
                  "Sportnizer is a sport club management platform designed to help clubs and teams manage members, events, attendance tracking, and membership fee tracking. The platform is continuously developed and may evolve over time.",
              },
              {
                title: "3. Account and Organizational Responsibility",
                content:
                  "The individual creating a club account represents the club or organization and confirms they are authorized to act on its behalf. Clubs are responsible for maintaining the confidentiality of account credentials and for ensuring that any personal data entered into the platform is collected and processed in compliance with applicable laws.",
              },
              {
                title: "4. Data Roles and Responsibilities",
                content:
                  "For purposes of applicable data protection laws, the Club or Organization acts as the Data Controller, and Sportnizer acts as the Data Processor. The Club determines what personal data is entered into the platform, the purpose of processing, and the retention period. Sportnizer processes personal data solely on documented instructions from the Club and does not sell personal data or use it for advertising purposes.",
              },
              {
                title: "5. Data Processing Agreement (DPA)",
                content:
                  "This section constitutes the Data Processing Agreement between the Club (Controller) and Sportnizer (Processor). Sportnizer processes personal data only to provide the services described in these Terms, including member management, event planning, attendance tracking, membership fee status tracking, platform security, and customer support. Sportnizer may use trusted infrastructure and cloud service providers as sub-processors, all of which are required to maintain appropriate security and confidentiality standards.",
              },
              {
                title: "6. Security Measures",
                content:
                  "Sportnizer implements appropriate technical and organizational measures to protect personal data, including secure cloud infrastructure, encrypted connections, access controls, and minimal data collection principles. Security and responsible data handling are fundamental principles of how Sportnizer is built and maintained.",
              },
              {
                title: "7. Data Retention and Deletion",
                content:
                  "Clubs may request deletion of their data at any time by contacting support@sportnizer.com. Upon deletion request, data will enter a 30–60 day grace period during which restoration may be possible. After the grace period, data will be permanently deleted from active systems. Encrypted backups may temporarily retain data as part of standard technical operations and are automatically overwritten in accordance with routine backup cycles.",
              },
              {
                title: "8. Data Export and Portability",
                content:
                  "Upon request from an authorized club administrator, Sportnizer will provide an export of club data in a structured, commonly used format within a reasonable timeframe. This supports data portability and ensures that clubs retain control over their information.",
              },
              {
                title: "9. Privacy Policy",
                content:
                  "Your use of Sportnizer is also governed by our Privacy Policy, which forms part of these Terms. Personal data is processed in accordance with applicable data protection regulations, including GDPR and relevant international privacy standards.",
              },
              {
                title: "10. Intellectual Property",
                content:
                  "All content, branding, design, and software associated with the Sportnizer platform are owned by Sportnizer. Clubs are granted a limited, non-exclusive, non-transferable right to use the platform in accordance with these Terms.",
              },
              {
                title: "11. Service Availability",
                content:
                  "Sportnizer is provided in good faith and with reasonable care. While we aim for high availability and reliability, we do not guarantee uninterrupted or error-free operation. The platform is actively developed and may change over time.",
              },
              {
                title: "12. Limitation of Liability",
                content:
                  "To the maximum extent permitted by applicable law, Sportnizer shall not be liable for indirect, incidental, or consequential damages arising from use of the platform. Total liability shall not exceed any amounts paid for the service in the preceding 12 months, if applicable.",
              },
              {
                title: "13. Changes to the Service or Terms",
                content:
                  "We may update or modify these Terms from time to time. Significant changes may require renewed acceptance. Continued use of the platform after updates constitutes acceptance of the revised Terms.",
              },
              {
                title: "14. Contact",
                content:
                  "For questions regarding these Terms or data protection matters, please contact support@sportnizer.com.",
              },
            ].map((section) => (
              <section key={section.title}>
                <h2
                  className="font-display font-bold text-2xl mb-3"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  {section.title}
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "hsl(var(--foreground-muted))" }}
                >
                  {section.content.includes("support@sportnizer.com") ? (
                    <>
                      {section.content.split("support@sportnizer.com")[0]}
                      <a
                        href="mailto:support@sportnizer.com"
                        style={{ color: "hsl(var(--accent-blue))" }}
                      >
                        support@sportnizer.com
                      </a>
                      {section.content.split("support@sportnizer.com")[1]}
                    </>
                  ) : (
                    section.content
                  )}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
