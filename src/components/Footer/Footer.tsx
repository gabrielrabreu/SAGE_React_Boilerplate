import classnames from "classnames";
import React from "react";

import styles from "./Footer.module.scss";

interface FooterProps {
  isAsideOpen: boolean;
}

const Footer: React.FC<FooterProps> = ({ isAsideOpen }) => {
  return (
    <footer
      className={classnames(styles.footer, {
        [styles.expanded]: isAsideOpen,
      })}
    >
      <div className={styles.copyright}>
        © Copyright&nbsp;
        <strong>Sage</strong>. All Rights Reserved
      </div>
      <div className={styles.credits}>
        Designed by&nbsp;
        <a href="#">Sage</a>
      </div>
    </footer>
  );
};

export default Footer;
