import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Quicksand', Helvetica, Sans-Serif;
    font-size: 1rem;
  }

  body {
    margin: 0;
  }

  input {
    font-weight: 500;
  }

  button {
    font-weight: 600;
  }
`;

export default GlobalStyle;
