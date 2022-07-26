import React from "react";
import Links from "./Links";
import "../../styles/components/TopMenu/TopLinks.scss";

export default function TopLinks({ section, goToSection }) {
  return (
    <div className="Links">
      <Links section={section} goToSection={goToSection} mobile={false} />
    </div>
  );
}
