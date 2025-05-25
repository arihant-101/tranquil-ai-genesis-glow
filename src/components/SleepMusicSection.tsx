
import React, { useEffect, useState } from 'react';
import { Music, Play, Pause, Volume2 } from 'lucide-react';

const SleepMusicSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveforms, setWaveforms] = useState(Array(20).fill(0.3));

  const musicCategories = [
    { name: 'Rain', color: 'from-blue-500 to-cyan-500' },
    { name: 'Ocean', color: 'from-teal-500 to-blue-500' },
    { name: 'Forest', color: 'from-green-500 to-emerald-500' },
    { name: 'Wind', color: 'from-gray-400 to-slate-500' },
    { name: 'Piano', color: 'from-purple-500 to-indigo-500' },
    { name: 'Ambient', color: 'from-pink-500 to-rose-500' }
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

    const section = document.getElementById('sleep-music');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setWaveforms(prev => prev.map(() => Math.random() * 0.8 + 0.2));
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section 
      id="sleep-music" 
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 relative overflow-hidden"
    >
      {/* Starry Night Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Crescent Moon */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-80">
        <div className="absolute top-2 right-2 w-20 h-20 bg-indigo-900 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className={`text-white space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                Drift Into
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Peaceful Sleep
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Curated soundscapes and melodies designed to calm your mind and improve sleep quality
              </p>
            </div>

            {/* Music Categories */}
            <div className="grid grid-cols-3 gap-4">
              {musicCategories.map((category, i) => (
                <div 
                  key={category.name}
                  className={`group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 100 + 500}ms` }}
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-full mx-auto mb-2 group-hover:animate-pulse`}></div>
                  <p className="text-white text-sm font-medium">{category.name}</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Floating Musical Notes */}
            <div className="relative h-20 overflow-hidden">
              {['♪', '♫', '♪', '♫', '♪'].map((note, i) => (
                <div
                  key={i}
                  className="absolute text-2xl text-purple-300 animate-pulse"
                  style={{
                    left: `${i * 20 + 10}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '3s'
                  }}
                >
                  {note}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Audio Visualizer */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-full mx-auto backdrop-blur-sm border border-white/20 flex items-center justify-center">
                
                {/* Waveform Visualizer */}
                <div className="flex items-end justify-center space-x-1 h-32 w-64">
                  {waveforms.map((height, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-purple-400 to-pink-400 w-3 rounded-full transition-all duration-150"
                      style={{ height: `${height * 100}%` }}
                    />
                  ))}
                </div>

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center justify-center space-x-4 mt-6">
                <Volume2 className="w-5 h-5 text-purple-300" />
                <div className="w-32 h-2 bg-white/20 rounded-full">
                  <div className="w-3/4 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                </div>
              </div>

              {/* Current Track */}
              <div className="text-center mt-4">
                <p className="text-white font-medium">Midnight Rain</p>
                <p className="text-purple-300 text-sm">Nature Sounds Collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SleepMusicSection;
