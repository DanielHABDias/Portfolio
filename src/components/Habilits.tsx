"use client";

import { Grid, Card, CardContent, Typography } from "@mui/material";
import useUser from "@/hooks/useUser"; 
import Title from "./Title";

export default function Habilits() {
  const user = useUser();
  const hardskills = user?.habilits?.hardskills || [];
  const softskills = user?.habilits?.softskills || [];

  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      <Grid size={12}>
        <Title text="Hard Skills" lineColor="blue" />
      </Grid>
      {hardskills.map((skill, index) => {
        const Icon = skill.icon;
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
                        color: "rgba(0, 0, 0, 1)",
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
      <Grid size={12} sx={{ mt: 6 }}>
        <Title text="Soft Skills" lineColor="pink" />
      </Grid>
      {softskills.map((skill, index) => {
        const Icon = skill.icon;
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
                        color: "rgba(0, 0, 0, 1)",
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
