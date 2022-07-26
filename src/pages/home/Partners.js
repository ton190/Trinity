import React from "react";
import "../../styles/pages/home/Partners.scss";
import partner1 from "../../pics/partner_1.jpg";
import partner2 from "../../pics/partner_2.jpg";
import partner3 from "../../pics/partner_3.jpg";
import partner4 from "../../pics/partner_4.jpg";
import partner5 from "../../pics/partner_5.jpg";
import partner6 from "../../pics/partner_6.jpg";
import partner7 from "../../pics/partner_7.jpg";
import partner8 from "../../pics/partner_8.jpg";

export default function Partners() {
  return (
    <section className="Partners">
      <div className="section_title">PARTNERS AND CERTIFICATES</div>
      <div className="container">
        <img alt="partner_1" className="img1" src={partner1} />
        <img alt="partner_2" className="img2" src={partner2} />
        <img alt="partner_3" className="img3" src={partner3} />
        <img alt="partner_4" className="img4" src={partner4} />
        <img alt="partner_5" className="img5" src={partner5} />
        <img alt="partner_6" className="img6" src={partner6} />
        <img alt="partner_7" className="img7" src={partner7} />
        <img alt="partner_8" className="img8" src={partner8} />
      </div>
    </section>
  );
}
