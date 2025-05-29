import React from 'react';
import { Heart, Brain, Sparkles, Target } from 'lucide-react';

const Vision = () => {
  return (
    <section id="our-vision" className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Vision
            </span>
          </h2>
          
          <div className="text-lg lg:text-xl text-slate-600 leading-relaxed space-y-6">
            <p>
              At <span className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Tranquil AI</span>, we believe that everyone deserves access to high-quality mental health support. Our app combines cutting-edge AI technology with evidence-based practices to provide a comprehensive solution for your mental well-being.
            </p>
            
            <p>
              Our unique approach goes beyond simple problem-solving. We encourage self-reflection and personal growth, guiding you towards a deeper understanding of your emotions and thought patterns.
            </p>
          </div>
        </div>

        {/* Key Principles */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <Brain className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Evidence-Based
            </h3>
            <p className="text-slate-600">
              Built on proven psychological practices and cutting-edge AI research
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <Sparkles className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Personal Growth
            </h3>
            <p className="text-slate-600">
              Encouraging deep self-reflection and meaningful personal development
            </p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
              <Target className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">
              Comprehensive Care
            </h3>
            <p className="text-slate-600">
              A holistic approach to mental well-being that addresses all aspects of your life
            </p>
          </div>
        </div>

        {/* Call to Action */}
       
      </div>
    </section>
  );
};

export default Vision;