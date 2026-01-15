import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Button } from '@/components/ui/button';
import { X, Eye } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.jpg';
import gallery10 from '@/assets/gallery-10.jpg';
import gallery11 from '@/assets/gallery-11.jpg';
import gallery12 from '@/assets/gallery-12.jpg';
import gallery13 from '@/assets/gallery-13.jpg';
import gallery14 from '@/assets/gallery-14.jpg';
import gallery15 from '@/assets/gallery-15.jpg';
import gallery16 from '@/assets/gallery-16.jpg';
import gallery17 from '@/assets/gallery-17.jpg';
import gallery18 from '@/assets/gallery-18.jpg';
import gallery19 from '@/assets/gallery-19.jpg';
import gallery20 from '@/assets/gallery-20.jpg';
import gallery21 from '@/assets/gallery-21.jpg';
import gallery22 from '@/assets/gallery-22.jpg';
import gallery23 from '@/assets/gallery-23.jpg';
import gallery24 from '@/assets/gallery-24.jpg';
import gallery25 from '@/assets/gallery-25.jpg';
import gallery26 from '@/assets/gallery-26.jpg';
import gallery27 from '@/assets/gallery-27.jpg';
import gallery28 from '@/assets/gallery-28.jpg';
import gallery29 from '@/assets/gallery-29.jpg';
import gallery30 from '@/assets/gallery-30.jpg';
import gallery31 from '@/assets/gallery-31.jpg';
import gallery32 from '@/assets/gallery-32.jpg';
import gallery33 from '@/assets/gallery-33.jpg';
import gallery34 from '@/assets/gallery-34.jpg';
import gallery35 from '@/assets/gallery-35.jpg';
import gallery36 from '@/assets/gallery-36.jpg';
import gallery37 from '@/assets/gallery-37.jpg';
import gallery38 from '@/assets/gallery-38.jpg';
import gallery39 from '@/assets/gallery-39.jpg';
import gallery40 from '@/assets/gallery-40.jpg';
import gallery41 from '@/assets/gallery-41.jpg';
import gallery42 from '@/assets/gallery-42.jpg';
import gallery43 from '@/assets/gallery-43.jpg';
import gallery44 from '@/assets/gallery-44.jpg';
import gallery45 from '@/assets/gallery-45.jpg';
import gallery46 from '@/assets/gallery-46.jpg';
import gallery47 from '@/assets/gallery-47.jpg';
import gallery48 from '@/assets/gallery-48.jpg';
import gallery49 from '@/assets/gallery-49.jpg';
import gallery50 from '@/assets/gallery-50.jpg';
import gallery51 from '@/assets/gallery-51.jpg';
import gallery52 from '@/assets/gallery-52.jpg';
import gallery53 from '@/assets/gallery-53.jpg';
import gallery54 from '@/assets/gallery-54.jpg';
import gallery55 from '@/assets/gallery-55.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const galleryItems = [
    { id: 1, image: gallery1, title: "Modern Living Room", category: "Living Room", description: "Contemporary design with clean lines and premium materials" },
    { id: 2, image: gallery2, title: "Luxury Bedroom", category: "Bedroom", description: "Elegant bedroom design with sophisticated lighting" },
    { id: 3, image: gallery3, title: "Designer Kitchen", category: "Kitchen", description: "Modern kitchen with state-of-the-art appliances" },
    { id: 4, image: gallery4, title: "Luxury Bathroom", category: "Bathroom", description: "Spa-like bathroom with premium fixtures" },
    { id: 5, image: gallery5, title: "Executive Office", category: "Office", description: "Professional workspace with modern aesthetics" },
    { id: 6, image: gallery6, title: "Contemporary Design", category: "Modern", description: "Cutting-edge interior design concepts" },
    { id: 7, image: gallery7, title: "Premium Interiors", category: "Luxury", description: "High-end interior solutions" },
    { id: 8, image: gallery8, title: "Elegant Spaces", category: "Design", description: "Timeless elegance meets modern functionality" },
    { id: 9, image: gallery9, title: "Minimalist Living", category: "Living Room", description: "Clean, uncluttered spaces with essential elegance" },
    { id: 10, image: gallery10, title: "Master Bedroom Suite", category: "Bedroom", description: "Luxurious master bedroom with walk-in closet" },
    { id: 11, image: gallery11, title: "Open Kitchen Design", category: "Kitchen", description: "Spacious open-concept kitchen with island" },
    { id: 12, image: gallery12, title: "Modern Bathroom", category: "Bathroom", description: "Contemporary bathroom with rain shower" },
    { id: 13, image: gallery13, title: "Home Office", category: "Office", description: "Productive workspace integrated into living space" },
    { id: 14, image: gallery14, title: "Scandinavian Style", category: "Modern", description: "Light, airy interiors with natural materials" },
    { id: 15, image: gallery15, title: "Luxury Dining Room", category: "Dining Room", description: "Elegant dining space for memorable gatherings" },
    { id: 16, image: gallery16, title: "Guest Bedroom", category: "Bedroom", description: "Comfortable guest room with ensuite bathroom" },
    { id: 17, image: gallery17, title: "Industrial Kitchen", category: "Kitchen", description: "Urban industrial aesthetic meets functionality" },
    { id: 18, image: gallery18, title: "Spa Bathroom", category: "Bathroom", description: "Relaxing spa-like bathroom retreat" },
    { id: 19, image: gallery19, title: "Creative Studio", category: "Office", description: "Inspiring creative workspace for artists" },
    { id: 20, image: gallery20, title: "Bohemian Living", category: "Living Room", description: "Eclectic, artistic space with global influences" },
    { id: 21, image: gallery21, title: "Luxury Walk-in Closet", category: "Closet", description: "Organized wardrobe with premium finishes" },
    { id: 22, image: gallery22, title: "Traditional Kitchen", category: "Kitchen", description: "Classic design with modern appliances" },
    { id: 23, image: gallery23, title: "Powder Room", category: "Bathroom", description: "Elegant half-bathroom for guests" },
    { id: 24, image: gallery24, title: "Library Office", category: "Office", description: "Wood-paneled study with built-in bookshelves" },
    { id: 25, image: gallery25, title: "Family Living Room", category: "Living Room", description: "Warm, inviting space for family gatherings" },
    { id: 26, image: gallery26, title: "Teen Bedroom", category: "Bedroom", description: "Fun, functional space for teenagers" },
    { id: 27, image: gallery27, title: "Farmhouse Kitchen", category: "Kitchen", description: "Rustic charm meets modern functionality" },
    { id: 28, image: gallery28, title: "Master Bathroom", category: "Bathroom", description: "Luxurious master bath with dual vanities" },
    { id: 29, image: gallery29, title: "Corner Office", category: "Office", description: "Efficient workspace maximizing natural light" },
    { id: 30, image: gallery30, title: "Art Deco Living", category: "Living Room", description: "Geometric patterns and metallic accents" },
    { id: 31, image: gallery31, title: "Kids Bedroom", category: "Bedroom", description: "Playful, safe space for children" },
    { id: 32, image: gallery32, title: "Coffee Shop Kitchen", category: "Kitchen", description: "Commercial-style kitchen for home chefs" },
    { id: 33, image: gallery33, title: "Zen Bathroom", category: "Bathroom", description: "Peaceful, meditative bathing space" },
    { id: 34, image: gallery34, title: "Executive Suite", category: "Office", description: "Prestigious office space for professionals" },
    { id: 35, image: gallery35, title: "Entertainment Living", category: "Living Room", description: "Media room with surround sound setup" },
    { id: 36, image: gallery36, title: "Romantic Bedroom", category: "Bedroom", description: "Intimate space with soft lighting" },
    { id: 37, image: gallery37, title: "Bistro Kitchen", category: "Kitchen", description: "Compact, efficient kitchen design" },
    { id: 38, image: gallery38, title: "Steam Room", category: "Bathroom", description: "Luxurious steam shower experience" },
    { id: 39, image: gallery39, title: "Writing Nook", category: "Office", description: "Quiet corner for focused work" },
    { id: 40, image: gallery40, title: "Open Plan Living", category: "Living Room", description: "Seamless flow between living spaces" },
    { id: 41, image: gallery41, title: "Nautical Bedroom", category: "Bedroom", description: "Coastal-inspired bedroom design" },
    { id: 42, image: gallery42, title: "Gourmet Kitchen", category: "Kitchen", description: "Professional-grade cooking space" },
    { id: 43, image: gallery43, title: "Wellness Bathroom", category: "Bathroom", description: "Holistic wellness bathing environment" },
    { id: 44, image: gallery44, title: "Tech Office", category: "Office", description: "Smart office with integrated technology" },
    { id: 45, image: gallery45, title: "Classic Living Room", category: "Living Room", description: "Timeless traditional design" },
    { id: 46, image: gallery46, title: "Loft Bedroom", category: "Bedroom", description: "Industrial loft-style sleeping quarters" },
    { id: 47, image: gallery47, title: "Herb Garden Kitchen", category: "Kitchen", description: "Kitchen with integrated herb garden" },
    { id: 48, image: gallery48, title: "Floating Vanity Bath", category: "Bathroom", description: "Modern floating vanity design" },
    { id: 49, image: gallery49, title: "Co-working Space", category: "Office", description: "Collaborative workspace design" },
    { id: 50, image: gallery50, title: "Boho Chic Living", category: "Living Room", description: "Eclectic, artistic living space" },
    { id: 51, image: gallery51, title: "Minimalist Bedroom", category: "Bedroom", description: "Essentialist approach to sleeping spaces" },
    { id: 52, image: gallery52, title: "Pantry Kitchen", category: "Kitchen", description: "Well-organized kitchen with pantry" },
    { id: 53, image: gallery53, title: "Rainfall Shower", category: "Bathroom", description: "Luxurious rainfall shower experience" },
    { id: 54, image: gallery54, title: "Reading Room", category: "Office", description: "Dedicated space for literature and thought" },
    { id: 55, image: gallery55, title: "Grand Living Hall", category: "Living Room", description: "Spacious, grand entertaining space" }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex].image);
    setSelectedIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1;
    setSelectedImage(galleryItems[prevIndex].image);
    setSelectedIndex(prevIndex);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-navy mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of stunning interiors that showcase our expertise
              in creating beautiful, functional spaces.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Office', 'Dining Room', 'Closet', 'Modern', 'Luxury', 'Design'].map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'luxury' : 'outline'}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Gallery Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(item.image, index)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gold font-medium text-sm uppercase tracking-wide">
                          {item.category}
                        </span>
                        <Eye className="h-5 w-5 text-gold" />
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-5xl max-h-[90vh] w-full mx-4">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                ›
              </button>

              {/* Image */}
              <img
                src={selectedImage}
                alt={galleryItems[selectedIndex].title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">
                      {galleryItems[selectedIndex].title}
                    </h3>
                    <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
                      {galleryItems[selectedIndex].category}
                    </p>
                    <p className="text-white/80 text-sm">
                      {galleryItems[selectedIndex].description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-sm">
                      {selectedIndex + 1} of {galleryItems.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Gallery;