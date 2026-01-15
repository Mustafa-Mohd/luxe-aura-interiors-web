import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-image.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    // Set initial states
    gsap.set(image, { x: -100, opacity: 0 });
    gsap.set(content.children, { y: 50, opacity: 0 });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(image, {
      duration: 1.2,
      x: 0,
      opacity: 1,
      ease: "power3.out"
    })
    .to(content.children, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.8");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elegant">
              <img
                src={aboutImage}
                alt="Luxurious bedroom interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-gold rounded-full opacity-20"></div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-gold font-medium text-lg tracking-wide uppercase">About Knock On Wood</h3>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy leading-tight">
                Crafting Spaces That Tell Your Story
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                For over a decade, Knock On Wood has been at the forefront of luxury interior design,
                specializing in aluminium work, furniture contracting, and complete interior solutions.
                We create spaces that seamlessly blend sophistication with comfort. Our approach goes beyond
                mere decoration—we craft environments that reflect your personality and enhance your lifestyle.
              </p>
              <p>
                From intimate residential projects to grand commercial spaces, we bring the same level of 
                attention to detail and commitment to excellence in aluminium fabrication, custom furniture,
                and interior contracting that has made us the preferred choice for discerning clients worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-navy mb-2">200+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-navy mb-2">27+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="luxury" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;