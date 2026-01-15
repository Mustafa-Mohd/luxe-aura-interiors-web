import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 1,
    title: "Minimal",
    description: "Clean lines, open spaces, and thoughtful design",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
    color: "from-slate-100 to-slate-200"
  },
  {
    id: 2,
    title: "Luxury",
    description: "Opulent materials and sophisticated elegance",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    color: "from-amber-100 to-yellow-200"
  },
  {
    id: 3,
    title: "Vintage",
    description: "Timeless pieces with character and history",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600",
    color: "from-emerald-100 to-teal-200"
  },
  {
    id: 4,
    title: "Bohemian",
    description: "Eclectic mix of colors, patterns, and textures",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    color: "from-rose-100 to-pink-200"
  },
  {
    id: 5,
    title: "Industrial",
    description: "Raw materials and urban-inspired aesthetics",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600",
    color: "from-gray-100 to-stone-200"
  }
];

const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    if (!container || !scroller) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          }
        }
      );

      // Calculate the total scroll distance more accurately
      const cardWidth = window.innerWidth * 0.8 + 48; // 80vw + margin (mx-6 = 3rem = 48px)
      const totalScrollDistance = (categories.length - 1) * cardWidth;

      // Horizontal scroll animation with improved smoothness
      gsap.to(scroller, {
        x: -totalScrollDistance,
        ease: "none",
        force3D: true,
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalScrollDistance + window.innerHeight * 0.5}`,
          scrub: 0.8, // Slightly smoother scrub value
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
        }
      });

      // Individual card animations with improved timing
      gsap.set(".category-card", { scale: 0.8, opacity: 0.6 });

      ScrollTrigger.batch(".category-card", {
        onEnter: (elements) => {
          gsap.to(elements, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            overwrite: true
          });
        },
        onLeave: (elements) => {
          gsap.to(elements, {
            scale: 0.8,
            opacity: 0.6,
            duration: 0.4,
            stagger: 0.1,
            overwrite: true
          });
        },
        onEnterBack: (elements) => {
          gsap.to(elements, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            overwrite: true
          });
        },
        onLeaveBack: (elements) => {
          gsap.to(elements, {
            scale: 0.8,
            opacity: 0.6,
            duration: 0.4,
            stagger: 0.1,
            overwrite: true
          });
        }
      });
    }, container);

    // Refresh ScrollTrigger on window resize for better responsiveness
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-gradient-to-br from-background to-muted/30 overflow-hidden">
      <div className="h-screen flex flex-col">
        {/* Fixed Title */}
        <div className="absolute top-20 left-8 z-10">
          <h2 
            ref={titleRef}
            className="font-serif text-4xl lg:text-6xl font-bold text-navy mb-4"
          >
            Design Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            Discover our diverse range of interior design styles
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex-1 mt-40">
          <div
            ref={scrollerRef}
            className="flex items-center h-full pl-8 pr-8 will-change-transform"
            style={{ width: `calc(${categories.length * 80}vw + ${categories.length * 3}rem)` }}
          >
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`category-card flex-none w-[80vw] md:w-[60vw] lg:w-[40vw] h-[70vh] mx-6 relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br ${category.color} group cursor-pointer will-change-transform`}
                style={{ transform: 'translateZ(0)' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                  <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500">
                    <span className="inline-block px-4 py-2 bg-gold text-navy text-sm font-medium rounded-full mb-4">
                      0{index + 1}
                    </span>
                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
                      {category.title}
                    </h3>
                    <p className="text-cream/90 text-lg md:text-xl max-w-md leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 w-20 h-20 border-2 border-gold/30 rounded-full group-hover:scale-150 group-hover:border-gold transition-all duration-500"></div>
                  <div className="absolute top-12 right-12 w-12 h-12 bg-gold/20 rounded-full group-hover:bg-gold/40 transition-all duration-500"></div>
                </div>

                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;