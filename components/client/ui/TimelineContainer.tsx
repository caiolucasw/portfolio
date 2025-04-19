// components/Timeline.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  { title: "Desenvolvedor Júnior", company: "Empresa A", date: "2021 - 2022" },
  { title: "Desenvolvedor Pleno", company: "Empresa B", date: "2022 - 2023" },
  {
    title: "Desenvolvedor Sênior",
    company: "Empresa C",
    date: "2023 - Atualmente",
  },
];

export default function Timeline({ experiences }: any) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative mx-auto xl:mx-0 max-w-3xl " ref={containerRef}>
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
              <ul className="list-disc list-inside">
                {exp?.assignments.map((assignment: any, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="gap-2 mt-2 marker:text-accent"
                  >
                    <p className="inline-block">{assignment}</p>
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
