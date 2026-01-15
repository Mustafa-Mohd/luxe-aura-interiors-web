import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';

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
    image: gallery2,
    title: "Elegant Bedroom",
    category: "Bedroom"
  },
  {
    id: 3,
    image: gallery3,
    title: "Designer Kitchen",
    category: "Kitchen"
  },
  {
    id: 4,
    image: gallery4,
    title: "Luxury Bathroom",
    category: "Bathroom"
  },
  {
    id: 5,
    image: gallery5,
    title: "Executive Office",
    category: "Office"
  },
  {
    id: 6,
    image: gallery6,
    title: "Contemporary Design",
    category: "Modern"
  },
  {
    id: 7,
    image: gallery7,
    title: "Premium Interiors",
    category: "Luxury"
  },
  {
    id: 8,
    image: gallery8,
    title: "Elegant Spaces",
    category: "Design"
  }
];

const GalleryCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex].image);
    setSelectedIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1;
    setSelectedImage(galleryImages[prevIndex].image);
    setSelectedIndex(prevIndex);
  };

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

  // Handle keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, selectedIndex]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Link to="/gallery">
            <h2
              ref={titleRef}
              className="font-serif text-4xl lg:text-6xl font-bold text-navy mb-6 hover:text-gold transition-colors duration-300 cursor-pointer"
            >
              Our Gallery
            </h2>
          </Link>
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
            {galleryImages.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div 
                  className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500 cursor-pointer"
                  onClick={() => openModal(item.image, index)}
                >
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
                      <button 
                        className="w-12 h-12 bg-cream/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-navy transition-all duration-300 magnetic-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(item.image, index);
                        }}
                      >
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in-0 duration-300"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt={galleryImages[selectedIndex].title}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-1">
                    {galleryImages[selectedIndex].title}
                  </h3>
                  <p className="text-gold font-medium text-sm uppercase tracking-wide">
                    {galleryImages[selectedIndex].category}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-sm">
                    {selectedIndex + 1} of {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryCarousel;