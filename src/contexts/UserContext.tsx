"use client";

import { createContext, ReactNode } from "react";
import { 
  FaJava, FaPython, FaPhp, FaNodeJs, FaReact, FaDocker, FaAws, 
  FaGraduationCap, FaChalkboardTeacher, FaBriefcase,
  FaLightbulb, FaComments, FaRocket, FaHandsHelping, FaGitAlt,
  FaGithub, FaLinkedin, FaWhatsapp, FaDatabase 
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdCheckCircle } from "react-icons/md";
import { TbBrandCSharp } from "react-icons/tb";
import { 
  SiTypescript, SiGo, SiSpringboot, SiDjango, SiNextdotjs, SiIonic, 
  SiMui, SiPostgresql, SiMongodb, SiFirebase, SiRabbitmq, 
  SiOpenai, SiGooglegemini, SiLangchain, SiGmail, SiJunit5, SiVercel
} from "react-icons/si";

type Project = {
  title: string;
  description: string;
  links: {
    github?: string;
    demo?: string;
  };
  skills: Skill[];
  img: string;
  situation: "ongoing" | "finished";
}

type Contact = {
  type: string;
  title: string;
  link: string;
  icon: React.ElementType;
  color: string;
}

type Skill = {
  icon: React.ElementType;
  title: string;
  color: string;
}

type Skills = {
  hardskills: Skill[];
  softskills: Skill[];
}

type Experience = {
  company: string;
  period: string;
  role: string;
  description: string[];
  icon: React.ElementType;
  color: string;
}

type Location = {
  address: string;
  country: string;
  city: string;
  state: string;
  iframe?: string;
}

interface UserContextType {
  name: string;
  years: number;
  location: Location; 
  curriculum: string;
  projects: Project[];
  contacts: Contact[];
  titles: string[];
  about: string[]; 
  avatar: string;
  avatarBody: string;
  skills: Skills;
  experiences: Experience[];
}

const UserContext = createContext<UserContextType>({
  name: "",
  years: 0,
  location: { address: "", country: "", city: "", state: "" },
  curriculum: "",
  projects: [],
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
    { title: "React", icon: FaReact, color: "#22D3EE" },
    { title: "Next.js", icon: SiNextdotjs, color: "#070000ff" },
    { title: "Ionic", icon: SiIonic, color: "#6366F1" },
    { title: "Material UI", icon: SiMui, color: "#60A5FA" },
    { title: "PostgreSQL", icon: SiPostgresql, color: "#0EA5E9" },
    { title: "ChromaDB", icon: FaDatabase , color: "#e90e0eff" },
    { title: "MongoDB", icon: SiMongodb, color: "#16A34A" },
    { title: "Firebase", icon: SiFirebase, color: "#FACC15" },
    { title: "Vercel", icon: SiVercel, color: "#000000" },
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
    icon: FaGraduationCap,
    color: "#1c61f7",
  },
  {
    company: "PUC Minas",
    period: "02/2023 – 12/2025",
    role: "Graduação em Análise e Desenvolvimento de Sistemas",
    description: [],
    icon: FaGraduationCap,
    color: "#062cda",
  },
  // Experiência Acadêmica
  {
    company: "PUC Minas",
    period: "Fevereiro 2024 - Março 2024",
    role: "Monitor de Algoritmos e Estruturas de Dados",
    description: ["Reforço para alunos e apoio ao professor."],
    icon: FaChalkboardTeacher,
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
    icon: FaBriefcase,
    color: "#1c61f7",
  },
  {
    company: "ENGAGE ELETRO",
    period: "Março 2024 - Outubro 2024",
    role: "Auxiliar de T.I.",
    description: [
      "Suporte a ERP, relatórios (Excel/Power BI) e treinamentos internos."
    ],
    icon: FaBriefcase,
    color: "#070070",
  },
  {
    company: "4MTI",
    period: "Outubro 2024 - Março 2025",
    role: "Estagiário em Desenvolvimento de Software",
    description: [
      "Crawlers em PHP para coleta de dados e manutenção supervisionada em banco de dados."
    ],
    icon: FaBriefcase,
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
    icon: FaBriefcase,
    color: "#fa3200",
  },
];

