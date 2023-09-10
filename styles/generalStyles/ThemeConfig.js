import { createGlobalStyle } from "styled-components";

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
    background-color: ${(p) => p.theme.colors.darkBlue};
    scroll-behavior: smooth;
    height:100%;
    font-family: ${(p) => p.theme.fonts[1]};
  }

  main {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(p) => p.theme.fonts[0]};
  }

  p, span, a, blockquote {
    font-family: ${(p) => p.theme.fonts[1]};
    color: ${(p) => p.theme.fonts[1]};
    font-weight: 400 !important; 
    font-style: normal !important;
  }

  h1 {
    font-size: clamp(1.913rem, calc( 12px + 2.475vw ), 2rem);
    line-height: 1.1;
  }

  h2 {
    font-size: clamp(1.575rem, calc( 12px + 1.800vw ), 1.6rem);
    line-height: 1.1;
  }

  h3 {
    font-size: clamp(1.282rem, calc( 12px + 1.350vw ), 1.488rem);
    line-height: 1.1;
  }

  h4 {
    font-size: clamp(1.125rem, calc( 12px + 0.900vw ), 1.350rem);
    line-height: 1.1;
  }

  strong {
    font-weight: 900;
    color: white;
  }


  ul li {
    font-family: ${(p) => p.theme.fonts[1]};
    margin-bottom: 1rem;
  }

  p, blockquote {
    font-size: clamp(1.035rem, calc( 12px + 0.540vw ), 1.125rem);
    line-height: 1.3;
  }

  blockquote {
    font-style: italic;
    margin-bottom: 2rem;
    color: ${(p) => p.theme.colors.egg} !important; 
  }

  span {
    font-size: clamp(0.900rem, calc( 12px + 0.360vw ), 1.012rem);
    line-height: 1.1;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: ${(p) => p.theme.fonts[1]} !important;
  }

  iframe {
    width: 100%;
    height: 500px;
    margin-bottom: 2rem;
    border-radius: 0.2rem;
  }

  blockquote {
    color: #aaa;
  }

  pre {
    border: 0px solid #316ec985 !important;
    margin-bottom: 2rem !important;
    max-width: 100% !important;
    overflow-x: auto !important;
    white-space: pre !important;
    word-spacing: normal;
    padding: 3rem 3rem 2rem 3rem !important;
    background-color: #171a1f !important;
    border-radius: 0.5rem;
    width: 100% !important;
    -webkit-box-shadow: 0px 3px 10px 5px rgba(0,0,0,0.18) !important; 
    box-shadow: 0px 3px 10px 5px rgba(0,0,0,0.18) !important;

  ::-webkit-scrollbar {
    background-color: transparent;
    padding-left: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #29313a;
    border-radius: 1rem;
  }
    code {
      font-size: 1rem !important;
      line-height: 1.4;
      span {
        font-family: "Source Code Pro", SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace !important;
      }
    }
  }
`;

export const theme = {
  colors: {
    darkBlue: "#23282F",
    coalBlue: "#2B323B",
    royal: "#316EC9",
    blueSky: "#86A8DB",
    orange: "#FF7105",
    darkGrey: "#707070",
    lightGrey: "#e0e0e0",
    egg: "#F2F2F2",
  },
  fonts: ["SocialGothicBold, sans-serif", "Roboto"],
};

export default GlobalStyles;
