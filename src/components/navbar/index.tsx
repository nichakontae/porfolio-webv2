import { navData } from "../../resources/nav";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import NavItem from "./NavItem";

const Navbar = () => {
  const theme = useTheme();
  const nav_data = navData;

  return (
    <Box
      height={"60px"}
      width={"100vw"}
      borderBottom={`1px solid ${theme.palette.accent?.[200]}`}
      padding={`0.5rem calc((100vw - 1400px) / 2)`}
      position={"fixed"}
      sx={{ backgroundColor: "transparent" }}

    >
      <Stack
        direction="row"
        height={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Typography color={`${theme.palette.text.main}`}>Logo</Typography>
        </Box>
        <Box>
          <Stack direction={"row"}>
            {nav_data.map((e) => (
              <NavItem to={e.path} name={e.name} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
