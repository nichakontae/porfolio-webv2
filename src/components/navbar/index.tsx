import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Theme, useTheme } from "@emotion/react";
import { navData } from "../../resources/nav";
import { Link } from "react-router-dom";
import NavItem from "./nav_item";

const Navbar = () => {
  const theme = useTheme() as Theme;
  const nav_data = navData;

  return (
    <Box
      h="60px"
      w="100vw"
      backgroundColor="transparent"
      borderBottom={`1px solid ${theme.accent[200]}`}
      padding={`0.5rem calc((100vw - 1400px) / 2)`}
      position={"fixed"}
    >
      <Flex height={"100%"} alignItems={"center"}>
        <Box>
          <Text color={`${theme.text.main}`}>Logo</Text>
        </Box>
        <Spacer />
        <Box>
          <Flex>
            {nav_data.map((e) => (
              <NavItem to={e.path} name={e.name} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
