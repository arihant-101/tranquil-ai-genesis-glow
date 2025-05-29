import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleStartJourney = () => {
    setIsRedirecting(true);
    
    setTimeout(() => {
      // Redirect to the coming soon page
      window.location.href = '/comingsoon.html';
      setIsRedirecting(false);
    }, 500);
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
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
                onClick={handleStartJourney}
                disabled={isRedirecting}
                className={`bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  isRedirecting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isRedirecting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Redirecting...
                  </>
                ) : (
                  <>
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
          
            </div>

            {/* Redirect Status */}
            {isRedirecting && (
              <p className="text-cyan-600 text-sm animate-pulse">
                Redirecting to download page...
              </p>
            )}
          </div>

          {/* Right Column - App Landing Page Phone Mockup */}
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative mx-auto max-w-sm">
              
              {/* Main Phone */}
              <div className="relative bg-slate-900 rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-b from-slate-100 to-white rounded-[2.5rem] overflow-hidden">
                  
                  {/* Status Bar */}
                  <div className="bg-white text-slate-900 px-6 py-2 text-xs flex justify-between items-center">
                    <span className="font-medium">01:42</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs">4G+</span>
                      <span className="text-xs">📶</span>
                      <span className="text-xs">🔋17%</span>
                    </div>
                  </div>
                  
                  {/* App Content matching the provided design */}
                  <div className="bg-gradient-to-b from-slate-100 to-white p-6 h-[600px] relative">
                    
                    {/* Header with avatar */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-slate-600 text-lg">Welcome back,</h3>
                        <h2 className="text-slate-900 font-bold text-xl">User</h2>
                      </div>
                      <div className="flex space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">🔥</span>
                        </div>
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                          <span className="text-slate-600">👤</span>
                        </div>
                      </div>
                    </div>

                    {/* Last Mood Check Card */}
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 mb-6 text-white">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-lg">🧠</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Last Mood Check</h4>
                          <p className="text-lg font-medium">You were feeling pretty good</p>
                          <p className="text-sm text-blue-100">6 seconds ago</p>
                        </div>
                      </div>
                      <p className="text-sm mb-4 text-blue-50">
                        Glad you're feeling good! Would you like to capture this positive energy?
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-white/20 rounded-xl p-3 flex items-center justify-center space-x-2">
                          <span>🤖</span>
                          <span className="text-sm font-medium">Talk to AI</span>
                        </button>
                        <button className="bg-white/20 rounded-xl p-3 flex items-center justify-center space-x-2">
                          <span>✏️</span>
                          <span className="text-sm font-medium">Journal</span>
                        </button>
                      </div>
                    </div>

                    {/* Mood Log Button */}
                    <div className="bg-gradient-to-b from-cyan-100 to-cyan-200 rounded-full p-6 text-center mb-6">
                      <button className="bg-white rounded-full px-6 py-3 shadow-sm">
                        <p className="text-slate-600 font-medium">Tap to log</p>
                        <p className="text-slate-800 font-semibold">your mood</p>
                      </button>
                    </div>

                    {/* Bottom sections */}
                    <div className="space-y-4">
                      {/* AI Companion */}
                      <div className="bg-white rounded-xl p-4 border border-slate-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-blue-600 text-sm">🤖</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">AI Companion</p>
                              <p className="text-xs text-slate-500 italic">AI Companion is thinking...</p>
                              <p className="text-sm text-slate-600">How was your day today?</p>
                            </div>
                          </div>
                          <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                            Chat Now
                          </button>
                        </div>
                      </div>

                      {/* Journal */}
                      <div className="bg-white rounded-xl p-4 border border-slate-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <span className="text-green-600 text-sm">📔</span>
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">Journal</p>
                              <p className="text-sm text-slate-600">Latest Entry</p>
                              <p className="text-sm font-medium text-slate-800">Desire Unleashed</p>
                              <p className="text-xs text-slate-500">May 28, 2025</p>
                            </div>
                          </div>
                          <button className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                            Write Now
                          </button>
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