
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
            We're located in the Greater Noida.
          </p>
        </div>
      </div>
      
      <div className="h-96 bg-gray-300 w-full">
        {/* Map placeholder - In a real implementation, you would integrate Google Maps or another map provider here */}
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7852359622016!2d77.42964839999999!3d28.606219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef002fa26cbf%3A0x877cdef76fc031d!2sAadvision!5e0!3m2!1sen!2sin!4v1745831445760!5m2!1sen!2sin"  style={{border:0 ,allowfullscreen:"" , loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe> */}
  
        <div className="w-full h-full flex items-center justify-center bg-veiva-blue/10">
        <iframe
        title="Aadvision Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7852359622016!2d77.42964839999999!3d28.606219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef002fa26cbf%3A0x877cdef76fc031d!2sAadvision!5e0!3m2!1sen!2sin!4v1745831445760!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
