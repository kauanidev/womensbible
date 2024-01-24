import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.background} url(/img/bg-texture.png);
    color:  ${({ theme }) => theme.white};
    font-size: 1.6rem;
    min-height: 100vh;
  }

  body, html, input, button, textarea {
    font-family: "Poppins", sans-serif;
  }

  .container {
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  #root {
    min-height: 100vh;
  }
`;
