import React from "react";
import { HeroSection } from "@gabrielrabreu/sage-react";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Home"
        breadcrumb={[{ name: "Home", link: "/" }]}
      ></HeroSection>
    </>
  );
};

export default HomePage;
