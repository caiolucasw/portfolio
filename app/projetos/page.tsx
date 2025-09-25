import ProjectShowcase from "@/components/client/ui/Projects";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Projeto 1 – Silv",
    description: [
      "Plataforma para alugar ou disponibilizar casas de curta e média duração.",
      "Design responsivo, experiência mobile otimizada e interface intuitiva.",
      "Funcionalidades: autenticação JWT, busca filtrada de imóveis, reservas com confirmação online.",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwindcss"],
    image: "/projects/silv-properties.png",
    github: "https://github.com/caiolucasw/silv-properties",
    live: "https://silv-properties.vercel.app/",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Projeto 2 – FindMovies",
    description: [
      "Site para pesquisar informações sobre filmes e séries.",
      "Tecnologias usadas: Angular, HTML e CSS.",
      "Oferece sinopse, elenco e avaliações para ajudar na escolha da próxima maratona.",
    ],
    stack: ["Angular", "HTML", "CSS"],
    image: "/projects/findmovies.png",
    github: "https://github.com/caiolucasw/find-movies-angular",
    live: "https://find-movies-angular.vercel.app/",
  },
  {
    num: "03",
    category: "Backend",
    title: "Projeto 3 – Med Silv API",
    description: [
      "API REST para busca de médicos e pacientes em um sistema de saúde.",
      "Permite consultas por critérios como nome, especialidade ou CPF.",
      "Tecnologias usadas: Spring Boot, Java, MySQL e Swagger.",
    ],
    stack: ["Spring Boot", "Java", "MySQL", "Swagger"],
    image: "/projects/api-rest.webp",
    github: "https://github.com/caiolucasw/med-silv",
  },
];

export default function ProjectList() {
  return (
    <div className="flex flex-col divide-y divide-white/10">
      {projects.map((p, i) => (
        <ProjectShowcase
          key={i}
          index={p.num}
          label={p.category}
          title={p.title}
          subtitle={p.description[0]} // primeira frase como intro curta
          bullets={p.description} // todo o array vira lista detalhada
          badges={p.stack}
          imageUrl={p.image}
          githubUrl={p.github}
          demoUrl={p.live}
        />
      ))}
    </div>
  );
}
