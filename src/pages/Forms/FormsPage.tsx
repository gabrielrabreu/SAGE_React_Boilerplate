import React from "react";
import { HeroSection } from "@gabrielrabreu/sage-react";

const FormsPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Forms"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Forms", link: "/forms" },
        ]}
      ></HeroSection>
    </>
  );
};

export default FormsPage;
