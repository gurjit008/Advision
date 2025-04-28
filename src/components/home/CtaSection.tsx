
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="section-padding bg-veiva-blue">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-veiva-purple/90 to-veiva-lightblue/90 rounded-2xl p-10 md:p-16 text-center md:text-left">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl">
                Let's discuss how our AI solutions can help you achieve your business goals. Schedule a free consultation today.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button className="bg-white text-veiva-purple hover:bg-veiva-lightgray hover:text-veiva-purple transition-colors font-semibold px-8 py-6 text-lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
