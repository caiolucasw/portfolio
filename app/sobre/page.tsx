"use client";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaUniversity,
  FaLaravel,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiAngular,
} from "react-icons/si";

import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsList } from "@radix-ui/react-tabs";
import React from "react";
import TimelineContainer from "@/components/client/ui/TimelineContainer";
import { experiences } from "@/utils/experiences";

// const about = {
//   title: "Sobre mim",
//   description:
//     "Sou um desenvolvedor full stack com experiência em desenvolvimento web e backend, focado em criar soluções eficientes e escaláveis. Minha abordagem combina boas práticas de desenvolvimento, otimização de desempenho e arquitetura bem estruturada, garantindo aplicações robustas e de fácil manutenção.",
//   info: [
//     {
//       name: "Nome",
//       value: "Caio Lucas Silveira",
//     },
//     {
//       name: "Experiência",
//       value: "3+ Anos",
//     },
//     {
//       name: "Email",
//       value: "caiolsds@gmail.com",
//     },
//   ],
// };

const education = {
  icon: <FaUniversity />,
  title: "Educação",
  description:
    "Minha formação me proporcionou uma sólida base em algoritmos, estruturas de dados e princípios de engenharia de software, permitindo-me abordar desafios complexos com confiança e criatividade.",
  items: [
    {
      institution: "Universidade Estadual de Campinas (Unicamp)",
      course: "Engenharia de Computação",
      period: "08/2017 - 06/2022",
    },
    {
      institution: "Universidade de São Paulo (USP/ESALQ)",
      course: "MBA em Engenharia de Software",
      period: "04/2025 - Atual",
    },
  ],
};

const skills = {
  title: "Tecnologias",
  description: "",
  items: [
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring Boot",
    },
    { icon: <SiAngular />, name: "Angular" },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.5, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 px-4 xl:px-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Tecnologias</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-center xl:text-start ">
                  {experiences.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0 text-center xl:text-start ">
                  {experiences.description}
                </p>
                <section className="py-8 text-white">
                  <TimelineContainer experiences={experiences.items} />
                </section>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-full  text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <motion.li
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        key={index}
                        className="flex flex-col justify-center items-center bg-[#232329] h-[184px] py-6 px-10 rounded-xl lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.period}</span>
                        <h3 className="text-xl max-w-[264px] min-h-[68px] text-center lg:text-left">
                          {item.course}
                        </h3>
                        <div className="flex">
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h2 className="text-4xl font-bold">{skills.title}</h2>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] mt-4">
                    {skills.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.02 }}
                        viewport={{ once: true }}
                      >
                        <TooltipProvider delayDuration={100000}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] hover:text-accent  bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-6xl  transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
