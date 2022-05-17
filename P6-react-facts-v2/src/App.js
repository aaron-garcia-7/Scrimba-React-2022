import React, { useState } from "react";
import "./styles/App.css";

// Components
import Nav from "./components/Nav";
import Facts from "./components/Facts";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className="App">
      <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Facts darkTheme={darkTheme} />
    </div>
  );
}

export default App;
