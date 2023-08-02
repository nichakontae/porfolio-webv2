import WavyLine from "../utils/WavyLine";
import { projects } from "../../resources/project";
import ProjectCard from "./ProjectCard";
import { Box } from "@mui/material";

const Projects = () => {
  return (
    <>
      <WavyLine />
      {projects.map((item, index) => (
        <Box key={index}>
          <ProjectCard data={item} />
          {index != projects.length - 1 && <WavyLine />}
        </Box>
      ))}
    </>
  );
};

export default Projects;
