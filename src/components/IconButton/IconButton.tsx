import React from "react";

import styles from "./IconButton.module.scss";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>{icon}</span>
    </button>
  );
};

export default IconButton;
