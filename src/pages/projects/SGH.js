import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../pics/sgh.jpeg";
import "../../styles/pages/projects/SGH.scss";

export default function SGH() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="SGH projects">
          <div className="page_head" />
          <div className="page_body">
            <div className="section_title">SCARBOROUGH GENERAL HOSPITAL</div>
            <div className="container">
              The Scarborough General Hospital is a prime example of being able
              to execute high quality production with high quality health &
              safety, without hindering on projected timeline. Exterior
              restoration and window replacements were done at this site.
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
