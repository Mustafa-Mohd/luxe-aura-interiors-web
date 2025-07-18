import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GalleryCarousel from '@/components/GalleryCarousel';
import HorizontalScrollSection from '@/components/HorizontalScrollSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import Preloader from '@/components/Preloader';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <GalleryCarousel />
          <HorizontalScrollSection />
          <GallerySection />
        </main>
        <Footer />
        <FloatingContact />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
