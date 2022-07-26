import React from "react";
import "../../styles/pages/home/Statistic.scss";

export default function Statistic() {
  return (
    <section className="Statistic">
      <div className="container">
        <div>2000</div>
        <div>
          Year
          <br />
          Established
        </div>
      </div>
      <div className="container">
        <div>250+</div>
        <div>
          Projects
          <br />
          Completed
        </div>
      </div>
      <div className="container">
        <div>500+</div>
        <div>
          Contractors
          <br />
          Appointed
        </div>
      </div>
    </section>
  );
}
