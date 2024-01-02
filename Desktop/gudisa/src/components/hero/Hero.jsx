import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, duration: 10, repeatType: "mirror" },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}> Gudisa Gebi</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer &amp; Content Creator
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              Download Resume
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          {/* <KeyboardDoubleArrowDownIcon
            variants={textVariants}
            className="img"
            animate="scrollButton"
          /> */}
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Frontend Enginner and Content Creator
        </motion.div>
        <div className="imageContainer">
          <img src="gudisa.jpg" alt="The Developer Picture" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
