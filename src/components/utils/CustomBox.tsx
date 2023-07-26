import { Box, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";

interface CustomBoxProps {
  children: ReactNode;
}

const CustomBox: FC<CustomBoxProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background[200],
        display: "inline-block",
        padding: "0.2rem 1.5rem",
        borderRadius: "3rem",
        border: `1px solid ${theme.palette.accent?.[200]}`,
      }}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
