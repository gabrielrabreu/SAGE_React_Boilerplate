import React from "react";

import { PageTitle } from "../../components";

const DashboardPage: React.FC = () => {
  return (
    <>
      <PageTitle
        title="Dashboard"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Dashboard", link: "/" },
        ]}
      ></PageTitle>
    </>
  );
};

export default DashboardPage;
