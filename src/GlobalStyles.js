import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const GlobalStyles = createGlobalStyle`
${reset}
  html {
    font-size: 10px;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input {
    border: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
`;
