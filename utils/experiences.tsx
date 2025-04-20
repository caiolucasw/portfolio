import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaFileAlt,
  FaUniversity,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiAngular,
  SiPhp,
  SiJavascript,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

export const experiences = {
  icon: <FaFileAlt />,
  title: "Experiência",
  description:
    "Sou um desenvolvedor full stack com experiência em desenvolvimento web e backend, focado em criar soluções eficientes e escaláveis. Minha abordagem combina boas práticas de desenvolvimento, otimização de desempenho e arquitetura bem estruturada, garantindo aplicações robustas e de fácil manutenção.",
  items: [
    {
      company: "SIGCORP",
      position: "Desenvolvedor Full Stack Pleno",
      period: "04/2024 - Atual",
      assignments: [
        "Manutenção de sistema legado utilizando PHP, JavaScript e MySQL",
        "Implementação de APIs REST com Node.js",

        "Desenvolvimento de dashboards interativos com Next.js",

        "Criação de WebServices e automações em background",

        "Planejamento e desenvolvimento de Jobs para rotinas automatizadas",
      ],
      technologies: [
        {
          name: "Laravel",
          icon: <FaLaravel />,
        },
        {
          name: "PHP",
          icon: <FaPhp />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs />,
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
      ],
    },
    {
      company: "Munddi Soluções em Tecnologia",
      position: "Desenvolvedor Full Stack Jr.",
      period: "06/2022 - 01/2024",
      assignments: [
        "Criação e migração de páginas de PHP e jQuery para React com TypeScript",
        "Implementação de APIs com o framework Laravel",
        "Criação e otimização de queries com o uso de MySQL",
        "Testes unitários com o uso do framework Jest",
      ],
      technologies: [
        {
          name: "React",
          icon: <SiReact />,
        },
        {
          name: "PHP",
          icon: <FaPhp />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs />,
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
        },
      ],
    },
    {
      company: "Munddi Soluções em Tecnologia",
      position: "Estagiário",
      period: "08/2021 - 06/2022",
      assignments: [
        "Implementação de um Mapa localizador de produtos utilizando React, TypeScript, Redux e Leaflet no front-end, e criação de API com Node.js e MongoDB no back-end",
        "Atualização de páginas de PHP para React",
        "Melhorias no layout do site da plataforma",
        "Correção de erros reportados por usuários",
      ],
      technologies: [
        {
          name: "React",
          icon: <SiReact />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
        },
        {
          name: "PHP",
          icon: <FaPhp />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
      ],
    },
  ],
};
