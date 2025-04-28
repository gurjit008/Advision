
import React from 'react';
import { 
  LayoutDashboard, 
  LayoutGrid, 
  LayoutPanelLeft 
} from 'lucide-react';

const featuresData = [
  {
    icon: <LayoutDashboard className="w-8 h-8 text-veiva-purple" />,
    title: "AI-Powered Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics platform, designed to uncover patterns and trends."
  },
  {
    icon: <LayoutGrid className="w-8 h-8 text-veiva-purple" />,
    title: "Machine Learning Solutions",
    description: "Custom machine learning models tailored to your business needs, constantly learning and improving over time."
  },
  {
    icon: <LayoutPanelLeft className="w-8 h-8 text-veiva-purple" />,
    title: "Predictive Intelligence",
    description: "Forecast trends and behaviors with our predictive intelligence tools, enabling smarter business decisions."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-heading">Features & Capabilities</span>
          </h2>
          <p className="text-veiva-gray text-lg">
            Our suite of AI-powered tools and solutions designed to transform your business operations and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-veiva-lightgray p-3 rounded-lg w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-veiva-blue">
                {feature.title}
              </h3>
              <p className="text-veiva-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
