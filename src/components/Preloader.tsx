import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(logoRef.current, { scale: 0, rotation: -180, opacity: 0 });
    gsap.set(textRef.current, { y: 50, opacity: 0 });
    gsap.set(progressRef.current, { scaleX: 0 });

    // Logo animation
    tl.to(logoRef.current, {
      duration: 1.5,
      scale: 1,
      rotation: 0,
      opacity: 1,
      ease: "elastic.out(1, 0.5)"
    })
    // Text animation
    .to(textRef.current, {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power3.out"
    }, "-=1")
    // Progress bar animation
    .to(progressRef.current, {
      duration: 2,
      scaleX: 1,
      ease: "power2.inOut"
    }, "-=0.5")
    // Exit animation
    .to(preloaderRef.current, {
      duration: 1,
      y: "-100%",
      ease: "power3.inOut",
      onComplete: onComplete
    }, "+=0.5");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 bg-gradient-to-br from-navy via-navy to-navy/90 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo */}
        <div 
          ref={logoRef}
          className="w-24 h-24 mx-auto mb-8 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold"
        >
          <span className="text-navy text-3xl font-serif font-bold">K</span>
        </div>

        {/* Text */}
        <div ref={textRef} className="mb-12">
          <h1 className="font-serif text-4xl font-bold text-cream mb-2">
            Knock On Wood
          </h1>
          <p className="text-cream/80 text-lg">
            Crafting Beautiful Spaces
          </p>
          <p className="text-cream/60 text-sm mt-2">
            Founded by Mohammed subedar
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-cream/20 rounded-full mx-auto overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-gold origin-left"
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-gold/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-cream/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-gold/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-6 h-6 bg-cream/20 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Preloader;