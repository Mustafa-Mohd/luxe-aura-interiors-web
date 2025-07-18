import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Star, Circle } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingRef1 = useRef<HTMLDivElement>(null);
  const floatingRef2 = useRef<HTMLDivElement>(null);
  const floatingRef3 = useRef<HTMLDivElement>(null);

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

    gsap.set([floatingRef1.current, floatingRef2.current, floatingRef3.current], {
      y: 50,
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
      ease: "back.out(1.7)"
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
    }, "-=0.6")
    .to([floatingRef1.current, floatingRef2.current, floatingRef3.current], {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.5");

    // Floating animations
    gsap.to(floatingRef1.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(floatingRef2.current, {
      y: -15,
      x: 10,
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(floatingRef3.current, {
      y: -25,
      x: -5,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Parallax effect on scroll
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(imageRef.current, {
          duration: 0.1,
          y: progress * -100,
          ease: "none"
        });
        gsap.to([floatingRef1.current, floatingRef2.current, floatingRef3.current], {
          duration: 0.1,
          y: progress * -50,
          ease: "none"
        });
      }
    });
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      {/* Floating Elements */}
      <div ref={floatingRef1} className="absolute top-20 right-20 text-gold opacity-60 hidden lg:block">
        <Leaf className="w-12 h-12" />
      </div>
      <div ref={floatingRef2} className="absolute bottom-40 left-20 text-cream opacity-50 hidden lg:block">
        <Star className="w-8 h-8" />
      </div>
      <div ref={floatingRef3} className="absolute top-1/3 right-1/4 text-gold opacity-40 hidden lg:block">
        <Circle className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-cream mb-6 leading-tight"
          >
            We Design
            <span className="block text-gold">Beautiful Spaces</span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Where elegance meets functionality. Creating bespoke interiors that reflect your unique style and elevate your everyday living.
          </p>
          
          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="group magnetic-button"
              onClick={scrollToServices}
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="elegant" size="xl" className="magnetic-button">
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