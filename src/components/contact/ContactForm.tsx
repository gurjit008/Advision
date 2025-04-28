
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'General Inquiry'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message. We'll be in touch soon!");
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        interest: 'General Inquiry'
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const interestOptions = [
    'General Inquiry',
    'VeivaAnalytics',
    'VeivaPredict',
    'VeivaOptimize',
    'VeivaInsight',
    'VeivaIntegrate',
    'VeivaAutomate',
    'Other'
  ];
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="gradient-heading">Contact Us</span>
            </h2>
            <p className="text-veiva-gray mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-veiva-lightgray p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-veiva-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-veiva-blue">Email</h3>
                  <p className="text-veiva-gray">info@veiva.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-veiva-lightgray p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-veiva-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-veiva-blue">Phone</h3>
                  <p className="text-veiva-gray">+91 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-veiva-lightgray p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-veiva-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-veiva-blue">Office</h3>
                  <p className="text-veiva-gray">
                    123 Tech Park, Sector 15<br />
                    Bangalore, Karnataka 560001<br />
                    India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-veiva-purple hover:text-veiva-blue transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-veiva-purple hover:text-veiva-blue transition-colors">
                Twitter
              </a>
              <a href="#" className="text-veiva-purple hover:text-veiva-blue transition-colors">
                Facebook
              </a>
            </div>
          </div>
          
          {/* <div className="bg-veiva-lightgray p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-veiva-blue mb-1">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-veiva-purple focus:border-veiva-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-veiva-blue mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-veiva-purple focus:border-veiva-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-veiva-blue mb-1">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-veiva-purple focus:border-veiva-purple"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-veiva-blue mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-veiva-purple focus:border-veiva-purple"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-veiva-blue mb-1">
                  I'm interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-veiva-purple focus:border-veiva-purple"
                >
                  {interestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-veiva-blue mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-veiva-purple focus:border-veiva-purple"
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form> 
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
