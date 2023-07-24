import {
  Box,
  Grid,
  ButtonBase,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import { FC } from "react";
import { ProjectSectionType } from "../../types/home";
import { Link } from "react-router-dom";

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
    <Link
      to={data.link!}
      style={{ textDecoration: "none", color: theme.palette.text.main }}
    >
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
            <ButtonBase sx={{ width: 135, height: 135 }}>
              <Img alt="complex" src={data.icon} />
            </ButtonBase>
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
                <Typography variant="body2" gutterBottom fontWeight={300}>
                  {data.desc}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};

export default SmallProjectCard;
