
import React from 'react';

const testimonialsData = [
  {
    content: "Veiva's AI solutions have transformed our data analysis processes, saving us countless hours and providing insights we never thought possible.",
    author: "Sarah Johnson",
    position: "CTO, TechInnovate",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=120&fit=crop&crop=faces"
  },
  {
    content: "The predictive analytics capabilities have revolutionized our supply chain management. We're now able to anticipate market changes weeks in advance.",
    author: "Michael Chen",
    position: "COO, GlobalSupply",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=120&h=120&fit=crop&crop=faces"
  },
  {
    content: "Working with Veiva has been a game-changer for our business. Their team's expertise and innovative solutions have exceeded our expectations.",
    author: "Emma Rodriguez",
    position: "CEO, InnovateCorp",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=120&h=120&fit=crop&crop=faces"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-veiva-lightgray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-heading">What Our Clients Say</span>
          </h2>
          <p className="text-veiva-gray text-lg">
            Don't just take our word for it. Here's what our clients have to say about our AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-veiva-blue">{testimonial.author}</h4>
                  <p className="text-sm text-veiva-gray">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-veiva-gray italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
