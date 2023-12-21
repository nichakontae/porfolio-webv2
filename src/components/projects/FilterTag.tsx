import { Box, useTheme } from "@mui/material";
import { FC } from "react";

interface FilterTagProps {
  text: string;
  handleFilter: Function;
  isActive: boolean;
}

const FilterTag: FC<FilterTagProps> = ({ text, isActive, handleFilter }) => {
  const theme = useTheme();

  return (
    <Box
      display={"inline-block"}
      onClick={() => handleFilter(text)}
      sx={{
        borderRadius: "5px",
        padding: "0.4rem 1.5rem",
        backgroundColor: isActive
          ? theme.palette.background[300]
          : theme.palette.background[200],
        color: theme.palette.text.main,
        cursor: "pointer",
      }}
    >
      {text}
    </Box>
  );
};

export default FilterTag;
