import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Brain,
  Moon,
  Pen,
  Target,
  Calendar,
  Sparkles,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import AITherapistSection from './AITherapistSection';

const features = [
  {
    title: 'Mood Logging with AI Insights',
    description:
      'Advanced mood tracking with AI-powered pattern recognition that learns from your emotional data to provide predictive insights and personalized recommendations.',
    icon: <Brain className="w-7 h-7 text-cyan-600" />,
    color: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-200/50',
    hoverColor: 'hover:border-cyan-300',
    benefits: ['Pattern Recognition', 'Predictive Analytics', 'Trend Visualization']
  },
  {
    title: 'Sleep Therapy & Meditation',
    description:
      'Curated library of sleep stories, binaural beats, and guided meditations with adaptive content that evolves based on your preferences and sleep quality.',
    icon: <Moon className="w-7 h-7 text-indigo-600" />,
    color: 'from-indigo-500/10 to-purple-500/10',
    borderColor: 'border-indigo-200/50',
    hoverColor: 'hover:border-indigo-300',
    benefits: ['Sleep Stories', 'Binaural Beats', 'Progress Tracking']
  },
  {
    title: 'Journaling Suite',
    description:
      'Multi-format journaling platform with AI-powered prompts, sentiment analysis, and automated insights to deepen self-reflection and emotional awareness.',
    icon: <Pen className="w-7 h-7 text-emerald-600" />,
    color: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-200/50',
    hoverColor: 'hover:border-emerald-300',
    benefits: ['AI Prompts', 'Sentiment Analysis', 'Export Options']
  },
  {
    title: 'Goal-Setting & Scheduling',
    description:
      'Intelligent goal management system with habit tracking, milestone celebrations, and adaptive scheduling that learns from your lifestyle patterns.',
    icon: <Target className="w-7 h-7 text-orange-600" />,
    color: 'from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-200/50',
    hoverColor: 'hover:border-orange-300',
    benefits: ['Habit Tracking', 'Smart Reminders', 'Progress Analytics']
  },
  {
    title: 'Real Therapist Integration',
    description:
      'Seamless connection to licensed mental health professionals with secure messaging, appointment scheduling, and integrated session notes.',
    icon: <Calendar className="w-7 h-7 text-purple-600" />,
    color: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-200/50',
    hoverColor: 'hover:border-purple-300',
    benefits: ['Licensed Professionals', 'Secure Messaging', 'Session Integration']
  },
  {
    title: 'Personalized Wellness Plans',
    description:
      'Dynamic wellness strategies powered by machine learning that adapt to your progress, preferences, and life circumstances in real-time.',
    icon: <Sparkles className="w-7 h-7 text-pink-600" />,
    color: 'from-pink-500/10 to-rose-500/10',
    borderColor: 'border-pink-200/50',
    hoverColor: 'hover:border-pink-300',
    benefits: ['ML-Powered', 'Real-time Adaptation', 'Custom Strategies']
  }
];

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative bg-gradient-to-br ${feature.color} backdrop-blur-sm 
                  border ${feature.borderColor} ${feature.hoverColor}
                  rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl
                  transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`} />
        <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full opacity-15 group-hover:scale-125 transition-transform duration-700 delay-100`} />
      </div>

      {/* Coming Soon Badge for features 3, 4, 5 */}
      {index >= 3 && (
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200/50 shadow-sm">
            <span className="text-xs font-medium text-amber-700">Coming Soon</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with animated background */}
        <div className="relative mb-6">
          <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 ${isHovered ? 'rotate-6 scale-110' : ''}`}>
            {feature.icon}
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent group-hover:from-white/60 transition-all duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
          {feature.description}
        </p>

        {/* Benefits */}
        <div className="space-y-2 mb-6">
          {feature.benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className={`flex items-center text-xs text-slate-500 transform transition-all duration-300 delay-${idx * 100}`}
              style={{ 
                transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                transitionDelay: `${idx * 50}ms`
              }}
            >
              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <button className={`group/btn flex items-center text-sm font-medium text-slate-600 hover:text-slate-800 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-100/40 to-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/40 to-pink-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* AI Therapist Section */}
        <div className="mb-20">
          <AITherapistSection />
        </div>



        {/* Feature Introduction */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive Wellness Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Features That Transform Your
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Mental Wellness Journey
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience a comprehensive suite of AI-powered tools designed to support, 
            enhance, and accelerate your path to better mental health and wellbeing.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;