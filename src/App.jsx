import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import CustomCursor from './components/Shared/CustomCursor';
import ScrollToTop from './components/Shared/ScrollToTop';
import useIntersectionObserver from './hooks/useIntersectionObserver';

import HomePage from './pages/Home/HomePage';
import ConsultPage from './pages/Consult/ConsultPage';
import OfflineConsultationPage from './pages/Consult/OfflineConsultation';
import LabTestsPage from './pages/LabTests/LabTestsPage';
import OfflineLabTestsPage from './pages/LabTests/OfflineLabTests';
import HomeNursePage from './pages/HomeNurse/HomeNursePage';
import HmsPage from './pages/HMS/HmsPage';
import ServicesPage from './pages/Services/ServicesPage';
import CareersPage from './pages/Careers/CareersPage';
import PrivacyPolicyPage from './pages/Legal/PrivacyPolicyPage';
import TermsPage from './pages/Legal/TermsPage';
import AboutUsPage from './pages/AboutUs/AboutUs'; 
import ContactPage from './pages/Contact/ContactPage';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  useIntersectionObserver();

  return (
    <>
      <CustomCursor />
      <ScrollToTopOnNavigate />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consult" element={<ConsultPage />} />
        <Route path="/doctor" element={<Navigate to="/consult" replace />} />
        <Route path="/offline-consultation" element={<OfflineConsultationPage />} />
        <Route path="/lab-tests" element={<LabTestsPage />} />
        <Route path="/offline-lab-tests" element={<OfflineLabTestsPage />} />
        <Route path="/home-nurse" element={<HomeNursePage />} />
        <Route path="/hms" element={<HmsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}
