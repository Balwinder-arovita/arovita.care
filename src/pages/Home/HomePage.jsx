import '../../styles/home.css';
import { useEffect } from 'react';
import HeroSection from './sections/HeroSection';
import TickerSection from './sections/TickerSection';
import StatsSection from './sections/StatsSection';
import BrandsSection from './sections/BrandsSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import MissionSection from './sections/MissionSection';
import FeaturesSection from './sections/FeaturesSection';
import WhyArovitaSection from './sections/WhyArovitaSection';
import EcosystemSection from './sections/EcosystemSection';
import CtaSection from './sections/CtaSection';
import AppointmentSection from './sections/AppointmentSection';

export default function HomePage() {
  useEffect(() => {
    // Parallax hero grid
    const handleScroll = () => {
      const grid = document.querySelector('.hero-grid');
      if (grid) grid.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeroSection />
      <TickerSection />
      <StatsSection />
      <BrandsSection />
      <ServicesSection />
      <MissionSection />
      <FeaturesSection />
      <WhyArovitaSection />
      <AboutSection />
      <EcosystemSection />
      <CtaSection />
      <AppointmentSection />
    </>
  );
}
