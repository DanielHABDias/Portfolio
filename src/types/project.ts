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
  situation: "ongoing" | "finished";
}

export type { Project }