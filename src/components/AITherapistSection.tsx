
import React, { useEffect, useState } from 'react';
import { MessageCircle, Brain, Clock } from 'lucide-react';

const AITherapistSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const chatMessages = [
    { sender: 'ai', text: "Hi there! I'm here to help you reflect on your day. How are you feeling right now?" },
    { sender: 'user', text: "I've been feeling really overwhelmed with work lately..." },
    { sender: 'ai', text: "I understand that feeling overwhelmed can be really challenging. Can you tell me more about what specifically is making work feel overwhelming?" },
    { sender: 'user', text: "It's just so much pressure to meet deadlines and I feel like I'm falling behind." },
    { sender: 'ai', text: "That sounds really stressful. Let's explore some strategies that might help you manage this pressure..." }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate chat messages
          const timer = setInterval(() => {
            setMessageIndex(prev => {
              if (prev < chatMessages.length - 1) {
                return prev + 1;
              }
              clearInterval(timer);
              return prev;
            });
          }, 2000);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('ai-therapist');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="ai-therapist" 
      className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-700 py-20 relative overflow-hidden"
    >
      {/* Neural Network Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="neural" patternUnits="userSpaceOnUse" width="100" height="100">
              <circle cx="50" cy="50" r="2" fill="white" opacity="0.3" />
              <line x1="50" y1="50" x2="150" y2="50" stroke="white" strokeWidth="1" opacity="0.2" />
              <line x1="50" y1="50" x2="50" y2="150" stroke="white" strokeWidth="1" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className={`text-white space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-4 py-2 border border-purple-400/30">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">Revolutionary AI Technology</span>
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                Meet Your Personal
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Therapist
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Available 24/7 with evidence-based therapeutic techniques and personalized support
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MessageCircle, text: "Conversational AI trained on therapeutic best practices" },
                { icon: Clock, text: "Always available when you need support most" },
                { icon: Brain, text: "Learns your patterns and adapts to your needs" }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className={`flex items-center space-x-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 200 + 500}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-lg text-gray-300">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Chat Interface */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] mx-auto shadow-2xl border-4 border-gray-700">
                <div className="absolute inset-4 bg-black rounded-[2.2rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-slate-900 to-purple-900 p-6">
                    
                    {/* Chat Header */}
                    <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">AI Therapist</h3>
                        <p className="text-green-400 text-sm">Online</p>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="mt-4 space-y-4 h-96 overflow-y-auto">
                      {chatMessages.slice(0, messageIndex + 1).map((message, i) => (
                        <div 
                          key={i}
                          className={`animate-fade-in ${
                            message.sender === 'ai' ? 'text-left' : 'text-right'
                          }`}
                          style={{ animationDelay: `${i * 500}ms` }}
                        >
                          <div className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                            message.sender === 'ai' 
                              ? 'bg-purple-500/20 text-white rounded-bl-md' 
                              : 'bg-white/10 text-white rounded-br-md'
                          }`}>
                            <p className="text-sm">{message.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pulsing AI Avatar */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITherapistSection;
