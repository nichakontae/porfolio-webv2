import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import AppRouter from "./router";
import theme from "./theme/theme";

const App = () => {
  return (
    // <React.Fragment> used for grouping multiple elements without adding extra DOM nodes be like <>...</>
    <React.Fragment>
      <ChakraProvider theme={theme}>
        <AppRouter />
      </ChakraProvider>
    </React.Fragment>
  );
};

export default App;
