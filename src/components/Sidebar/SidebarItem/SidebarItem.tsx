import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, link }) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={link}
        className={(nav) => (nav.isActive ? styles.active : "")}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
