
import React from 'react';

const industries = [
  {
    name: "Financial Services",
    description: "Risk assessment, fraud detection, and market prediction models for banks and financial institutions.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Healthcare",
    description: "Patient outcome prediction, resource optimization, and diagnostic assistance for healthcare providers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Retail",
    description: "Inventory management, customer segmentation, and personalized recommendation engines for retailers.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Manufacturing",
    description: "Predictive maintenance, quality control, and supply chain optimization for manufacturing operations.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600"
  }
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-veiva-lightgray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-heading">Industries We Serve</span>
          </h2>
          <p className="text-veiva-gray text-lg">
            Our AI solutions are tailored to address the unique challenges of various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="h-48 md:h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-semibold text-veiva-blue mb-3">{industry.name}</h3>
                  <p className="text-veiva-gray">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
