
import React from 'react';
import { Heart, Mail, ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

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

  const trustBadges = [
    { icon: Shield, label: 'HIPAA Compliant' },
    { icon: Award, label: 'Certified Secure' },
    { icon: Clock, label: '24/7 Support' }
  ];

  return (
    <footer className="bg-slate-900 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Updated on Mental Wellness
              </h3>
              <p className="text-indigo-100 text-lg">
                Get weekly tips, research insights, and product updates delivered to your inbox.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex space-x-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-indigo-200 focus:border-white focus:ring-white/20 flex-1"
                />
                <Button 
                  className="bg-white text-indigo-600 hover:bg-gray-50 px-6 shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-indigo-200 text-sm">
                Join 50,000+ mental health professionals and wellness enthusiasts
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold">Tranquil AI</h3>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md text-lg">
              Revolutionizing mental wellness through AI-powered therapy, personalized insights, and evidence-based tools designed for your unique journey.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center space-x-2 bg-slate-800 rounded-lg px-3 py-2">
                  <badge.icon className="w-4 h-4 text-indigo-400" />
                  <span className="text-slate-300 text-sm font-medium">{badge.label}</span>
                </div>
              ))}
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

          {/* Support Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, i) => (
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
              © 2024 Tranquil AI. All rights reserved. Built with ❤️ for mental wellness.
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
