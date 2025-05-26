
import React, { useEffect, useState } from 'react';
import { Download, Smartphone, Star, Users, Award } from 'lucide-react';
import { Button } from './ui/button';

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  
  const screenshots = [
    { screen: 'Dashboard', description: 'Your personalized wellness dashboard' },
    { screen: 'Chat', description: 'AI therapist conversation' },
    { screen: 'Meditation', description: 'Guided meditation sessions' },
    { screen: 'Journal', description: 'Daily reflection and journaling' },
    { screen: 'Analytics', description: 'Mood tracking and insights' }
  ];

  const stats = [
    { icon: Users, value: '100K+', label: 'Active Users' },
    { icon: Star, value: '4.9', label: 'App Store Rating' },
    { icon: Award, value: '95%', label: 'User Satisfaction' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('download');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenshot(prev => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="download" 
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 relative overflow-hidden"
    >
      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Start Your Wellness Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download Tranquil AI today and join thousands who've transformed their mental health
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Phone Mockups */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative flex justify-center space-x-8">
              
              {/* iPhone Mockup */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] shadow-2xl border-4 border-gray-700 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-4 bg-black rounded-[1.8rem] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-slate-900 to-indigo-900 p-4">
                      
                      {/* Dynamic Screenshot Content */}
                      <div className="text-center text-white mt-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Smartphone className="w-8 h-8" />
                        </div>
                        <h3 className="font-semibold mb-2">{screenshots[currentScreenshot].screen}</h3>
                        <p className="text-sm text-gray-300">{screenshots[currentScreenshot].description}</p>
                      </div>
                      
                      {/* Screenshot Indicators */}
                      <div className="flex justify-center space-x-1 mt-8">
                        {screenshots.map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i === currentScreenshot ? 'bg-blue-400' : 'bg-white/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-2">
                  <span className="text-white text-xs font-bold">iOS</span>
                </div>
              </div>

              {/* Android Mockup */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-[2rem] shadow-2xl border-4 border-gray-600 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-4 bg-black rounded-[1.3rem] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-slate-900 to-green-900 p-4">
                      
                      {/* Android Interface */}
                      <div className="text-center text-white mt-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Download className="w-8 h-8" />
                        </div>
                        <h3 className="font-semibold mb-2">Android Ready</h3>
                        <p className="text-sm text-gray-300">Available on Google Play Store</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-2">
                  <span className="text-white text-xs font-bold">Android</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Download Content */}
          <div className={`text-white space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className={`text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 200 + 500}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">📱</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </div>
              </Button>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">🤖</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">Trusted by Therapists</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
