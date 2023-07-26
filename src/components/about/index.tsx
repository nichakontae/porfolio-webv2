import { Box, Stack, Typography } from "@mui/material";

import WorkExperience from "./WorkExperience";

const About = () => {
  return (
    <Box>
      <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Typography fontWeight={900} fontSize={"2rem"}>
          Work Experiences
        </Typography>
        <Box width={{ xs: "100%", sm: "60%" }} paddingBottom={"2rem"}>
          <Typography textAlign={"center"}>
            My journey has been shaped and fueled by valuable experiences that I
            have gained. Let's explore these impactful work experiences
            together.
          </Typography>
        </Box>
        <WorkExperience />
      </Stack>
    </Box>
  );
};

export default About;