const projects: Project[] = [
  {
    title: "Portifólio",
    description: "Portifólio pessoal desenvolvido em Next.js para expor minhas habilidades e projetos de forma interativa e moderna.",
    links: {
      github: "https://github.com/KloseBH/portifolio",
      demo: "https://portifolio-klosebh.vercel.app/"
    },
    skills: [
      { title: "Next.js", icon: SiNextdotjs, color: "#070000ff" },
      { title: "React", icon: FaReact, color: "#61DAFB" },
      { title: "TypeScript", icon: SiTypescript, color: "#2563EB" },
      { title: "Python", icon: FaPython, color: "#3B82F6" },
      { title: "LangChain", icon: SiLangchain, color: "#166534" },
      { title: "Vercel", icon: SiVercel, color: "#000000" },
      { title: "Material UI", icon: SiMui, color: "#60A5FA" }
    ],
    img: "/projects/portifolio.png",
    situation: "ongoing"
  }
];

const contacts: Contact[] = [
  { type: "Email", title: "danielhabdias@gmail.com", link: "mailto:danielhabdias@gmail.com?subject=Proposta de trabalho&body=Olá somos a Empresa...", icon: SiGmail, color: "#DC2626" },
  { type: "Linkedin", title: "Daniel Dias", link: "https://www.linkedin.com/in/daniel-henrique-alves-bicalho-dias-0143ab240", icon: FaLinkedin, color: "#0A66C2" },
  { type: "Github", title: "KloseBH", link: "https://github.com/KloseBH", icon: FaGithub, color: "#181717" },
  { type: "Whatsapp", title: "Talk to me", link: "https://wa.me/5531994332959", icon: FaWhatsapp, color: "#25D366" },
];

const about: string[] = [
  `💻 Sou <span style="color:#00ffff">Desenvolvedor Full-Stack</span>, com foco em <span style="color:#00ffff">Back-End</span>, formado em <span style="color:#00ffff">Análise e Desenvolvimento de Sistemas</span>. Atualmente atuo como <span style="color:#00ffff">Desenvolvedor Júnior</span> na 4MTI, onde fui efetivado rapidamente após estágio graças à minha dedicação e rápida adaptação.`,
  `🚀 Tenho experiência em <span style="color:#00ffff">web crawlers</span>, ingestão de grandes volumes de dados em <span style="color:#00ffff">PostgreSQL</span> e projetos de tecnologia embarcada (<span style="color:#00ffff">C/C++</span>). Também possuo conhecimentos em front-end, criando interfaces funcionais e modernas. Durante a graduação, fui monitor de <span style="color:#00ffff">Algoritmos e Estruturas de Dados</span> e recebi reconhecimento acadêmico.`,
  `🤖 Apaixonado por <span style="color:#00ffff">Inteligência Artificial</span>, aplico APIs como <span style="color:#00ffff">OpenAI</span> e <span style="color:#00ffff">Gemini</span> com uso de <span style="color:#00ffff">LangChain</span> e pipelines RAG. Prezo por <span style="color:#00ffff">boas práticas</span>, código limpo e soluções escaláveis. 🌱 Busco evolução constante, valorizo <span style="color:#00ffff">proatividade</span>, colaboração e comunicação clara para gerar impacto positivo em cada projeto.`
];

const UserProvider = ({ children }: { children: ReactNode }) => {
  const user: UserContextType = {
    name: "Daniel Dias",
    years: 21,
    location: {
      address: "Jardim Guanabara, Belo Horizonte - MG",
      country: "Brasil",
      city: "Belo Horizonte",
      state: "MG",
      iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7506.583706445522!2d-43.94567652152003!3d-19.82760029284191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6854346fe4ae1%3A0xf18da6a35a54630!2sJardim%20Guanabara%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1757267345126!5m2!1spt-BR!2sbr"
    },
    curriculum: "/curriculum.pdf",
    projects: projects,
    contacts : contacts,
    titles: ["Full-Stack Developer", "Front-End Developer", "Back-End Developer"],
    about,
    avatar: "/avatar.webp",
    avatarBody: "/avatarBody.png",
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