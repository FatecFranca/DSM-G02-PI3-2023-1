import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

  /* Global CSS */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    color: #fff;
    background: #333;
    font-family: Arial, Helvetica, sans-serif;
  }

`;

export default GlobalStyle;
