"use client";

import { UserContextType, Contact, Skills, Experience, Project, Achievement } from "@/types/user";
import { createContext, ReactNode } from "react";
import { 
  FaJava, FaPython, FaPhp, FaNodeJs, FaReact, FaDocker, FaAws, 
  FaLightbulb, FaComments, FaRocket, FaHandsHelping, FaGitAlt,
  FaGithub, FaLinkedin, FaWhatsapp, FaDatabase 
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdCheckCircle } from "react-icons/md";
import { TbBrandCSharp } from "react-icons/tb";
import { 
  SiTypescript, SiGo, SiSpringboot, SiDjango, SiNextdotjs, SiIonic, 
  SiMui, SiPostgresql, SiMongodb, SiFirebase, SiRabbitmq, 
  SiOpenai, SiGooglegemini, SiLangchain, SiGmail, SiJunit5, SiVercel, SiRender,
  SiFastapi, SiNestjs 
} from "react-icons/si";

const UserContext = createContext<UserContextType>({
  backend: "",
  name: "",
  years: 0,
  location: { address: "", country: "", city: "", state: "" },
  curriculum: "",
  projects: [],
  achievements: [],
  contacts: [],
  titles: [],
  about: [],
  avatar: "",
  avatarBody: "",
  skills: { hardskills: [], softskills: [] },
  experiences: [],
});

const skills: Skills = {
  hardskills: [
    { title: "Java", icon: FaJava, color: "#DC2626" },
    { title: "Python", icon: FaPython, color: "#3B82F6" },
    { title: "PHP", icon: FaPhp, color: "#4F46E5" },
    { title: "Node.js", icon: FaNodeJs, color: "#22C55E" },
    { title: "Golang", icon: SiGo, color: "#06B6D4" },
    { title: "TypeScript", icon: SiTypescript, color: "#2563EB" },
    { title: "CSharp", icon: TbBrandCSharp, color: "#7C3AED" },
    { title: "Spring Boot", icon: SiSpringboot, color: "#15803D" },
    { title: "Django", icon: SiDjango, color: "#166534" },
    { title: "FastAPI", icon: SiFastapi , color: "#087cb3ff" },
    { title: "React", icon: FaReact, color: "#22D3EE" },
    { title: "Next.js", icon: SiNextdotjs, color: "#070000ff" },
    { title: "NestJS", icon: SiNestjs, color: "#eb148aff" },
    { title: "Ionic", icon: SiIonic, color: "#6366F1" },
    { title: "Material UI", icon: SiMui, color: "#60A5FA" },
    { title: "PostgreSQL", icon: SiPostgresql, color: "#0EA5E9" },
    { title: "ChromaDB", icon: FaDatabase , color: "#e90e0eff" },
    { title: "MongoDB", icon: SiMongodb, color: "#16A34A" },
    { title: "Firebase", icon: SiFirebase, color: "#FACC15" },
    { title: "Vercel", icon: SiVercel, color: "#000000" },
    { title: "Render", icon: SiRender, color: "#000000" },
    { title: "Docker", icon: FaDocker, color: "#3B82F6" },
    { title: "Git", icon: FaGitAlt , color: "#fa5d15ff" },
    { title: "AWS S3", icon: FaAws, color: "#F97316" },
    { title: "RabbitMQ", icon: SiRabbitmq, color: "#EA580C" },
    { title: "OpenAI", icon: SiOpenai, color: "#0b08cfff" },
    { title: "Gemini", icon: SiGooglegemini, color: "#2563EB" },
    { title: "LangChain", icon: SiLangchain, color: "#166534" },
    { title: "PyUnit", icon: FaPython, color: "#f1ee08ff" },
    { title: "JUnit", icon: SiJunit5, color: "#1d7a00ff" },
  ],
  softskills: [
    { title: "Proatividade", icon: FaRocket, color: "#DC2626" },
    { title: "Comunicação Clara", icon: FaComments, color: "#3B82F6" },
    { title: "Aprendizado Rápido", icon: GiBrain, color: "#7C3AED" },
    { title: "Foco em Boas Práticas", icon: MdCheckCircle, color: "#16A34A" },
    { title: "Criatividade", icon: FaLightbulb, color: "#FACC15" },
    { title: "Trabalho em Equipe", icon: FaHandsHelping, color: "#EC4899" },
  ],
};

