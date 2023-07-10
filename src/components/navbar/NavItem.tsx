import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../styles/nav.css";

export interface NavItemProps {
  to: string;
  name: string;
}

const NavItem: FC<NavItemProps> = ({ to, name }) => {
  const theme = useTheme();
  return (
    <NavLink
      style={{ textDecoration: "none" }}
      to={to}
      className={({ isActive }) =>
        isActive
          ? theme.palette.mode == "light"
            ? "active-light"
            : "active-dark"
          : theme.palette.mode == "light"
          ? "nav-item-light"
          : "nav-item-dark"
      }
    >
      <Box
        sx={{
          fontWeight: "500",
          padding: "0.5rem 1.25rem",
        }}
      >
        {name}
      </Box>
    </NavLink>
  );
};

export default NavItem;
