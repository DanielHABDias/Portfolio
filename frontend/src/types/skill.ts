type Skill = {
  icon: React.ElementType;
  title: string;
  color: string;
}

type Skills = {
  hardskills: Skill[];
  softskills: Skill[];
}

export type { Skill, Skills }