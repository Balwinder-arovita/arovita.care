import '../../styles/services.css';
import ServicesHero from './sections/ServicesHero';
import ServicesGrid from './sections/ServicesGrid';
import WhyArovita from './sections/WhyArovita';
import HowItWorks from './sections/HowItWorks';
import StatsStrip from './sections/StatsStrip';
import CtaBanner from './sections/CtaBanner';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <WhyArovita />
      <HowItWorks />
      <StatsStrip />
      <CtaBanner />
    </>
  );
}
