import React from "react";

import styles from "./Breadcrumb.module.scss";
import BreadcrumbItem from "./BreadcrumbItem/BreadcrumbItem";

interface BreadcrumbProps {
  items: {
    name: string;
    link?: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav>
      <ol className={styles.breadcrumb}>
        {items.map((item, index) => (
          <BreadcrumbItem key={index} name={item.name} link={item.link} />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
