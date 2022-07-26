import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../../styles/pages/services/Restorations.scss";
import "../../pics/services_head_2.jpg";

export default function Restoration() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Restorations">
          <div className="page_head" />
          <div className="page_body">
            <div className="section_title">RESTORATIONS</div>
            <div>
              Upgrade, maintenance and repair of the exterior components of
              building systems which can encompass, depending upon the building
              structure: repairs to curtain wall systems, masonry repair or
              replacement, window repair or replacement, concrete repair,
              caulking or sealant replacement, exterior painting, application of
              high performance coatings, waterproofing systems, air barriers,
              insulation and balcony restoration. Trinity Services LTD. utilizes
              approved restoration systems with warranties that often exceed new
              building construction.
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
