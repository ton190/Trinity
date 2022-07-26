import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/pages/HealthSafty.scss";
import "../pics/safty.jpg";
import "../pics/safty_1.jpg";
import "../pics/safty_2.jpg";

export default function HealthSafty() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="HealthSafty">
          <div className="page_head" />
          <div className="page_body">
            <div className="section_title">OCUPATIONAL HEALTH AND SAFTY</div>
            <div className="container">
              <div className="box">
                <div className="content">
                  <div className="title">Our Statement</div>
                  <div>
                    Health and Safety is every employee working to continuously
                    improve and promote workplace health, safety and protection
                    of the natural environment. Trinity Canada will comply with
                    and exceed where possible all applicable health, safety and
                    environmental laws, regulations and standards. Senior
                    management and management are committed to provide and
                    maintain a safe and healthful work environment that promotes
                    occupational health and safety in order to eliminate any
                    hazards, which would result in personal injury/illness or
                    damage to property. Trinity Canada recognizes that all
                    workers have the right to work in a safe and healthy work
                    environment and is committed to working in a spirit of
                    consultation and co-operation with workers.
                  </div>
                </div>
                <div className="img img1" />
              </div>
              <div className="box">
                <div className="content">
                  <div className="title">Violence & Harassment</div>
                  <div>
                    Trinity Canada recognizes our responsibility to provide a
                    workplace free of violence and harassment. We will take
                    every reasonable precaution necessary to provide a safe
                    environment and maintain a “zero tolerance” for violence in
                    the workplace. Trinity Canada further recognizes that all
                    workers have the right to work in a violence and harassment
                    free workplace. Trinity Canada is committed to providing a
                    workplace and environment where all personnel and members of
                    the public are treated with respect, dignity and
                    consideration. Trinity Canada stands against any and all
                    forms of racism & discrimination.
                  </div>
                </div>
                <div className="img img2" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
