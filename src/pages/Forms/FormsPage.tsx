import React from "react";

import { PageTitle } from "../../components";

const FormsPage: React.FC = () => {
  return (
    <>
      <PageTitle
        title="Forms"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Forms", link: "/forms" },
        ]}
      ></PageTitle>
    </>
  );
};

export default FormsPage;
