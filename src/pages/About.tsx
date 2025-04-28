
import React from 'react';
import Layout from '../components/Layout';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import TeamSection from '../components/about/TeamSection';
import ValuesSection from '../components/about/ValuesSection';
import CtaSection from '../components/home/CtaSection';

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <OurStory />
      <TeamSection />
      <ValuesSection />
      <CtaSection />
    </Layout>
  );
};

export default About;
