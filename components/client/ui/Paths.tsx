import React from "react";
import { motion } from "framer-motion";

const totalSteps = 6;

const pathTransition = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
    transition: {
      duration: 0.3, // Set the duration specifically for the exit transition
    },
  },
};

const Paths = () => {
  return (
    <>
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          className="h-full w-full bg-accent relative"
          variants={pathTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: index * 0.08,
          }}
        ></motion.div>
      ))}
    </>
  );
};

export default Paths;
