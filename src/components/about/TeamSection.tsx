
import React from 'react';

const teamMembers = [
  {
    name: "Rajiv Sharma",
    position: "Chief Executive Officer",
    bio: "With over 15 years in technology leadership, Rajiv drives our vision and strategic direction.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=faces"
  },
  {
    name: "Priya Patel",
    position: "Chief Technology Officer",
    bio: "Leading our technology initiatives, Priya brings extensive expertise in AI and machine learning.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=faces"
  },
  {
    name: "Amit Kumar",
    position: "Chief Data Scientist",
    bio: "Amit leads our data science team, developing cutting-edge algorithms and ML models.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop&crop=faces"
  },
  {
    name: "Neha Gupta",
    position: "Head of Client Success",
    bio: "Ensuring our clients achieve their goals, Neha oversees implementation and support.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=faces"
  }
];

const TeamSection = () => {
  return (
    <section className="section-padding bg-veiva-lightgray">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-heading">Our Leadership Team</span>
          </h2>
          <p className="text-veiva-gray text-lg">
            Meet the talented individuals who drive our vision and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-veiva-blue mb-1">{member.name}</h3>
                <p className="text-veiva-purple font-medium mb-3">{member.position}</p>
                <p className="text-veiva-gray">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
