"use client";

import * as Types from "@/types/user";
import { Card, CardContent, Grid, Typography, useMediaQuery } from "@mui/material";

export default function CardSkill({ skill }: { skill: Types.Skill }) {
    const isMiniDesktop = useMediaQuery("(min-width: 1025px) and (max-width: 1325px)");
    return (
          <Grid size={{ xs: 6, md: isMiniDesktop ? 3 : 2 }}>
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
}