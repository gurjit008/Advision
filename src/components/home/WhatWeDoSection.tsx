
import React from 'react';
import { Image, Gem, Star } from 'lucide-react';

const services = [
  {
    icon: <Image className="w-12 h-12 text-green-600" />,
    title: "Web Development",
    description: "Creating responsive and modern web applications using cutting-edge technologies."
  },
  {
    icon: <Gem className="w-12 h-12 text-green-600" />,
    title: "AI Integration",
    description: "Implementing intelligent solutions and machine learning models for business growth."
  },
  {
    icon: <Star className="w-12 h-12 text-green-600" />,
    title: "Digital Transformation",
    description: "Guiding businesses through their digital evolution with innovative solutions."
  }
];

const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-heading">What We Do</span>
          </h2>
          <p className="text-green-700/80 text-lg max-w-2xl mx-auto">
            We specialize in delivering innovative solutions that drive digital transformation and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100"
            >
              <div className="bg-green-50 p-4 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {service.title}
              </h3>
              <p className="text-green-700/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
