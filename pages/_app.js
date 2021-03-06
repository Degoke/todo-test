import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MainContextProvider } from "../src/utils/main-context";
import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export const ModeContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [dark, setDark] = useState(true);

  const value = useMemo(() => ({ dark, setDark }), [dark]);

  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
  });

  return (
    <>
      <Head>
        <title>TODO APP</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MainContextProvider>
        <ModeContext.Provider value={value}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </ModeContext.Provider>
      </MainContextProvider>
    </>
  );
};

export default MyApp;
