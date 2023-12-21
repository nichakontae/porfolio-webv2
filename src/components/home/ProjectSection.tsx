import { Box, useTheme } from "@mui/material";

import { projects } from "../../resources/project";
import Heading from "./Heading";
import SmallProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const theme = useTheme();
  return (
    <div style={{ marginBottom: "4rem" }} id="project">
      <Heading
        topic="Full-stack software developer."
        head="Featured Projects"
        desc="A collection of some side projects that have shipped recently."
      />
      {projects.slice(-2).map((item, i) => (
        <Box mb={"1rem"} key={i}>
          {item.view.link != undefined ? (
            <Link
              to={item.view.link!}
              target="_blank"
              style={{ textDecoration: "none", color: theme.palette.text.main }}
            >
              <SmallProjectCard data={item} />
            </Link>
          ) : (
            <SmallProjectCard data={item} />
          )}
        </Box>
      ))}
    </div>
  );
};

export default ProjectSection;
