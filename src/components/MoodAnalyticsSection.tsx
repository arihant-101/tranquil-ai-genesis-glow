
import React, { useEffect, useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Calendar, Activity, Brain } from 'lucide-react';

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
      { threshold: 0.3 }
    );

    const section = document.getElementById('mood-analytics');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mood-analytics" className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Track Your Mental Health
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Journey with Data
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Visualize your emotional patterns, identify triggers, and celebrate your progress with comprehensive mood analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Mood Trend Chart */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
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
                <Line type="monotone" dataKey="mood" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }} />
                <Line type="monotone" dataKey="energy" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }} />
                <Line type="monotone" dataKey="stress" stroke="#EF4444" strokeWidth={3} dot={{ fill: '#EF4444', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Mood Distribution Pie Chart */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600" />
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

        {/* Monthly Progress Chart */}
        <div className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Monthly Progress</h3>
              <p className="text-slate-600">Your wellness journey over time</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={weeklyMoodData}>
              <defs>
                <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="week" stroke="#64748B" />
              <YAxis domain={[0, 10]} stroke="#64748B" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #E2E8F0', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="average" 
                stroke="#3B82F6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorMood)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Insights Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { 
              icon: Brain, 
              title: "Mood Insights", 
              value: "78% Positive", 
              trend: "+12% vs last month",
              color: "bg-blue-100 text-blue-600"
            },
            { 
              icon: TrendingUp, 
              title: "Stress Reduction", 
              value: "24% Less", 
              trend: "Improved over 4 weeks",
              color: "bg-green-100 text-green-600"
            },
            { 
              icon: Activity, 
              title: "Consistency", 
              value: "6.2/7 days", 
              trend: "Great tracking habit!",
              color: "bg-purple-100 text-purple-600"
            },
          ].map((insight, i) => (
            <div 
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-1000 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 4) * 200}ms` }}
            >
              <div className={`w-12 h-12 ${insight.color} rounded-xl flex items-center justify-center mb-4`}>
                <insight.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{insight.title}</h3>
              <p className="text-2xl font-bold text-slate-900 mb-1">{insight.value}</p>
              <p className="text-sm text-slate-600">{insight.trend}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodAnalyticsSection;
