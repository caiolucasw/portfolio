"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export type ProjectShowcaseProps = {
  index?: string; // e.g. "01"
  label?: string; // e.g. "Projeto Full-Stack"
  title?: string; // e.g. "SILV – marketplace de aluguel"
  subtitle?: string; // pequena frase de impacto
  bullets?: string[]; // 2–4 pontos principais
  badges?: string[]; // stack: ["Next.js", "TypeScript", ...]
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string; // screenshot grande da aplicação
};

const defaultProps: ProjectShowcaseProps = {
  index: "01",
  label: "Projeto Full-Stack",
  title: "SILV – marketplace de aluguel",
  subtitle:
    "Plataforma para reservas de curta e média duração com autenticação JWT e busca filtrada.",
  bullets: [
    "Objetivo: conectar anfitriões e hóspedes com reservas seguras e simples.",
    "Meu papel: arquitetura, Next.js API routes, Auth JWT, MongoDB e deploy.",
    "Resultado: tempo de busca −30% e 95 de Lighthouse em mobile.",
  ],
  badges: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
  // demoUrl: "#",
  githubUrl: "#",
  imageUrl:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop", // troque pelo seu screenshot
};

// Chip simples para tech stack
function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/80 bg-white/5 ring-1 ring-white/10">
      <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
      {label}
    </span>
  );
}

// Botão reutilizável
function Btn({
  children,
  href,
  variant = "primary",
  icon,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  icon?: React.ReactNode;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black";
  const styles =
    variant === "primary"
      ? "bg-white text-gray-900 hover:bg-white/90 active:translate-y-[1px]"
      : "ring-1 ring-white/15 text-white hover:bg-white/5 active:translate-y-[1px]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles}`}
    >
      {icon}
      {children}
    </a>
  );
}

function BrowserFrame({ src }: { src: string }) {
  return (
    <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-gradient-to-b from-white/5 to-white/[0.03]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/30">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <div className="ml-4 h-6 flex-1 rounded-md bg-white/5 ring-1 ring-white/10" />
      </div>
      <div>
        <Image
          src={src}
          width={1200}
          height={800}
          alt="Screenshot do projeto"
          className="block w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function ProjectShowcase(props: ProjectShowcaseProps) {
  const {
    index,
    label,
    title,
    subtitle,
    bullets,
    badges,
    demoUrl,
    githubUrl,
    imageUrl,
  } = { ...defaultProps, ...props };

  return (
    <section className="relative mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_42%)]" />
      </div>

      <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Coluna esquerda: texto */}
        <div className="md:col-span-5">
          {/* badge superior */}
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/80 bg-white/5 ring-1 ring-white/10">
            <span className="font-mono tabular-nums">{index}</span>
            <span className="opacity-60">•</span>
            <span>{label}</span>
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70 max-w-[680px]">
            {subtitle}
          </p>

          {/* bullets */}
          <ul className="mt-6 space-y-2 text-sm/7 text-white/75">
            {bullets?.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {demoUrl && (
              <Btn
                href={demoUrl}
                variant="primary"
                icon={<ExternalLink size={16} />}
              >
                Ver Demo
              </Btn>
            )}
            <Btn href={githubUrl} variant="ghost" icon={<Github size={16} />}>
              Código no GitHub
            </Btn>
          </div>

          {/* badges de tecnologia */}
          <div className="mt-6 flex flex-wrap gap-2">
            {badges?.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </div>

        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className=""
            >
              {imageUrl && <BrowserFrame src={imageUrl} />}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
