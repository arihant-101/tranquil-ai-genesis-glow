
import React from 'react';

const PhoneMockup = () => {
  return (
    <div className="relative">
      {/* Phone Container with 3D effect */}
      <div 
        className="relative w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 border-4 border-gray-700"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Phone Screen */}
        <div className="absolute inset-4 bg-black rounded-[1.8rem] overflow-hidden">
          
          {/* Screen Content - App Interface */}
          <div className="w-full h-full bg-gradient-to-b from-slate-900 to-indigo-900 relative overflow-hidden">
            
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 py-2 text-white text-sm">
              <span>9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
                <div className="w-1 h-2 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="px-6 py-4 space-y-6">
              
              {/* Header */}
              <div className="text-center">
                <h2 className="text-white text-lg font-semibold">Good Evening</h2>
                <p className="text-gray-300 text-sm">How are you feeling today?</p>
              </div>

              {/* Mood Selector */}
              <div className="flex justify-center space-x-4">
                {['😊', '😐', '😔', '😴', '😤'].map((emoji, i) => (
                  <div 
                    key={i}
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                      i === 0 ? 'bg-blue-500/30 scale-110' : ''
                    }`}
                  >
                    {emoji}
                  </div>
                ))}
              </div>

              {/* AI Chat Preview */}
              <div className="space-y-3">
                <div className="bg-blue-500/20 rounded-2xl rounded-bl-md p-3 max-w-[80%]">
                  <p className="text-white text-sm">Hi! I'm here to help you reflect on your day. What's on your mind?</p>
                </div>
                <div className="bg-white/10 rounded-2xl rounded-br-md p-3 max-w-[80%] ml-auto">
                  <p className="text-white text-sm">I've been feeling stressed about work lately...</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-purple-500/20 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">🧘</div>
                  <p className="text-white text-xs">Meditate</p>
                </div>
                <div className="bg-green-500/20 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">📝</div>
                  <p className="text-white text-xs">Journal</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Phone Reflection/Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-[2.5rem] pointer-events-none"></div>
      </div>

      {/* Floating Elements Around Phone */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default PhoneMockup;
