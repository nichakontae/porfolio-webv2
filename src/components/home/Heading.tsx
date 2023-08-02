import { Typography, useTheme } from "@mui/material";
import { FC } from "react";

interface HeadingProps {
  topic: string;
  head: string;
  desc: string;
}

const Heading: FC<HeadingProps> = ({ topic, head, desc }) => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h3"
        fontWeight={900}
        paddingBottom={"1rem"}
        sx={{
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent?.main} 20%)`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {topic}
      </Typography>
      <Typography variant="h5" fontWeight={600}>
        {head}
      </Typography>
      <Typography fontWeight={300} marginBottom={"2rem"}>
        {desc}
      </Typography>
    </>
  );
};

export default Heading;
