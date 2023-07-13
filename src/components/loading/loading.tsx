import { CircularProgress, Stack, useTheme } from "@mui/material";

const Loading = () => {
  const theme = useTheme();
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        opacity: "0.7",
        zIndex: 100,
        backgroundColor: theme.palette.background[300],
      }}
    >
      <CircularProgress sx={{ color: theme.palette.primary.main }} />
    </Stack>
  );
};

export default Loading;
