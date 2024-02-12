import React from "react";
import {
  Header as SageHeader,
  Icon,
  IconButton,
  Typography,
} from "@gabrielrabreu/sage-react";

interface HeaderProps {
  toggleAside: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleAside }) => {
  return (
    <SageHeader>
      <IconButton icon={<Icon name="Menu" />} onClick={toggleAside} />
      <Typography variant="subheading">SAGE</Typography>
      <SageHeader.Nav>
        <SageHeader.NavItem>
          <IconButton icon={<Icon name="Bell" />} />
        </SageHeader.NavItem>
        <SageHeader.NavItem>
          <IconButton icon={<Icon name="Mail" />} />
        </SageHeader.NavItem>
        <SageHeader.NavItem>
          <IconButton icon={<Icon name="User" />} />
        </SageHeader.NavItem>
      </SageHeader.Nav>
    </SageHeader>
  );
};

export default Header;
