import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/nav.css";

export interface NavItemProps {
  to: string;
  name: string;
}

const NavItem: FC<NavItemProps> = ({ to, name }) => {
  const theme = useTheme();
  return name == "Resume" ? (
    <a
      href={to}
      download="Nichakon_Seehabong_Resume"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          fontWeight: "500",
          padding: "0.5rem 1.25rem",
          backgroundColor: theme.palette.text.main,
          color: theme.palette.background.main,
        }}
      >
        {name}
      </Box>
    </a>
  ) : (
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
