import React, { useEffect, useState } from "react";
import AppRouter from "./router";
import { darkMode, lightMode } from "./theme/theme";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const [theme, setTheme] = useState<String>("light");
  let isDarkTheme: boolean = true;
  const checkPreferColorScheme = () => {
    const a = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(a.matches ? "dark" : "light");
    isDarkTheme = theme === "light";
  };
  useEffect(() => {
    checkPreferColorScheme();
    console.log(theme);
  }, [theme]);

  return (
    // <React.Fragment> used for grouping multiple elements without adding extra DOM nodes be like <>...</>
    <React.Fragment>
      <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
        <AppRouter />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
