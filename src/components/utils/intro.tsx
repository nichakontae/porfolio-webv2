import { Avatar, Box, Stack, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import ContactIcon from "./ContactIcon";
import { IntroEachPageType } from "../../types/intro";
import { Link } from "react-router-dom";

export interface IntroProps {
  data: IntroEachPageType;
}

const Intro: FC<IntroProps> = ({ data }) => {
  const theme = useTheme();
  return (
    <Stack 
    marginBottom={data.path == "/home" ? "2rem" : "4rem"}
    >
      <Avatar src={data.image} sx={{ width: "5rem", height: "5rem" }} />
      {data.path == "/home" && (
        <Typography variant="subtitle1" marginTop={"1rem"}>
          {data.smallTopic}
        </Typography>
      )}
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
      <Typography variant="body1" fontWeight={300}>
        {data.desc}
      </Typography>
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
