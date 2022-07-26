import { React, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./styles/basic/_typography.scss";

import Home from "./pages/home/Home";
import HealthSafty from "./pages/HealthSafty";
import Emergency from "./pages/Emergency";

import Cladding from "./pages/services/Cladding";
import Restorations from "./pages/services/Restorations";
import Roofing from "./pages/services/Roofing";
import Waterproofing from "./pages/services/Waterproofing";

import BAPS from "./pages/projects/BAPS";
import Birchmount from "./pages/projects/Birchmount";
import Falstaff from "./pages/projects/Falstaff";
import SGH from "./pages/projects/SGH";

import TopMenu from "./components/topMenu/TopMenu";

function App() {
  const [menuState, setMenuState] = useState(false);
  const [homeSection, setHomeSection] = useState("");
  const sectionRefs = { homeSection, setHomeSection };

  const toggleMenuState = () => {
    setMenuState(!menuState);
  };
  let location = useLocation();

  useEffect(() => {
    setMenuState(false);
  }, [location]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 850 && !menuState) setMenuState(false);
    });
  }, [menuState]);

  return (
    <div>
      <TopMenu
        menuState={menuState}
        sectionRefs={sectionRefs}
        toggleMenuState={toggleMenuState}
      />
      <div className="Page" id="Page">
        <main>
          <Routes>
            <Route path="/" element={<Home refs={sectionRefs} />} />
            <Route path="/health_safty" element={<HealthSafty />} />
            <Route path="/emergency" element={<Emergency />} />

            <Route path="/services/cladding" element={<Cladding />} />
            <Route path="/services/restorations" element={<Restorations />} />
            <Route path="/services/roofing" element={<Roofing />} />
            <Route path="/services/waterproofing" element={<Waterproofing />} />

            <Route path="/projects/baps" element={<BAPS />} />
            <Route path="/projects/birchmount" element={<Birchmount />} />
            <Route path="/projects/falstaff" element={<Falstaff />} />
            <Route path="/projects/sgh" element={<SGH />} />
          </Routes>
        </main>
        <footer>Ⓒ Trinity Group Of Companies</footer>
      </div>
    </div>
  );
}

export default App;
