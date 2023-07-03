import { CircularProgress, Stack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Stack
      w={"100vw"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"darkMode.bg.main"}
      opacity={"0.7"}
    >
      <CircularProgress isIndeterminate color="lightMode.accent.main" size={"5rem"} />
    </Stack>
  );
};

export default Loading;
