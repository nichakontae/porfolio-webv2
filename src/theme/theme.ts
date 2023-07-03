import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    darkMode: {
      bg: {
        main: "#111A29",
        200: "#1E293A",
        300: "#364053",
      },
      primary: {
        main: "#4D648D",
        200: "#7C91BD",
        300: "#DFF4FF",
      },
      accent: {
        main: "#A7B6D7",
        200: "#4A5A77",
      },
      text: {
        main: "#ffffff",
        200: "#E0E0E0",
      },
    },
    lightMode: {
      bg: {
        main: "#FFFFFF",
        200: "#f5f5f5",
        300: "#cccccc",
      },
      primary: {
        main: "#4D648D",
        200: "#7C91BD",
        300: "#DFF4FF",
      },
      accent: {
        main: "#A7B6D7",
        200: "#4A5A77",
      },
      text: {
        main: "#000000",
        200: "#2C2C2C",
      },
    },
  },
};

export default extendTheme(theme);
