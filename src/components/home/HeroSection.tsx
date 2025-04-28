
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden bg-gradient-to-b from-white to-veiva-lightgray">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-heading">Empowering Businesses</span> <br />
              With Advanced AI Solutions
            </h1>
            <p className="text-veiva-gray text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Transform your business with cutting-edge artificial intelligence and machine learning solutions tailored to your industry needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="btn-primary" asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button className="btn-secondary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-64 md:h-auto animate-fade-in">
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-veiva-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-veiva-lightblue/10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800" 
              alt="AI Technology" 
              className="relative z-10 rounded-xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-veiva-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-veiva-lightblue/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
