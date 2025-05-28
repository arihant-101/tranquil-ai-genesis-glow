
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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Phone Mockup with Analytics */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mx-auto max-w-sm bg-slate-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-slate-100 rounded-[2.5rem] overflow-hidden h-[600px] relative">
                
                {/* Status Bar */}
                <div className="bg-slate-200 text-slate-900 px-6 py-2 text-xs flex justify-between items-center">
                  <span className="font-medium">01:52</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">4G</span>
                    <span className="text-xs">📶</span>
                    <span className="text-xs">🔋15%</span>
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-center px-6 py-4 border-b border-slate-300">
                  <button className="mr-4">←</button>
                  <h2 className="text-xl font-bold text-slate-900">Mood Tracker</h2>
                </div>

                {/* Content - Based on uploaded analytics images */}
                <div className="p-6 space-y-4 overflow-y-auto h-full">
                  
                  {/* Current Status Card */}
                  <div className="bg-blue-100 rounded-2xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-blue-600">📊</span>
                      <h3 className="font-bold text-blue-900">Current Status</h3>
                    </div>
                    <p className="text-sm text-blue-700 mb-1">
                      The average mood is at 3.7 which indicates a relatively positive state.
                    </p>
                  </div>

                  {/* Progress Highlight */}
                  <div className="bg-green-100 rounded-2xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-600">📈</span>
                      <h3 className="font-bold text-green-900">Progress Highlight</h3>
                    </div>
                    <p className="text-sm text-green-700">
                      Positive days make up 63.3% of total entries, showing a consistent trend towards positivity.
                    </p>
                  </div>

                  {/* Momentum */}
                  <div className="bg-green-100 rounded-2xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-600">⚡</span>
                      <h3 className="font-bold text-green-900">Momentum</h3>
                    </div>
                    <p className="text-sm text-green-700">
                      With a current streak of 1 day, there is an opportunity to build on this consistency for improved mood over time.
                    </p>
                  </div>

                  {/* Mood Summary */}
                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-blue-600">📊</span>
                      <h3 className="font-bold text-slate-900">Mood Summary</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Key Insights</h4>
                        <p className="text-sm text-slate-600">
                          The average mood rating is 3.7 out of 5, with "Excellent" being the most common rating. 
                          Positive moods account for 63.3% of all entries, based on a total of 30 mood entries.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Statistics</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-slate-600">Average Mood</span>
                            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">3.7</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Positive Days</span>
                            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">63.3%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">Neutral Days</span>
                            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">20.0%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Analytics Dashboard */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mx-auto max-w-sm bg-slate-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-slate-100 rounded-[2.5rem] overflow-hidden h-[600px] relative">
                
                {/* Status Bar */}
                <div className="bg-slate-200 text-slate-900 px-6 py-2 text-xs flex justify-between items-center">
                  <span className="font-medium">01:52</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-xs">4G</span>
                    <span className="text-xs">📶</span>
                    <span className="text-xs">🔋15%</span>
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-center px-6 py-4 border-b border-slate-300">
                  <button className="mr-4">←</button>
                  <h2 className="text-xl font-bold text-slate-900">Mood Tracker</h2>
                </div>

                {/* Content - Calendar and Insights */}
                <div className="p-6 space-y-4 overflow-y-auto h-full">
                  
                  {/* Mood Calendar Card */}
                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-blue-600">📅</span>
                      <h3 className="font-bold text-slate-900">Mood Calendar</h3>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">Insights</h4>
                      <p className="text-sm text-slate-600">
                        The mood trends for this week have been consistently positive, with recent moods being described as very pleasant and excellent. Overall, the mood remains excellent, indicating a high level of contentment and positivity.
                      </p>
                    </div>

                    {/* Calendar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <button>‹</button>
                        <span className="font-semibold">May 2025</span>
                        <button>›</button>
                        <button className="bg-slate-200 px-3 py-1 rounded-full text-sm">Month</button>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                        <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-1 text-center text-sm">
                        <div>25</div><div>26</div><div>27</div>
                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">28</div>
                        <div className="bg-blue-300 text-white rounded-full w-8 h-8 flex items-center justify-center">29</div>
                        <div>30</div><div>31</div>
                      </div>
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-blue-600">🤖</span>
                      <h3 className="font-bold text-slate-900">AI Insights</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-100 rounded-xl p-3">
                        <h4 className="font-bold text-blue-900">Average Mood</h4>
                        <p className="text-2xl font-bold text-blue-600">3.7</p>
                        <p className="text-xs text-blue-600">out of 5</p>
                      </div>
                      
                      <div className="bg-green-100 rounded-xl p-3">
                        <h4 className="font-bold text-green-900">Positive Days</h4>
                        <p className="text-2xl font-bold text-green-600">63.3%</p>
                        <p className="text-xs text-green-600">of total days</p>
                      </div>
                      
                      <div className="bg-orange-100 rounded-xl p-3">
                        <h4 className="font-bold text-orange-900">Current Streak</h4>
                        <p className="text-2xl font-bold text-orange-600">1 days</p>
                        <p className="text-xs text-orange-600">consecutive entries</p>
                      </div>
                      
                      <div className="bg-purple-100 rounded-xl p-3">
                        <h4 className="font-bold text-purple-900">Total Entries</h4>
                        <p className="text-2xl font-bold text-purple-600">30</p>
                        <p className="text-xs text-purple-600">mood records</p>
                      </div>
                    </div>
                  </div>

                  {/* Current Status */}
                  <div className="bg-blue-100 rounded-2xl p-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600">📊</span>
                      <h3 className="font-bold text-blue-900">Current Status</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Cards */}
        <div className="grid md:grid-cols-3 gap-6">
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
