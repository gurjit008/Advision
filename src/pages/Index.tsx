
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
