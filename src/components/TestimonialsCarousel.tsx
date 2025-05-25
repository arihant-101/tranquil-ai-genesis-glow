
import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Clinical Psychologist",
      company: "Stanford Medical Center",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b25ad05c?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "As a practicing therapist, I'm impressed by the sophistication of Tranquil AI. It provides genuine therapeutic support and complements traditional therapy beautifully. My patients have seen remarkable improvements."
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      company: "Tech Startup",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The AI therapist feature has been a game-changer for managing work stress. Having access to professional-grade support 24/7 has helped me maintain better mental health habits and work-life balance."
    },
    {
      name: "Emily Chen",
      role: "Graduate Student",
      company: "UC Berkeley",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "The mood tracking and journaling features helped me understand my anxiety patterns. The insights are incredibly accurate and the meditation sessions are perfectly timed for my schedule."
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

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-indigo-100 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700">Trusted Worldwide</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Professionals Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by mental health professionals and users worldwide
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-200 relative">
                    
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6">
                      <Quote className="w-8 h-8 text-indigo-200" />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg lg:text-xl text-slate-700 leading-relaxed text-center mb-8 font-medium">
                      "{testimonial.text}"
                    </blockquote>

                    {/* User Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full border-2 border-slate-200"
                      />
                      <div className="text-center">
                        <h4 className="text-slate-900 font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-slate-600">{testimonial.role}</p>
                        <p className="text-slate-500 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-indigo-600 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
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
                    ? 'bg-indigo-600 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
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
