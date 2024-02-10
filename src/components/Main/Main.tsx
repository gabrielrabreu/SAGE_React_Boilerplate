import React from "react";
import classnames from "classnames";

import styles from "./Main.module.scss";

interface MainProps {
  isAsideOpen: boolean;
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ isAsideOpen, children }) => {
  return (
    <main
      className={classnames(styles.main, {
        [styles.expanded]: isAsideOpen,
      })}
    >
      {children}
    </main>
  );
};

export default Main;
