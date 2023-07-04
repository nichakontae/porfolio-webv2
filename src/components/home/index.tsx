
import "../../styles/index.css";
import { Box } from "@chakra-ui/react";
import { Theme, useTheme } from "@emotion/react";

const Home = () => {
  const theme = useTheme() as Theme;
  return (
    <Box
      h={"100vh"}
      w={"100vw"}
      backgroundColor={`${theme.bg.main}`}
      color={`${theme.text.main}`}
    >
      Home
    </Box>
  );
};

export default Home;
