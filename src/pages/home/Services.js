import React from "react";
import { Link } from "react-router-dom";
import "../../styles/pages/home/Services.scss";

import "../../pics/home_service_1.jpg";
import "../../pics/home_service_2.jpg";
import "../../pics/home_service_3.jpg";
import "../../pics/home_service_4.jpg";

export default function Services() {
  return (
    <section className="Services" id="Services">
      <div className="section_title" id="section_services">
        SERVICES
      </div>
      <div className="container">
        <Link to="/services/roofing" className="service_1">
          <div>RESIDENTIAL AND COMMERCIAL ROOFING</div>
        </Link>
        <Link to="/services/waterproofing" className="service_2">
          <div>WATERPROOFING</div>
        </Link>
        <Link to="/services/restorations" className="service_3">
          <div>RESTORATIONS</div>
        </Link>
        <Link to="/services/cladding" className="service_4">
          <div>CLADDING</div>
        </Link>
      </div>
    </section>
  );
}
