import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { ProjectSectionType } from "../../types/home";
import { FC } from "react";
import TechUse from "./TechUse";
import ViewProject from "./ViewProject";

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
            <TechUse techUse={data.techUse} type={data.type} />
            <ViewProject data={data.view} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
