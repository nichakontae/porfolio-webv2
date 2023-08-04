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
        borderRadius: "3rem",
        border: `1px solid ${theme.palette.accent?.[200]}`,
        paddingX: "0.5rem",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.main,
      }}
    >
      {text}
    </Box>
  );
};

export default Tag;
