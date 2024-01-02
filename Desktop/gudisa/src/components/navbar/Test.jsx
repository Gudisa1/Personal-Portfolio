import React, { useState } from "react";
import { motion } from "framer-motion";
const Test = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimating ? 500 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{
          opacity: 0.1,
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 60,
        }}
        onClick={() => setIsAnimating((prev) => !prev)}
      ></motion.div>
    </div>
  );
};

export default Test;
