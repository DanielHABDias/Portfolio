import { Project } from "./project";
import { Skills, Skill } from "./skill";
import { Experience } from "./experience";
import { Achievement } from "./achievement";

type Contact = {
  type: string;
  title: string;
  link: string;
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
  backend: string;
  name: string;
  years: number;
  location: Location; 
  curriculum: string;
  projects: Project[];
  achievements: Achievement[];
  contacts: Contact[];
  titles: string[];
  about: string[]; 
  avatar: string;
  avatarBody: string;
  skills: Skills;
  experiences: Experience[];
}

export type { Contact, Location, UserContextType, Skills, Skill, Experience, Project, Achievement };