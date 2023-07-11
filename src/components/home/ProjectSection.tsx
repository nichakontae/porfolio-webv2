import { Box, Typography, useTheme } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { ProjectSectionType } from "../../types/home";
import { Projects } from "../../resources/project";

const ProjectSection = () => {
  const theme = useTheme();
   // * Select last two item (recently project)
   const projects: ProjectSectionType[] = Projects.slice(-2);
  return (
    <>
      <Typography
        variant="h3"
        fontWeight={900}
        paddingBottom={"1rem"}
        sx={{
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent?.main} 20%)`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Full-stack software developer.
      </Typography>
      <Typography variant="h5" fontWeight={600}>
        Featured Projects
      </Typography>
      <Typography fontWeight={300} marginBottom={"2rem"}>
        A collection of some side projects that have shipped recently.
      </Typography>
      {projects.map((item) => (
        <Box mb={"1rem"}>
          <ProjectCard data={item} />
        </Box>
      ))}
    </>
  );
};

export default ProjectSection;
