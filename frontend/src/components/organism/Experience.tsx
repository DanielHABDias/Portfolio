"use client";

import * as Types from "@/types/user";
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
import { Typography, Paper, useMediaQuery, useTheme, Box } from "@mui/material";
import useUser from "@/hooks/useUser";

export default function Experience() {
  const user: Types.UserContextType = useUser();
  const experiences: Types.Experience[] = user?.experiences
    ? [...user.experiences].reverse()
    : [];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const renderDesktopTimeline = () => (
    <Timeline position="alternate" sx={{ py: 6, px: { xs: 1, sm: 3, md: 6 } }}> 
      {experiences.map((exp, index) => {
        const Icon = exp.icon;
        const color = exp.color || "#00ffff";

        return (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                m: "auto 0",
                py: "10px", 
                px: 2,
                fontSize: { xs: '0.875rem', md: '1rem' }, 
                fontWeight: 'bold',
                opacity: 0.8, 
                minWidth: '100px', 
              }}
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
                  boxShadow: `0 4px 8px rgba(0,0,0,0.2)`,
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
                <TimelineConnector
                  sx={{
                    bgcolor: "grey.700", 
                    height: "40px", 
                    width: "2px", 
                  }}
                />
              )}
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Paper
                elevation={6}
                sx={{
                  p: 3, 
                  bgcolor: "rgba(255,255,255,0.05)",
                  color: "white",
                  boxShadow: `0 4px 16px rgba(0,0,0,0.2)`,
                  borderRadius: 3, 
                  borderLeft: `4px solid transparent`, 
                  transition: "transform 0.3s, box-shadow 0.3s, background-color 0.3s, border-color 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: `0 8px 30px ${color}`, 
                    bgcolor: `rgba(255, 255, 255, 0.1)`, 
                    borderColor: `${color}`, 
                  },
                }}
              >
                <Typography variant="h6" component="span" sx={{ mb: 1, display: "block" }}>
                  {exp.role}
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 1, display: "block" }}> 
                  {exp.company}
                </Typography>
                <ul style={{ marginTop: 8, paddingLeft: 16 }}>
                  {exp.description.map((desc: string, i: number) => (
                    <li key={i}>
                      <Typography variant="body2">
                          {desc}
                      </Typography>
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

  const renderMobileCards = () => (
    <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 3 }}>
      {experiences.map((exp, index) => {
        const Icon = exp.icon;
        const color = exp.color || "#00ffff";

        return (
          <Paper
            key={index}
            elevation={6}
            sx={{
              p: 2,
              bgcolor: "rgba(255,255,255,0.05)",
              color: "white",
              boxShadow: `0 4px 16px rgba(0,0,0,0.2)`,
              borderRadius: 2,
              position: "relative", 
              overflow: "hidden", 
              borderLeft: `4px solid ${color}`, 
              transition: "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: `0 6px 24px ${color}`,
                bgcolor: `${color}`, 
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                bgcolor: "#1f1f1f",
                borderRadius: "50%",
                p: 0.8, 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 2px 4px rgba(0,0,0,0.3)`,
              }}
            >
              <Icon size={18} color={color} /> 
            </Box>

            <Typography
              variant="caption"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                fontWeight: "bold",
                ml: "auto",
              }}
            >
              {exp.period}
            </Typography>

            <Box sx={{ pt: 4, pl: 5, pr: 1, pb: 1 }}> 
              <Typography variant="h6" component="span" sx={{ mb: 0.5, display: "block" }}>
                {exp.role}
              </Typography>
              <Typography variant="subtitle2" sx={{ mb: 1, display: "block" }}>
                {exp.company}
              </Typography>
              <ul style={{ marginTop: 8, paddingLeft: 16 }}>
                {exp.description.map((desc: string, i: number) => (
                  <li key={i}>
                    <Typography variant="body2">{desc}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Paper>
        );
      })}
    </Box>
  );

  return isSmallScreen ? renderMobileCards() : renderDesktopTimeline();
}