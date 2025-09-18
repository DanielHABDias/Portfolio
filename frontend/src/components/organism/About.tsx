"use client";

import * as Types from "@/types/user";
import Image from "next/image";
import { Grid, Box, Paper, Stack, Typography, useMediaQuery } from "@mui/material"; 
import { 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
} from "react-icons/fa";
import Title from "../atoms/Title"; 
import useUser from "@/hooks/useUser";

export default function About() {
  const user: Types.UserContextType = useUser();
  const lastProfessionalExperience = user.experiences?.filter((exp) => exp.type === "professional")?.slice(-1)?.[0];
  const lastAcademicExperience = user.experiences?.filter((exp) => exp.type === "academic")?.slice(-1)?.[0];
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const styleColor = "#E0E0E0";

  return (
    <Grid container spacing={4} sx={{ height: "100%", width: "100%", padding: 2, alignItems: "center" }}>
      
      <Grid container size={12} spacing={{ xs: 2, md: 4 }} alignItems="center" sx={{ minHeight: '300px' }}> 
        
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={1} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 700, color: "white" }}>
              Olá, eu sou o 
            </Typography>
            <Typography 
              variant="h2" 
              component="h1" 
              className="highlight" 
              sx={{ 
                fontWeight: 700, 
                color: styleColor,
                textShadow: `0 0 10px ${styleColor}70`
              }}
            >
              {user.name}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 400, color: "#ccc", fontFamily: "Courier New, monospace" }}>
              {user.titles[0]}
            </Typography>

            <Stack 
              direction="row" 
              spacing={1} 
              sx={{ 
                mt: 2, 
                flexWrap: 'wrap', 
                justifyContent: { xs: "center", md: "flex-start" } 
              }}
            >
              {user.skills?.hardskills.slice(0, 5).map((skill: Types.Skill, index: number) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                  {skill.icon && <skill.icon size={20} color={skill.color || styleColor}/>}
                </Box>
              ))}
            </Stack>

            <Stack spacing={1} sx={{ mt: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: "center", md: "flex-start" }}>
                    {!isMobile && <FaUser color={styleColor} />}
                    <Typography sx={{ color: "#ccc" }}>
                        {`${user.years} anos`}
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: "center", md: "flex-start" }}>
                    {!isMobile && <FaGraduationCap color={styleColor} />}
                    <Typography sx={{ color: "#ccc" }}>
                        <strong>{lastAcademicExperience?.role}</strong> -{" "}
                        <span className="highlight">{lastAcademicExperience?.company}</span>
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: "center", md: "flex-start" }}>
                    {!isMobile && <FaBriefcase color={styleColor} />}
                    <Typography sx={{ color: "#ccc" }}>
                        Atualmente: <span className="highlight">{lastProfessionalExperience?.company}</span> – 
                        {lastProfessionalExperience?.role}
                    </Typography>
                </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            mt: { xs: 4, md: 0 }
        }}>
          <Box
            sx={{
              position: "relative",
              width: { xs: 250, md: 350 }, 
              height: { xs: 250, md: 350 }, 
              borderRadius: "50%", 
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
              bgcolor: styleColor,
              boxShadow: `0 8px 24px ${styleColor}80`,
              p: 1, 
            }}
          >
            <Image
              src={user.avatarBody} 
              alt={user.name}
              width={350} 
              height={350} 
              style={{
                objectFit: "cover",
                borderRadius: "50%", 
                width: "100%",
                height: "100%",
                filter: "brightness(0.95)", 
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            bgcolor: "rgba(255,255,255,0.07)",
            borderRadius: 3,
            boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: 3, 
          }}
        >
          <Box>
            <Title text="Sobre Mim" lineColor="rgba(255, 255, 255, 0.56)" />
            {user.about && user.about.map((item: string, index: number) => {
              return (
                <Typography
                  paragraph
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: { xs: "0.96rem", md: "1rem" },
                    lineHeight: 1.7,
                  }}
                  dangerouslySetInnerHTML={{ __html: item }}
                  key={index}
                />
              );
            })}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}