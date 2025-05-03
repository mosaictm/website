
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import DynamicBackground from '@/components/DynamicBackground';
import { ThemeProvider } from '@/hooks/use-theme';

const Index = () => {
  useEffect(() => {
    // Ensure the page starts from the top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        <DynamicBackground />
        <Header />
        <div className="snap-container">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;
