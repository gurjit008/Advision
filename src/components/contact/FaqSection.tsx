
import React, { useState } from 'react';

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We work with clients across multiple industries including finance, healthcare, retail, manufacturing, and technology. Our AI solutions are customizable to address the unique challenges of each sector."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation timelines vary based on the complexity of your needs and the specific solutions being deployed. Simple integrations can be completed in as little as 2-4 weeks, while more comprehensive solutions may take 2-3 months."
  },
  {
    question: "Do you offer customized solutions or only pre-built products?",
    answer: "We offer both. While our core products provide robust functionality out of the box, we understand that every business has unique needs. Our team can customize and tailor our solutions to meet your specific requirements."
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer: "We offer comprehensive support including technical assistance, regular maintenance, updates, and training. Our dedicated client success team ensures you get the most out of your investment in our AI solutions."
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "Data security is our top priority. We implement industry-leading encryption, secure authentication, and regular security audits. All our systems are compliant with relevant data protection regulations including GDPR and other local standards."
  }
];

const FaqSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">
            <span className="gradient-heading">Frequently Asked Questions</span>
          </h2>
          <p className="text-veiva-gray">
            Answers to some common questions about our services and solutions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-lg font-semibold text-veiva-blue">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-veiva-purple transform ${expandedIndex === index ? 'rotate-180' : ''} transition-transform`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-veiva-gray">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
