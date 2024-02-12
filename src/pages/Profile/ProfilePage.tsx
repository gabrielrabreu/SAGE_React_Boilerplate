import React from "react";
import { HeroSection } from "@gabrielrabreu/sage-react";

const ProfilePage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Profile"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Profile", link: "/profile" },
        ]}
      ></HeroSection>
    </>
  );
};

export default ProfilePage;
