import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { theme } from "./ThemeConfig";

const GlobalStyles = createGlobalStyle`
  html,
  body {
      padding: 0;
      margin: 0;
      background-color: ${(p) => p.theme.colors.blue_300};
       scroll-behavior: smooth;
  }

  main {
    min-height: 100vh;
   
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  * {
      box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
