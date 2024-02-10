import React from "react";

import styles from "./SidebarHeading.module.scss";

interface SidebarHeadingProps {
  text: string;
}

const SidebarHeading: React.FC<SidebarHeadingProps> = ({ text }) => {
  return <li className={styles.heading}>{text}</li>;
};

export default SidebarHeading;
