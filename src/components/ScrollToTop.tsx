import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: 0, autoKill: true },
      ease: "power3.inOut"
    });
  };

  return (
    <div className={`fixed bottom-6 left-6 z-40 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      <Button
        onClick={scrollToTop}
        variant="secondary"
        size="icon"
        className="w-12 h-12 rounded-full shadow-elegant hover:shadow-gold hover:scale-110 transition-all duration-300 bg-card/80 backdrop-blur-sm border border-border hover:border-gold magnetic-button"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default ScrollToTop;