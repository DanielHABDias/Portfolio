"use client";

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Paper, darken } from "@mui/material";
import useUser from "@/hooks/useUser";

export default function Experience() {
  const user = useUser();
  const experiences = user?.experiences
    ? [...user.experiences].reverse()
    : [];

  return (
    <Timeline position="alternate" sx={{ py: 5 }}>
      {experiences.map((exp, index) => {
        const Icon = exp.icon;
        const color = exp.color || "#00ffff";

        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align={index % 2 === 0 ? "right" : "left"}
              variant="body2"
            >
              {exp.period}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: "#1f1f1f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: color,
                  boxShadow: `0 0 8px ${color}50`,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.3)",
                    boxShadow: `0 0 16px ${color}80`,
                  },
                }}
              >
                <Icon size={20} />
              </TimelineDot>
              {index < experiences.length - 1 && (
                <TimelineConnector sx={{ bgcolor: "grey.800" }} />
              )}
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper
                elevation={6}
                sx={{
                  p: 2,
                  bgcolor: darken(color, 0.3),
                  color: "white",
                  boxShadow: `0 4px 16px rgba(0,0,0,0.2)`,
                  borderRadius: 2,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: `0 6px 24px ${color}`,
                    bgcolor: `${color}`,
                  },
                }}
              >
                <Typography variant="h6" component="span" sx={{ mb: 1 }}>
                  {exp.role}
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  {exp.company}
                </Typography>
                <ul style={{ marginTop: 8, paddingLeft: 16 }}>
                  {exp.description.map((desc, i) => (
                    <li key={i}>
                      <Typography variant="body2">{desc}</Typography>
                    </li>
                  ))}
                </ul>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
