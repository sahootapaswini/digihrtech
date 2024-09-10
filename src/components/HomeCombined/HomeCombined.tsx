import React from "react";
import SiteDescription from "../SiteDescription/SiteDescription";
import HeroSection from "../HeroSection/HeroSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import Testimonials from "../Testimonials/Testimonials";

const HomeCombined = () => {
  return (
    <div>
      <SiteDescription />
      <ServiceSection />
      <Testimonials />
      <HeroSection />
    </div>
  );
};

export default HomeCombined;
