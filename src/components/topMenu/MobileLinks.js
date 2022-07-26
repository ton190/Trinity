import React, { useEffect, useState, useRef } from "react";
import "../../styles/components/TopMenu/MobileLinks.scss";
import Links from "./Links";

export default function MobileLinks({ menuState, section, goToSection }) {
  const timer = useRef(null);

  const [linksClass, setLinksClass] = useState("closed");

  useEffect(() => {
    clearTimeout(timer.current);
    if (menuState) {
      setLinksClass("open");
    } else if (linksClass !== "closed") {
      setLinksClass("closing");
      timer.current = setTimeout(() => {
        setLinksClass(() => "closed");
      }, 300);
    }
  }, [menuState, linksClass]);

  return (
    <div className={`MobileLinks ${linksClass}`}>
      <Links section={section} goToSection={goToSection} mobile={true} />
    </div>
  );
}
