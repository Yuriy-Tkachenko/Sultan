import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body, html {
    margin: 0;
  }
  
  body {
    position: relative;
    min-height: 100%;
    width: 100%;
    font-family: "Inter", "Arial", sans-serif;
    font-size: 18px;
    line-height: 150%;
    font-weight: 300;
    color: #333333;
  }

  * {
    box-sizing: border-box;
  }
`