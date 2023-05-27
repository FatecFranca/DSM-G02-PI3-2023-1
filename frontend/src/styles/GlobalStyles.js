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
    color: #F7EDE2; /* Alterada para um tom mais claro */
    background: #222; /* Alterada para um tom mais escuro */
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
