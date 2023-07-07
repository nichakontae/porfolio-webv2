import React, { useEffect, useMemo, useState } from "react";
import AppRouter from "./router";
import { getDesignTokens } from "./theme/theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { PaletteMode, createTheme, useMediaQuery } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [mode]);

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [prefersDarkMode]
  );

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
