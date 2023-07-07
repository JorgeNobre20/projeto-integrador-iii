import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./global/styles";
import { theme } from "./global/themes";

import { Login } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  )
}

export default App
