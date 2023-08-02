import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { workExperience } from "../../resources/experience";
import Animation from "../utils/Animation";
import CustomBox from "../utils/CustomBox";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WorkExperience = () => {
  gsap.registerPlugin(ScrollTrigger);
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [scrollY, setScrollY] = useState(0);
  const scrollYPosition = scrollY + 400;

  const appearPos: number = isExtraSmallScreen ? 889 : 667;
  const circleTop = scrollYPosition > appearPos ? scrollYPosition : "";

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
    gsap.fromTo(
      "#circle",
      {
        y: 0,
      },
      {
        y: 250,
        scrollTrigger: {
          trigger: "#circle",
          start: "top 80%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Stack>
      {isExtraSmallScreen ? (
        <Grid container>
          <Grid item xs={1} display="flex" justifyContent="center">
            <Box
              width={"5px"}
              height={"100%"}
              sx={{
                // background: `linear-gradient(360deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent?.main} 20%)`,
                // color: "transparent",
                backgroundColor: theme.palette.background[200],
              }}
            />
            {/* <Circle appearPos={889} isCenter={false} /> */}
            <div
              id="circle"
              style={{
                position: "absolute",
                paddingTop: "0.3rem",
                top: circleTop,
              }}
            >
              <Box
                borderRadius={"10rem"}
                width={"1.5rem"}
                height={"1.5rem"}
                bgcolor={theme.palette.accent?.main}
                border={`1px solid ${theme.palette.accent?.[200]}`}
              />
            </div>
          </Grid>
          <Grid item xs={11}>
            {workExperience.map((el, i) => (
              <Stack padding={"0.5rem"} key={i} marginBottom={"2rem"}>
                <Animation>
                  <Typography
                    fontWeight={900}
                    variant="h5"
                    marginBottom={"1rem"}
                  >
                    {el.date}
                  </Typography>
                </Animation>
                <Animation>
                  <Typography
                    fontWeight={900}
                    variant="h5"
                    paddingBottom={"0.5rem"}
                  >
                    {el.companyName}
                  </Typography>
                </Animation>
                <Animation>
                  <CustomBox>{el.position}</CustomBox>
                </Animation>
                <Animation>
                  <Typography
                    fontWeight={300}
                    marginY={"1rem"}
                    sx={{ wordWrap: "break-word" }}
                  >
                    {el.desc}
                  </Typography>
                </Animation>
                <Animation>
                  <Box>
                    <img
                      src={el.img}
                      style={{ borderRadius: "5px" }}
                      width={"100%"}
                    />
                  </Box>
                </Animation>
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
              top: circleTop,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Box
              borderRadius={"10rem"}
              width={"1.5rem"}
              height={"1.5rem"}
              bgcolor={theme.palette.accent?.main}
              border={`1px solid ${theme.palette.accent?.[200]}`}
            />
          </div>
          {workExperience.map((el, i) => (
            <>
              <Grid item sm={5} key={i}>
                <Animation>
                  <Typography fontWeight={900} variant="h5" textAlign={"right"}>
                    {el.date}
                  </Typography>
                </Animation>
              </Grid>
              <Grid item sm={2} display="flex" justifyContent="center">
                <Box
                  width={"5px"}
                  height={"100%"}
                  sx={{
                    // background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent?.main} 20%)`,
                    // color: "transparent",
                    backgroundColor: theme.palette.background[200],
                  }}
                />
              </Grid>
              <Grid item sm={5} marginBottom={"2rem"}>
                <Stack>
                  <Animation>
                    <Typography
                      fontWeight={900}
                      variant="h5"
                      paddingBottom={"0.5rem"}
                    >
                      {el.companyName}
                    </Typography>
                  </Animation>
                  <Animation>
                    <CustomBox>{el.position}</CustomBox>
                  </Animation>
                  <Animation>
                    <Typography fontWeight={300} marginY={"1rem"}>
                      {el.desc}
                    </Typography>
                  </Animation>
                  <Animation>
                    <Box>
                      <img
                        src={el.img}
                        style={{ borderRadius: "5px" }}
                        width={"100%"}
                      />
                    </Box>
                  </Animation>
                </Stack>
              </Grid>
            </>
          ))}
        </Grid>
      )}
      <Animation hidden={true}>
        <Typography
          textAlign={isExtraSmallScreen ? "left" : "center"}
          variant="h5"
          fontWeight={900}
          paddingTop={"1rem"}
        >
          Present
        </Typography>
      </Animation>
    </Stack>
  );
};

export default WorkExperience;
