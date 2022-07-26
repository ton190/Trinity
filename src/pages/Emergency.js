import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../pics/emergency.jpg";
import "../styles/pages/Emergency.scss";

export default function Emergency() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Emergency">
          <div className="page_head" />
          <div className="page_body">
            <div className="section_title">EMERGANCY ROOFING SERVICES</div>
            <div className="container">
              Our roofing department is dedicated to keeping our customers
              satisfied and extending the life of our clients' roof. We are
              available for emergency roof and leak repairs. Please call
              1-866-559-0552 and we will have someone dispatched to your area
              immediately.
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
