import GlobalStyle from "./GlobalStyles";

// Components
import Nav from "./components/Nav";
import Journal from "./components/Journal";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav title={"Travel Journal"} />
      <Journal />
    </div>
  );
}

export default App;
