
import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Start logo animation after a brief delay
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 500);

    // Start text animation after logo starts appearing
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 1000);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2; // Increment by 2 every 50ms for smooth animation
      });
    }, 50);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Circular Progress Bar */}
          <div className="relative w-32 h-32">
            <svg 
              className="w-full h-full transform -rotate-90" 
              viewBox="0 0 100 100"
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-100 ease-out"
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Logo - Placeholder circle with gradient */}
            <div 
              className={`absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 shadow-2xl transition-all duration-1000 ease-out flex items-center justify-center ${
                logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              {/* Inner logo design */}
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Text */}
        <div className={`relative transition-all duration-1000 delay-300 ease-out ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <svg width="200" height="80" viewBox="0 0 200 80" className="overflow-visible">
            <defs>
              <path
                id="curve"
                d="M 20 60 Q 100 20 180 60"
                fill="none"
                stroke="none"
              />
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <text
              fontSize="18"
              fontWeight="600"
              fill="url(#textGradient)"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="2px"
            >
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                TRANQUIL AI
              </textPath>
            </text>
          </svg>
        </div>

        {/* Progress Text */}
        <div className={`mt-8 text-white/70 font-mono text-sm transition-all duration-500 delay-500 ${
          textVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {progress}%
        </div>

        {/* Subtle loading dots */}
        <div className={`flex space-x-1 mt-4 transition-all duration-500 delay-700 ${
          textVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 bg-white/40 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
