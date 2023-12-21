import { Box, useTheme } from "@mui/material";
import { FC } from "react";

interface TagProps {
  text: string;
}

const Tag: FC<TagProps> = ({ text }) => {
  const theme = useTheme();
  return (
    <Box
      display={"inline-block"}
      sx={{
        borderRadius: "5px",
        paddingX: "0.5rem",
        backgroundColor:
          theme.palette.mode == "light"
            ? theme.palette.primary.main
            : theme.palette.text.main,
        color: theme.palette.background.main,
      }}
    >
      {text}
    </Box>
  );
};

export default Tag;
