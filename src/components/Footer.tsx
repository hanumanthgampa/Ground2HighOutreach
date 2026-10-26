import { Link } from "react-router-dom";

const overviewRequest =
  "mailto:hello@g2hsolutions.com?subject=Request%20the%20G2H%20overview";

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
              From Ground 2 High-Growth Pipeline: Engineering structured outbound architectures
              that convert high-value accounts into predictable revenue.
            </p>
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              Enterprise Outbound Architecture
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
                  href="mailto:outreach@g2hsolutions.com"
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
              Partnering with B2B founders and enterprise revenue teams across EMEA and North
              America.
            </p>
            <a
              aria-label="Direct inquiries by email"
              className="inline-flex w-9 h-9 rounded-full bg-primary items-center justify-center text-on-primary hover:bg-secondary-container hover:text-primary transition-colors"
              href="mailto:hello@g2hsolutions.com"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
          </div>
        </div>

        <div className="pt-space-md border-t border-outline/10 flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-md text-label-md text-on-primary-container">
          <p>© {new Date().getFullYear()} G2H Outreach. All rights reserved.</p>
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
