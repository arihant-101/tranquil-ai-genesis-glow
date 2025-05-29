import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#help' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Security', href: '#security' }
  ];

  return (
    <footer className="bg-slate-900 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <h3 className="text-white text-2xl font-bold">Tranquil AI</h3>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md text-lg">
              Revolutionizing mental wellness through AI-powered therapy, personalized insights, and evidence-based tools designed for your unique journey.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a 
                    href="mailto:contact@tranquilai.com" 
                    className="text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    @tranquilai.in@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">
                    Available Worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Product</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-slate-400">
              © 2025 Tranquil AI. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;