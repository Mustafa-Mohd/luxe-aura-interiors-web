import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  expertise: string[];
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!card || !image || !content) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(card, { 
        opacity: 0,
        y: 100,
        scale: 0.8
      });

      gsap.set(image, { 
        scale: 0,
        rotation: -180
      });

      gsap.set(content, { 
        opacity: 0,
        y: 30
      });

      // Animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: index * 0.2
      })
      .to(image, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.8)"
      }, "-=0.4")
      .to(content, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3");

      // Hover animation
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(image, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out"
      });

      card.addEventListener('mouseenter', () => hoverTl.play());
      card.addEventListener('mouseleave', () => hoverTl.reverse());

    }, card);

    return () => ctx.revert();
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-gradient-to-br from-cream to-background rounded-3xl p-8 shadow-elegant hover:shadow-glow transition-all duration-500 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Profile Image */}
      <div ref={imageRef} className="relative mx-auto mb-6">
        <div className="w-32 h-32 mx-auto relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-full border-4 border-gold shadow-lg"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold/20 to-transparent"></div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
          <span className="text-navy font-bold text-sm">{index + 1}</span>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="text-center">
        <h3 className="font-serif text-2xl font-bold text-navy mb-2">{member.name}</h3>
        <p className="text-gold font-medium mb-4">{member.role}</p>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.description}</p>
        
        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {member.expertise.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-3 py-1 bg-navy/10 text-navy text-xs rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-gold/30 rounded-full group-hover:border-gold group-hover:scale-125 transition-all duration-300"></div>
    </div>
  );
};

export default TeamCard;