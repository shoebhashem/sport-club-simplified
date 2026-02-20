import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="site-container max-w-3xl">
          <span className="section-label mb-6">Legal</span>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-4" style={{ color: "hsl(0 0% 100%)" }}>
            Terms of Service
          </h1>
          <p className="section-sub mb-10">Last updated: February 2026</p>

          <div className="space-y-10">
            {[
              {
                title: "1. Acceptance of Terms",
                content:
                  "By accessing or using Sportnizer at sportnizer.com or app.sportnizer.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.",
              },
              {
                title: "2. Service Description",
                content:
                  "Sportnizer is a sport club management platform that helps teams and clubs manage members, events, attendance and membership fee tracking. The platform is provided as-is and is continuously evolving.",
              },
              {
                title: "3. User Responsibilities",
                content:
                  "You are responsible for maintaining the confidentiality of your account credentials. You agree to use Sportnizer only for lawful purposes and in accordance with these terms. You are responsible for ensuring that data you enter about other individuals (such as club members) is handled in compliance with applicable privacy regulations.",
              },
              {
                title: "4. Data Roles",
                content:
                  "Clubs and organizations using Sportnizer act as Data Controllers and are responsible for the personal data they enter. Sportnizer acts as a Data Processor, processing data only according to club instructions. Your use of Sportnizer is also governed by our Privacy Policy.",
              },
              {
                title: "5. Intellectual Property",
                content:
                  "All content, branding, and software on the Sportnizer platform are owned by Sportnizer. You may not copy, reproduce, or redistribute any part of the platform without prior written permission.",
              },
              {
                title: "6. Limitation of Liability",
                content:
                  "Sportnizer is provided in good faith and with reasonable care. However, we do not guarantee uninterrupted availability or that the service will be error-free. We are not liable for data loss, indirect damages, or losses arising from use of the platform beyond what is required by applicable law.",
              },
              {
                title: "7. Changes to the Service",
                content:
                  "Sportnizer is actively developed and improved. We reserve the right to update, change, or discontinue features at any time. We will aim to communicate significant changes to users where possible.",
              },
              {
                title: "8. Changes to These Terms",
                content:
                  "We may update these Terms of Service from time to time. Continued use of the platform after changes constitutes acceptance of the updated terms. The date of the last update is shown at the top of this page.",
              },
              {
                title: "9. Contact",
                content: "For questions about these terms, contact us at support@sportnizer.com.",
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
