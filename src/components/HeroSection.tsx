
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Transform Your
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Mental Wellness
                </span>
                <br />
                Journey
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                Experience personalized AI therapy, intelligent mood tracking, and evidence-based wellness tools designed by mental health professionals.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-8 py-4 text-lg rounded-xl group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Phone Mockup */}
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative mx-auto max-w-sm">
              
              {/* Main Phone */}
              <div className="relative bg-slate-900 rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  
                  {/* Status Bar */}
                  <div className="bg-slate-900 text-white text-center py-1 text-xs">
                    <span>9:41 AM</span>
                  </div>
                  
                  {/* App Content */}
                  <div className="bg-gradient-to-b from-indigo-50 to-white p-6 h-[600px]">
                    
                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🧠</span>
                      </div>
                      <h3 className="text-slate-900 font-bold text-lg">Good Morning, Sarah</h3>
                      <p className="text-slate-600 text-sm">How are you feeling today?</p>
                    </div>

                    {/* Mood Selector */}
                    <div className="grid grid-cols-5 gap-3 mb-8">
                      {['😊', '😌', '😐', '😔', '😴'].map((emoji, i) => (
                        <div 
                          key={i}
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
                            i === 0 ? 'bg-indigo-100 scale-110 shadow-md' : 'bg-slate-100 hover:bg-slate-200'
                          }`}
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                              <span className="text-indigo-600">💬</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">AI Therapy Session</p>
                              <p className="text-sm text-slate-500">15 min available</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <span className="text-green-600">🧘</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">Meditation</p>
                              <p className="text-sm text-slate-500">5 min breathing exercise</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
