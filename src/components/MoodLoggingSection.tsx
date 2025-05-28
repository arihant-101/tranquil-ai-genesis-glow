
import React, { useEffect, useState } from 'react';
import { TrendingUp, Brain, BarChart3, Calendar } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const MoodLoggingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);

  const moods = [
    { 
      name: 'Very Unpleasant', 
      color: 'from-red-400 to-red-600', 
      bgColor: 'bg-gradient-to-br from-red-400 to-red-600',
      icon: '😢',
      shape: 'star',
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

  // Sample data for charts
  const moodTrendData = [
    { date: 'Mon', mood: 7, energy: 6, stress: 3 },
    { date: 'Tue', mood: 8, energy: 7, stress: 2 },
    { date: 'Wed', mood: 6, energy: 5, stress: 5 },
    { date: 'Thu', mood: 9, energy: 8, stress: 2 },
    { date: 'Fri', mood: 7, energy: 6, stress: 4 },
    { date: 'Sat', mood: 8, energy: 9, stress: 1 },
    { date: 'Sun', mood: 9, energy: 8, stress: 2 },
  ];

  const moodDistribution = [
    { name: 'Very Pleasant', value: 35, color: '#8B5CF6' },
    { name: 'Pleasant', value: 25, color: '#3B82F6' },
    { name: 'Neutral', value: 20, color: '#10B981' },
    { name: 'Unpleasant', value: 15, color: '#F59E0B' },
    { name: 'Very Unpleasant', value: 5, color: '#EF4444' },
  ];

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

  // Auto-scroll through moods
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMoodIndex((prev) => (prev + 1) % moods.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderMoodShape = (mood: any, isActive: boolean) => {
    const baseClasses = `w-32 h-32 flex items-center justify-center text-4xl transition-all duration-500 ${
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

        {/* Mood Showcase - Lateral Scrolling Effect */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative">
            {/* Phone Mockup Container */}
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

                {/* Mood Selection Interface */}
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

            {/* Side indicators */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-4">
              {moods.map((mood, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMoodIndex ? mood.bgColor : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Mood Trend Chart */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Weekly Mood Trends</h3>
                <p className="text-slate-600">Track your emotional patterns</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={moodTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="date" stroke="#64748B" />
                <YAxis domain={[0, 10]} stroke="#64748B" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E2E8F0', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }} 
                />
                <Line type="monotone" dataKey="mood" stroke="#06B6D4" strokeWidth={3} dot={{ fill: '#06B6D4', strokeWidth: 2, r: 6 }} />
                <Line type="monotone" dataKey="energy" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }} />
                <Line type="monotone" dataKey="stress" stroke="#EF4444" strokeWidth={3} dot={{ fill: '#EF4444', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Mood Distribution Pie Chart */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Mood Distribution</h3>
                <p className="text-slate-600">This month's emotional balance</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={moodDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {moodDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E2E8F0', 
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {moodDistribution.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature List */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Smart Analytics",
              description: "AI-powered insights help you understand your emotional patterns and triggers"
            },
            {
              icon: Calendar,
              title: "Historical Tracking", 
              description: "Track mood patterns over weeks, months, and years to see your growth"
            },
            {
              icon: TrendingUp,
              title: "Predictive Insights",
              description: "Get personalized recommendations based on your mood history"
            }
          ].map((feature, i) => (
            <div 
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-1000 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 4) * 200}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodLoggingSection;
