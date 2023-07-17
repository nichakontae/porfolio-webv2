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
      <Box
        width={"100%"}
        marginBottom={"2rem"}
        borderRadius={"0.5rem"}
        overflow={"hidden"}
      >
        <img src={data.preview} alt={data.projectName} />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={3} sm={2}>
          <Box width={"100%"}>
            <img
              src={data.icon}
              alt={data.projectName}
              style={{ borderRadius: "0.5rem" }}
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
            {data.websiteName != undefined && (
              <Link
                to={data.link!}
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.main,
                }}
              >
                <Box maxWidth={"13rem"}>
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
                    {data.websiteName!}
                    <ArrowUpRightIcon />
                  </Stack>
                </Box>
              </Link>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
