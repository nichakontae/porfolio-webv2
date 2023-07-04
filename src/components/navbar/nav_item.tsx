import { Text, theme } from "@chakra-ui/react";
import { Theme, useTheme } from "@emotion/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";

export interface NavItemProps {
  to: string;
  name: string;
}

const NavItem: FC<NavItemProps> = ({ to, name }) => {
  const theme = useTheme() as Theme;
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Text color={`${theme.text.main}`}>{name}</Text>
    </Link>
  );
};

export default NavItem;
