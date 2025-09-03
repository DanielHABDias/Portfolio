"use client";

import { createContext } from "react";
import { FaJava, FaPython, FaPhp, FaNodeJs, FaReact, FaDocker, FaAws, FaGraduationCap, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import { SiTypescript, SiGo, SiSpringboot, SiDjango, SiNextdotjs, SiIonic, SiMui, SiPostgresql, SiMongodb, SiFirebase, SiRabbitmq, SiOpenai, SiGooglegemini, SiLangchain } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaLightbulb, FaComments, FaRocket, FaHandsHelping } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdCheckCircle } from "react-icons/md";

type AsideInfo = {
  type: string;
  title: string;
  link: string;
}

type Skills = {
  icon: any;
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
  icon: any;
  color: string;
}

interface UserContext {
  'name': string;
  'years': number;
  'email': AsideInfo;
  'linkedin': AsideInfo;
  'whatsapp': AsideInfo;
  'title': string;
  'titles': string[];
  'about': string;
  'avatar': string;
  'habilits'?: Habilits;
  'experiences'?: Experience[];
}

const UserContext = createContext<UserContext>({
  name: "",
  years: 0,
  email: { type: "email", title: "", link: "" },
  linkedin: { type: "linkedin", title: "", link: "" },
  whatsapp: { type: "whatsapp", title: "", link: "" },
  title: "",
  titles: [],
  about: "",
  avatar: "",
  habilits: { hardskills: [], softskills: [] },
  experiences: [],
});

const habilits: Habilits = {
  hardskills: [
    // Linguagens
    { title: "Java", icon: FaJava, color: "#DC2626" },       // vermelho
    { title: "Python", icon: FaPython, color: "#3B82F6" },   // azul
    { title: "PHP", icon: FaPhp, color: "#4F46E5" },         // indigo
    { title: "Node.js", icon: FaNodeJs, color: "#22C55E" },  // verde
    { title: "TypeScript", icon: SiTypescript, color: "#2563EB" }, // azul
    { title: "Golang", icon: SiGo, color: "#06B6D4" },       // cyan
    { title: "CSharp", icon: TbBrandCSharp, color: "#7C3AED" },  // roxo

    // Frameworks/Bibliotecas
    { title: "Spring Boot", icon: SiSpringboot, color: "#15803D" }, // verde escuro
    { title: "Django", icon: SiDjango, color: "#166534" },         // verde escuro
    { title: "React", icon: FaReact, color: "#22D3EE" },           // cyan claro
    { title: "Next.js", icon: SiNextdotjs, color: "#ffffffff" },     // preto
    { title: "Ionic", icon: SiIonic, color: "#6366F1" },           // indigo
    { title: "Material UI", icon: SiMui, color: "#60A5FA" },       // azul claro

    // Banco de Dados
    { title: "PostgreSQL", icon: SiPostgresql, color: "#0EA5E9" }, // azul
    { title: "MongoDB", icon: SiMongodb, color: "#16A34A" },       // verde
    { title: "Firebase", icon: SiFirebase, color: "#FACC15" },     // amarelo

    // Infraestrutura
    { title: "Docker", icon: FaDocker, color: "#3B82F6" },         // azul
    { title: "AWS S3", icon: FaAws, color: "#F97316" },            // laranja
    { title: "RabbitMQ", icon: SiRabbitmq, color: "#EA580C" },     // laranja escuro

    // IA e Automação
    { title: "OpenAI", icon: SiOpenai, color: "#17407aff" },         // cinza escuro
    { title: "Gemini", icon: SiGooglegemini , color: "#2563EB" },  // azul
    { title: "LangChain", icon: SiLangchain , color: "#166534" },  // verde escuro
  ],
  softskills: [
    { title: "Proatividade", icon: FaRocket, color: "#DC2626" },         // vermelho
    { title: "Comunicação Clara", icon: FaComments, color: "#3B82F6" }, // azul
    { title: "Aprendizado Rápido", icon: GiBrain, color: "#7C3AED" },   // roxo
    { title: "Foco em Boas Práticas", icon: MdCheckCircle, color: "#16A34A" }, // verde
    { title: "Criatividade", icon: FaLightbulb, color: "#FACC15" },     // amarelo
    { title: "Trabalho em Equipe", icon: FaHandsHelping, color: "#EC4899" }, // rosa
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
    color: "#1c61f7ff",
  },
  {
    company: "PUC Minas",
    period: "02/2023 – 12/2025",
    role: "Graduação em Análise e Desenvolvimento de Sistemas",
    description: [],
    icon: FaGraduationCap,
    color: "#062cdaff",
  },

  // Experiência Acadêmica
  {
    company: "PUC Minas",
    period: "Fevereiro 2024 - Março 2024",
    role: "Monitor de Algoritmos e Estruturas de Dados",
    description: [
      "Reforço para alunos e apoio ao professor."
    ],
    icon: FaChalkboardTeacher,
    color: "#062cdaff",
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
    color: "#1c61f7ff",
  },
  {
    company: "ENGAGE ELETRO",
    period: "Março 2024 - Outubro 2024",
    role: "Auxiliar de T.I.",
    description: [
      "Suporte a ERP, relatórios (Excel/Power BI) e treinamentos internos."
    ],
    icon: FaBriefcase,
    color: "#070070ff",
  },
  {
    company: "4MTI",
    period: "Outubro 2024 - Março 2025",
    role: "Estagiário em Desenvolvimento de Software",
    description: [
      "Crawlers em PHP para coleta de dados e manutenção supervisionada em banco de dados."
    ],
    icon: FaBriefcase,
    color: "#fa3200ff",
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
    color: "#fa3200ff",
  },
];

