"use client";

import * as Types from "@/types/user";
import { Grid } from "@mui/material";
import useUser from "@/hooks/useUser"; 
import Title from "../atoms/Title";
import CardSkill from "../molecules/CardSkill";

export default function Skills() {
  const user: Types.UserContextType = useUser();
  const hardskills: Types.Skill[] = user?.skills?.hardskills || [];
  const softskills: Types.Skill[] = user?.skills?.softskills || [];

  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      <Grid size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Title text="Hard Skills" lineColor="#00ffff" />
      </Grid>
      {hardskills.map((skill: Types.Skill, index: number) => {
        return (
          <CardSkill key={index} skill={skill} />
        );
      })}

      <Grid size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mt: 4}}>
        <Title text="Soft Skills" lineColor="#00ffff" />
      </Grid>
      {softskills.map((skill: Types.Skill, index: number) => {
        return (
          <CardSkill key={index} skill={skill} />
        );
      })}
    </Grid>
  );
}
