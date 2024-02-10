import React from "react";
import { BellIcon, MailIcon, MenuIcon, UserIcon } from "lucide-react";

import IconButton from "../IconButton";
import Button from "../Button";

import styles from "./Header.module.scss";

interface HeaderProps {
  toggleAside: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleAside }) => {
  return (
    <header className={styles.header}>
      <IconButton icon={<MenuIcon />} onClick={toggleAside} />
      <Button text="SAGE" />
      <nav>
        <ul>
          <li>
            <IconButton icon={<BellIcon />} />
          </li>
          <li>
            <IconButton icon={<MailIcon />} />
          </li>
          <li>
            <IconButton icon={<UserIcon />} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
