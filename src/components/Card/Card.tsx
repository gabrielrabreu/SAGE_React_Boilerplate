import React from "react";

import styles from "./Card.module.scss";

interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return <div className={styles["card"]}>{props.children}</div>;
};

export default Card;