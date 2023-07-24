import { Box } from "@mui/material";

import { projects } from "../../resources/project";
import Heading from "./Heading";
import SmallProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div style={{ marginBottom: "4rem" }} id="project">
      <Heading
        topic="Full-stack software developer."
        head="Featured Projects"
        desc="A collection of some side projects that have shipped recently."
      />
      {projects.slice(-2).map((item, i) => (
        <Box mb={"1rem"} key={i}>
          <SmallProjectCard data={item} />
        </Box>
      ))}
    </div>
  );
};

export default ProjectSection;
