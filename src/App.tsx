import React, { useEffect, useMemo, useState } from "react";
import AppRouter from "./router";
import { getDesignTokens } from "./theme/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { PaletteMode, createTheme, useMediaQuery } from "@mui/material";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const mode = prefersDarkMode ? "dark" : "light";
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    // <React.Fragment> used for grouping multiple elements without adding extra DOM nodes be like <>...</>
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
