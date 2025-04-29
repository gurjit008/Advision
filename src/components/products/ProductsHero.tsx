
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ProductsHero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-veiva-lightgray">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-heading">Our Products</span>
          </h1>
          <p className="text-veiva-gray text-lg md:text-xl mb-8">
          Discover our wide range of imported and domestic products available for distribution across India.
          </p>
          <Button className="btn-primary" asChild>
            <Link to="/contact">Schedule a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
