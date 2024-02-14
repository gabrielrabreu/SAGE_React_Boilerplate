import React from "react";
import { Card, HeroSection } from "@gabrielrabreu/sage-react";

import Section from "../../layout/Section/Section";

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
      <Section>
        <Card>
          <Card.Title>Sales</Card.Title>
        </Card>
      </Section>
    </>
  );
};

export default DashboardPage;
