
import React from 'react';
import Layout from '../components/Layout';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';
import FaqSection from '../components/contact/FaqSection';

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <MapSection />
      {/* <FaqSection /> */}
    </Layout>
  );
};

export default Contact;
