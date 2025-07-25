import React from "react";
import HeroSection from "./childen/HeroSection";
import FeaturedSection from "../../components/FeaturedSection";
import TrailersSection from "./childen/TrailersSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <TrailersSection />
    </>
  );
};

export default HomePage;
