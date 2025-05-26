
import React, { useEffect, useState } from 'react';
import { BookOpen, Edit3, Calendar, TrendingUp } from 'lucide-react';

const JournalingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const journalEntry = "Today I practiced mindfulness during my morning coffee. I noticed how the warmth of the mug felt in my hands and really savored the first few sips. This small moment of presence helped me start the day with more intention and calm.";

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('journaling');
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
          setParallaxOffset(progress * 40 - 20);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Typewriter effect
          let currentIndex = 0;
          const timer = setInterval(() => {
            if (currentIndex < journalEntry.length) {
              setTypingText(journalEntry.slice(0, currentIndex + 1));
              currentIndex++;
            } else {
              clearInterval(timer);
            }
          }, 30);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('journaling');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="journaling" 
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transform: `translateY(${parallaxOffset}px) translateX(${isVisible ? 0 : -80}px)` }}
          >
            
            {/* Section Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-4 py-2">
              <Edit3 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Digital Journaling</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Express & Reflect
                <br />
                <span className="text-emerald-600">Your Inner World</span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Guided journaling with AI-powered prompts and insights to help you process emotions, track progress, and develop self-awareness.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  icon: BookOpen,
                  title: "Guided Prompts",
                  description: "Daily prompts designed by therapists to encourage meaningful reflection"
                },
                {
                  icon: Calendar,
                  title: "Progress Tracking", 
                  description: "Visualize your emotional growth and identify patterns over time"
                },
                {
                  icon: TrendingUp,
                  title: "AI Insights",
                  description: "Receive personalized insights based on your journaling patterns"
                }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className={`flex items-start space-x-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Journal Interface */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transform: `translateY(${-parallaxOffset}px) translateX(${isVisible ? 0 : 80}px)` }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              
              {/* Journal Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Daily Reflection</h3>
                    <p className="text-emerald-100 text-sm">March 15, 2024</p>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Journal Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">How did you practice mindfulness today?</h4>
                  <div className="bg-slate-50 rounded-xl p-4 min-h-[200px] border border-slate-200">
                    <p className="text-slate-900 leading-relaxed">
                      {typingText}
                      {typingText.length < journalEntry.length && (
                        <span className="animate-pulse">|</span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Mood & Tags */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-2">Today's Mood</p>
                    <div className="flex space-x-2">
                      {['😌', '😊', '🤔', '😴', '🙂'].map((emoji, i) => (
                        <div 
                          key={i}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                            i === 1 ? 'bg-emerald-100 scale-110' : 'bg-slate-100 hover:bg-slate-200'
                          }`}
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-2">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {['mindfulness', 'gratitude', 'morning routine'].map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
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

export default JournalingSection;
