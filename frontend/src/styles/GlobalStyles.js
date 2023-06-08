import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    color: #222; /* Invertido cores */
    background: #f3f3f3;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
