
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '#' },
      { name: 'Blog', path: '#' },
    ],
    products: [
      { name: 'AI Solutions', path: '/products' },
      { name: 'Data Analytics', path: '#' },
      { name: 'Machine Learning', path: '#' },
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '#' },
      { name: 'Privacy Policy', path: '#' },
    ],
  };
  
  const socialLinks = [
    { name: 'LinkedIn', path: '#' },
    { name: 'Twitter', path: '#' },
    { name: 'Facebook', path: '#' },
    { name: 'Instagram', path: '#' },
  ];
  
  return (
    <footer className="bg-veiva-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Veiva<span className="text-veiva-purple">.in</span></h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses with cutting-edge AI solutions and data analytics. 
              We help companies harness the power of artificial intelligence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.path} 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-400">
            &copy; {currentYear} Veiva.in. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors mr-6">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