const UserProvider = ({ children }: any) => {
    const user = {
        'name': 'Daniel Dias',
        'years': 21,
        'email': {
            'type': 'Email',
            'title': 'danielhabdias@gmail.com',
            'link': 'mailto:danielhabdias@gmail.com?subject=Proposta de trabalho&body=Olá somos a Empresa...'
        },
        'linkedin': {
            'type': 'Linkedin',
            'title': 'Daniel Dias',
            'link': 'https://www.linkedin.com/in/daniel-henrique-alves-bicalho-dias-0143ab240'
        },
        'whatsapp': {
            'type': 'Whatsapp',
            'title': 'Talk to me',
            'link': 'https://wa.me/5531994332959'
        },
        'title': 'Full-Stack Developer',
        'titles': [
            'Full-Stack Developer',
            'Front-End Developer',
            'Back-End Developer'
        ],
        'about': `Sou Desenvolvedor Full-Stack com foco em Back-End, formado em Análise e Desenvolvimento de Sistemas. Atualmente, atuo como Desenvolvedor Júnior na 4MTI, onde fui efetivado rapidamente após meu período como estagiário, demonstrando rápida adaptação e dedicação.\n
        Ao longo da minha trajetória, participei de projetos relevantes, desenvolvendo soluções para ingestão de grandes volumes de dados e automação de processos, além de atuar com tecnologia embarcada durante projetos acadêmicos e profissionais. Também tive experiência como monitor de Algoritmos e Estruturas de Dados durante a graduação, sendo reconhecido por desempenho acadêmico.\n
        Tenho grande interesse em Inteligência Artificial, aplicando APIs de OpenAI e Gemini em projetos de automação e soluções inteligentes. Estou em constante aprendizado, buscando me manter atualizado nas tendências de tecnologia e com planos de pós-graduação em Inteligência Artificial e Engenharia de Software.\n
        Além do conhecimento técnico, valorizo a proatividade, aprendizado rápido, boa comunicação, colaboração em equipe e foco em boas práticas de código, buscando sempre soluções eficientes e de qualidade.`,
        'avatar': '/avatar.webp',
        'habilits': habilits,
        'experiences': experiences
    };

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };