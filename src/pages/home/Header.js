import React from "react";
import "../../styles/pages/home/Header.scss";
import "../../pics/down.jpg";

export default function Header() {
  return (
    <section className="Header">
      <div id="Home">
        <div className="title">
          Leaders in quality constraction and restorations
        </div>
        <button
          className="arrow_down"
          onClick={() => {
            document
              .getElementById("Services")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </section>
  );
}
