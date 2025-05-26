
import React, { useEffect, useState } from 'react';
import { TrendingUp, Heart, Smile, Frown, Sparkles } from 'lucide-react';

const MoodLoggingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    // Generate floating elements
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      emoji: ['😊', '😐', '😔', '😴', '😤', '❤️', '✨', '🌟'][Math.floor(Math.random() * 8)]
    }));
    setFloatingElements(elements);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate chart values
          let start = 0;
          const end = 85;
          const timer = setInterval(() => {
            start += 2;
            setAnimatedValue(start);
            if (start >= end) clearInterval(timer);
          }, 30);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('mood-logging');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const moodEmojis = ['😊', '😐', '😔', '😴', '😤'];

  return (
    <section 
      id="mood-logging" 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 relative overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-pulse opacity-60"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <div className="text-2xl animate-bounce">{element.emoji}</div>
          </div>
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Phone Mockup */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] mx-auto shadow-2xl border-4 border-gray-700 hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-4 bg-black rounded-[2.2rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-slate-900 to-blue-900 p-6">
                    
                    {/* Mood Chart */}
                    <div className="mt-8 space-y-4">
                      <h3 className="text-white text-lg font-semibold flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-cyan-400 animate-pulse" />
                        Weekly Mood Trends
                      </h3>
                      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-cyan-500/20">
                        <div className="flex justify-between items-end h-32 space-x-2">
                          {[65, 78, 45, 89, 72, 85, animatedValue].map((height, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center group">
                              <div 
                                className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition-all duration-500 hover:from-cyan-400 hover:to-blue-500 cursor-pointer"
                                style={{ height: `${height}%` }}
                              ></div>
                              <span className="text-white text-xs mt-1 group-hover:text-cyan-400 transition-colors">
                                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Mood Selector */}
                      <div className="flex justify-center space-x-3 mt-6">
                        {moodEmojis.map((emoji, i) => (
                          <div 
                            key={i}
                            className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-500/30 cursor-pointer ${
                              i === 0 ? 'bg-blue-500/30 scale-110 animate-pulse' : ''
                            }`}
                          >
                            {emoji}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 animate-bounce">
                <Heart className="w-8 h-8 text-red-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 animate-pulse">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`text-white space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                Track Your
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Emotional Journey
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Understand your mood patterns with intelligent tracking and personalized insights
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Heart, text: "Daily mood check-ins with smart reminders", color: "text-red-400" },
                { icon: TrendingUp, text: "Visual analytics to spot emotional patterns", color: "text-green-400" },
                { icon: Smile, text: "Personalized recommendations based on your data", color: "text-yellow-400" }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className={`flex items-center space-x-4 transition-all duration-500 hover:translate-x-2 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 200 + 500}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                    <feature.icon className={`w-6 h-6 ${feature.color} group-hover:animate-pulse`} />
                  </div>
                  <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodLoggingSection;
