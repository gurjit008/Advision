
import React from 'react';
import { Store, TrendingUp, Handshake } from 'lucide-react';

const services = [
  {
    icon: <Store className="w-12 h-12 text-green-600" />,
    title: "Distribution Network",
    description: "Build and manage an efficient distribution network with our comprehensive management tools."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-green-600" />,
    title: "Sales Optimization",
    description: "Maximize your sales potential with data-driven insights and automated inventory management."
  },
  {
    icon: <Handshake className="w-12 h-12 text-green-600" />,
    title: "Partner Support",
    description: "Get dedicated support and resources to help grow your dealership or distribution business."
  }
];

const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-heading">How We Support You</span>
          </h2>
          <p className="text-green-700/80 text-lg max-w-2xl mx-auto">
            We provide comprehensive solutions to help dealers and distributors thrive in today's competitive market.
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
