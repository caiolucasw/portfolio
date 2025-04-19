"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Paths from "./Paths";

const PathTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Paths />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default PathTransition;
