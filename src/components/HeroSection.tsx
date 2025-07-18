import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
      y: 100,
      opacity: 0
    });
    
    gsap.set(imageRef.current, {
      scale: 1.1,
      opacity: 0
    });

    // Animation sequence
    tl.to(imageRef.current, {
      duration: 1.5,
      scale: 1,
      opacity: 1,
      ease: "power3.out"
    })
    .to(titleRef.current, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      ease: "power3.out"
    }, "-=1")
    .to(subtitleRef.current, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to(buttonRef.current, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power3.out"
    }, "-=0.6");

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          duration: 0.1,
          y: rate,
          ease: "none"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-cream mb-6 leading-tight"
          >
            Transform Your Space with
            <span className="block text-gold">Luxuria Interiors</span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Where elegance meets functionality. Creating bespoke interiors that reflect your unique style and elevate your everyday living.
          </p>
          
          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="elegant" size="xl">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream animate-bounce">
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;