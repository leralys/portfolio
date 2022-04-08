import { useState, useEffect, createContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Technologies from "./components/technologies/Technologies";
import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import "./app.scss";

export const SizeContext = createContext(null);

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isComputer, setIsComputer] = useState(false);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    window.innerWidth > 768 ? setIsComputer(true) : setIsComputer(false);
    setHeight(window.innerHeight - 70);
  }, []);
  return (
    <SizeContext.Provider value={isComputer}>
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections" style={{ maxHeight: `${height}px` }}>
          <Hero menuOpen={menuOpen} />
          <Portfolio menuOpen={menuOpen} />
          <Works menuOpen={menuOpen} />
          <Technologies menuOpen={menuOpen} />
          <Contact menuOpen={menuOpen} />
        </div>
      </div>
    </SizeContext.Provider>
  );
}

export default App;
