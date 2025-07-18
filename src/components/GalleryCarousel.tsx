import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    id: 1,
    image: gallery1,
    title: "Modern Living Room",
    category: "Living"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    title: "Elegant Bedroom",
    category: "Bedroom"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    title: "Designer Kitchen",
    category: "Kitchen"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800",
    title: "Luxury Bathroom",
    category: "Bathroom"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    title: "Cozy Reading Nook",
    category: "Living"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    title: "Minimalist Office",
    category: "Office"
  }
];

const GalleryCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Parallax effect for the section
      gsap.to(sectionRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="font-serif text-4xl lg:text-6xl font-bold text-navy mb-6"
          >
            Our Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our curated collection of stunning interior transformations
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              nextEl: '.gallery-next',
              prevEl: '.gallery-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 bg-gold text-navy text-sm font-medium rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-cream text-xl font-serif font-bold">
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="absolute top-6 right-6">
                      <button className="w-12 h-12 bg-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-navy transition-all duration-300 magnetic-button">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="gallery-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-cream/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy hover:bg-gold transition-all duration-300 shadow-lg magnetic-button">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="gallery-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-cream/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy hover:bg-gold transition-all duration-300 shadow-lg magnetic-button">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;