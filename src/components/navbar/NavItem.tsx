import { Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

export interface NavItemProps {
  to: string;
  name: string;
}

const NavItem: FC<NavItemProps> = ({ to, name }) => {
  const theme = useTheme();
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Typography color={`${theme.palette.text.main}`}>{name}</Typography>
    </Link>
  );
};

export default NavItem;
