
import React, { useEffect, useState } from 'react';
import { BookOpen, Edit3, Calendar } from 'lucide-react';

const JournalingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const journalEntry = "Today I felt a sense of accomplishment after completing my morning meditation. The breathing exercises really helped center my thoughts and I noticed I was more patient during my work meetings. I want to continue building this habit because I can see how it's positively affecting my mood and interactions with others...";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Typing animation
          let currentIndex = 0;
          const timer = setInterval(() => {
            if (currentIndex < journalEntry.length) {
              setTypingText(journalEntry.slice(0, currentIndex + 1));
              currentIndex++;
            } else {
              clearInterval(timer);
            }
          }, 50);
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
      className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-800 py-20"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Digital Notebook */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative">
              <div className="w-96 h-[500px] bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg shadow-2xl border border-amber-200 mx-auto">
                
                {/* Notebook Spiral */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-red-400 rounded-full"></div>
                <div className="absolute left-6 top-4 space-y-6">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  ))}
                </div>

                {/* Notebook Content */}
                <div className="p-12 pt-8">
                  <div className="mb-6">
                    <h3 className="text-gray-800 text-lg font-semibold mb-2">Daily Reflection</h3>
                    <div className="flex items-center space-x-2 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>March 15, 2024</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="min-h-[200px] bg-white/50 rounded p-4 border border-amber-200">
                      <p className="text-gray-800 leading-relaxed">
                        {typingText}
                        <span className="animate-pulse">|</span>
                      </p>
                    </div>

                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className={`text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-all duration-300 ${
                        isExpanded ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      {isExpanded ? 'Show Less' : 'Read Full Entry'}
                    </button>

                    {isExpanded && (
                      <div className="bg-white/50 rounded p-4 border border-amber-200 animate-accordion-down">
                        <p className="text-gray-800 leading-relaxed">
                          I'm grateful for the small moments of peace throughout the day. Tomorrow I want to focus on being more present during conversations and really listening to others.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating Pen */}
                <div className="absolute -right-4 top-20 transform rotate-12">
                  <Edit3 className="w-8 h-8 text-amber-600 animate-pulse" />
                </div>
              </div>

              {/* Floating Journal Pages */}
              <div className="absolute -top-2 -left-2 w-80 h-96 bg-amber-50/80 rounded-lg transform rotate-3 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-80 h-96 bg-amber-100/60 rounded-lg transform rotate-6 -z-20"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`text-white space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                Express Your
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Inner Thoughts
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover the therapeutic power of journaling with guided prompts and insights
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: BookOpen, text: "Daily prompts designed by mental health experts" },
                { icon: Edit3, text: "Free-form writing with mood-based suggestions" },
                { icon: Calendar, text: "Track emotional growth over time" }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className={`flex items-center space-x-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 200 + 500}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
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

export default JournalingSection;
