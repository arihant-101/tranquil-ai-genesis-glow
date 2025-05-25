
import React, { useEffect, useState } from 'react';
import { TrendingUp, Heart, Smile, Frown } from 'lucide-react';

const MoodLoggingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
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
      className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-700 py-20"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Phone Mockup */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] mx-auto shadow-2xl border-4 border-gray-700">
                <div className="absolute inset-4 bg-black rounded-[2.2rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-slate-900 to-blue-900 p-6">
                    
                    {/* Mood Chart */}
                    <div className="mt-8 space-y-4">
                      <h3 className="text-white text-lg font-semibold">Weekly Mood Trends</h3>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="flex justify-between items-end h-32 space-x-2">
                          {[65, 78, 45, 89, 72, 85, animatedValue].map((height, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center">
                              <div 
                                className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition-all duration-500"
                                style={{ height: `${height}%` }}
                              ></div>
                              <span className="text-white text-xs mt-1">
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
                            className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                              i === 0 ? 'bg-blue-500/30 scale-110' : ''
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
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Emotional Journey
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Understand your mood patterns with intelligent tracking and personalized insights
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Heart, text: "Daily mood check-ins with smart reminders" },
                { icon: TrendingUp, text: "Visual analytics to spot emotional patterns" },
                { icon: Smile, text: "Personalized recommendations based on your data" }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className={`flex items-center space-x-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 200 + 500}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-lg text-gray-300">{feature.text}</p>
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
