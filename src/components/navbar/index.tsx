import { navData } from "../../resources/nav";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import NavItem from "./NavItem";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "../../resources/icons";
import { NavbarItem } from "../../types/nav";

const Navbar = () => {
  const theme = useTheme();
  const navItems: NavbarItem[] = navData;
  const [mobileOpen, setMobileOpen] = useState(false);
  const container = window.document.body;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100vh",
        background: `linear-gradient(180deg, ${theme.palette.accent?.[200]} 0%, ${theme.palette.primary[200]} 100%)`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          padding: "1rem",
        }}
      >
        <Box
          sx={{ backgroundColor: "#F5F5F5" }}
          padding={"0.5rem 1.5rem"}
          borderRadius={"5px"}
        >
          <Typography
            color={theme.palette.accent?.[200]}
            fontWeight={"bold"}
            fontSize={"1.5rem"}
          >
            Close
          </Typography>
        </Box>
      </Box>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: `calc(100% - 10rem)` }}
      >
        {navItems.map((item, index) => (
          <Link to={item.path} style={{ textDecoration: "none" }}>
            <Typography
              fontWeight={"bold"}
              color={theme.palette.primary[300]}
              fontSize={"2rem"}
              key={index}
              padding={"1rem"}
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          borderBottom: `1px solid ${theme.palette.background[300]} `,
          backdropFilter: "blur(24px)",
        }}
        elevation={0}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ display: "block" }}
                color={theme.palette.text.main}
                fontWeight={"bold"}
              >
                ivelse.com
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <NavItem to={item.path} name={item.name} key={item.name} />
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              margin: "0.25rem",
            }}
          >
            <MenuIcon
              style={{ color: theme.palette.text.main, fontSize: "2.5rem" }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
            // Better open performance on mobile.
            // anchor: "right",
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100vw",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
