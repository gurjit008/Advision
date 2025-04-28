
import React from 'react';

const AboutHero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-veiva-lightgray">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-heading">About Aadvision</span>
          </h1>
          <p className="text-veiva-gray text-lg md:text-xl mb-8">
            We're on a mission to transform businesses through intelligent AI solutions and cutting-edge technology.
          </p>
        </div>
        
        <div className="mt-12 relative">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-veiva-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-veiva-lightblue/10 rounded-full blur-3xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200"
            alt="Veiva Team" 
            className="relative z-10 w-full h-auto rounded-xl shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
