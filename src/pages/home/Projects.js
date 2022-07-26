import React from "react";
import "../../styles/pages/home/Projects.scss";

import "../../pics/project_1.jpg";
import "../../pics/project_2.jpg";
import "../../pics/project_3.jpg";
import "../../pics/project_4.jpg";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="Projects" id="Projects">
      <div className="section_title" id="section_projects">
        PROJECTS
      </div>
      <div className="container">
        <Link to="projects/baps" className="project_1">
          <div>BAPS SHRI SWAMINARAYAN MANDIR</div>
        </Link>
        <Link to="projects/birchmount" className="project_2">
          <div>2821 BIRCHMOUNT</div>
        </Link>
        <Link to="projects/falstaff" className="project_3">
          <div>40 FALSTAFF</div>
        </Link>
        <Link to="projects/sgh" className="project_4">
          <div>SCARBOROUGH GENERAL HOSPITAL</div>
        </Link>
      </div>
    </section>
  );
}
