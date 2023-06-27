import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    darkMode: {
      bg: "#0F1A2A",
      primary: "#4D648D",
      accent: "#A7B6D7",
      text: "#ffffff",
      variant: {
        "bg-200": "#1E293A",
        "bg-300": "#364053",
        "primary-200": "#7C91BD",
        "primary-300": "#DFF4FF",
        "accent-200": "#4A5A77",
        "text-200": "#E0E0E0",
      },
    },
    lightMode: {
      bg: "#FFFFFF",
      primary: "#4D648D",
      accent: "#A7B6D7",
      text: "#000000",
      variant: {
        "bg-200": "#f5f5f5",
        "bg-300": "#cccccc",
        "primary-200": "#7C91BD",
        "primary-300": "#DFF4FF",
        "accent-200": "#4A5A77",
        "text-200": "#2C2C2C",
      },
    },
  },
};

export default extendTheme(theme)
