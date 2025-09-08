"use client";

import { Grid, Card, CardContent, Typography } from "@mui/material";
import useUser from "@/hooks/useUser"; 
import Title from "../atoms/Title";

export default function Skills() {
  const user = useUser();
  const hardskills = user?.skills?.hardskills || [];
  const softskills = user?.skills?.softskills || [];

  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      <Grid size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Title text="Hard Skills" lineColor="#ff0000" />
      </Grid>
      {hardskills.map((skill, index) => {
        return (
          <Grid size={2} key={index}>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderRadius: 3,
                    boxShadow: `0px 4px 20px ${skill.color}`,
                    color: skill.color,
                    transition: "0.3s",
                    height: "100%", 
                    width: "100%",
                    "&:hover": { 
                        transform: "scale(1.05)", 
                        boxShadow: 6,
                        color: "rgba(255, 255, 255, 1)",
                        backgroundColor: skill.color,
                    },
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 1,
                    }}
                    >
                    <skill.icon style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }} />
                    <Typography variant="body2">{skill.title}</Typography>
                </CardContent>
            </Card>
           </Grid>
        );
      })}

      {/* Softskills */}
      <Grid size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mt: 4}}>
        <Title text="Soft Skills" lineColor="pink" />
      </Grid>
      {softskills.map((skill, index) => {
        return (
          <Grid size={2} key={index}>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderRadius: 3,
                    boxShadow: `0px 4px 20px ${skill.color}`,
                    color: skill.color,
                    transition: "0.3s",
                    height: "100%", 
                    width: "100%",
                    "&:hover": { 
                        transform: "scale(1.05)", 
                        boxShadow: 6,
                        color: "rgba(255, 255, 255, 1)",
                        backgroundColor: skill.color,
                    },
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 1,
                    }}
                    >
                    <skill.icon style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }} />
                    <Typography variant="body2">{skill.title}</Typography>
                </CardContent>
            </Card>
           </Grid>
        );
      })}
    </Grid>
  );
}
