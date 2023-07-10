import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
  }

  html{
    height: 100%;
  }

  body{
    min-height: 100vh;
    height: 100%;
  }

  input, button {
    background: none;
    border: none;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

  #root{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;