import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/pages/home/Home.scss";
import BgMp4 from "../../pics/bg.mp4";
import BgJpg from "../../pics/bg.jpg";
import Header from "./Header";
import Services from "./Services";
import About from "./About";
import Statistic from "./Statistic";
import Projects from "./Projects";
import Partners from "./Partners";
import Contact from "./Contact";

export default function Home({ refs }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const setNewSection = (id) => {
      refs.setHomeSection(id);
    };

    let observer = new IntersectionObserver(
      (entities) => {
        entities.forEach((entity) => {
          if (entity.isIntersecting && entity.target.id !== refs.homeSection) {
            setNewSection(entity.target.id);
          }
        });
      },
      {
        threshold: [0.5],
        RootMargin: "150px 0px 150px 0px",
      }
    );

    observer.observe(document.getElementById("Home"));
    observer.observe(document.getElementById("Services"));
    observer.observe(document.getElementById("About"));
    observer.observe(document.getElementById("Projects"));
    observer.observe(document.getElementById("Contact"));

    return () => {
      observer.disconnect();
    };
  }, [refs]);

  useEffect(() => {
    if (!state) return;
    const el = document.getElementById(state.targetId);
    if (el) {
      const options = state.smooth ? { behavior: "smooth" } : {};
      el.scrollIntoView(options);
    }
  }, [state, navigate]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="Home">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            poster={BgJpg}
          >
            <source src={BgMp4} type="video/mp4" />
          </video>

          <Header />
          <Services />
          <div className="separator"></div>
          <About />
          <div className="separator"></div>
          <Statistic />
          <div className="separator"></div>
          <Projects />
          <div className="separator"></div>
          <Partners />
          <div className="separator"></div>
          <Contact />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
