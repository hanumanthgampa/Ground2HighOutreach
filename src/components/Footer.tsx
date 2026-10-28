import { Link } from "react-router-dom";

const overviewRequest =
  "mailto:sales@g2houtreach.com?subject=Request%20the%20G2H%20overview";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-surface py-space-xl shadow-[0_-1px_16px_rgba(4,21,52,0.12)]">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
          <div className="space-y-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-md text-headline-md text-surface tracking-tight">
                G2H Outreach
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              From Ground 2 High-Growth Pipeline: We build structured, multi-channel B2B outreach campaigns that connect your business with the right decision-makers, generate qualified leads, and turn prospects into meaningful sales opportunities.
            </p>
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              Your B2B Growth & Lead Generation Partner
            </div>
          </div>

          <div className="space-y-space-sm">
            <p className="font-headline-sm text-headline-sm text-surface">Core Navigation</p>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-primary-container">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Approach", to: "/approach" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <li key={to} className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">
                    chevron_right
                  </span>
                  <Link className="hover:text-surface transition-colors" to={to}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-space-sm">
            <p className="font-headline-sm text-headline-sm text-surface">Direct Actions</p>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-primary-container">
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-secondary-container">
                  description
                </span>
                <a className="hover:text-surface transition-colors" href={overviewRequest}>
                  Request Overview Deck
                </a>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-secondary-container">
                  calendar_month
                </span>
                <Link className="hover:text-surface transition-colors" to="/contact">
                  Book a Strategy Call
                </Link>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-secondary-container">
                  mail
                </span>
                <a
                  className="hover:text-surface transition-colors"
                  href="mailto:sales@g2houtreach.com"
                >
                  Pipeline Diagnostic Inquiry
                </a>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-secondary-container">
                  speed
                </span>
                <span className="text-on-primary-container">Strategy SLA &lt; 24h</span>
              </li>
            </ul>
          </div>

          <div className="space-y-space-sm">
            <p className="font-headline-sm text-headline-sm text-surface">Executive Connect</p>
            <p className="font-body-sm text-body-sm text-on-primary-container">
              Partnering with B2B founders and enterprise revenue teams in Singapore, Malaysia,
              and around the world.
            </p>
            <div className="flex items-center gap-space-xs">
              <span
                aria-label="LinkedIn"
                className="inline-flex w-9 h-9 rounded-full bg-primary items-center justify-center text-on-primary"
                role="img"
              >
                <svg aria-hidden="true" className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 17.5V9.88H5.8v7.62h2.54ZM7.07 8.84c.84 0 1.36-.56 1.36-1.26-.02-.72-.52-1.27-1.34-1.27s-1.36.55-1.36 1.27c0 .7.52 1.26 1.32 1.26h.02Zm5.18 8.66v-4.26c0-.23.02-.46.09-.63.18-.46.59-.94 1.28-.94.9 0 1.26.7 1.26 1.72v4.11h2.54v-4.37c0-2.34-1.25-3.43-2.92-3.43-1.35 0-1.95.75-2.29 1.27v-1.09H9.67c.03.72 0 7.62 0 7.62h2.58Z" />
                </svg>
              </span>
              <a
                aria-label="Direct inquiries by email"
                className="inline-flex w-9 h-9 rounded-full bg-primary items-center justify-center text-on-primary hover:bg-secondary-container hover:text-primary transition-colors"
                href="mailto:sales@g2houtreach.com"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
              <span
                aria-label="Instagram"
                className="inline-flex w-9 h-9 rounded-full bg-primary items-center justify-center text-on-primary"
                role="img"
              >
                <svg
                  aria-hidden="true"
                  className="h-[18px] w-[18px] fill-none stroke-current"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <rect height="16" rx="4.5" width="16" x="4" y="4" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17.5" cy="6.8" fill="currentColor" r="1" stroke="none" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="pt-space-md border-t border-outline/10 flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-md text-label-md text-on-primary-container">
          <p>© {new Date().getFullYear()} G2H Outreach Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-space-md">
            <Link className="hover:text-surface transition-colors" to="/privacy">
              Privacy Policy
            </Link>
            <Link className="hover:text-surface transition-colors" to="/terms">
              Terms of Service
            </Link>
            <Link className="hover:text-surface transition-colors" to="/security">
              Security Standards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
