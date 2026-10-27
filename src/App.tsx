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
    title: "B2B Outreach & Lead Generation | G2H Outreach",
    description:
      "G2H Outreach helps B2B teams research target accounts, create relevant outreach, and support better sales conversations.",
  },
  "/services": {
    title: "B2B Outreach Services | G2H Outreach",
    description:
      "Explore G2H Outreach services for account research, targeted outbound campaigns, lead qualification, and sales handoffs.",
  },
  "/approach": {
    title: "Our B2B Outreach Approach | G2H Outreach",
    description:
      "See how G2H Outreach researches accounts, builds thoughtful campaigns, qualifies responses, and improves outreach over time.",
  },
  "/contact": {
    title: "Contact G2H Outreach | Discuss Your Goals",
    description:
      "Contact G2H Outreach to discuss your target accounts, outbound goals, and how our B2B outreach services may support your team.",
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PolicyPage policy="privacy" />} />
          <Route path="/terms" element={<PolicyPage policy="terms" />} />
          <Route path="/security" element={<PolicyPage policy="security" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
