import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Technologies from "./components/technologies/Technologies";
import Menu from "./components/menu/Menu";
import "./app.scss";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Hero menuOpen={menuOpen} />
        <Portfolio menuOpen={menuOpen} />
        <Works menuOpen={menuOpen} />
        <Technologies menuOpen={menuOpen} />
      </div>
    </div>
  );
}

export default App;
