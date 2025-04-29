import React from 'react';
import { 
  Truck, 
  Package, 
  Store 
} from 'lucide-react';

const featuresData = [
  {
    icon: <Package className="w-8 h-8 text-green-600" />,
    title: "Quality Products",
    description: "We import and distribute only the highest quality products from trusted manufacturers worldwide."
  },
  {
    icon: <Truck className="w-8 h-8 text-green-600" />,
    title: "Reliable Logistics",
    description: "Our efficient distribution network ensures timely delivery to retailers and businesses across India."
  },
  {
    icon: <Store className="w-8 h-8 text-green-600" />,
    title: "Retailer Support",
    description: "We provide comprehensive support to our retail partners, including product training and marketing materials."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-heading">Why Partner With Us</span>
          </h2>
          <p className="text-green-700/80 text-lg">
            Discover the advantages of choosing Aadivision as your distribution partner and how we can help grow your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-green-50 p-3 rounded-lg w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-800">
                {feature.title}
              </h3>
              <p className="text-green-700/80">
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
