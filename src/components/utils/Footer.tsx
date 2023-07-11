import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Contact, IntroEachPageType } from "../../types/intro";
import { IntroEachPage } from "../../resources/intro_each_page";
import { Link } from "react-router-dom";

const Footer = () => {
  const data: IntroEachPageType = IntroEachPage.filter(
    (e) => e.path == "/home"
  )[0];
  const theme = useTheme();

  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Stack direction={"row"}>
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
