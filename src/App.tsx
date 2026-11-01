import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
const ApproachPage = lazy(() => import("./pages/ApproachPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PolicyPage = lazy(() => import("./pages/PolicyPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "B2B Lead Gen, Multichannel Outreach & AI Campaign Management | G2H Outreach",
    description:
      "Scale your B2B sales pipeline with G2H Outreach. We combine AI-verified data mining, bespoke multichannel outreach, and agile AI campaign management to fill sales calendars with qualified meetings.",
  },
  "/services": {
    title: "Multichannel Outreach & AI Campaign Management Services | G2H Outreach",
    description:
      "Explore G2H Outreach services: AI-verified data mining, personalized multichannel outreach (email & LinkedIn), agile AI campaign management, and conversion-focused web design.",
  },
  "/approach": {
    title: "4-Phase Outbound Architecture & Methodology | G2H Outreach",
    description:
      "Discover our disciplined 4-phase outbound architecture: AI-verified data mining, technical safeguards, multichannel outreach orchestration, and continuous AI campaign management.",
  },
  "/contact": {
    title: "Book a Pipeline Strategy Call | G2H Outreach",
    description:
      "Schedule a direct 30-minute pipeline strategy call with G2H Outreach to review your target accounts, email deliverability, and custom multichannel outreach roadmap.",
  },
  "/privacy": {
    title: "Privacy Policy Draft | G2H Outreach",
    description:
      "Review the G2H Outreach privacy policy draft. This working checklist is not approved for publication.",
  },
  "/terms": {
    title: "Terms of Service Draft | G2H Outreach",
    description:
      "Review the G2H Outreach terms of service draft. This working checklist is not approved for publication.",
  },
  "/security": {
    title: "Security Standards Draft | G2H Outreach",
    description:
      "Review the G2H Outreach security standards draft. This working checklist is not approved for publication.",
  },
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? pageMetadata["/"];
    document.title = metadata.title;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute(
      "content",
      metadata.description,
    );
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute(
      "content",
      metadata.title,
    );
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute(
      "content",
      metadata.description,
    );
    const openGraphUrl =
      document.querySelector<HTMLMetaElement>('meta[property="og:url"]') ??
      document.createElement("meta");
    openGraphUrl.setAttribute("property", "og:url");
    openGraphUrl.content = new URL(pathname, window.location.origin).href;
    if (!openGraphUrl.isConnected) document.head.append(openGraphUrl);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute(
      "content",
      metadata.title,
    );
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute(
      "content",
      metadata.description,
    );
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Suspense
        fallback={
          <main className="flex min-h-[calc(100vh-20rem)] items-center justify-center bg-surface pt-20">
            <p className="font-body-md text-body-md text-on-surface-variant" role="status">
              Loading page…
            </p>
          </main>
        }
      >
        <div key={pathname} className="page-transition-enter">
          <Routes location={pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PolicyPage policy="privacy" />} />
            <Route path="/terms" element={<PolicyPage policy="terms" />} />
            <Route path="/security" element={<PolicyPage policy="security" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}
