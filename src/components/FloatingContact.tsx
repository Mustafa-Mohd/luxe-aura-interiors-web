import React, { useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options (when expanded) */}
      {isOpen && (
        <div className="mb-4 space-y-3 animate-in fade-in-0 slide-in-from-bottom-5 duration-300">
          <div className="bg-card border border-border rounded-lg shadow-elegant p-4 min-w-[200px]">
            <h3 className="font-serif font-bold text-navy mb-3">Get in Touch</h3>
            <div className="space-y-2">
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-sm">Call Us</span>
              </a>
              <a
                href="mailto:hello@luxuriainteriors.com"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-sm">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-14 h-14 rounded-full shadow-gold hover:shadow-elegant transition-all duration-300
          ${isOpen 
            ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground' 
            : 'bg-gradient-gold text-navy hover:scale-110'
          }
        `}
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        
        {/* Pulsing ring animation when closed */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-20"></div>
        )}
      </Button>
    </div>
  );
};

export default FloatingContact;