
import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Logo fades in after 0.5s and becomes fully visible over 1.5s
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 500);

    // Text appears after 2 seconds
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 2000);

    // Progress ring fills over 3 seconds (from 2s to 5s total)
    const progressTimer = setTimeout(() => {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + (100/60); // 60 frames over 3 seconds
        });
      }, 50);
    }, 2000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(progressTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Progress Ring */}
        <div className="relative mb-8">
          <div className="relative w-32 h-32">
            {/* Progress Ring */}
            <svg 
              className="w-full h-full transform -rotate-90" 
              viewBox="0 0 100 100"
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="3"
                fill="none"
              />
              {/* Progress circle with gradient */}
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
                className="transition-all duration-75 ease-out"
              />
              {/* Gradient definition matching your color scheme */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Circular Logo */}
            <div 
              className={`absolute inset-3 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 shadow-2xl transition-all duration-1500 ease-out flex items-center justify-center ${
                logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              {/* Inner logo design - minimalist circular pattern */}
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Name */}
        <div className={`transition-all duration-1000 ease-out ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-white text-2xl font-sans font-normal tracking-wider">
            Tranquil AI
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
