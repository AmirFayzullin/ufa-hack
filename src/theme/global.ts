import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
    color: ${({theme}) => theme.colors.text.l2};
    
    font-family: "Roboto", sans-serif;
  }
  
  body {
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
  }
`;