import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Approach", to: "/approach" },
  { label: "Contact", to: "/contact" },
];

const inactiveLink =
  "px-space-sm py-space-xs font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-primary rounded-lg transition-colors";
const activeLink =
  "px-space-sm py-space-xs rounded-lg transition-colors bg-surface-container-high text-primary font-semibold shadow-sm";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_10px_rgba(4,21,52,0.06)]">
      <div className="relative h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm">
          <Link className="flex items-center gap-space-xs" to="/" aria-label="G2H Solutions home">
            <span className="font-headline-md text-headline-md font-extrabold tracking-tight text-primary">
              G2H Solutions
            </span>
          </Link>
        </div>
        <nav
          className="hidden md:flex items-center gap-space-xs p-space-xs"
          aria-label="Main navigation"
        >
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-space-sm">
          <a
            className="hidden lg:inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low text-primary font-label-md text-label-md hover:bg-surface-container hover:text-primary transition-all shadow-[0_1px_6px_rgba(4,21,52,0.06)] border border-outline-variant/30"
            href="mailto:hello@g2hsolutions.com?subject=Request%20the%20G2H%20overview"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Request Overview</span>
          </a>
          <Link
            className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container text-primary font-headline-sm text-label-md hover:brightness-105 active:scale-95 transition-all shadow-[0_8px_20px_rgba(254,152,50,0.28)]"
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="hidden sm:inline">Book a Strategy Call</span>
            <span className="sm:hidden">Book a Call</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex w-10 h-10 items-center justify-center rounded-lg text-primary hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-container"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden absolute top-full left-0 right-0 border-t border-outline-variant/30 bg-surface shadow-lg"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-gutter py-space-sm flex flex-col gap-1">
            {navigation.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? activeLink : inactiveLink} block w-full`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
