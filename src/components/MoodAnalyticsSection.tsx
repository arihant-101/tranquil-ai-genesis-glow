import React, { useEffect, useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Calendar, Activity, Brain, BarChart3, Target } from 'lucide-react';

const MoodAnalyticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  const weeklyMoodData = [
    { week: 'Week 1', average: 6.5 },
    { week: 'Week 2', average: 7.2 },
    { week: 'Week 3', average: 6.8 },
    { week: 'Week 4', average: 8.1 },
  ];

  const moodDistribution = [
    { name: 'Happy', value: 35, color: '#10B981' },
    { name: 'Calm', value: 25, color: '#3B82F6' },
    { name: 'Neutral', value: 20, color: '#6B7280' },
    { name: 'Anxious', value: 15, color: '#F59E0B' },
    { name: 'Sad', value: 5, color: '#EF4444' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('mood-analytics');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mood-analytics" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Mood Analytics &
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Insights Dashboard
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Visualize your emotional patterns, identify triggers, and celebrate your progress with comprehensive mood analytics
          </p>
        </div>

        {/* Main Analytics Dashboard */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Mood Trends Chart */}
          <div className={`bg-white rounded-3xl p-8 shadow-xl border border-slate-200 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Weekly Mood Trends</h3>
                  <p className="text-sm text-slate-600">Last 7 days overview</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-slate-900">7.6</p>
                <p className="text-sm text-green-600">+12% vs last week</p>
              </div>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={moodTrendData}>
                  <defs>
                    <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="date" stroke="#64748B" fontSize={12} />
                  <YAxis stroke="#64748B" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="mood" 
                    stroke="#6366F1" 
                    strokeWidth={3}
                    fill="url(#moodGradient)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Mood Distribution */}
          <div className={`bg-white rounded-3xl p-8 shadow-xl border border-slate-200 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Mood Distribution</h3>
                  <p className="text-sm text-slate-600">30 total entries</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-slate-900">63.3%</p>
                <p className="text-sm text-green-600">Positive moods</p>
              </div>
            </div>
            
            <div className="h-64 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={moodDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
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
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4">
              {moodDistribution.map((mood, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: mood.color }}></div>
                  <span className="text-sm text-slate-600">{mood.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { 
              icon: Brain, 
              title: "Average Mood", 
              value: "3.7/5", 
              trend: "Positive outlook",
              color: "bg-gradient-to-br from-blue-100 to-indigo-100",
              iconColor: "text-blue-600",
              delay: 600
            },
            { 
              icon: TrendingUp, 
              title: "Positive Days", 
              value: "63.3%", 
              trend: "Above average",
              color: "bg-gradient-to-br from-green-100 to-emerald-100",
              iconColor: "text-green-600",
              delay: 700
            },
            { 
              icon: Target, 
              title: "Current Streak", 
              value: "1 day", 
              trend: "Building momentum",
              color: "bg-gradient-to-br from-orange-100 to-amber-100",
              iconColor: "text-orange-600",
              delay: 800
            },
            { 
              icon: Activity, 
              title: "Total Entries", 
              value: "30", 
              trend: "Consistent tracking",
              color: "bg-gradient-to-br from-purple-100 to-violet-100",
              iconColor: "text-purple-600",
              delay: 900
            },
          ].map((metric, i) => (
            <div 
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-1000 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${metric.delay}ms` }}
            >
              <div className={`w-14 h-14 ${metric.color} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110`}>
                <metric.icon className={`w-7 h-7 ${metric.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{metric.title}</h3>
              <p className="text-3xl font-bold text-slate-900 mb-1">{metric.value}</p>
              <p className="text-sm text-slate-600">{metric.trend}</p>
            </div>
          ))}
        </div>

        {/* Insights Summary */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Status */}
          <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Current Status</h3>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              The average mood is at 3.7 which indicates a relatively positive state. This suggests consistent emotional well-being and resilience.
            </p>
            <div className="bg-white rounded-xl p-4 border border-blue-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Mood Rating</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-blue-100 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold text-blue-600">3.7/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Highlight */}
          <div className={`bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Progress Highlight</h3>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              Positive days make up 63.3% of total entries, showing a consistent trend towards positivity and emotional growth.
            </p>
            <div className="bg-white rounded-xl p-4 border border-green-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Positive Ratio</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-green-100 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold text-green-600">63.3%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Momentum */}
          <div className={`bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-200 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Momentum</h3>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              With a current streak of 1 day, there is an opportunity to build on this consistency for improved mood over time.
            </p>
            <div className="bg-white rounded-xl p-4 border border-purple-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Current Streak</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-purple-100 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold text-purple-600">1 day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodAnalyticsSection;