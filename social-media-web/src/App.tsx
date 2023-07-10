import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./global/styles";
import { theme } from "./global/themes";

import { Routes } from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
