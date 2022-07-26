import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../pics/baps.jpg";
import "../../styles/pages/projects/BAPS.scss";

export default function BAPS() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="BAPS projects">
          <div className="page_head" />
          <div className="page_body">
            <div className="section_title">BAPS SHRI SWAMINARAYAN MANDIR</div>
            <div className="container">
              This special task for the mandir organization was completed in
              2013. Located at 61 Claireville Dr, Toronto, you can view our work
              done on this building off of the HWY 427.
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
