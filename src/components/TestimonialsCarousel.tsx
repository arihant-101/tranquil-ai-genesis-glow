
import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Professional",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b25ad05c?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Tranquil AI has completely transformed my approach to mental health. The AI therapist feels incredibly real and supportive, available whenever I need guidance."
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The mood tracking feature helped me identify patterns I never noticed. Combined with the meditation sessions, I've seen a remarkable improvement in my daily well-being."
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "As someone who struggles with anxiety, having 24/7 access to supportive guidance has been life-changing. The app truly understands and adapts to my needs."
    },
    {
      name: "David Thompson",
      role: "Healthcare Worker",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Working in healthcare is stressful, but Tranquil AI's sleep music and guided meditations help me unwind and recharge. It's become an essential part of my routine."
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

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real stories from people who've transformed their mental wellness journey
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20 shadow-2xl">
                    
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-white text-lg lg:text-xl leading-relaxed text-center mb-8 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* User Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="relative">
                        <img 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-white/30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-center">
                        <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
