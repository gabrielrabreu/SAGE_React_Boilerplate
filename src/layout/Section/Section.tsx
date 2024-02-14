import { WithChildren } from "@gabrielrabreu/sage-react";
import React from "react";

import styles from "./Section.module.scss";

interface SectionProps extends WithChildren {}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;
