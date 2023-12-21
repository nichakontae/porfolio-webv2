import WavyLine from "../utils/WavyLine";
import { projects } from "../../resources/project";
import ProjectCard from "./ProjectCard";
import { Box, Stack, Typography } from "@mui/material";
import { findUnique } from "../../function/find_unique";
import FilterTag from "./FilterTag";
import { useState } from "react";

const Projects = () => {
  const types = findUnique(projects.flatMap((el) => el.type));
  const langsRaw = projects.map((el) => el.techUse.langs);
  const langs = findUnique(langsRaw.flatMap((el) => el));
  const frameRaw = projects.map((el) => el.techUse.framework);
  const framework = findUnique(frameRaw.flatMap((el) => el));
  const allTag = ["All", ...types, ...langs, ...framework];

  const [filter, setFilter] = useState<string[]>(["All"]);

  const handleFilter = (newTag: string) => {
    setFilter((prev) =>
      prev.includes(newTag)
        ? prev.filter((item) => item !== newTag)
        : [...prev, newTag]
    );
  };

  const filteredProjects = projects.filter((el) => {
    const all = [...el.type, ...el.techUse.langs, ...el.techUse.framework];
    const cutAll = filter.filter((el) => el !== "All");
    return cutAll.every((ml) => all.includes(ml));
  });

  return (
    <>
      <WavyLine />
      <Stack
        direction={"row"}
        marginBottom={"4rem"}
        spacing={2}
        flexWrap={"wrap"}
        useFlexGap
      >
        {allTag.map((el) => (
          <FilterTag
            text={el}
            handleFilter={handleFilter}
            isActive={filter.includes(el)}
            key={el}
          />
        ))}
      </Stack>

      {filter.length === 0 || filteredProjects.length === 0 ? (
        <Stack justifyContent={"center"} alignItems={"center"} width={"100%"}>
          <Box width={"30%"}>
            <img src="assets/images/no-results.png" width={"100%"} />
          </Box>

          <Typography variant="h5" fontWeight={200}>
            No Results Found
          </Typography>
        </Stack>
      ) : filter.includes("All") ? (
        projects.map((item, index) => (
          <Box key={index}>
            <ProjectCard data={item} />
            <WavyLine />
          </Box>
        ))
      ) : (
        filteredProjects.map((ml, i) => (
          <Box key={i}>
            <ProjectCard data={ml} />
            <WavyLine />
          </Box>
        ))
      )}
    </>
  );
};

export default Projects;
