import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../components/ThemeConfig";
import Head from "next/head";

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

  h1 {
    font-size: clamp(1.5rem, 3vw, 2rem)
  }

  h2 {
    font-size: clamp(1.5rem, 3vw, 2rem)
  }

  p, span {
    font-family: ${(p) => p.theme.fonts.paragraph};
  }

  a {
      color: inherit;
      text-decoration: none;
      font-family: ${(p) => p.theme.fonts.paragraph};
  }

  iframe {
    width: 100%;
    height: 500px;
    margin-bottom: 2rem;
    border-radius: 0.2rem;
  }


  pre {
    /* display: block; */
    /* height: auto; */
    border: 3px solid #316ec985;
    max-width: 100%;
        overflow-x: auto;
      /* -webkit-overflow-scrolling: touch; */
          white-space: pre;
    word-spacing: normal;
      /* white-space: pre-wrap; */
    padding: 3rem;
    background-color: #171a1f;
    border-radius: 0.5rem;
    width: 100%;
-webkit-box-shadow: 0px 3px 10px 5px rgba(0,0,0,0.18); 
box-shadow: 0px 3px 10px 5px rgba(0,0,0,0.18);
 /* word-break: break-all; */
      ::-webkit-scrollbar {
    background-color: transparent;
    padding-left: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #29313a;
    border-radius: 1rem;
  }
    code {
      font-family: "Source Code Pro", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
      color: #aaa;
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
