import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ApproachPage from "./pages/ApproachPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PolicyPage from "./pages/PolicyPage";
import ServicesPage from "./pages/ServicesPage";

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/services": "Services",
  "/approach": "Approach",
  "/contact": "Contact",
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Service",
  "/security": "Security Standards",
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `G2H Outreach | ${pageTitles[pathname] ?? "Home"}`;
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
