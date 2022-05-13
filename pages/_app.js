import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../components/ThemeConfig";

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html,
  body {
      padding: 0;
      margin: 0;
      background-color: ${(p) => p.theme.colors.blue300};
      scroll-behavior: smooth;
  }

  main {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {

    font-family: ${(p) => p.theme.fonts.heading};
  }

  p, span {
    font-family: ${(p) => p.theme.fonts.paragraph};
  }

  a {
      color: inherit;
      text-decoration: none;
      font-family: ${(p) => p.theme.fonts.paragraph};
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
