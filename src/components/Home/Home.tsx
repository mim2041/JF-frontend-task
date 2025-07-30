import React from "react";
import AgriculturalProducts from "./components/AgriculturalProducts";
import LandscapeProducts from "./components/LandscapeProducts";
import BrandValue from "./components/BrandValue";
import WhyUs from "./components/WhyUs";
import ProductBadge from "./components/ProductBadge";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Feedback from "./components/Feedback";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AgriculturalProducts />
      <LandscapeProducts />
      <BrandValue />
      <WhyUs />
      <ProductBadge />
      <Feedback />
      <ContactSection />
    </div>
  );
};

export default Home;
