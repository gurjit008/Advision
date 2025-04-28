
import React from 'react';

const values = [
  {
    title: "Innovation",
    description: "We're constantly pushing the boundaries of what's possible with AI and technology."
  },
  {
    title: "Integrity",
    description: "We operate with transparency and honesty in all our client relationships and business practices."
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, from code to client communication."
  },
  {
    title: "Collaboration",
    description: "We believe in working closely with our clients to create solutions that truly address their needs."
  },
  {
    title: "Impact",
    description: "We measure our success by the tangible results and value we create for our clients."
  },
  {
    title: "Adaptability",
    description: "We embrace change and continuously evolve our approaches to meet new challenges."
  }
];

const ValuesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-heading">Our Core Values</span>
          </h2>
          <p className="text-veiva-gray text-lg">
            These principles guide everything we do and shape our approach to technology and business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-veiva-lightgray p-8 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-veiva-blue mb-4">{value.title}</h3>
              <p className="text-veiva-gray">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
