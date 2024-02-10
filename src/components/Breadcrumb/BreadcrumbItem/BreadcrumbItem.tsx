import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./BreadcrumbItem.module.scss";

interface BreadcrumbItemProps {
  name: string;
  link?: string;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ name, link }) => {
  return (
    <li className={styles.breadcrumbItem}>
      {link && (
        <NavLink
          to={link}
          className={(nav) => (nav.isActive ? styles.active : "")}
        >
          <span>{name}</span>
        </NavLink>
      )}
      {!link && <span>{name}</span>}
    </li>
  );
};

export default BreadcrumbItem;
