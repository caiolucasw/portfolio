"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ExperienceElement({
  company,
  position,
  period,
  assignments,
  index,
}: {
  company: string;
  position: string;
  period: string;
  assignments: string[];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-[#232329] p-6 rounded-lg shadow-md relative"
    >
      {/* Bolinha do marcador na linha */}
      {/* <div className="w-4 h-4 bg-accent rounded-full absolute -left-6 top-4" /> */}
      <span className="text-accent text-sm">{period}</span>
      <h3 className="text-xl font-semibold mt-1">
        {position} - {company}
      </h3>
      <ul className="mt-3 space-y-2 text-white/80 text-sm">
        {assignments.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.6, duration: 0.5 }}
          >
            <span className="mt-1">•</span>
            <p>{item}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
