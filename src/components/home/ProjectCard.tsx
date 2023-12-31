import { Box, Grid, Typography, useTheme, styled } from "@mui/material";
import { FC } from "react";
import { ProjectSectionType } from "../../types/home";
import TechUse from "../projects/TechUse";

interface ProjectSectionProps {
  data: ProjectSectionType;
}

const SmallProjectCard: FC<ProjectSectionProps> = ({ data }) => {
  const theme = useTheme();
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <Box
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: "100%",
        flexGrow: 1,
        backgroundColor: theme.palette.background[200],
        borderRadius: "5px",
        ":hover": {
          backgroundColor: theme.palette.background[300],
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Box sx={{ width: 135, height: 135 }}>
            <Img alt="complex" src={data.icon} />
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                fontWeight={900}
              >
                {data.projectName}
              </Typography>
              <Typography variant="body2" gutterBottom fontWeight={300} marginBottom={"1rem"}>
                {data.desc}
              </Typography>
              <TechUse techUse={data.techUse} type={data.type} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SmallProjectCard;
