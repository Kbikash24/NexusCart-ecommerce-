import React from "react";
import Layout from "../../components/layout/Layout";

import HeroSection from "../../components/hero/HeroSection";
import Filter from "../../components/filter/filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonials from "../../components/testimonials/Testimonials";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      {/* <Track /> */}
      <Testimonials />
    </Layout>
  );
}

export default Home;
