import { useEffect } from 'react';
import '../../styles/hms.css';
import '../../styles/home-nurse.css';
import HmsHero from './sections/HmsHero';
import BenefitsStrip from './sections/BenefitsStrip';
import ModulesGrid from './sections/ModulesGrid';
import HowItWorks from './sections/HowItWorks';
import DarkFeatures from './sections/DarkFeatures';
import PlansSection from './sections/PlansSection';
import FaqSection from './sections/FaqSection';
import CtaBanner from './sections/CtaBanner';
import AppBannerSection from '../Home/sections/AppBannerSection';

export default function HmsPage() {
  useEffect(() => {
    // Parallax hero mesh
    const handleScroll = () => {
      const mesh = document.querySelector('.hero-mesh');
      if (mesh) mesh.style.transform = `translateY(${window.scrollY * 0.12}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HmsHero />
      <BenefitsStrip />
      <ModulesGrid />
      <AppBannerSection />
      <HowItWorks />
      {/* <DarkFeatures />
      <PlansSection /> */}
      <FaqSection />
      {/* <CtaBanner /> */}
    </>
  );
}
