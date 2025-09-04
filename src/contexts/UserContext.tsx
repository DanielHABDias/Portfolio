"use client";

import { createContext, ReactNode } from "react";
import { 
  FaJava, FaPython, FaPhp, FaNodeJs, FaReact, FaDocker, FaAws, 
  FaGraduationCap, FaChalkboardTeacher, FaBriefcase,
  FaLightbulb, FaComments, FaRocket, FaHandsHelping, FaGitAlt
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdCheckCircle } from "react-icons/md";
import { TbBrandCSharp } from "react-icons/tb";
import { 
  SiTypescript, SiGo, SiSpringboot, SiDjango, SiNextdotjs, SiIonic, 
  SiMui, SiPostgresql, SiMongodb, SiFirebase, SiRabbitmq, 
  SiOpenai, SiGooglegemini, SiLangchain 
} from "react-icons/si";

type AsideInfo = {
  type: string;
  title: string;
  link: string;
}

type Skills = {
  icon: React.ElementType;
  title: string;
  color: string;
}

type Habilits = {
  hardskills: Skills[];
  softskills: Skills[];
}

type Experience = {
  company: string;
  period: string;
  role: string;
  description: string[];
  icon: React.ElementType;
  color: string;
}

interface UserContextType {
  name: string;
  years: number;
  email: AsideInfo;
  linkedin: AsideInfo;
  whatsapp: AsideInfo;
  title: string;
  titles: string[];
  about: string[]; 
  avatar: string;
  avatarBody: string;
  habilits: Habilits;
  experiences: Experience[];
}

const UserContext = createContext<UserContextType>({
  name: "",
  years: 0,
  email: { type: "email", title: "", link: "" },
  linkedin: { type: "linkedin", title: "", link: "" },
  whatsapp: { type: "whatsapp", title: "", link: "" },
  title: "",
  titles: [],
  about: [],
  avatar: "",
  avatarBody: "",
  habilits: { hardskills: [], softskills: [] },
  experiences: [],
});

const habilits: Habilits = {
  hardskills: [
    { title: "Java", icon: FaJava, color: "#DC2626" },
    { title: "Python", icon: FaPython, color: "#3B82F6" },
    { title: "PHP", icon: FaPhp, color: "#4F46E5" },
    { title: "Node.js", icon: FaNodeJs, color: "#22C55E" },
    { title: "TypeScript", icon: SiTypescript, color: "#2563EB" },
    { title: "Golang", icon: SiGo, color: "#06B6D4" },
    { title: "C#", icon: TbBrandCSharp, color: "#7C3AED" },
    { title: "Spring Boot", icon: SiSpringboot, color: "#15803D" },
    { title: "Django", icon: SiDjango, color: "#166534" },
    { title: "React", icon: FaReact, color: "#22D3EE" },
    { title: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { title: "Ionic", icon: SiIonic, color: "#6366F1" },
    { title: "Material UI", icon: SiMui, color: "#60A5FA" },
    { title: "PostgreSQL", icon: SiPostgresql, color: "#0EA5E9" },
    { title: "MongoDB", icon: SiMongodb, color: "#16A34A" },
    { title: "Firebase", icon: SiFirebase, color: "#FACC15" },
    { title: "Docker", icon: FaDocker, color: "#3B82F6" },
    { title: "Git", icon: FaGitAlt , color: "#fa5d15ff" },
    { title: "AWS S3", icon: FaAws, color: "#F97316" },
    { title: "RabbitMQ", icon: SiRabbitmq, color: "#EA580C" },
    { title: "OpenAI", icon: SiOpenai, color: "#17407A" },
    { title: "Gemini", icon: SiGooglegemini, color: "#2563EB" },
    { title: "LangChain", icon: SiLangchain, color: "#166534" },
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

const about: string[] = [
  `💻 Desenvolvedor <span style="color:#00ffff">Full-Stack</span>, com foco em <span style="color:#00ffff">Back-End</span>, formado em <span style="color:#00ffff">Análise e Desenvolvimento de Sistemas</span>.`,
  `🚀 Atualmente atuo como <span style="color:#00ffff">Desenvolvedor Júnior</span> na 4MTI, efetivado rapidamente após estágio, demonstrando rápida adaptação e dedicação.`,
  `🤖 Tenho experiência no desenvolvimento de <span style="color:#00ffff">web crawlers</span> e ingestão de grandes volumes de dados em <span style="color:#00ffff">PostgreSQL</span>.`,
  `🌐 Apesar do foco em back-end, possuo conhecimentos em front-end, criando interfaces funcionais e esteticamente agradáveis.`,
  `🛠️ Participei de projetos relevantes, incluindo a COPASA, com soluções em tecnologia embarcada (C/C++) para microcontroladores.`,
  `📚 Durante a graduação, atuei como monitor de <span style="color:#00ffff">Algoritmos e Estruturas de Dados</span> e fui reconhecido por destaque acadêmico.`,
  `🤖 Apaixonado por <span style="color:#00ffff">Inteligência Artificial</span>, aplicando APIs de <span style="color:#00ffff">OpenAI</span> e <span style="color:#00ffff">Gemini</span> com uso de <span style="color:#00ffff">LangChain</span> e pipelines RAG.`,
  `🔧 Adoto boas práticas de desenvolvimento, priorizando código limpo, manutenível e escalável.`,
  `📊 Experiência em análise de dados e interpretação de métricas para apoiar decisões estratégicas.`,
  `💡 Proponho soluções criativas e inovadoras para desafios complexos, sempre alinhado aos objetivos do projeto.`,
  `🤝 Valorizo trabalho colaborativo e comunicação eficiente em equipes multidisciplinares.`,
  `🌱 Estudo constantemente novas tecnologias, frameworks e metodologias ágeis.`,
  `🛠️ Experiência prática em integração de sistemas e automação de processos, aumentando eficiência operacional.`,
  `🎯 Busco otimizar processos e reduzir erros através de testes, documentação e monitoramento contínuo.`,
  `🧠 Interesse em <span style="color:#00ffff">Inteligência Artificial</span> e aprendizado de máquina, explorando aplicações práticas.`,
  `⚡ Adaptação rápida a novos desafios e ambientes de trabalho dinâmicos.`,
  `📚 Comprometido com aprendizado contínuo e desenvolvimento pessoal, focado em evolução técnica e estratégica.`,
  `🎯 Valorizo <span style="color:#00ffff">proatividade</span>, <span style="color:#00ffff">aprendizado rápido</span>, comunicação clara e colaboração em equipe, buscando soluções eficientes e de qualidade.`
];

const UserProvider = ({ children }: { children: ReactNode }) => {
  const user: UserContextType = {
    name: "Daniel Dias",
    years: 21,
    email: {
      type: "Email",
      title: "danielhabdias@gmail.com",
      link: "mailto:danielhabdias@gmail.com?subject=Proposta de trabalho&body=Olá somos a Empresa..."
    },
    linkedin: {
      type: "Linkedin",
      title: "Daniel Dias",
      link: "https://www.linkedin.com/in/daniel-henrique-alves-bicalho-dias-0143ab240"
    },
    whatsapp: {
      type: "Whatsapp",
      title: "Talk to me",
      link: "https://wa.me/5531994332959"
    },
    title: "Full-Stack Developer",
    titles: ["Full-Stack Developer", "Front-End Developer", "Back-End Developer"],
    about,
    avatar: "/avatar.webp",
    avatarBody: "/avatarBody.png",
    habilits,
    experiences,
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };