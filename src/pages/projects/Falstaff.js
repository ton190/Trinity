import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../pics/falstaff.jpg";
import "../../styles/pages/projects/Falstaff.scss";

export default function Falstaff() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Falstaff projects">
          <div className="page_head" />
          <div className="page_body">
            <div className="section_title">40 FALSTAFF</div>
            <div className="container">
              40 falstaff An amazing restoration site, done by our services
              division. From exterior reconstruction to roofing work. The
              diligent work process and application of great health and safety
              allowed Trinity Group to finish this project.
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
