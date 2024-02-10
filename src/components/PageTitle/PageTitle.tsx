import React from "react";

import Breadcrumb from "../../components/Breadcrumb";

import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  title: string;
  breadcrumb: {
    name: string;
    link?: string;
  }[];
}

const PageTitle: React.FC<PageTitleProps> = ({ title, breadcrumb }) => {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <Breadcrumb items={breadcrumb} />
    </div>
  );
};

export default PageTitle;
