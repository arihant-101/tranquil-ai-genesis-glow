
import React, { useEffect, useState } from 'react';
import { Flower2, Heart, Timer } from 'lucide-react';

const MeditationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('inhale');
  const [breathingScale, setBreathingScale] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('meditation');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // 4-7-8 breathing pattern
    const breathingCycle = () => {
      // Inhale for 4 seconds
      setBreathingPhase('inhale');
      setBreathingScale(1.3);
      
      setTimeout(() => {
        // Hold for 7 seconds
        setBreathingPhase('hold');
      }, 4000);
      
      setTimeout(() => {
        // Exhale for 8 seconds
        setBreathingPhase('exhale');
        setBreathingScale(1);
      }, 11000);
    };

    if (isVisible) {
      breathingCycle();
      const interval = setInterval(breathingCycle, 19000); // Total cycle: 19 seconds
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section 
      id="meditation" 
      className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-700 py-20 relative overflow-hidden"
    >
      {/* Zen Garden Ripples */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 border border-white/10 rounded-full animate-ping"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '8s'
            }}
          />
        ))}
      </div>

      {/* Floating Lotus Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            <Flower2 className="w-6 h-6 text-emerald-300 transform rotate-45" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Breathing Circle */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative flex items-center justify-center">
              
              {/* Breathing Circle */}
              <div 
                className="w-80 h-80 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-full flex items-center justify-center transition-all duration-4000 ease-in-out backdrop-blur-sm border border-emerald-400/50"
                style={{ 
                  transform: `scale(${breathingScale})`,
                  transitionDuration: breathingPhase === 'inhale' ? '4s' : breathingPhase === 'exhale' ? '8s' : '0s'
                }}
              >
                <div className="w-60 h-60 bg-gradient-to-br from-emerald-300/40 to-cyan-300/40 rounded-full flex items-center justify-center border border-emerald-300/50">
                  <div className="w-40 h-40 bg-gradient-to-br from-emerald-200/50 to-cyan-200/50 rounded-full flex items-center justify-center border border-emerald-200/50">
                    <div className="text-center text-white">
                      <p className="text-lg font-medium capitalize">{breathingPhase}</p>
                      <p className="text-sm text-emerald-200">
                        {breathingPhase === 'inhale' ? '4 seconds' : 
                         breathingPhase === 'hold' ? '7 seconds' : '8 seconds'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Surrounding Rings */}
              <div className="absolute w-96 h-96 border border-emerald-400/20 rounded-full animate-pulse"></div>
              <div className="absolute w-[30rem] h-[30rem] border border-emerald-400/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`text-white space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                Find Your
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Inner Peace
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Guided meditation sessions to reduce stress, improve focus, and cultivate mindfulness
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Timer, text: "5-minute to 1-hour guided sessions" },
                { icon: Heart, text: "Breathing exercises for instant calm" },
                { icon: Flower2, text: "Mindfulness techniques for daily practice" }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className={`flex items-center space-x-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 200 + 500}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-lg text-gray-300">{feature.text}</p>
                </div>
              ))}
            </div>

            {/* Meditation Bell */}
            <div className="pt-4">
              <button className="group flex items-center space-x-3 text-emerald-300 hover:text-emerald-200 transition-colors duration-300">
                <div className="w-8 h-8 border-2 border-emerald-400 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                </div>
                <span className="font-medium">Play meditation bell</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationSection;
