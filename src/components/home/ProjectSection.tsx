import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { ProjectSectionType } from "../../types/home";
import { Projects } from "../../resources/project";
import Heading from "./Heading";

const ProjectSection = () => {
  // * Select last two item (recently project)
  const projects: ProjectSectionType[] = Projects.slice(-2);
  return (
    <Box marginBottom={"4rem"}>
      <Heading
        topic="Full-stack software developer."
        head="Featured Projects"
        desc="A collection of some side projects that have shipped recently."
      />
      {projects.map((item) => (
        <Box mb={"1rem"}>
          <ProjectCard data={item} />
        </Box>
      ))}
    </Box>
  );
};

export default ProjectSection;
