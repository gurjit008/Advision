
import React from 'react';
import Layout from '../components/Layout';
import ProductsHero from '../components/products/ProductsHero';
import ProductsList from '../components/products/ProductsList';
import IndustriesSection from '../components/products/IndustriesSection';
import CtaSection from '../components/home/CtaSection';

const Products = () => {
  return (
    <Layout>
      <ProductsHero />
      <ProductsList />
      <IndustriesSection />
      <CtaSection />
    </Layout>
  );
};

export default Products;
