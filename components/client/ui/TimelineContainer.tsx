// components/Timeline.tsx
"use client";

import { motion } from "framer-motion";

export default function Timeline({ experiences }: any) {
  return (
    <div className="relative mx-auto xl:mx-0 max-w-3xl ">
      <div className="flex flex-col gap-12">
        {experiences?.map((exp: any, idx: any) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative shadow-lg bg-[#27272c]/55 backdrop-opacity-100 p-6 rounded-lg"
          >
            <div className="">
              <h3 className="text-lg font-medium">
                {exp.position} - {exp.company}
              </h3>
              <span className="text-xs text-accent">{exp.period}</span>
            </div>
            <div>
              <ul className="list-disc list-outside p-4 xl:list-none">
                {exp?.assignments.map((assignment: any, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="gap-2 mt-2 marker:text-accent"
                  >
                    <p className="block">{assignment}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
