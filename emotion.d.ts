import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    bg: {
      main: string;
      200: string;
      300: string;
    };
    primary: {
      main: string;
      200: string;
      300: string;
    };
    accent: {
      main: string;
      200: string;
    };
    text: {
      main: string;
      200: string;
    };
  }
}
