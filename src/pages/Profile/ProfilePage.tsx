import React from "react";

import { PageTitle } from "../../components";

const ProfilePage: React.FC = () => {
  return (
    <>
      <PageTitle
        title="Profile"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Profile", link: "/profile" },
        ]}
      ></PageTitle>
    </>
  );
};

export default ProfilePage;
