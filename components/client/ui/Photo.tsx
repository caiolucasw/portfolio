"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        className=" w-full h-full bg-gradient-to-r  mix-blend-lighten"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.5, ease: "easeInOut" }}
          className="w-full h-full flex justify-center items-center"
        >
          <div className="w-[400px] h-[349px] mix-blend-lighten relative border border-accent/30 border-dashed">
            <Image
              src="/assets/caio-perfil.png"
              priority
              quality={100}
              fill
              alt="caio perfil"
              className="object-contain"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,_black_0%,_transparent_25%)]"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
