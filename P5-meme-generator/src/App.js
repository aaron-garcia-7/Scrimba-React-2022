import { createGlobalStyle } from "styled-components";

import Nav from "./components/Nav.js";
import Main from "./components/Main.js";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Main />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
    font-weight: 300;
  }
`;

export default App;
