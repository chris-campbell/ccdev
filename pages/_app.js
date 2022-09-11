import Head from "next/head";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../styles/generalStyles/ThemeConfig";
import AppWrapper from "../context/state";
import "../styles/generalStyles/general.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
