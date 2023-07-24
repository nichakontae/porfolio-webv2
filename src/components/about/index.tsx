import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { workExperience } from "../../resources/experience";

const About = () => {
  // before use ScrollTrigger, we need to register first!
  gsap.registerPlugin(ScrollTrigger);
  const theme = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const scrollYPosition = scrollY + 400;
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(isExtraSmallScreen);
  console.log(scrollY + 400);
  console.log(scrollY + 400 == 635.5);
  // 643px

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // gsap.to("#circle", {
    //   scrollTrigger: {
    //     trigger: "#circle",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: true,
    //   },
    //   opacity: 1,
    //   duration: 1,
    // });
    // gsap.fromTo(
    //   "#circle",
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 1,
    //     ease: "out",
    //     scrollTrigger: {
    //       trigger: "#circle",
    //       start: "bottom",
    //       end: "bottom center",
    //       scrub: true,
    //       markers: true,
    //     },
    //   }
    // );
    // gsap.to("#year", {
    //   scrollTrigger: {
    //     trigger: "#circle",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: true,
    //   },
    //   y: "50%",
    //   duration: 1,
    // });
  }, []);

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
        {isExtraSmallScreen ? (
          <Grid container>
            <Grid item xs={1} display="flex" justifyContent="center">
              <Box
                width={"5px"}
                height={"100%"}
                sx={{ backgroundColor: "white" }}
              />
              <div
                id="circle"
                style={{
                  position: "absolute",
                  paddingTop: "0.3rem",
                  top: scrollYPosition > 889 ? scrollYPosition : "",
                }}
              >
                <Box
                  borderRadius={"10rem"}
                  width={"1.5rem"}
                  height={"1.5rem"}
                  bgcolor={"red"}
                />
              </div>
            </Grid>
            <Grid item xs={11}>
              {workExperience.map((el, i) => (
                <Stack padding={"0.5rem"} key={i} marginBottom={"2rem"}>
                  <Typography
                    fontWeight={900}
                    variant="h5"
                    marginBottom={"1rem"}
                  >
                    {el.date}
                  </Typography>
                  <Typography
                    fontWeight={900}
                    variant="h5"
                    paddingBottom={"0.5rem"}
                  >
                    {el.companyName}
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.background[200],
                      padding: "0.2rem 1.5rem",
                      borderRadius: "3rem",
                      border: `1px solid ${theme.palette.accent?.[200]}`,
                    }}
                  >
                    {el.position}
                  </Box>
                  <Typography
                    fontWeight={300}
                    marginY={"1rem"}
                    sx={{ wordWrap: "break-word" }}
                  >
                    {el.desc}
                  </Typography>
                  <Box>
                    <img
                      src="src/assets/images/profile.jpg"
                      style={{ borderRadius: "5px" }}
                      width={"100%"}
                    />
                  </Box>
                </Stack>
              ))}
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <div
              id="circle"
              style={{
                position: "absolute",
                paddingTop: "0.3rem",
                top: scrollYPosition > 667 ? scrollYPosition : "",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Box
                borderRadius={"10rem"}
                width={"1.5rem"}
                height={"1.5rem"}
                bgcolor={"red"}
              />
            </div>
            {workExperience.map((el, i) => (
              <>
                <Grid item sm={5} key={i}>
                  <Typography fontWeight={900} variant="h5" textAlign={"right"}>
                    {el.date}
                  </Typography>
                </Grid>
                <Grid item sm={2} display="flex" justifyContent="center">
                  <Box
                    width={"5px"}
                    height={"100%"}
                    sx={{ backgroundColor: "white" }}
                  />
                </Grid>
                <Grid item sm={5} marginBottom={"2rem"}>
                  <Stack>
                    <Typography
                      fontWeight={900}
                      variant="h5"
                      paddingBottom={"0.5rem"}
                    >
                      {el.companyName}
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: theme.palette.background[200],
                        padding: "0.2rem 1.5rem",
                        borderRadius: "3rem",
                        border: `1px solid ${theme.palette.accent?.[200]}`,
                      }}
                    >
                      {el.position}
                    </Box>
                    <Typography fontWeight={300} marginY={"1rem"}>
                      {el.desc}
                    </Typography>
                    <Box>
                      <img
                        src="src/assets/images/profile.jpg"
                        style={{ borderRadius: "5px" }}
                        width={"100%"}
                      />
                    </Box>
                  </Stack>
                </Grid>
              </>
            ))}
          </Grid>
        )}
        {/* <Grid container>
          <Grid item sm={5}>
            <Typography fontWeight={900} variant="h5" textAlign={"right"}>
              July, 2023
            </Typography>
          </Grid>
          <Grid item sm={2} display="flex" justifyContent="center">
            <Box
              width={"5px"}
              height={"100%"}
              sx={{ backgroundColor: "white" }}
            />
            <div
              id="circle"
              style={{
                position: "absolute",
                paddingTop: "0.3rem",
                top: scrollYPosition > 635 ? scrollYPosition : "",
              }}
            >
              <Box
                borderRadius={"10rem"}
                width={"1.5rem"}
                height={"1.5rem"}
                bgcolor={"red"}
              />
            </div>
          </Grid>
          <Grid item sm={5}>
            <Stack>
              <Typography fontWeight={900} variant="h5">
                Company name
              </Typography>
              <Box
                sx={{
                  backgroundColor: theme.palette.background[200],
                  padding: "0.2rem 1.5rem",
                  borderRadius: "3rem",
                  border: `1px solid ${theme.palette.accent?.[200]}`,
                }}
              >
                Position
              </Box>
              <Typography fontWeight={300} marginY={"1rem"}>
                descdescdescdescdescdescdescdescdescdesc
              </Typography>
              <Box>
                <img
                  src="src/assets/images/profile.jpg"
                  style={{ borderRadius: "5px" }}
                  width={"100%"}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={5}>
            <Typography fontWeight={900} variant="h5" textAlign={"right"}>
              July, 2023
            </Typography>
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="center">
            <Box
              width={"5px"}
              height={"100%"}
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={5}>
            <Stack>
              <Typography fontWeight={900} variant="h5">
                Company name
              </Typography>
              <Box
                sx={{
                  backgroundColor: theme.palette.background[200],
                  padding: "0.2rem 1.5rem",
                  borderRadius: "3rem",
                  border: `1px solid ${theme.palette.accent?.[200]}`,
                }}
              >
                Position
              </Box>
              <Typography fontWeight={300} marginY={"1rem"}>
                descdescdescdescdescdescdescdescdescdesc
              </Typography>
              <Box>
                <img
                  src="src/assets/images/profile.jpg"
                  style={{ borderRadius: "5px" }}
                  width={"100%"}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={5}>
            <Typography fontWeight={900} variant="h5" textAlign={"right"}>
              July, 2023
            </Typography>
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="center">
            <Box
              width={"5px"}
              height={"100%"}
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={5}>
            <Stack>
              <Typography fontWeight={900} variant="h5">
                Company name
              </Typography>
              <Box
                sx={{
                  backgroundColor: theme.palette.background[200],
                  padding: "0.2rem 1.5rem",
                  borderRadius: "3rem",
                  border: `1px solid ${theme.palette.accent?.[200]}`,
                }}
              >
                Position
              </Box>
              <Typography fontWeight={300} marginY={"1rem"}>
                descdescdescdescdescdescdescdescdescdesc
              </Typography>
              <Box>
                <img
                  src="src/assets/images/profile.jpg"
                  style={{ borderRadius: "5px" }}
                  width={"100%"}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid> */}
      </Stack>
    </Box>
  );
};

export default About;
