import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../pics/birchmount.jpg";
import "../../styles/pages/projects/Birchmount.scss";

export default function Birchmount() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Birchmount projects">
          <div className="page_head" />
          <div className="page_body">
            <div className="section_title">2821 BIRCHMOUNT</div>
            <div className="container">
              2821 birchmount Located in Scarborough. A full exterior
              reconstruction with interior renovations and roofing work. With
              great effort, we were able to complete this project effectively
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
