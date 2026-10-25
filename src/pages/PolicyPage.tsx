type Policy = "privacy" | "terms" | "security";

type PolicyContent = {
  title: string;
  introduction: string;
  sections: { heading: string; details: string[] }[];
};

const policies: Record<Policy, PolicyContent> = {
  privacy: {
    title: "Privacy Policy",
    introduction:
      "This draft identifies the privacy disclosures that must be confirmed before publication. Replace these review notes with G2H Solutions' approved practices and applicable legal requirements.",
    sections: [
      {
        heading: "Who operates this site",
        details: [
          "Confirm the full legal name and address of the organization responsible for this website and personal information.",
          "Confirm the appropriate privacy contact and the regions in which the organization operates.",
        ],
      },
      {
        heading: "Information and purposes",
        details: [
          "Document the information collected through the contact and scheduling experience, why each item is needed, and the applicable legal basis where required.",
          "Describe any analytics, server logs, cookies, or other information collected by the live production setup.",
        ],
      },
      {
        heading: "Use, sharing, and storage",
        details: [
          "Identify the service providers and other recipients that may process information, including hosting, email, scheduling, and analytics providers.",
          "Specify retention periods, storage locations, and any international transfers and safeguards.",
        ],
      },
      {
        heading: "Choices and rights",
        details: [
          "Describe the privacy rights available to visitors, how they can exercise those rights, and any applicable complaint or appeal process.",
          "Explain how visitors can contact the organization with privacy questions or requests.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    introduction:
      "This draft is a review checklist, not an agreement for public use. Replace it with terms approved for G2H Solutions and its intended customers before publication.",
    sections: [
      {
        heading: "Organization and scope",
        details: [
          "Identify the legal entity providing this website and the contact details for notices.",
          "Define which website features, content, and services these terms cover.",
        ],
      },
      {
        heading: "Service and customer terms",
        details: [
          "Explain that service scope, fees, deliverables, timelines, and cancellation terms are governed by the applicable signed customer agreement.",
          "Describe any acceptable-use requirements and restrictions for using this website.",
        ],
      },
      {
        heading: "Content and liability",
        details: [
          "Set out the approved intellectual-property, third-party-link, warranty, liability, and indemnity terms.",
          "Have counsel determine which disclaimers and limitations are lawful in the relevant jurisdictions.",
        ],
      },
      {
        heading: "Governing provisions",
        details: [
          "Specify the governing law, dispute-resolution process, effective date, and how updates to these terms will be communicated.",
        ],
      },
    ],
  },
  security: {
    title: "Security Standards",
    introduction:
      "This draft is a publication checklist. Confirm the controls, scope, and any public security commitments with the responsible security owner before making representations to customers.",
    sections: [
      {
        heading: "Security ownership and scope",
        details: [
          "Identify the organization and systems covered by the published security statement.",
          "Name a monitored channel for security questions and vulnerability reports.",
        ],
      },
      {
        heading: "Controls and safeguards",
        details: [
          "Document only verified safeguards for access, authentication, encryption, monitoring, backups, and staff training.",
          "Describe vendor oversight and incident-response practices only after the responsible owners have confirmed them.",
        ],
      },
      {
        heading: "Customer information and incidents",
        details: [
          "Explain how customer information is protected, who may access it, and how confirmed security incidents are handled and communicated.",
          "Avoid publishing sensitive technical details that could weaken operational security.",
        ],
      },
      {
        heading: "Assurance and review",
        details: [
          "List certifications, audits, or compliance claims only when current evidence supports them.",
          "Provide the publication date, review owner, and a process for keeping this statement accurate.",
        ],
      },
    ],
  },
};

export default function PolicyPage({ policy }: { policy: Policy }) {
  const content = policies[policy];

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
      <section className="max-w-4xl mx-auto px-gutter py-space-xl">
        <div className="mb-space-lg">
          <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm uppercase tracking-wider">
            Draft — review required
          </span>
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight mt-space-sm">
            {content.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
            {content.introduction}
          </p>
        </div>

        <div
          className="p-space-md mb-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30"
          role="note"
        >
          <p className="font-headline-sm text-headline-sm text-primary">
            Not approved for publication
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            This page is a working checklist, not final legal advice or a statement of current
            company practices. Confirm the details and obtain appropriate legal review before
            public launch.
          </p>
        </div>

        <div className="space-y-space-md">
          {content.sections.map((section) => (
            <section
              key={section.heading}
              className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm"
            >
              <h2 className="font-headline-md text-headline-md text-primary">
                {section.heading}
              </h2>
              <ul className="mt-space-xs space-y-space-xs">
                {section.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-space-xs font-body-md text-body-md text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5">
                      chevron_right
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
