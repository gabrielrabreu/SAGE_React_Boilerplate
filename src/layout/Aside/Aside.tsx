import React from "react";
import { Icon, Aside as SageAside } from "@gabrielrabreu/sage-react";

import styles from "./Aside.module.scss";

interface AsideProps {
  isAsideOpen: boolean;
}

const Aside: React.FC<AsideProps> = ({ isAsideOpen }) => {
  return (
    <SageAside
      className={styles.aside}
      hidden={!isAsideOpen}
      hiddenClassName={styles.asideHidden}
    >
      <SageAside.Nav>
        <SageAside.NavItem icon={<Icon name="Home" />} text="Home" link="/" />
        <SageAside.NavItem
          icon={<Icon name="LayoutDashboard" />}
          text="Dashboard"
          link="/dashboard"
        />
        <SageAside.NavItem
          icon={<Icon name="Book" />}
          text="Forms"
          link="/forms"
        />
        <SageAside.NavItem
          icon={<Icon name="User" />}
          text="User"
          link="/profile"
        />
      </SageAside.Nav>
    </SageAside>
  );
};

export default Aside;
