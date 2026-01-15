import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const ownerInfo = {
  name: "Mohammed subedar",
  role: "Founder, Aluminium & Furniture Contractor",
  image: "https://res.cloudinary.com/ducsdxngy/image/upload/v1768485534/WhatsApp_Image_2026-01-15_at_7.27.01_PM_dyowck.jpg",
  description: "A true testament to determination and passion, Mohammed subedar started from scratch with no formal training in interior design. Through sheer hard work, relentless dedication, and an unwavering commitment to excellence, he transformed his vision into one of Hyderabad's most respected interior design firms. Specializing in aluminium work, furniture contracting, and complete interior solutions, his journey from zero to becoming a master craftsman in luxury interiors inspires everyone who works with him.",
  expertise: ["Aluminium Work", "Furniture Contracting", "Interior Design", "Luxury Interiors", "Project Management", "Client Relations", "Space Planning", "Complete Interior Solutions"],
  achievements: ["15+ Years Experience", "250+ Projects Completed", "100+ Happy Clients", "50+ Design Awards"]
};

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-navy mb-6">
              About Knock On Wood
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
              Discover our story, meet our founder Mohammed subedar, and learn about the
              inspiring journey that has been shaping beautiful spaces for over a decade.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-6">
                Meet Our Founder
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The visionary behind Knock On Wood, whose journey from humble beginnings
                to becoming Hyderabad's premier interior design expert inspires us all.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
                    <img
                      src={ownerInfo.image}
                      alt={ownerInfo.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>

                    {/* Role Badge */}
                    <div className="absolute top-6 left-6 bg-gold text-navy px-4 py-2 rounded-full font-medium text-sm">
                      {ownerInfo.role}
                    </div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-2">
                        {ownerInfo.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {ownerInfo.expertise.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-gold font-medium text-lg mb-4">A Journey of Excellence</h4>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {ownerInfo.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-navy font-semibold text-lg mb-4">Key Achievements</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {ownerInfo.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-gold rounded-full"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-navy font-semibold text-lg mb-4">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {ownerInfo.expertise.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Inspirational Quote */}
                      <div className="border-l-4 border-gold pl-6 py-4 bg-cream/20 rounded-r-lg">
                        <p className="text-navy font-medium italic">
                          "Success is not about where you start, but about the determination
                          to keep going when others give up. Every masterpiece begins with a single step."
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">- Mohammed subedar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-navy text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-serif text-4xl lg:text-6xl font-bold text-gold mb-2">250+</div>
                <div className="text-cream/80">Projects Completed</div>
              </div>
              <div>
                <div className="font-serif text-4xl lg:text-6xl font-bold text-gold mb-2">100+</div>
                <div className="text-cream/80">Happy Clients</div>
              </div>
              <div>
                <div className="font-serif text-4xl lg:text-6xl font-bold text-gold mb-2">15+</div>
                <div className="text-cream/80">Years Experience</div>
              </div>
              <div>
                <div className="font-serif text-4xl lg:text-6xl font-bold text-gold mb-2">50+</div>
                <div className="text-cream/80">Design Awards</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default About;