const experiences: Experience[] = [
  // Formação Acadêmica
  {
    company: "COLTEC UFMG",
    period: "02/2020 – 12/2022",
    role: "Técnico em Eletrônica",
    description: [],
    type: "academic",
    color: "#1c61f7",
  },
  {
    company: "PUC Minas",
    period: "02/2023 – 12/2025",
    role: "Graduação em Análise e Desenvolvimento de Sistemas",
    description: [],
    type: "academic",
    color: "#062cda",
  },
  // Experiência Acadêmica
  {
    company: "PUC Minas",
    period: "Fevereiro 2024 - Março 2024",
    role: "Monitor de Algoritmos e Estruturas de Dados",
    description: ["Reforço para alunos e apoio ao professor."],
    type: "professional",
    color: "#062cda",
  },
  // Experiência Profissional
  {
    company: "LITE COLTEC - COPASA",
    period: "Fevereiro 2022 - Dezembro 2022",
    role: "Pesquisador - Desenvolvedor",
    description: [
      "Projeto UFMG-COPASA com microcontroladores e LoraWAN (C/C++).",
      "Projeto resultou em patente registrada."
    ],
    type: "search",
    color: "#1c61f7",
  },
  {
    company: "ENGAGE ELETRO",
    period: "Março 2024 - Outubro 2024",
    role: "Auxiliar de T.I.",
    description: [
      "Suporte a ERP, relatórios (Excel/Power BI) e treinamentos internos."
    ],
    type: "professional",
    color: "#070070",
  },
  {
    company: "4MTI",
    period: "Outubro 2024 - Março 2025",
    role: "Estagiário em Desenvolvimento de Software",
    description: [
      "Crawlers em PHP para coleta de dados e manutenção supervisionada em banco de dados."
    ],
    type: "professional",
    color: "#fa3200",
  },
  {
    company: "4MTI",
    period: "Abril 2025 - Presente",
    role: "Desenvolvedor Full Stack Júnior",
    description: [
      "Desenvolvimento de crawlers e automações (PHP, Node.js, Python).",
      "Integração de APIs de IA (OpenAI, Gemini).",
      "Modelagem orientada a objetos (SOLID), PostgreSQL e suporte em infraestrutura.",
      "Efetivado de estagiário a júnior em poucos meses."
    ],
    type: "professional",
    color: "#fa3200",
  },
];

