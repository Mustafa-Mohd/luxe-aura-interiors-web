import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import galleryImage1 from '@/assets/gallery-1.jpg';

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // Generate more gallery items for demonstration
  const galleryItems = [
    { id: 1, image: galleryImage1, title: "Modern Kitchen", category: "Kitchen" },
    { id: 2, image: galleryImage1, title: "Luxury Bedroom", category: "Bedroom" },
    { id: 3, image: galleryImage1, title: "Elegant Living Room", category: "Living Room" },
    { id: 4, image: galleryImage1, title: "Sophisticated Dining", category: "Dining Room" },
    { id: 5, image: galleryImage1, title: "Executive Office", category: "Office" },
    { id: 6, image: galleryImage1, title: "Spa Bathroom", category: "Bathroom" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const gallery = galleryRef.current;
    const title = titleRef.current;

    if (!section || !gallery || !title) return;

    // Set initial states
    gsap.set(title.children, { y: 50, opacity: 0 });
    gsap.set(gallery.children, { y: 100, opacity: 0, scale: 0.8 });

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(title.children, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power3.out"
    })
    .to(gallery.children, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.1,
      ease: "power3.out"
    }, "-=0.6");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h3 className="text-gold font-medium text-lg tracking-wide uppercase mb-4">Portfolio</h3>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-6">
            Our Latest Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of recent projects that showcase our commitment 
            to excellence and attention to detail in every space we design.
          </p>
        </div>

        {/* Gallery Grid */}
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-xs text-gold font-medium tracking-wide uppercase mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-cream font-serif text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <Button variant="hero" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="luxury" size="xl">
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;