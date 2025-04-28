
import React from 'react';

const OurStory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-heading">Our Story</span>
            </h2>
            <p className="text-veiva-gray text-lg mb-6">
              Founded in 2018, Veiva began with a simple yet ambitious vision: to make artificial intelligence accessible and practical for businesses of all sizes.
            </p>
            <p className="text-veiva-gray text-lg mb-6">
              Our founders, a team of data scientists and business strategists, recognized that while AI had enormous potential, many companies struggled to implement it effectively or lacked the resources to do so.
            </p>
            <p className="text-veiva-gray text-lg">
              Over the years, we've grown from a small startup to a leading AI solutions provider, helping hundreds of businesses across multiple industries transform their operations through intelligent technology.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-veiva-purple/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-veiva-lightblue/5 rounded-full blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800"
              alt="Our Journey" 
              className="relative z-10 rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
