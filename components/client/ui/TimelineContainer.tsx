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
              <ul className="list-disc list-outside p-4 ">
                {exp?.assignments.map((assignment: any, index: number) => (
                  <>
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
                  </>
                ))}
              </ul>
              <div className="flex gap-2 mt-4">
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-row gap-2 items-center">
                    <div className="flex gap-4 flex-wrap  text-white">
                      {exp.technologies.map((tech: any, index: number) => (
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          key={index}
                          className="flex items-center mt-2 rounded-2xl gap-2"
                        >
                          <span className="text-white/60 text-2xl">
                            {tech.icon}
                          </span>
                          <p className="text-sm text-white/60">{tech.name}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
