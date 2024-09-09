import React from "react";
import SiteDescription from "../SiteDescription/SiteDescription";
import HeroSection from "../HeroSection/HeroSection";
import ServiceSection from "../ServiceSection/ServiceSection";

const HomeCombined = () => {
  return (
    <div>
      <SiteDescription />
      <ServiceSection />
      <HeroSection />
    </div>
  );
};

export default HomeCombined;
