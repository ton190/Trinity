import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../styles/pages/services/Waterproofing.scss";
import "../../pics/services_head_1.jpg";

export default function Waterproofing() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Waterproofing">
          <div className="page_head" />
          <div className="page_body">
            <div className="section_title">WATERPROOFING</div>
            <div>
              Here at Trinity Canada, we have over 20 years of waterproofing
              experience with a very diverse portfolio to back it up. For the
              last 20 years, Trinity Services has successfully completed all
              types of projects ranging from commerical to residential and also
              Government. From Waterproofing to Traffic Topping, we do it all
            </div>
            <div className="page_content">
              <div className="title">We specialize in:</div>
              <div className="list">
                <ul>
                  <li>
                    Exterior and interior Waterproofing
                    <br />- Above and Below Grade
                  </li>
                  <li>Liquid Membranes</li>
                  <li>Weeping Tile Installation</li>
                  <li>Damp Proofing</li>
                  <li>Hot Rubber</li>
                  <li>Vapor Barrier</li>
                  <li>Crack Injection</li>
                </ul>
                <ul>
                  <li>Structural Repairs</li>
                  <li>Slab Replacement</li>
                  <li>Asphalt & Mastic</li>
                  <li>Traffic Toppings / Membranes</li>
                  <li>Waterproofing</li>
                  <li>Painting</li>
                  <li>Expansion Joints</li>
                  <li>Ramp Replacement (Snowmelt)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
