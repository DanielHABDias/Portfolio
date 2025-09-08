import { Project } from "./project";
import { Skills, Skill } from "./skill";
import { Experience } from "./experience";

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

export type { Contact, Location, UserContextType, Skills, Skill, Experience, Project };