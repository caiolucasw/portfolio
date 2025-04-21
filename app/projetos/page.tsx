"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  SiHtml5,
  SiCss3,
  SiAngular,
  SiSpringboot,
  SiMysql,
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiSwagger,
} from "react-icons/si";

import { FaExternalLinkAlt } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import SliderButtons from "@/components/client/SliderButtons";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Projeto 1",
    description:
      "Silv é a plataforma ideal para quem deseja alugar ou disponibilizar casas para estadias de curta e média duração. Com uma experiência simples e segura, proprietários podem listar suas propriedades para aluguel por noites, semanas ou meses, enquanto inquilinos encontram acomodações perfeitas para suas necessidades. Seja para uma viagem curta ou uma estadia prolongada, Silv conecta anfitriões e hóspedes de forma prática, garantindo conforto, transparência e flexibilidade em cada reserva.",
    stack: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-cl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-cl" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-cl" />,
      },
      {
        name: "Tailwindcss",
        icon: <SiTailwindcss className="text-cl" />,
      },
    ],
    image: "/projects/silv-properties.png",
    github: "https://github.com/caiolucasw/silv-properties",
    live: "https://silv-properties.vercel.app/",
  },
  {
    num: "02",
    category: "frontend",
    title: "Projeto 2",
    description:
      "O local ideal para procurar informações sobre filmes e séries. Com uma interface simples e intuitiva, você pode pesquisar pelo título do filme ou série. Além disso, o site oferece detalhes sobre cada filme ou série, incluindo sinopse, elenco e avaliações. Acesse agora e descubra o que assistir em sua próxima maratona!",
    stack: [
      {
        name: "Angular",
        icon: <SiAngular className="text-cl" />,
      },
      {
        name: "HTML",
        icon: <SiHtml5 className="text-cl" />,
      },
      {
        name: "CSS",
        icon: <SiCss3 className="text-cl" />,
      },
    ],
    image: "/projects/findmovies.png",
    github: "https://github.com/caiolucasw/find-movies-angular",
    live: "https://find-movies-angular.vercel.app/",
  },
  {
    num: "03",
    category: "backend",
    title: "Projeto 3",
    description:
      "Esta API REST tem como objetivo fornecer uma interface simples e padronizada para a busca de médicos e pacientes cadastrados em um sistema de saúde. Através de requisições HTTP, é possível realizar consultas com base em diferentes critérios, como nome, especialidade médica, CPF, entre outros.",
    stack: [
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="text-cl" />,
      },
      {
        name: "Java",
        icon: <SiSpringboot className="text-cl" />,
      },
      {
        name: "MySql",
        icon: <SiMysql className="text-cl" />,
      },
      {
        name: "Swagger",
        icon: <SiSwagger className="text-cl" />,
      },
    ],
    image: "/projects/api-rest.webp",
    github: "https://github.com/caiolucasw/medsilveira",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col  justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] relative sm:static">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-1 sm:order-2 xl:order-none">
            <div>
              <div className="text-7xl leading-none font-extrabold text-outline text-accent">
                {project.num}
              </div>
              <div className="flex gap-4 items-center">
                <h2 className="text-[32px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                  Projeto {project.category}
                </h2>
                <Link
                  className="rounded-full bg-[#27272c] p-4 hover:opacity-50"
                  href={project.github}
                  target="_blank"
                >
                  <SiGithub className="text-cl" />
                </Link>
                {project.live && (
                  <Link
                    className="rounded-full bg-[#27272c] p-4 hover:opacity-50"
                    href={project.live}
                    target="_blank"
                  >
                    <FaExternalLinkAlt className="text-cl" />
                  </Link>
                )}
              </div>
              <p className="text-white/60 my-4">{project.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-white h-[100px] bg-[#27272c] rounded-lg p-1 group hover:text-accent transition-all duration-500 text-xl justify-center"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              className="xl:h-[520px] mb-12 swiperCustom"
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={(swiper) => {
                setProject(projects[swiper.activeIndex]);
              }}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="hidden  relative swiperCustom sm:h-[460px] group sm:flex justify-center items-center bg-white/4 w-full p-2 shadow-2xl rounded-sm border-8 border-black/1">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10"></div>
                    <div>
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="hidden sm:block object-fill object-center  transition-all duration-500 backdrop-blur-2xl"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButtons
                containerStyles="flex gap-2 absolute right-0 buttonCustom sm:bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between wl:w-max xl:justify-none"
                btnStyles="bg-accent/50 text-white/50 hover:bg-accent hover:text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer rounded-xl"
                numSlides={projects.length}
                disabledStyles="hover:bg-accent/50 cursor-not-allowed hover:text-white/50"
                showCount={true}
                iconsStyles="text-[22px] text-white/50 group-hover:text-primary transition-all duration-500"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
