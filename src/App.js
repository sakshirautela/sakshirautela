import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutesComponent from "./components/Routes";
import "./styles/global.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <BrowserRouter>
      <div className={`app ${loaded ? "loaded" : ""}`}>
        {/* <CustomCursor /> */}
        <Navbar activeSection={activeSection} />
        <main>
          <RoutesComponent />
        </main>
      </div>
    </BrowserRouter>
  );
}