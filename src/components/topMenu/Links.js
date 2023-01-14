import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Links({ section, goToSection, mobile }) {
  const location = useLocation();

  return (
    <nav>
      <div
        className={`link ${
          section === "Home" && location.pathname === "/" ? "active" : ""
        }`}
        onClick={() => {
          goToSection("Home");
        }}
      >
        Home
      </div>
      <div className="container">
        <div
          className={`link ${
            (section === "Services" && location.pathname === "/") ||
            (!mobile &&
              (location.pathname === "/services/waterproofing" ||
                location.pathname === "/services/restorations" ||
                location.pathname === "/services/roofing" ||
                location.pathname === "/services/cladding"))
              ? "active"
              : ""
          }`}
          onClick={() => {
            goToSection("Services");
          }}
        >
          Services
        </div>
        <div className="submenu">
          <NavLink to="/services/waterproofing">Waterproofing</NavLink>
          <NavLink to="/services/restorations">Restorations</NavLink>
          <NavLink to="/services/roofing">Roofing</NavLink>
          <NavLink to="/services/cladding">Cladding</NavLink>
        </div>
      </div>
      <div
        className={`link ${
          section === "About" && location.pathname === "/" ? "active" : ""
        }`}
        onClick={() => {
          goToSection("About");
        }}
      >
        About
      </div>
      <div className="container">
        <div
          className={`link ${
            (section === "Projects" && location.pathname === "/") ||
            (!mobile &&
              (location.pathname === "/projects/baps" ||
                location.pathname === "/projects/birchmount" ||
                location.pathname === "/projects/falstaff" ||
                location.pathname === "/projects/sgh"))
              ? "active"
              : ""
          }`}
          onClick={() => {
            goToSection("Projects");
          }}
        >
          Projects
        </div>
        <div className="submenu">
          <NavLink to="/projects/baps">Baps</NavLink>
          <NavLink to="/projects/birchmount">Brichmond</NavLink>
          <NavLink to="/projects/falstaff">Falstaff</NavLink>
          <NavLink to="/projects/sgh">Scarborough General Hospital</NavLink>
        </div>
      </div>
      <div
        className={`link ${
          section === "Contact" && location.pathname === "/" ? "active" : ""
        }`}
        onClick={() => {
          goToSection("Contact");
        }}
      >
        Contact
      </div>
      <NavLink to="/health_safty">Health & Safety</NavLink>
      <NavLink to="/emergency">Emergency Roof Repair</NavLink>
    </nav>
  );
}
