import React from "react";
import classnames from "classnames";
import { BookIcon, LayoutDashboardIcon, UserIcon } from "lucide-react";

import SidebarItem from "./SidebarItem/SidebarItem";
import SidebarHeading from "./SidebarHeading/SidebarHeading";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
  isAsideOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isAsideOpen }) => {
  return (
    <aside
      className={classnames(styles.sidebar, {
        [styles.hidden]: !isAsideOpen,
      })}
    >
      <ul>
        <SidebarItem icon={<LayoutDashboardIcon />} text="Dashboard" link="/" />
        <SidebarItem icon={<BookIcon />} text="Forms" link="/forms" />
        <SidebarHeading text="Pages" />
        <SidebarItem icon={<UserIcon />} text="Profile" link="/profile" />
      </ul>
    </aside>
  );
};

export default Sidebar;
