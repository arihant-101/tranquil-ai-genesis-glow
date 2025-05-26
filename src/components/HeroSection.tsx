
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import FloatingParticles from './FloatingParticles';
import PhoneMockup from './PhoneMockup';

const HeroSection = () => {
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    // Trigger text animations after component mounts
    const timer = setTimeout(() => {
      setTextAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 animate-pulse duration-[8000ms]"></div>
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8">
              
              {/* Main Headline with Staggered Animation */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className={`inline-block transition-all duration-1000 ${
                    textAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: '0ms' }}>
                    Your
                  </span>{' '}
                  <span className={`inline-block transition-all duration-1000 ${
                    textAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: '200ms' }}>
                    AI-Powered
                  </span>
                  <br />
                  <span className={`inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
                    textAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: '400ms' }}>
                    Mental Wellness
                  </span>
                  <br />
                  <span className={`inline-block transition-all duration-1000 ${
                    textAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: '600ms' }}>
                    Companion
                  </span>
                </h1>
              </div>

              {/* Subheading */}
              <p className={`text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl transition-all duration-1000 ${
                textAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '800ms' }}>
                Transform your mental health journey with personalized AI therapy, mood tracking, and guided wellness tools
              </p>

              {/* CTA Button */}
              <div className={`transition-all duration-1000 ${
                textAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '1000ms' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 border border-white/20 backdrop-blur-sm group"
                >
                  <span className="relative z-10">Download Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </div>

            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
