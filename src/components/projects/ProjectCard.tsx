import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { ArrowUpRightIcon } from "../../resources/icons";
import { ProjectSectionType } from "../../types/home";
import { FC } from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  data: ProjectSectionType;
}

const ProjectCard: FC<ProjectCardProps> = ({ data }) => {
  const theme = useTheme();
  return (
    <Box marginBottom={"4rem"}>
      <Box width={"100%"} marginBottom={"2rem"}>
        <img
          src={data.preview}
          alt={data.projectName}
          width={"100%"}
          style={{ borderRadius: "0.5rem" }}
        />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={3} sm={2}>
          <Box width={"100%"}>
            <img
              src={data.icon}
              alt={data.projectName}
              style={{ borderRadius: "0.5rem" }}
              width={"100%"}
            />
          </Box>
        </Grid>
        <Grid item xs={9} sm={10}>
          <Stack spacing={2}>
            <Typography
              color={theme.palette.text.main}
              fontWeight={900}
              fontSize={"1.5rem"}
            >
              {data.projectName}
            </Typography>
            <Typography>{data.desc}</Typography>
            <Stack direction={"row"} spacing={3}>
              {data.websiteName != undefined && (
                <Link
                  to={data.link!}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.text.main,
                  }}
                >
                  <Box display={"inline-block"}>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
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
                      {data.websiteName!} &nbsp;
                      <ArrowUpRightIcon />
                    </Stack>
                  </Box>
                </Link>
              )}
              <Link
                to={data.code}
                style={{
                  textDecoration: "none",
                  color:
                    data.websiteName != undefined
                      ? theme.palette.primary.main
                      : theme.palette.text.main,
                }}
              >
                <Box display={"inline-block"}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    sx={{
                      backgroundColor:
                        data.websiteName != undefined
                          ? theme.palette.text[200]
                          : theme.palette.background[200],
                      padding: "0.8rem 1.5rem",
                      borderRadius: "3rem",
                      border: `1px solid ${theme.palette.accent?.[200]}`,
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: theme.palette.background[300],
                      },
                    }}
                  >
                    {data.code.replace(/^https?:\/\//, "")} &nbsp;
                    <ArrowUpRightIcon />
                  </Stack>
                </Box>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
