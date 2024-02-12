import React from "react";
import { HeroSection } from "@gabrielrabreu/sage-react";

const DashboardPage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Dashboard"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Dashboard", link: "/dashboard" },
        ]}
      ></HeroSection>
    </>
  );
};

export default DashboardPage;