const projects: Project[] = [
  {
    title: "Portfólio",
    description: "Sou Daniel Dias, desenvolvedor full-stack com foco em back-end, e este é meu portfólio online. O front-end foi construído com Next.js, React, TypeScript e MUI, organizado em sessões de About, Skills, Experience, Project, Achievements e Contact, garantindo performance, responsividade e boa experiência ao usuário. O back-end, desenvolvido em Python com FastAPI, oferece funcionalidades dinâmicas, incluindo um chat com IA sobre mim e envio de e-mails via formulário. O site está hospedado no Vercel (front-end) e Render (back-end), permitindo fácil integração e manutenção. O portfólio destaca meus projetos, habilidades e conquistas, oferecendo navegação intuitiva e interatividade completa.",
    links: {
      github: "https://github.com/DanielHABDias/portfolio",
      demo: "https://danielhabdias.vercel.app"
    },
    skills: [
      { title: "Next.js", icon: SiNextdotjs, color: "#070000ff" },
      { title: "TypeScript", icon: SiTypescript, color: "#2563EB" },
      { title: "Python", icon: FaPython, color: "#3B82F6" },
      { title: "FastAPI", icon: SiFastapi , color: "#087cb3ff" },
      { title: "LangChain", icon: SiLangchain, color: "#166534" },
      { title: "Material UI", icon: SiMui, color: "#60A5FA" },
      { title: "Vercel", icon: SiVercel, color: "#000000" },
      { title: "Render", icon: SiRender, color: "#000000" },
    ],
    img: "/projects/portfolio.png",
    video: "/projects/portfolio.mp4",
    situation: "completed"
  },
  {
    title: "RabbitGo",
    description: "Um serviço simples de mensageria desenvolvido em Go, utilizando RabbitMQ para troca assíncrona e confiável de mensagens entre aplicações.",
    links: {
      github: "https://github.com/DanielHABDias/rabbitgo",
    },
    skills: [
      { title: "Golang", icon: SiGo, color: "#00ADD8" },
      { title: "RabbitMQ", icon: SiRabbitmq, color: "#EA580C" },
    ],
    img: "/projects/rabbitgo.png",
    video: "/projects/rabbitgo.mp4",
    situation: "completed"
  },
  {
    title: "APJobs",
    description: "APJobs é uma API simples para consulta de vagas de emprego, combinando web scraping e APIs públicas para oferecer buscas personalizadas por título, localização, tempo de publicação e paginação. O objetivo é exclusivamente educacional e demonstrativo, sem fins comerciais, respeitando sempre as políticas e limites das plataformas utilizadas.",
    links: {
      github: "https://github.com/DanielHABDias/apjobs",
    },
    skills: [
      { title: "Node.js", icon: FaNodeJs, color: "#22C55E" },
      { title: "React", icon: FaReact, color: "#61DAFB" },
      { title: "Docker", icon: FaDocker, color: "#3B82F6" },
    ],
    img: "/projects/apjobs.png",
    situation: "completed"
  },
  {
    title: "SmartWallet",
    description: "SmartWallet é um sistema de orçamento e planejamento financeiro pessoal, que permite aos usuários registrar contas, acompanhar transações, definir metas financeiras e receber alertas inteligentes. Desenvolvido com microserviços, mensageria, autenticação JWT e os bancos PostgreSQL e MongoDB, é uma aplicação full-stack escalável e profissional.",
    links: {
      github: "https://github.com/DanielHABDias/SmartWallet",
    },
    skills: [
      { title: "Next.js", icon: SiNextdotjs, color: "#070000ff" },
      { title: "TypeScript", icon: SiTypescript, color: "#2563EB" },
      { title: "Golang", icon: SiGo, color: "#00ADD8" },
      { title: "Java", icon: FaJava, color: "#DC2626" },
      { title: "Spring Boot", icon: SiSpringboot, color: "#15803D" },
      { title: "Material UI", icon: SiMui, color: "#60A5FA" },
      { title: "PostgreSQL", icon: SiPostgresql, color: "#0EA5E9" },
      { title: "MongoDB", icon: SiMongodb, color: "#16A34A" },
      { title: "RabbitMQ", icon: SiRabbitmq, color: "#EA580C" },
      { title: "Docker", icon: FaDocker, color: "#3B82F6" },
      { title: "Vercel", icon: SiVercel, color: "#000000" },
      { title: "Render", icon: SiRender, color: "#000000" },
    ],
    img: "/projects/smartwallet.png",
    situation: "in progress"
  },
];

const achievements: Achievement[] = [
  {
    title: "Patente Registrada UFMG-COPASA",
    description: "Projeto UFMG-COPASA com microcontroladores e LoraWAN (C/C++) desenvolvido com sucesso no LITE COLTEC - UFMG e patente registrada.",
    document: "/achievements/patente_lite.pdf",
    img: "/achievements/patente_lite.png"
  },
  {
    title: "Diploma de Conclusão de Curso em ADS",
    description: "Diploma de Conclusão de Curso em ADS ofercido pela PUC Minas concluido em 2025.",
    document: "/achievements/diploma_puc.pdf",
    img: "/achievements/diploma_puc.png"
  },
  {
    title: "Destaque Acadêmico em ADS",
    description: "Fui destaque acadêmico do primeiro periodo de ADS na PUC Minas.",
    document: "/achievements/destaque_puc.pdf",
    img: "/achievements/destaque_puc.png"
  },
  {
    title: "Certificado do Curso IA Master",
    description: "Certificado do Curso IA Master, onde me aprofundei em IA e como utiliza-la para criação de soluções inteligentes.",
    document: "/achievements/ia_master.pdf",
    img: "/achievements/ia_master.png"
  },
  {
    title: "Certificado do Curso Django Master",
    description: "Certificado do Curso Django Master, onde me aprofundei em Django e como utiliza-la para criação de aplicações web dinâmicas.",
    document: "/achievements/django_master.pdf",
    img: "/achievements/django_master.png"
  },
  {
    title: "Certificado do Curso Integration Master",
    description: "Certificado do Curso Integration Master, onde me aprofundei questões de integração.",
    document: "/achievements/integration_master.pdf",
    img: "/achievements/integration_master.png"
  },
];

