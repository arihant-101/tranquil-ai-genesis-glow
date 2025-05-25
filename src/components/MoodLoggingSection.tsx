
import React, { useEffect, useState } from 'react';
import { TrendingUp, Brain, BarChart3, Calendar } from 'lucide-react';

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

  return (
    <section 
      id="mood-logging" 
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50/30"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            
            {/* Section Badge */}
            <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-4 py-2">
              <Brain className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">Smart Analytics</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Understand Your
                <br />
                <span className="text-indigo-600">Emotional Patterns</span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Advanced mood tracking with AI-powered insights that help you identify triggers, patterns, and progress over time.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                {
                  icon: BarChart3,
                  title: "Visual Analytics",
                  description: "Beautiful charts and graphs that make your emotional data easy to understand"
                },
                {
                  icon: Calendar,
                  title: "Historical Tracking", 
                  description: "Track mood patterns over weeks, months, and years to see your growth"
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Insights",
                  description: "AI predictions to help you prepare for challenging periods"
                }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className={`flex items-start space-x-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 200}ms` }}
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Professional Dashboard */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 relative">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Mood Analytics</h3>
                  <p className="text-slate-500">Last 7 days</p>
                </div>
                <div className="flex items-center space-x-2 bg-green-100 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700">Improving</span>
                </div>
              </div>

              {/* Chart */}
              <div className="mb-8">
                <div className="flex justify-between items-end h-48 space-x-3">
                  {[65, 78, 45, 89, 72, 85, animatedValue].map((height, i) => (
                    <div key={i} className="flex flex-col items-center group flex-1">
                      <div 
                        className="w-full bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t-lg transition-all duration-500 hover:from-indigo-600 hover:to-indigo-400 cursor-pointer relative"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {height}%
                        </div>
                      </div>
                      <span className="text-slate-600 text-sm mt-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insights */}
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-200 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Weekly Insight</p>
                      <p className="text-sm text-slate-600">Your mood improved 23% this week, especially on weekends.</p>
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

export default MoodLoggingSection;
