import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../styles/pages/services/Roofing.scss";
import "../../pics/services_head_3.jpg";
import icon1 from "../../pics/icon_1.jpg";
import icon2 from "../../pics/icon_2.jpg";
import icon3 from "../../pics/icon_3.jpg";
import "../../pics/roofing_1.jpg";
import "../../pics/roofing_2.jpg";
import "../../pics/roofing_3.jpg";
import "../../pics/roofing_4.jpg";
import "../../pics/roofing_5.jpg";
import "../../pics/roofing_6.jpg";

export default function Roofing() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Roofing">
          <div className="page_head" />
          <div className="page_body">
            <div className="section_title">ROOFING</div>
            <div className="options">
              <div className="container">
                <div className="box_top">
                  <img src={icon1} alt="icon_1" />
                  <div className="title">ROOF REPAIRS</div>
                </div>
                <div>
                  Our Roof experts will assess your roof for any immediate
                  repairs needed. We will do our best to lengthen the lifespan
                  of your roof as long as possible, while keeping costs down.
                </div>
              </div>
              <div className="container">
                <div className="box_top">
                  <img src={icon2} alt="icon_2" />
                  <div className="title">ROOF INSPECTION</div>
                </div>
                <div>
                  Our team is available 24/7 to provide roof inspections to
                  ensure quality service while addressing any concerns you may
                  have.
                </div>
              </div>
              <div className="container">
                <div className="box_top">
                  <img src={icon3} alt="icon_3" />
                  <div className="title">ROOF ESTIMATES</div>
                </div>
                <div>
                  We are committed to providing the best work possible, while
                  also providing the best prices possible. Call us today for a
                  quote regarding your project! 416-630-9312
                </div>
              </div>
            </div>
            <div className="list_container">
              <div className="box1">
                <div className="title">SHINGLE REPLACEMENT</div>
              </div>
              <div className="box2">
                <div className="title">ROOF INSPECTION</div>
              </div>
              <div className="box3">
                <div className="title">SOLAR PANEL INSTALLATION</div>
              </div>
              <div className="box4">
                <div className="title">FLAT ROOF REPLACEMENT</div>
              </div>
              <div className="box5">
                <div className="title"></div>
              </div>
              <div className="box6">
                <div className="title">SKYLIGHT INSTALLATION</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
