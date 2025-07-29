import React from "react";
import AgriculturalProducts from "./components/AgriculturalProducts";
import LandscapeProducts from "./components/LandscapeProducts";
import BrandValue from "./components/BrandValue";

const Home = () => {
  return (
    <div>
      <AgriculturalProducts />
      <LandscapeProducts />
      <BrandValue />
    </div>
  );
};

export default Home;
