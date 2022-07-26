import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../styles/pages/services/Cladding.scss";
import "../../pics/cladding_1.jpg";

export default function Cladding() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Cladding">
          <div className="page_head" />
          <div className="page_body">
            <div className="section_title">CLADDING</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
