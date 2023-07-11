import { useTheme } from "@mui/material";
import "../../styles/wavyline.css";

const WavyLine = () => {
  const theme = useTheme();
  return (
    <div
      className={theme.palette.mode == "light" ? "wavy-light" : "wavy-dark"}
    ></div>
  );
};

export default WavyLine;
