
import React, { useEffect, useState } from 'react';
import { TrendingUp, Brain, BarChart3, Calendar } from 'lucide-react';

const MoodLoggingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);

  const moods = [
    { 
      name: 'Very Unpleasant', 
      color: 'from-red-400 to-red-600', 
      bgColor: 'bg-gradient-to-br from-red-400 to-red-600',
      icon: '😢',
      shape: 'starburst',
      description: 'Feeling down and need support'
    },
    { 
      name: 'Unpleasant', 
      color: 'from-orange-400 to-orange-600', 
      bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600',
      icon: '😕',
      shape: 'octagon',
      description: 'Not feeling great today'
    },
    { 
      name: 'Neutral', 
      color: 'from-green-400 to-green-600', 
      bgColor: 'bg-gradient-to-br from-green-400 to-green-600',
      icon: '😐',
      shape: 'circle',
      description: 'Feeling okay, neither good nor bad'
    },
    { 
      name: 'Pleasant', 
      color: 'from-blue-400 to-blue-600', 
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600',
      icon: '😊',
      shape: 'star',
      description: 'Feeling good and positive'
    },
    { 
      name: 'Very Pleasant', 
      color: 'from-purple-400 to-purple-600', 
      bgColor: 'bg-gradient-to-br from-purple-400 to-purple-600',
      icon: '😄',
      shape: 'star',
      description: 'Feeling amazing and energetic'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('mood-logging');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto-scroll through moods
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMoodIndex((prev) => (prev + 1) % moods.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderMoodShape = (mood: any, isActive: boolean) => {
    const baseClasses = `w-40 h-40 flex items-center justify-center text-5xl transition-all duration-500 ${
      isActive ? 'scale-110 opacity-100' : 'scale-90 opacity-70'
    }`;

    if (mood.shape === 'circle') {
      return (
        <div className={`${baseClasses} rounded-full ${mood.bgColor}`}>
          {mood.icon}
        </div>
      );
    }
    
    if (mood.shape === 'star') {
      return (
        <div className={`${baseClasses} ${mood.bgColor}`} style={{
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
        }}>
          {mood.icon}
        </div>
      );
    }

    if (mood.shape === 'starburst') {
      return (
        <div className={`${baseClasses} ${mood.bgColor}`} style={{
          clipPath: 'polygon(50% 0%, 59% 22%, 82% 22%, 67% 41%, 85% 59%, 59% 59%, 50% 81%, 41% 59%, 15% 59%, 33% 41%, 18% 22%, 41% 22%)'
        }}>
          {mood.icon}
        </div>
      );
    }
    
    // octagon
    return (
      <div className={`${baseClasses} ${mood.bgColor}`} style={{
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
      }}>
        {mood.icon}
      </div>
    );
  };

  return (
    <section 
      id="mood-logging" 
      className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Log Your Mood &
            <br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Track Your Journey
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Express your feelings with our intuitive mood logging system and gain insights into your emotional patterns
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Mood Logging Interface */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mx-auto max-w-sm bg-slate-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden h-[600px] relative">
                
                {/* Status Bar */}
                <div className="bg-white text-slate-900 px-6 py-2 text-xs flex justify-between items-center border-b border-slate-100">
                  <span className="font-medium">01:42</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">4G+</span>
                    <span className="text-xs">📶</span>
                    <span className="text-xs">🔋17%</span>
                  </div>
                </div>

                {/* Mood Selection Interface - Exactly matching uploaded images */}
                <div className={`h-full transition-all duration-1000 ${moods[currentMoodIndex].bgColor} relative overflow-hidden`}>
                  
                  {/* Header Text */}
                  <div className="text-center pt-16 px-6">
                    <h3 className="text-white text-xl font-semibold mb-2 opacity-80">
                      Reflect on Your Moment
                    </h3>
                    <p className="text-white text-base opacity-90">
                      How were you feeling earlier?
                    </p>
                  </div>

                  {/* Mood Shape Display */}
                  <div className="flex justify-center items-center mt-16 mb-8">
                    {renderMoodShape(moods[currentMoodIndex], true)}
                  </div>

                  {/* Mood Label */}
                  <div className="text-center px-6 mb-8">
                    <div className="bg-white/20 rounded-full px-6 py-3 inline-block backdrop-blur-sm">
                      <h4 className="text-white text-lg font-semibold">
                        {moods[currentMoodIndex].name}
                      </h4>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="px-8 mb-8">
                    <div className="flex justify-between text-white text-sm mb-4">
                      <span>Bad</span>
                      <span>Good</span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-2 bg-white/30 rounded-full">
                        <div 
                          className="h-2 bg-white rounded-full transition-all duration-500" 
                          style={{ width: `${20 + (currentMoodIndex * 20)}%` }}
                        />
                      </div>
                      <div 
                        className="absolute top-0 w-6 h-6 bg-white rounded-full transform -translate-y-2 transition-all duration-500"
                        style={{ left: `calc(${20 + (currentMoodIndex * 20)}% - 12px)` }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center px-8">
                    <button className="bg-white/20 backdrop-blur-sm text-white px-12 py-3 rounded-full font-medium">
                      Submit
                    </button>
                  </div>

                  {/* Progress Dots */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {moods.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentMoodIndex ? 'bg-white' : 'bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Express Your Emotions Naturally
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our intuitive mood logging system captures the full spectrum of your emotional experience. 
                From challenging moments to peak happiness, every feeling matters in your wellness journey.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                {
                  icon: Brain,
                  title: "Smart Mood Detection",
                  description: "AI-powered insights help understand your emotional patterns and triggers"
                },
                {
                  icon: Calendar,
                  title: "Daily Tracking", 
                  description: "Build healthy habits with consistent mood monitoring and reflection"
                },
                {
                  icon: TrendingUp,
                  title: "Progress Insights",
                  description: "See your emotional growth and patterns over time with detailed analytics"
                }
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
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
