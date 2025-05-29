import React, { useEffect, useState } from 'react';
import { TrendingUp, Brain, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MoodLoggingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);

  const moods = [
    {
      name: 'Very Unpleasant',
      color: 'from-red-400 to-red-600',
      animationColor: 'bg-red-500',
      waveColor: 'border-red-300',
      description: 'Feeling down and need support',
      emoji: '😢',
      
    },
    {
      name: 'Unpleasant',
      color: 'from-orange-400 to-orange-600',
      animationColor: 'bg-orange-500',
      waveColor: 'border-orange-300',
      description: 'Not feeling great today',
      emoji: '😕'
    },
    {
      name: 'Neutral',
      color: 'from-green-400 to-green-600',
      animationColor: 'bg-green-500',
      waveColor: 'border-green-300',
      description: 'Feeling okay, neither good nor bad',
      emoji: '😐'
    },
    {
      name: 'Pleasant',
      color: 'from-blue-400 to-blue-600',
      animationColor: 'bg-blue-500',
      waveColor: 'border-blue-300',
      description: 'Feeling good and positive',
      emoji: '😊'
    },
    {
      name: 'Very Pleasant',
      color: 'from-purple-400 to-purple-600',
      animationColor: 'bg-purple-500',
      waveColor: 'border-purple-300',
      description: 'Feeling amazing and energetic',
      emoji: '😄'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMoodIndex((prev) => (prev + 1) % moods.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const WaveRipple = ({ delay = 0, mood }) => (
    <motion.div
      className={`absolute inset-0 rounded-full border-2 ${mood.waveColor} opacity-40`}
      initial={{ scale: 0.9, opacity: 0.7 }}
      animate={{ 
        scale: [0.9, 1.6, 2.4, 3.2], 
        opacity: [0.7, 0.5, 0.2, 0],
        borderWidth: ["2px", "1px", "0.5px", "0px"]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut"
      }}
    />
  );

  const FloatingParticles = ({ mood }) => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 ${mood.animationColor} rounded-full opacity-60`}
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-10, -30, -10],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.6, 0.9, 0.6],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + (i * 0.2),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  const PulsingGlow = ({ mood }) => (
    <motion.div
      className={`absolute inset-0 rounded-full ${mood.animationColor} opacity-20 blur-xl`}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  const BurstingCenter = ({ mood }) => {
    const blobCount = 12;
    const burstRadius = 50;
    
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Individual blobs that collapse and explode */}
        {[...Array(blobCount)].map((_, i) => {
          const angle = (i * 360) / blobCount;
          const startX = Math.cos((angle * Math.PI) / 180) * burstRadius;
          const startY = Math.sin((angle * Math.PI) / 180) * burstRadius;
          
          return (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 ${mood.animationColor} rounded-full`}
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-4px',
                marginTop: '-4px',
              }}
              animate={{
                x: [startX, 0, 0, startX],
                y: [startY, 0, 0, startY],
                scale: [0.8, 1.5, 1.5, 0.8],
                opacity: [0.7, 1, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.05,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 1]
              }}
            />
          );
        })}
        
        {/* Central circle that grows when blobs collapse */}
        <motion.div
          className={`absolute ${mood.animationColor} rounded-full shadow-lg`}
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{
            width: ['8px', '32px', '32px', '8px'],
            height: ['8px', '32px', '32px', '8px'],
            marginLeft: ['-4px', '-16px', '-16px', '-4px'],
            marginTop: ['-4px', '-16px', '-16px', '-4px'],
            opacity: [0.3, 1, 1, 0.3],
            boxShadow: [
              '0 0 10px rgba(0,0,0,0.2)',
              '0 0 25px rgba(0,0,0,0.4)',
              '0 0 25px rgba(0,0,0,0.4)',
              '0 0 10px rgba(0,0,0,0.2)'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.6, 1]
          }}
        />
        
        {/* Inner glow effect */}
        <motion.div
          className={`absolute ${mood.animationColor} rounded-full blur-sm opacity-50`}
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{
            width: ['6px', '40px', '40px', '6px'],
            height: ['6px', '40px', '40px', '6px'],
            marginLeft: ['-3px', '-20px', '-20px', '-3px'],
            marginTop: ['-3px', '-20px', '-20px', '-3px'],
            opacity: [0.2, 0.6, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.6, 1]
          }}
        />
      </div>
    );
  };

  return (
    <section
      id="mood-logging"
      className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Log Your Mood &<br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Track Your Journey
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Express your feelings with our intuitive mood logging system and gain insights into your emotional patterns
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Enhanced Animated Mood UI */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-64 h-[480px] mx-auto rounded-[3rem] bg-gradient-to-b from-slate-900 to-slate-800 shadow-2xl overflow-hidden border-8 border-slate-800">
              {/* Phone Screen */}
              <div className="absolute inset-4 bg-white rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-6 bg-slate-100 flex items-center justify-between px-4 text-xs font-medium text-slate-600">
                  <span>9:41</span>
                  <span>●●●</span>
                </div>
                
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-blue-50" style={{ height: 'calc(100% - 1.5rem)' }}>
                  {/* Mood Animation Container */}
                  <div className="relative w-36 h-36 mb-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentMoodIndex}
                        className="absolute inset-0"
                        initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0.8, opacity: 0, rotate: 180 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        {/* Pulsing Glow Background */}
                        <PulsingGlow mood={moods[currentMoodIndex]} />
                        
                        {/* Wave Ripples */}
                        <WaveRipple delay={0} mood={moods[currentMoodIndex]} />
                        <WaveRipple delay={1} mood={moods[currentMoodIndex]} />
                        <WaveRipple delay={2} mood={moods[currentMoodIndex]} />
                        
                        {/* Floating Particles */}
                        <FloatingParticles mood={moods[currentMoodIndex]} />
                        
                        {/* Main Mood Circle with Dynamic Shape */}
                        <motion.div
                          className={`absolute inset-6 rounded-full ${moods[currentMoodIndex].animationColor} shadow-xl flex items-center justify-center relative overflow-hidden`}
                          animate={{
                            scale: [1, 1.08, 1],
                            borderRadius: ["50%", "45%", "50%"],
                            boxShadow: [
                              "0 10px 25px rgba(0,0,0,0.2)",
                              "0 20px 40px rgba(0,0,0,0.3)",
                              "0 10px 25px rgba(0,0,0,0.2)"
                            ]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {/* Inner Circle Variations */}
                          <motion.div
                            className="absolute inset-3 bg-white bg-opacity-20 rounded-full"
                            animate={{
                              scale: [1, 0.9, 1.1, 1],
                              opacity: [0.2, 0.4, 0.1, 0.2],
                              rotate: [0, 180, 360]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Morphing Inner Shape */}
                          <motion.div
                            className="absolute inset-4 bg-white bg-opacity-30"
                            animate={{
                              borderRadius: ["50%", "40%", "60%", "50%"],
                              scale: [0.8, 1.2, 0.9, 0.8],
                              rotate: [0, 90, 180, 270, 360]
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* NEW: Bursting Center Animation */}
                          <BurstingCenter mood={moods[currentMoodIndex]} />
                        </motion.div>
                        
                        {/* Orbital Elements */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-3 h-3 ${moods[currentMoodIndex].animationColor} rounded-full opacity-70`}
                            style={{
                              left: '50%',
                              top: '50%',
                              marginLeft: '-6px',
                              marginTop: '-6px',
                            }}
                            animate={{
                              rotate: [0, 360],
                              x: [0, Math.cos((i * 120) * Math.PI / 180) * 80],
                              y: [0, Math.sin((i * 120) * Math.PI / 180) * 80],
                            }}
                            transition={{
                              duration: 4 + i,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Mood Info */}
                  <div className="text-center space-y-2">
                    <motion.h3 
                      key={`title-${currentMoodIndex}`}
                      className="text-lg font-bold text-slate-800"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {moods[currentMoodIndex].name}
                    </motion.h3>
                    <motion.p 
                      key={`desc-${currentMoodIndex}`}
                      className="text-sm text-slate-600 text-center px-3 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {moods[currentMoodIndex].description}
                    </motion.p>
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex space-x-2 mt-4">
                    {moods.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentMoodIndex ? 'bg-cyan-600 w-6' : 'bg-gray-300'
                        }`}
                        animate={{
                          scale: index === currentMoodIndex ? 1.2 : 1
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Express Your Emotions Naturally
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our intuitive mood logging system captures the full spectrum of your emotional experience.
                From challenging moments to peak happiness, every feeling matters in your wellness journey.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Brain,
                  title: 'Smart Mood Detection',
                  description: 'AI-powered insights help understand your emotional patterns and triggers'
                },
                {
                  icon: Calendar,
                  title: 'Daily Tracking',
                  description: 'Build healthy habits with consistent mood monitoring and reflection'
                },
                {
                  icon: TrendingUp,
                  title: 'Progress Insights',
                  description: 'See your emotional growth and patterns over time with detailed analytics'
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