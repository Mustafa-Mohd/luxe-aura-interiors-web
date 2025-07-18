import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Residential Design',
    'Commercial Spaces',
    'Space Planning',
    'Consultation',
    'Project Management',
  ];

  return (
    <footer className="bg-navy text-cream relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="font-serif text-3xl font-bold text-gold mb-6 block">
                Luxuria
              </Link>
              <p className="text-cream/80 text-lg leading-relaxed mb-6 max-w-md">
                Creating exceptional interiors that blend luxury with functionality. 
                Transform your space with our expert design team and experience the 
                difference of true craftsmanship.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold" />
                  <span className="text-cream/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold" />
                  <span className="text-cream/80">hello@luxuriainteriors.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span className="text-cream/80">123 Design District, New York, NY 10001</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-cream/10 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-cream/10 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-cream/10 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-xl font-bold text-gold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-cream/80 hover:text-gold transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-serif text-xl font-bold text-gold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-cream/80">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-cream/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-bold text-gold mb-4">
                Stay Inspired
              </h3>
              <p className="text-cream/80 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest design trends, project updates, 
                and exclusive insights from our design team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:border-gold"
                />
                <Button variant="luxury">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-cream/60 text-sm">
                © {currentYear} Luxuria Interiors. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-cream/60 hover:text-gold text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-cream/60 hover:text-gold text-sm transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;