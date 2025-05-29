import React, { useEffect, useState } from 'react';
import { Smartphone, Star, Download, Shield, Users, Award } from 'lucide-react';

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  // App Store Icon Component
  const AppStoreIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );

  // Google Play Icon Component
  const GooglePlayIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
    </svg>
  );

  return (
    <section 
      id="download" 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Download className="w-4 h-4 mr-2" />
            Available on All Platforms
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Take Your Mental Wellness
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Anywhere You Go
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Join over 100,000 users who trust Tranquil AI for their daily mental health support. 
            Start your journey to better wellbeing today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - App Mockups */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative flex justify-center">
              
              {/* Main Phone */}
              <div className="relative bg-slate-800 rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-500">
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
            </div>
          </div>

          {/* Right Column - Download Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>

            {/* App Store Rating */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">5.0/5.0</div>
                <div className="text-sm text-slate-600">Rated 5 stars on PlayStore and AppStore</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              {/* iOS Download */}
              <a 
                href="https://apps.apple.com/in/app/tranquil-ai/id6738845854"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-black hover:bg-gray-800 text-white px-6 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <AppStoreIcon className="w-6 h-6 text-black" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-gray-300">Download on the</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </div>
                    <Download className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              </a>

              {/* Android Download */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.trnql.tranquil&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <GooglePlayIcon className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-green-100">Get it on</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </div>
                    <Download className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              </a>
            </div>

            {/* Security Note */}
            <div className="flex items-center space-x-3 text-sm text-slate-600 mt-6">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Your data is encrypted and secure. We never share personal information.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;