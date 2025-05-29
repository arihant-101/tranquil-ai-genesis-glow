import React from 'react';
import { Users, Award, Shield, Heart, Code, Lightbulb, Globe } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Ritwik",
      role: "Co-Founder & CTO",
      description: "Leading AI and machine learning initiatives",
      image: "Ritwik.jpg",
      expertise: "AI/ML, Software Architecture"
    },
    {
      name: "Arihant",
      role: "Co-Founder & CEO",
      description: "Managing business development and partnerships",
      image: "ari.png",
      expertise: "Business Strategy, Partnerships"
    },
    {
      name: "Shreyas",
      role: "Co-Founder & CFO",
      description: "Leading financial strategy and operations",
      image: "Pandit.jpg",
      expertise: "Financial Planning, Operations"
    },
    {
      name: "Ashutosh",
      role: "Co-Founder",
      description: "Overseeing operations and strategy",
      image: "Kala.jpg",
      expertise: "Operations, Strategic Planning"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Your mental health data is encrypted and protected with the highest security standards."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Empathy-Driven",
      description: "Every feature is designed with genuine care for your emotional well-being and personal growth."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Evidence-Based",
      description: "Our approaches are grounded in peer-reviewed research and clinical best practices."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Accessible to All",
      description: "Mental health support should be available to everyone, regardless of location or background."
    }
  ];

  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
            We're four passionate co-founders who came together with a shared vision: to make quality mental health support accessible to everyone through innovative AI technology.
          </p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-800">Our Story</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Tranquil AI was born from the collective vision of four co-founders who recognized a critical gap in mental health accessibility. Coming from diverse backgrounds in technology, business, finance, and operations, we united around a common purpose: leveraging AI to democratize mental health support.
              </p>
              <p>
                Our journey began with extensive research into the limitations of traditional mental health services – long wait times, high costs, geographic barriers, and limited availability. We saw an opportunity to create something different: an AI companion that combines cutting-edge technology with genuine empathy and understanding.
              </p>
              <p>
                What sets us apart is our holistic approach. While Ritwik leads our AI innovations, Arihant builds strategic partnerships, Shreyas ensures sustainable growth, and Ashutosh optimizes our operations – together, we're creating a platform that truly serves our users' needs.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Meet Our Co-Founders</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-xl object-cover mx-auto mb-4"
                    />
                    
                    <h4 className="text-xl font-bold mb-1 text-slate-800">{member.name}</h4>
                    <p className="text-sm font-semibold text-cyan-600 mb-2">{member.role}</p>
                    <p className="text-sm text-slate-600 mb-3">{member.description}</p>
                    <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
                      {member.expertise}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values & Impact */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-10 text-slate-800">Our Values & Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl mb-4 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold mb-3 text-slate-800">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;