const contacts: Contact[] = [
  { type: "Email", title: "danielhabdias@gmail.com", link: "mailto:danielhabdias@gmail.com?subject=Proposta de trabalho&body=Olá somos a Empresa...", icon: SiGmail, color: "#DC2626" },
  { type: "Linkedin", title: "Daniel Dias", link: "https://www.linkedin.com/in/danielhabdias", icon: FaLinkedin, color: "#0A66C2" },
  { type: "Github", title: "KloseBH", link: "https://github.com/DanielHABDias", icon: FaGithub, color: "#181717" },
  { type: "Whatsapp", title: "Talk to me", link: "https://wa.me/5531994332959", icon: FaWhatsapp, color: "#25D366" },
];

const about: string[] = [
  `💻 Sou <span class="highlight">Desenvolvedor Full-Stack</span>, com foco em <span class="highlight">Back-End</span>, formado em <span class="highlight">Análise e Desenvolvimento de Sistemas</span>. Atualmente atuo como <span class="highlight">Desenvolvedor Júnior</span> na 4MTI, onde fui efetivado rapidamente após estágio graças à minha dedicação e rápida adaptação.`,
  `🚀 Tenho experiência em <span class="highlight">web crawlers</span>, ingestão de grandes volumes de dados em <span class="highlight">PostgreSQL</span> e projetos de tecnologia embarcada (<span class="highlight">C/C++</span>). Também possuo conhecimentos em front-end, criando interfaces funcionais e modernas. Durante a graduação, fui monitor de <span class="highlight">Algoritmos e Estruturas de Dados</span> e recebi reconhecimento acadêmico.`,
  `🤖 Apaixonado por <span class="highlight">Inteligência Artificial</span>, aplico APIs como <span class="highlight">OpenAI</span> e <span class="highlight">Gemini</span> com uso de <span class="highlight">LangChain</span> e pipelines RAG. Prezo por <span class="highlight">boas práticas</span>, código limpo e soluções escaláveis. 🌱 Busco evolução constante, valorizo <span class="highlight">proatividade</span>, colaboração e comunicação clara para gerar impacto positivo em cada projeto.`
];

const UserProvider = ({ children }: { children: ReactNode }) => {
  const now = new Date();
  const dataNascimento = new Date('2004-11-22'); 
  const idade = now.getFullYear() - dataNascimento.getFullYear();
  const user: UserContextType = {
    backend: "https://portfolio-2k0u.onrender.com/",
    name: "Daniel Dias",
    years: idade,
    location: {
      address: "Jardim Guanabara, Belo Horizonte - MG",
      country: "Brasil",
      city: "Belo Horizonte",
      state: "MG",
      iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7506.583706445522!2d-43.94567652152003!3d-19.82760029284191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6854346fe4ae1%3A0xf18da6a35a54630!2sJardim%20Guanabara%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1757267345126!5m2!1spt-BR!2sbr"
    },
    curriculum: "/curriculum.pdf",
    projects: projects,
    achievements: achievements,
    contacts : contacts,
    titles: ["Full-Stack Developer", "Back-End Developer", "IA Developer"],
    about,
    avatar: "/avatar.png",
    avatarBody: "/avatar2.png",
    skills,
    experiences,
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };