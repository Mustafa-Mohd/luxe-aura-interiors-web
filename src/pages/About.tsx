import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import TeamCard from '@/components/TeamCard';

const teamMembers = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Founder & Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=400&h=400&fit=crop&crop=face",
    description: "With over 15 years of experience, Priya leads our creative vision with passion for sustainable design.",
    expertise: ["Sustainable Design", "Luxury Interiors", "Project Management"]
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Senior Interior Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    description: "Rajesh specializes in space planning and architectural integration with modern design principles.",
    expertise: ["Space Planning", "3D Visualization", "Modern Architecture"]
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Creative Designer",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    description: "Ananya brings fresh perspectives to residential designs with focus on color psychology.",
    expertise: ["Color Psychology", "Residential Design", "Decor Styling"]
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Commercial Design Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: "Expert in commercial spaces, Vikram creates functional and aesthetic business environments.",
    expertise: ["Commercial Design", "Office Planning", "Retail Spaces"]
  },
  {
    id: 5,
    name: "Meera Reddy",
    role: "Material & Texture Consultant",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    description: "Meera curates premium materials and textures that define the luxury experience.",
    expertise: ["Material Selection", "Texture Design", "Luxury Finishes"]
  },
  {
    id: 6,
    name: "Arjun Mehta",
    role: "Technology Integration Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    description: "Arjun seamlessly integrates smart home technology with beautiful interior design.",
    expertise: ["Smart Homes", "Technology Integration", "Automation"]
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-navy mb-6">
              About Luxuria Interiors
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
              Discover our story, meet our team, and learn about our design philosophy 
              that has been shaping beautiful spaces for over a decade.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-6">
                Meet Our Creative Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our diverse team of talented designers brings years of experience and 
                unique perspectives to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
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