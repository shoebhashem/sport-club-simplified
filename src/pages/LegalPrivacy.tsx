import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LegalPrivacy() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-24">
        <div className="site-container max-w-3xl">
          <span className="section-label mb-6">Legal</span>
          <h1
            className="font-display font-black text-4xl md:text-5xl mb-4"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Privacy Policy
          </h1>
          <p className="section-sub mb-2">
            <strong style={{ color: "hsl(0 0% 100% / 0.7)" }}>Version:</strong>{" "}
            PRIVACY_2026.2
          </p>
          <p className="section-sub mb-10">
            <strong style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              Effective Date:
            </strong>{" "}
            February 25, 2026 &nbsp;&middot;&nbsp;{" "}
            <strong style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              Last Updated:
            </strong>{" "}
            May 26, 2026
          </p>

          <div className="space-y-10 legal-content">
            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                1. Introduction
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                This Privacy Policy explains how Clubnizer ("we," "us," or
                "our") collects, uses, shares, and protects personal data when
                you use our platform for sports club management ("Service"). We
                are committed to protecting your privacy and handling your data
                responsibly. This policy applies to all users of Clubnizer,
                including Club administrators, members, and guardians.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                2. Data Controller vs Data Processor Roles
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Understanding who is responsible for your data depends on the
                context:
              </p>

              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                2.1 Club Data (Clubnizer as Data Processor)
              </h3>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                <strong>For data processed within Clubs</strong>, the Club acts
                as the Data Controller. This means the Club (through its
                administrators) determines why and how member data is processed
                within their organization. Clubnizer acts as a Data Processor,
                processing Club data only on behalf of and under the
                instructions of the Club. We do not independently determine the
                purposes of processing Club member data.
              </p>

              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                2.2 Account Data (Clubnizer as Data Controller)
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                <strong>For data related to your Clubnizer account</strong>{" "}
                (such as your login credentials and account settings), Clubnizer
                acts as the Data Controller and processes such data to provide
                and maintain the Service.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                3. Data We Collect
              </h2>
              {[
                {
                  sub: "3.1 Account Data",
                  items: [
                    "Email address",
                    "Display name",
                    "Password (stored as a secure hash)",
                  ],
                },
                {
                  sub: "3.2 Profile Data",
                  items: [
                    "Profile photo (may be taken with your device camera or selected from your photo library)",
                    "Phone number",
                    "Date of birth (required for Youth Members)",
                  ],
                  note: "You may optionally provide:",
                },
                {
                  sub: "3.3 Club Membership Data",
                  items: [
                    "Club and group associations",
                    "Roles within the Club (e.g., player, coach, admin)",
                    "Guardian relationships (for Youth Members)",
                  ],
                },
                {
                  sub: "3.4 Youth Member Data",
                  items: [
                    "Name",
                    "Date of birth",
                    "Guardian contact information",
                  ],
                  note: "For Youth Members (users under 16):",
                },
                {
                  sub: "3.5 Event and Attendance Data",
                  items: [
                    "Event RSVPs and responses",
                    "Attendance records",
                    "Participation history for statistical purposes",
                  ],
                },
                {
                  sub: "3.6 Payment Data",
                  items: [
                    "Payment card details are processed by our payment provider (Stripe)",
                    "We store transaction records and payment status",
                    "We do not store full credit card numbers",
                  ],
                },
                {
                  sub: "3.7 Usage Data",
                  items: [
                    "App interactions and feature usage",
                    "Device information (platform, app version)",
                    "Error logs and performance data",
                  ],
                },
              ].map((group) => (
                <div key={group.sub} className="mb-4">
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    {group.sub}
                  </h3>
                  {group.note && (
                    <p
                      className="text-base mb-2"
                      style={{ color: "hsl(var(--foreground-muted))" }}
                    >
                      {group.note}
                    </p>
                  )}
                  <ul className="space-y-1.5 list-none">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-base"
                        style={{ color: "hsl(var(--foreground-muted))" }}
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "hsl(var(--brand))" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p
                className="text-sm italic"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Note: Clubs are responsible for obtaining guardian consent
                before adding Youth Members. Clubnizer does not independently
                verify that such consent has been obtained.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                3.8 Images and Media
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                The app allows you to upload images in the following contexts:
              </p>
              <ul className="space-y-1.5 list-none mb-4">
                {[
                  "Profile photos — a personal image associated with your account",
                  "Club logos — an image representing your club",
                  "Group images — an image representing a group within a club",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "hsl(var(--brand))" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                Camera and Photo Library Access
              </h3>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                To upload images, the app may request access to your device
                camera or photo library. This permission is requested only when
                you actively choose to upload an image. You can decline this
                permission and still use all other features of the app.
              </p>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                Image Storage
              </h3>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Uploaded images are stored using Firebase Storage (Google
                Cloud). Uploaded images may be accessible via a direct URL,
                meaning anyone who obtains the link to an image may be able to
                view it. You should not upload images containing sensitive or
                personal information you do not want to be publicly accessible.
              </p>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                Purpose
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Images are used solely to personalize your profile or club
                within the app. We do not use uploaded images for advertising,
                analytics, or any purpose beyond providing the core
                functionality of the Service.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                3.9 Swedish Personal Identity Number (Personnummer)
              </h2>
              <div
                className="mb-4 p-4 rounded-lg border"
                style={{
                  borderColor: "hsl(var(--brand) / 0.35)",
                  background: "hsl(var(--brand) / 0.07)",
                }}
              >
                <p
                  className="text-sm"
                  style={{ color: "hsl(var(--foreground-muted))" }}
                >
                  <strong style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                    Scope:
                  </strong>{" "}
                  This section applies only to members of clubs that have
                  enabled the LOK Attendance Reporting feature. This feature is
                  currently only available for sports clubs in Sweden registered
                  with the Swedish Sports Confederation
                  (Riksidrottsförbundet / RF).
                </p>
              </div>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Providing your personal identity number (<em>personnummer</em>)
                is <strong>entirely optional</strong>. It is only required if
                your club uses the LOK attendance reporting feature to submit
                activity data to RF in order to qualify for activity-based
                public funding (<em>aktivitetsstöd</em>).
              </p>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                If you choose to provide your personnummer, we collect:
              </p>
              <ul className="space-y-1.5 list-none mb-4">
                {[
                  "Your personal identity number (normalized to 12-digit format)",
                  "Your date of birth (derived from the personnummer, stored as a separate non-sensitive field)",
                  "The timestamp and version of the consent you gave when providing the number",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "hsl(var(--brand))" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                The full personnummer is{" "}
                <strong>never stored in plaintext</strong>. See Section 12b for
                a full description of how it is protected.
              </p>{" "}
            </section>
            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                4. How We Use Data
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We use the data we collect to:
              </p>
              {[
                {
                  sub: "4.1 Provide the Service",
                  items: [
                    "Create and maintain your account",
                    "Enable Club administration and member management",
                    "Facilitate event scheduling and communications",
                    "Process payments",
                  ],
                },
                {
                  sub: "4.2 Improve the Service",
                  items: [
                    "Analyze usage patterns to improve features",
                    "Fix bugs and resolve technical issues",
                    "Develop new functionality",
                  ],
                },
                {
                  sub: "4.3 Communicate with You",
                  items: [
                    "Send notifications about events and Club activities",
                    "Deliver invitation emails",
                    "Provide customer support",
                  ],
                },
                {
                  sub: "4.4 Ensure Security",
                  items: [
                    "Prevent unauthorized access",
                    "Detect and prevent fraud",
                    "Enforce our Terms of Service",
                  ],
                },
              ].map((group) => (
                <div key={group.sub} className="mb-4 last:mb-0">
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    {group.sub}
                  </h3>
                  <ul className="space-y-1.5 list-none">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-base"
                        style={{ color: "hsl(var(--foreground-muted))" }}
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "hsl(var(--brand))" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                5. Legal Basis for Processing
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We process personal data based on: contract performance (to
                provide the Service), legitimate interests (security, fraud
                prevention, service improvement), controller-determined basis
                (for Club member data, the Club determines the applicable lawful
                basis), and legal obligations as required by applicable laws.
              </p>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                5.5 Explicit Consent for Personnummer (Swedish Clubs)
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                For the processing of Swedish personal identity numbers (
                <em>personnummer</em>), the legal basis is{" "}
                <strong>explicit consent</strong> (GDPR Art. 6(1)(a)). Consent
                is recorded in the app at the moment you choose to provide your
                personnummer, including the consent version and timestamp. You
                may withdraw consent at any time (see Section 9.6). The Club, as
                Data Controller, may additionally rely on a legal obligation
                toward RF when submitting LOK attendance reports.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                6. Youth Members and Guardian Consent
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Youth Members (users under 16 years of age) must be associated
                with a Guardian in the system. Youth Members cannot create
                accounts directly. Clubs and their administrators are solely
                responsible for obtaining appropriate consent from Guardians
                before adding Youth Members, ensuring Guardians are informed
                about data processing, and maintaining accurate Guardian contact
                information.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                <strong>
                  Clubnizer does not independently verify that guardian consent
                  has been obtained.
                </strong>{" "}
                We rely on Clubs to fulfill this responsibility. Guardians may
                exercise data subject rights on behalf of their Youth Members.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                7. Data Sharing
              </h2>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                7.1 With Your Club
              </h3>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Your data is shared with the Club(s) you belong to, as
                determined by Club administrators. Club administrators can view
                member information as necessary for Club administration.
              </p>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                7.2 With Other Club Members
              </h3>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Certain information (such as name, profile photo, email, and
                role) may be visible to other members within the same Club, as
                configured by Club administrators.
              </p>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                7.3 With Sub-Processors
              </h3>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We share data with service providers who process data on our
                behalf:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr
                      style={{
                        borderBottom: "1px solid hsl(0 0% 100% / 0.12)",
                      }}
                    >
                      <th
                        className="text-left py-2 pr-4 font-semibold"
                        style={{ color: "hsl(0 0% 100%)" }}
                      >
                        Sub-Processor
                      </th>
                      <th
                        className="text-left py-2 pr-4 font-semibold"
                        style={{ color: "hsl(0 0% 100%)" }}
                      >
                        Purpose
                      </th>
                      <th
                        className="text-left py-2 font-semibold"
                        style={{ color: "hsl(0 0% 100%)" }}
                      >
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Google Cloud / Firebase",
                        "Infrastructure, authentication, database, image storage",
                        "USA/EU",
                      ],
                      ["Stripe", "Payment processing", "USA/EU"],
                      [
                        "[Email Provider]",
                        "Transactional email delivery",
                        "[Location]",
                      ],
                    ].map(([name, purpose, location], index) => (
                      <tr
                        key={name}
                        style={
                          index < 2
                            ? {
                                borderBottom: "1px solid hsl(0 0% 100% / 0.06)",
                              }
                            : undefined
                        }
                      >
                        <td
                          className="py-2 pr-4"
                          style={{ color: "hsl(var(--foreground-muted))" }}
                        >
                          {name}
                        </td>
                        <td
                          className="py-2 pr-4"
                          style={{ color: "hsl(var(--foreground-muted))" }}
                        >
                          {purpose}
                        </td>
                        <td
                          className="py-2"
                          style={{ color: "hsl(var(--foreground-muted))" }}
                        >
                          {location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                7.4 Legal Requirements
              </h3>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We may disclose data when required by law or to:
              </p>
              <ul className="space-y-1.5 list-none mb-4">
                {[
                  "Comply with legal processes",
                  "Protect our rights and safety",
                  "Prevent fraud or security threats",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "hsl(var(--brand))" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                7.5 No Selling of Data
              </h3>
              <p
                className="text-base leading-relaxed font-semibold"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                8. International Data Transfers
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Your data may be processed in countries other than your country
                of residence, including the United States and other countries
                where our service providers operate. When we transfer data
                internationally, we implement appropriate safeguards as required
                by applicable data protection laws. We cannot guarantee that
                data protection laws in all countries where data is processed
                will be equivalent to those in your jurisdiction.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                9. Data Retention
              </h2>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                9.1 Active Accounts
              </h3>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We retain your data while your account remains active and as
                necessary to provide the Service.
              </p>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                9.2 Inactive Memberships
              </h3>
              <ul className="space-y-1.5 list-none mb-4">
                {[
                  "When you leave a group, are removed from a Club, or your membership becomes inactive, your membership record is soft-deleted and marked as inactive",
                  "A 30-day grace period applies, during which a Club administrator can reactivate your membership",
                  "After 30 days, inactive membership records are permanently deleted by an automated cleanup process",
                  "Any outstanding membership fees associated with the membership are cancelled upon removal",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "hsl(var(--accent-blue))" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                9.3 Account Deletion ("Delete My Account")
              </h3>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                You can delete your own account at any time using the{" "}
                <strong>"Delete My Account"</strong> option in your Profile
                settings within the app. Account deletion is{" "}
                <strong>immediate and permanent</strong> — there is no recovery
                period.
              </p>
              <h4
                className="font-display font-semibold text-base mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                Pre-conditions
              </h4>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Before you can delete your account, you must meet all of the
                following conditions:
              </p>
              <ol
                className="space-y-1.5 list-decimal pl-5 mb-4 text-base"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                <li>
                  Leave all groups — you cannot have any active group
                  memberships.
                </li>
                <li>
                  Not hold a club-admin role — another club admin must remove
                  you as club admin first.
                </li>
                <li>
                  Not be a guardian of active youth players — contact a club
                  admin to remove the guardian association first.
                </li>
              </ol>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                If any of these conditions are not met, the app will inform you
                of the specific steps required.
              </p>
              <div className="mb-4">
                <h4
                  className="font-display font-semibold text-base mb-2"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  What is deleted immediately
                </h4>
                <ul className="space-y-1.5 list-none">
                  {[
                    "Your Firebase Authentication account (login credentials)",
                    "Your user profile document (name, email, phone, profile photo reference, preferences)",
                    "Your in-app notifications",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-base"
                      style={{ color: "hsl(var(--foreground-muted))" }}
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "hsl(var(--accent-blue))" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4
                  className="font-display font-semibold text-base mb-2"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  What is NOT deleted by account deletion
                </h4>
                <ul className="space-y-1.5 list-none">
                  {[
                    "Club membership records — these are managed by the Club and follow the inactive membership lifecycle described in Section 9.2. Since you must leave all groups before deleting your account, these records will already be in the soft-deleted state.",
                    "Event and attendance data — historical event responses and attendance records you contributed while active may be retained by the Club for administrative purposes.",
                    "Payment and transaction records — retained as required by law and by our payment processor (Stripe) for financial compliance.",
                    "Anonymized usage data — aggregated, non-identifiable analytics data may be retained.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-base"
                      style={{ color: "hsl(var(--foreground-muted))" }}
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "hsl(var(--accent-blue))" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                9.3a Admin-Deactivated Accounts
              </h3>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                If your account is deactivated by an administrator rather than
                self-deleted, a <strong>60-day grace period</strong> applies.
                During this period, the account may be reactivated. After 60
                days, the account is permanently deleted by an automated cleanup
                process.
              </p>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                9.4 Extended Retention
              </h3>
              <ul className="space-y-1.5 list-none mb-4">
                {[
                  "Required by law (for example, financial records)",
                  "Necessary for legitimate business purposes (for example, fraud prevention)",
                  "Subject to ongoing disputes or legal proceedings",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "hsl(var(--accent-blue))" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                9.5 Backup Retention
              </h3>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Backups may retain data for a limited period after deletion from
                the primary system.
              </p>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                9.6 Personnummer Retention (Swedish Clubs)
              </h3>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Your personnummer is retained only for as long as you have given
                consent. You may withdraw consent and permanently delete your
                stored personnummer at any time via{" "}
                <strong>LOK Settings → Withdraw Consent</strong> in the app.
                Deletion is <strong>immediate and permanent</strong> — the
                encrypted value is removed from the database with no grace
                period.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Your personnummer is also permanently deleted when you delete
                your account (Section 9.3). It is <strong>not</strong> subject
                to the soft-delete grace period that applies to membership
                records.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                10. Your Rights
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Under applicable data protection laws, you may have the
                following rights:
              </p>
              <div className="space-y-4">
                <div>
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    10.1 Right of Access
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    Request a copy of the personal data we hold about you.
                  </p>
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    10.2 Right to Rectification
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    Request correction of inaccurate or incomplete personal
                    data.
                  </p>
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    10.3 Right to Erasure
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    Request deletion of your personal data, subject to legal
                    retention requirements. You can exercise this right directly
                    by using the <strong>"Delete My Account"</strong> feature in
                    the app. See Section 9.3 for details and pre-conditions.
                  </p>
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    10.4 Right to Restriction
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    Request that we limit processing of your data in certain
                    circumstances.
                  </p>
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    10.5 Right to Data Portability
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    Request your data in a portable format for transfer to
                    another service.
                  </p>
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    10.6 Right to Object
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    Object to processing based on legitimate interests in
                    certain circumstances.
                  </p>
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    10.7 Data Export
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <strong>Data export is available upon request.</strong> To
                    request an export of your data, please contact us at{" "}
                    <a
                      href="mailto:support@clubnizer.com"
                      style={{ color: "hsl(var(--accent-blue))" }}
                    >
                      support@clubnizer.com
                    </a>
                    . We will respond within a reasonable timeframe.
                  </p>
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    10.8 How to Exercise Your Rights
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-3"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <strong>To delete your account:</strong> Use the{" "}
                    <strong>"Delete My Account"</strong> option in your Profile
                    settings within the app. This performs an immediate,
                    permanent deletion of your account data. See Section 9.3.
                  </p>
                  <p
                    className="text-base leading-relaxed mb-3"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <strong>For Club data:</strong> Contact your Club
                    administrator, who as Data Controller can assist with
                    requests relating to Club membership data.
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <strong>For account data or other requests:</strong> Contact
                    us directly at{" "}
                    <a
                      href="mailto:privacy@clubnizer.com"
                      style={{ color: "hsl(var(--accent-blue))" }}
                    >
                      privacy@clubnizer.com
                    </a>
                    . We aim to respond to requests within 30 days.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                11. Cookies and Tracking
              </h2>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                11.1 Essential Cookies
              </h3>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We use essential cookies necessary for the Service to function,
                including:
              </p>
              <ul className="space-y-1.5 list-none mb-4">
                {[
                  "Authentication and session management",
                  "Security features",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "hsl(var(--brand))" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                11.2 Analytics
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We may collect anonymized usage data to improve the Service.
                This does not include personal identifiers.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                12. Security
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We implement appropriate technical and organizational measures
                to protect personal data against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Our security measures include:
              </p>
              <ul className="space-y-1.5 list-none mb-4">
                {[
                  "Encryption of data in transit (HTTPS/TLS)",
                  "Encryption of data at rest",
                  "Access controls and authentication",
                  "Regular security reviews",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "hsl(var(--brand))" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className="text-sm mb-4"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                For particularly sensitive identifiers such as Swedish personal
                identity numbers, we apply additional protection:{" "}
                <strong>AES-256-GCM authenticated encryption</strong> with keys
                managed exclusively via Google Cloud Secret Manager (see
                Section 12b).
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                <strong>
                  However, no method of transmission over the Internet or
                  electronic storage is completely secure.
                </strong>{" "}
                We cannot guarantee absolute security, and you use the Service
                at your own risk.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                12a. Device Permissions
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                Clubnizer may request the following device permissions. The
                specific permission identifiers differ by platform but serve the
                same purpose.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr
                      style={{
                        borderBottom: "1px solid hsl(0 0% 100% / 0.12)",
                      }}
                    >
                      <th
                        className="text-left py-2 pr-4 font-semibold"
                        style={{ color: "hsl(0 0% 100%)" }}
                      >
                        Permission
                      </th>
                      <th
                        className="text-left py-2 pr-4 font-semibold"
                        style={{ color: "hsl(0 0% 100%)" }}
                      >
                        Android
                      </th>
                      <th
                        className="text-left py-2 pr-4 font-semibold"
                        style={{ color: "hsl(0 0% 100%)" }}
                      >
                        iOS
                      </th>
                      <th
                        className="text-left py-2 pr-4 font-semibold"
                        style={{ color: "hsl(0 0% 100%)" }}
                      >
                        Purpose
                      </th>
                      <th
                        className="text-left py-2 font-semibold"
                        style={{ color: "hsl(0 0% 100%)" }}
                      >
                        Required
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Camera",
                        "android.permission.CAMERA",
                        "NSCameraUsageDescription",
                        "Allows you to take a photo when uploading a profile picture, club logo, or group image",
                        "Optional",
                      ],
                      [
                        "Photo Library",
                        "android.permission.READ_EXTERNAL_STORAGE",
                        "NSPhotoLibraryUsageDescription",
                        "Allows you to select an existing image from your device photo library when uploading",
                        "Optional",
                      ],
                      [
                        "Push Notifications",
                        "android.permission.POST_NOTIFICATIONS",
                        "Prompted at runtime by iOS",
                        "Allows the app to send you notifications about events and club activities",
                        "Optional",
                      ],
                    ].map(
                      (
                        [permission, android, ios, purpose, required],
                        index,
                        arr,
                      ) => (
                        <tr
                          key={permission}
                          style={
                            index < arr.length - 1
                              ? {
                                  borderBottom:
                                    "1px solid hsl(0 0% 100% / 0.06)",
                                }
                              : undefined
                          }
                        >
                          <td
                            className="py-2 pr-4"
                            style={{ color: "hsl(var(--foreground-muted))" }}
                          >
                            {permission}
                          </td>
                          <td
                            className="py-2 pr-4"
                            style={{ color: "hsl(var(--foreground-muted))" }}
                          >
                            {android}
                          </td>
                          <td
                            className="py-2 pr-4"
                            style={{ color: "hsl(var(--foreground-muted))" }}
                          >
                            {ios}
                          </td>
                          <td
                            className="py-2 pr-4"
                            style={{ color: "hsl(var(--foreground-muted))" }}
                          >
                            {purpose}
                          </td>
                          <td
                            className="py-2"
                            style={{ color: "hsl(var(--foreground-muted))" }}
                          >
                            {required}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
              <p
                className="text-sm mt-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                All permissions are requested at the moment you choose to use
                the relevant feature, or (for notifications) when you first
                enable them in the app. You may decline any permission — this
                will prevent the specific feature from working but will not
                affect other app functionality. You can manage or revoke
                permissions at any time through your device settings.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                12b. Special Handling of Swedish Personal Identity Numbers
                (Personnummer)
              </h2>
              <div
                className="mb-5 p-4 rounded-lg border"
                style={{
                  borderColor: "hsl(var(--brand) / 0.35)",
                  background: "hsl(var(--brand) / 0.07)",
                }}
              >
                <p
                  className="text-sm"
                  style={{ color: "hsl(var(--foreground-muted))" }}
                >
                  <strong style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                    Scope:
                  </strong>{" "}
                  This section applies only to Swedish clubs using the LOK
                  Attendance Reporting feature.
                </p>
              </div>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We take particular care with Swedish personal identity numbers
                given their sensitivity under Swedish law (
                <em>dataskyddslagen 3 kap. 10 §</em>). The following security
                measures apply specifically to personnummer:
              </p>
              {[
                {
                  title: "Entry and Validation",
                  body: "Your personnummer is entered directly in the app and transmitted over an encrypted connection (HTTPS/TLS) to our backend. Format and Luhn checksum validation are performed server-side before any storage occurs. The number is never processed or stored on the client device.",
                },
                {
                  title: "Encryption",
                  body: "Your personnummer is encrypted server-side using AES-256-GCM (Advanced Encryption Standard with a 256-bit key in Galois/Counter Mode — an authenticated encryption algorithm). Each encryption operation uses a unique, cryptographically random initialization vector (IV), ensuring that the same personnummer encrypted twice produces different ciphertext.",
                },
                {
                  title: "Key Management",
                  body: "The encryption key is stored exclusively in Google Cloud Secret Manager. It is never embedded in source code, in environment files accessible to client applications, or in the Firestore database. Access to the key is restricted to the specific backend functions that require it.",
                },
                {
                  title: "Client Access",
                  body: "The full personnummer is never returned to the client application. The app can only receive confirmation that a number is stored along with the birth date — not the personnummer digits themselves.",
                },
                {
                  title: "Decryption Scope",
                  body: "Decryption occurs exclusively on the backend, only during LOK report generation for automated submission to RF. Decryption is not available as a user-callable or client-callable operation.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="mb-4">
                  <h3
                    className="font-display font-semibold text-lg mb-2"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    {body}
                  </p>
                </div>
              ))}
              <div className="mb-4">
                <h3
                  className="font-display font-semibold text-lg mb-2"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  What Is Stored
                </h3>
                <p
                  className="text-base leading-relaxed mb-2"
                  style={{ color: "hsl(var(--foreground-muted))" }}
                >
                  Only the following is written to the database:
                </p>
                <ul className="space-y-1.5 list-none">
                  {[
                    "The encrypted ciphertext (never the plaintext personnummer)",
                    "The birth date portion (first 8 digits, e.g. 19900101) — used for age-eligibility checks without requiring decryption",
                    "Consent metadata: timestamp of when consent was given and the policy version consented to",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-base"
                      style={{ color: "hsl(var(--foreground-muted))" }}
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "hsl(var(--brand))" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  className="font-display font-semibold text-lg mb-2"
                  style={{ color: "hsl(0 0% 100%)" }}
                >
                  Right to Withdraw
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "hsl(var(--foreground-muted))" }}
                >
                  You can delete your personnummer at any time via{" "}
                  <strong>LOK Settings → Withdraw Consent</strong> in the app.
                  This immediately and permanently removes the encrypted value
                  from the database. See Section 9.6.
                </p>
              </div>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                13. Changes to This Policy
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We may update this Privacy Policy from time to time. When we
                make changes:
              </p>
              <ul className="space-y-1.5 list-none mb-4">
                {[
                  'The "Last Updated" date will be revised',
                  "Material changes will be communicated via the Platform or email",
                  "Continued use of the Service after changes constitutes acceptance",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-base"
                    style={{ color: "hsl(var(--foreground-muted))" }}
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "hsl(var(--brand))" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                14. Contact Us
              </h2>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                For questions about this Privacy Policy or our data practices:
              </p>
              <ul className="space-y-1.5 list-none mb-4">
                <li
                  className="flex items-start gap-2.5 text-base"
                  style={{ color: "hsl(var(--foreground-muted))" }}
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "hsl(var(--brand))" }}
                  />
                  <span>
                    <strong>Privacy Inquiries:</strong>{" "}
                    <a
                      href="mailto:privacy@clubnizer.com"
                      style={{ color: "hsl(var(--accent-blue))" }}
                    >
                      privacy@clubnizer.com
                    </a>
                  </span>
                </li>
                <li
                  className="flex items-start gap-2.5 text-base"
                  style={{ color: "hsl(var(--foreground-muted))" }}
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "hsl(var(--brand))" }}
                  />
                  <span>
                    <strong>General Support:</strong>{" "}
                    <a
                      href="mailto:support@clubnizer.com"
                      style={{ color: "hsl(var(--accent-blue))" }}
                    >
                      support@clubnizer.com
                    </a>
                  </span>
                </li>
              </ul>
              <p
                className="text-base leading-relaxed"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                We aim to respond to all inquiries within 30 days.
              </p>
            </section>

            <section>
              <h2
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                15. Additional Information for Specific Jurisdictions
              </h2>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                15.1 European Economic Area (EEA) Users
              </h3>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                If you are located in the EEA, you have the right to lodge a
                complaint with your local data protection authority if you
                believe we have not complied with applicable data protection
                laws.
              </p>
              <h3
                className="font-display font-semibold text-lg mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                15.2 California Users
              </h3>
              <p
                className="text-base leading-relaxed mb-3"
                style={{ color: "hsl(var(--foreground-muted))" }}
              >
                California residents may have additional rights under the
                California Consumer Privacy Act (CCPA). We do not sell personal
                information as defined under CCPA.
              </p>
            </section>

            <p
              className="text-sm italic pt-6 border-t"
              style={{
                borderColor: "hsl(0 0% 100% / 0.08)",
                color: "hsl(var(--foreground-muted))",
              }}
            >
              By using Clubnizer, you acknowledge that you have read and
              understood this Privacy Policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
