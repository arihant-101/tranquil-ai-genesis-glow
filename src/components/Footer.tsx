
import React from 'react';
import { Heart, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Footer = () => {
  const navigationLinks = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Support', href: '#support' },
    { label: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black py-16">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold">Tranquil AI</h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Empowering individuals to take control of their mental wellness through innovative AI technology and evidence-based therapeutic approaches.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:animate-bounce" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Get the latest updates on mental wellness and new features.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
              />
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Tranquil AI. All rights reserved. Made with ❤️ for mental wellness.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {legalLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
