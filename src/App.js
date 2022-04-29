import "./styles/App.css";

// Components
import Info from "./components/Info";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Info name={"Aaron Garcia"} logged={false} />
        <About />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
