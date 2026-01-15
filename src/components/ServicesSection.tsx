import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Palette, Layout, Lightbulb, Wrench, Sofa } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Wrench,
      title: "Aluminium Work",
      description: "Expert aluminium fabrication and installation services for windows, doors, partitions, and custom structures.",
      features: ["Windows & Doors", "Partitions", "Custom Fabrication"]
    },
    {
      icon: Sofa,
      title: "Furniture Contracting",
      description: "Complete furniture solutions from design to installation, including custom and modular furniture.",
      features: ["Custom Furniture", "Modular Solutions", "Installation"]
    },
    {
      icon: Home,
      title: "Interior Design",
      description: "Transform your space into a personal sanctuary with our comprehensive interior design services.",
      features: ["Space Planning", "Color Consultation", "Complete Interiors"]
    },
    {
      icon: Layout,
      title: "Complete Interior Solutions",
      description: "End-to-end interior contracting services from planning to execution for residential and commercial spaces.",
      features: ["Project Management", "3D Visualization", "Turnkey Solutions"]
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    const title = titleRef.current;

    if (!section || !cards || !title) return;

    // Set initial states
    gsap.set(title.children, { y: 50, opacity: 0 });
    gsap.set(cards.children, { y: 100, opacity: 0, scale: 0.9 });

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
    .to(cards.children, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.6");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h3 className="text-gold font-medium text-lg tracking-wide uppercase mb-4">Our Services</h3>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-6">
            Comprehensive Design Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive services including aluminium work, 
            furniture contracting, and complete interior solutions tailored to meet your unique needs and exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-gold rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-navy" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="elegant" size="sm" className="w-full group-hover:bg-gold group-hover:text-navy group-hover:border-gold">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="luxury" size="xl">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;