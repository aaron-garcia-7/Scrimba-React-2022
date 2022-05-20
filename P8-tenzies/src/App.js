import React from "react";
import Game from "./Game";

import { createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Game />
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
  }
  body{
      background: #0B2434;
      height: 100vh;
      min-height: 32rem;
      display: flex;
      justify-content: center;
      align-items: center;
  }
`;

export default App;
