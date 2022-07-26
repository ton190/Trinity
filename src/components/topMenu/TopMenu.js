import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MobileLinks from "./MobileLinks";
import TopLinks from "./TopLinks";
import "../../styles/components/TopMenu/TopMenu.scss";
import "../../styles/components/TopMenu/Toggle.scss";

export default function TopMenu({ menuState, toggleMenuState, sectionRefs }) {
  const navigate = useNavigate();
  const location = useLocation();
  const goToSection = (id) => {
    sectionRefs.setHomeSection("");
    setNavSection(id);
    setSection(id);
    navigate("/", {
      state: {
        targetId: id,
        replaceu: true,
        smooth: location.pathname === "/",
      },
    });
  };

  const [section, setSection] = useState("");
  const [navSection, setNavSection] = useState("");

  useEffect(() => {
    if (navSection === "") {
      setSection(sectionRefs.homeSection);
    } else if (navSection === sectionRefs.homeSection) {
      setSection(sectionRefs.homeSection);
      setNavSection("");
    }
  }, [sectionRefs.homeSection, navSection]);

  return (
    <div className="TopMenu">
      <div className="logo">Trinity Group of Companies</div>
      <div
        className={`Toggle ${menuState ? "open" : ""}`}
        onClick={toggleMenuState}
      >
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <TopLinks section={section} goToSection={goToSection} />
      <MobileLinks
        section={section}
        goToSection={goToSection}
        menuState={menuState}
      />
    </div>
  );
}
