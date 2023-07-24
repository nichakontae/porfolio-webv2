import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { FC, useState } from "react";
import ContactIcon from "./ContactIcon";
import { IntroEachPageType } from "../../types/intro";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export interface IntroProps {
  data: IntroEachPageType;
}

const Intro: FC<IntroProps> = ({ data }) => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const currentAge = currentYear - 2003;
  const updatedDesc = data.desc.replace(/20/g, currentAge.toString());

  return (
    <Stack marginBottom={data.path == "/home" ? "2rem" : "4rem"}>
      <Avatar src={data.image} sx={{ width: "5rem", height: "5rem" }} />
      {data.path == "/home" && (
        <Typography variant="subtitle1" marginTop={"1rem"}>
          {data.smallTopic}
        </Typography>
      )}
      {data.path == "/home" && (
        <Stack>
          <HashLink to="#project" smooth style={{ textDecoration: "none" }}>
            <Typography
              variant="h3"
              fontWeight={900}
              paddingTop={data.path == "/home" ? "0rem" : "0.8rem"}
              sx={{
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent?.main} 20%)`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                ":hover": {
                  background: `linear-gradient(90deg, ${theme.palette.accent?.[200]} 0%, ${theme.palette.primary[200]} 20%)`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                },
              }}
            >
              {data.topic}&
            </Typography>
          </HashLink>
          <HashLink to="#photo" smooth style={{ textDecoration: "none" }}>
            <Typography
              variant="h3"
              fontWeight={900}
              paddingBottom={"1.5rem"}
              paddingTop={data.path == "/home" ? "0rem" : "0.8rem"}
              sx={{
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent?.main} 20%)`,
                WebkitBackgroundClip: "text",
                color: "transparent",
                ":hover": {
                  background: `linear-gradient(90deg, ${theme.palette.accent?.[200]} 0%, ${theme.palette.primary[200]} 20%)`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                },
              }}
            >
              {data.topic2}
            </Typography>
          </HashLink>
        </Stack>
      )}
      {data.path != "/home" && (
        <Typography
          variant="h3"
          fontWeight={900}
          paddingBottom={"1.5rem"}
          paddingTop={data.path == "/home" ? "0rem" : "0.8rem"}
          sx={{
            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent?.main} 20%)`,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {data.topic}
        </Typography>
      )}
      {data.path == "/home" || data.path == "/about" ? (
        <Typography variant="body1" fontWeight={300}>
          {updatedDesc}
        </Typography>
      ) : (
        <Typography variant="body1" fontWeight={300}>
          {data.desc}
        </Typography>
      )}

      {data.path == "/home" && (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          padding={"2.5rem 0rem"}
          alignItems={"center"}
          spacing={3}
        >
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {data.contact
              ?.filter((e) => e.platform != "Email")
              .map((item) => (
                <Link to={item.url} target="_blank" key={item.platform}>
                  <ContactIcon Icon={item.icon} />
                </Link>
              ))}
          </Stack>
          <Box
            sx={{
              backgroundColor: theme.palette.background[200],
              padding: "0.8rem 1.5rem",
              borderRadius: "3rem",
              border: `1px solid ${theme.palette.accent?.[200]}`,
              cursor: "pointer",
              ":hover": {
                backgroundColor: theme.palette.background[300],
              },
            }}
          >
            Email me!
          </Box>
        </Stack>
      )}
    </Stack>
  );
};

export default Intro;
