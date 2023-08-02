import { Stack, Typography, useTheme } from "@mui/material";
import { IntroEachPageType } from "../../types/intro";
import { IntroEachPage } from "../../resources/intro_each_page";
import { Link } from "react-router-dom";

const Footer = () => {
  const data: IntroEachPageType = IntroEachPage.filter(
    (e) => e.path == "/home"
  )[0];
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={{ xs: "center", sm: "space-between" }}
      alignItems={"center"}
      p={"2rem 0rem"}
    >
      <Stack direction={"row"} pb={{ xs: "1rem", sx: "0rem" }}>
        <Typography>Developed by &nbsp;</Typography>
        <Typography fontWeight={900}> ivelse.</Typography>
      </Stack>
      <Stack direction={"row"}>
        {data.contact?.map((item) => (
          <Link
            to={item.url}
            target="_blank"
            key={item.platform}
            style={{ textDecoration: "none" }}
          >
            <Typography color={theme.palette.text.main} mr={"1rem"}>
              {item.platform}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
