import React from "react";
import AgriculturalProducts from "./components/AgriculturalProducts";
import LandscapeProducts from "./components/LandscapeProducts";
import BrandValue from "./components/BrandValue";
import WhyUs from "./components/WhyUs";

const Home = () => {
  return (
    <div>
      <AgriculturalProducts />
      <LandscapeProducts />
      <BrandValue />
      <WhyUs />
    </div>
  );
};

export default Home;
