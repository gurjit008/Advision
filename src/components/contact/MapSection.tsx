
import React from 'react';

const MapSection = () => {
  return (
    <section className="section-padding bg-veiva-lightgray pb-0">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="gradient-heading">Visit Our Office</span>
          </h2>
          <p className="text-veiva-gray">
            We're located in the heart of Bangalore's tech district.
          </p>
        </div>
      </div>
      
      <div className="h-96 bg-gray-300 w-full">
        {/* Map placeholder - In a real implementation, you would integrate Google Maps or another map provider here */}
        <div className="w-full h-full flex items-center justify-center bg-veiva-blue/10">
          <p className="text-veiva-blue font-medium text-lg">Interactive Map Would Be Displayed Here</p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
