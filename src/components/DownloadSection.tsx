
import React, { useEffect, useState } from 'react';
import { Download, Smartphone, Star, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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

  return (
    <section 
      id="download" 
      className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Start Your Wellness
            <br />
            Journey Today
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Join thousands who've transformed their mental health with AI-powered support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - App Mockups */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative flex justify-center">
              
              {/* Main Phone */}
              <div className="relative bg-slate-900 rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white rounded-[2.5rem] overflow-hidden w-80 h-[600px]">
                  
                  {/* App Interface */}
                  <div className="bg-gradient-to-b from-indigo-50 to-white h-full p-6">
                    <div className="text-center mt-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <Smartphone className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Welcome to</h3>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Tranquil AI
                      </h2>
                      <p className="text-slate-600 mt-4">Your personal mental wellness companion</p>
                    </div>

                    {/* Feature Preview */}
                    <div className="mt-12 space-y-4">
                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                            <span className="text-indigo-600">🧠</span>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">AI Therapy</p>
                            <p className="text-sm text-slate-500">Available 24/7</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                            <span className="text-green-600">📊</span>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">Mood Tracking</p>
                            <p className="text-sm text-slate-500">Smart insights</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 rounded-full px-4 py-2 shadow-lg">
                <span className="text-white font-bold text-sm">Free Download</span>
              </div>
            </div>
          </div>

          {/* Right Column - Download Content */}
          <div className={`text-white space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className={`text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 200 + 500}ms` }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-indigo-200">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-white hover:bg-gray-50 text-indigo-600 px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-2xl">📱</span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-slate-500">Download for</div>
                      <div className="font-bold text-indigo-600">iOS & Android</div>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>

              <Button 
                variant="outline"
                size="lg" 
                className="w-full border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2" />
                Try Web Version
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              {[
                "HIPAA Compliant",
                "256-bit Encryption", 
                "FDA Guidelines",
                "Privacy First"
              ].map((badge, i) => (
                <div key={i} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-white font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
