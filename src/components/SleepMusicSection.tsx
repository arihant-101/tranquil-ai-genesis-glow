
import React, { useEffect, useState } from 'react';
import { Music, Play, Pause, Volume2, Waves, Moon, Star } from 'lucide-react';

const SleepMusicSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveforms, setWaveforms] = useState(Array(20).fill(0.3));
  const [floatingElements, setFloatingElements] = useState([]);

  const musicCategories = [
    { name: 'Rain', color: 'from-blue-500 to-cyan-500', icon: '🌧️' },
    { name: 'Ocean', color: 'from-teal-500 to-blue-500', icon: '🌊' },
    { name: 'Forest', color: 'from-green-500 to-emerald-500', icon: '🌲' },
    { name: 'Wind', color: 'from-gray-400 to-slate-500', icon: '💨' },
    { name: 'Piano', color: 'from-purple-500 to-indigo-500', icon: '🎹' },
    { name: 'Ambient', color: 'from-pink-500 to-rose-500', icon: '✨' }
  ];

  useEffect(() => {
    // Generate floating elements
    const elements = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 6,
      type: ['note', 'star', 'moon'][Math.floor(Math.random() * 3)]
    }));
    setFloatingElements(elements);

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

  const renderFloatingIcon = (type) => {
    switch (type) {
      case 'note': return <Music className="w-4 h-4 text-purple-300" />;
      case 'star': return <Star className="w-4 h-4 text-yellow-300" />;
      case 'moon': return <Moon className="w-4 h-4 text-blue-300" />;
      default: return <Music className="w-4 h-4 text-purple-300" />;
    }
  };

  return (
    <section 
      id="sleep-music" 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-20 relative overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-pulse opacity-40"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <div className="animate-bounce">
              {renderFloatingIcon(element.type)}
            </div>
          </div>
        ))}

        {/* Animated Waves */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <Waves className="w-full h-full text-blue-400 animate-pulse" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Crescent Moon - Enhanced */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full opacity-80 animate-pulse">
        <div className="absolute top-2 right-2 w-20 h-20 bg-indigo-900 rounded-full"></div>
        <div className="absolute inset-0 rounded-full shadow-2xl shadow-yellow-400/50"></div>
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
                  className={`group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 hover:border-purple-400/50 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 100 + 500}ms` }}
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-full mx-auto mb-2 group-hover:animate-pulse flex items-center justify-center`}>
                    <span className="text-sm">{category.icon}</span>
                  </div>
                  <p className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors">{category.name}</p>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Floating Musical Notes */}
            <div className="relative h-20 overflow-hidden">
              {['♪', '♫', '♪', '♫', '♪'].map((note, i) => (
                <div
                  key={i}
                  className="absolute text-2xl text-purple-300 animate-bounce"
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
              <div className="w-80 h-80 bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-full mx-auto backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-105 transition-transform duration-500 shadow-2xl shadow-purple-500/25">
                
                {/* Waveform Visualizer */}
                <div className="flex items-end justify-center space-x-1 h-32 w-64">
                  {waveforms.map((height, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-purple-400 to-pink-400 w-3 rounded-full transition-all duration-150 hover:from-pink-400 hover:to-purple-400"
                      style={{ height: `${height * 100}%` }}
                    />
                  ))}
                </div>

                {/* Play Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
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
                <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
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
