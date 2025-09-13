import { Skill } from "./skill";

type Project = {
  title: string;
  description: string;
  links: {
    github?: string;
    demo?: string;
  };
  skills: Skill[];
  img: string;
  video?: string;
  situation: "in progress" | "completed";
}

export type { Project }