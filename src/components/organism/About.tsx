"use client";

import { Grid, Box, Paper, Stack, Typography, Divider } from "@mui/material";
import { 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
  FaLaptopCode, 
  FaLightbulb, 
} from "react-icons/fa";
import Title from "../atoms/Title";
import useUser from "@/hooks/useUser";

export default function About() {
  const user = useUser();

  return (
    <Grid container spacing={2} sx={{ height: "100%", width: "100%", padding: 2 }}>
      <Grid container size={{ xs: 12, md: 12 }} spacing={2}>
        
        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src={user.avatarBody}
            alt={user.name}
            style={{
              width: "100%",
              height: "auto",
              filter: "drop-shadow(0 4px 20px #00ffff)",
              borderRadius: 8,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              bgcolor: "rgba(255,255,255,0.07)",
              borderRadius: 3,
              height: "100%",
              width: "100%",
              boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Stack spacing={3}>
              <div>
                <Title text={user.name} lineColor="#00ffff" />
                <Typography variant="h6" sx={{ color: "#00ffff", fontWeight: 600 }}>
                  {user.titles[0]}
                </Typography>
              </div>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />

              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaUser />
                  <Typography sx={{ color: "#ccc" }}>
                    {`${user.years} anos`}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaGraduationCap />
                  <Typography sx={{ color: "#ccc" }}>
                    Graduando em <strong>Análise e Desenvolvimento de Sistemas</strong> pela{" "}
                    <span style={{ color: "#00ffff", fontWeight: 600 }}>PUC Minas</span>
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaBriefcase />
                  <Typography sx={{ color: "#ccc" }}>
                    Atualmente: <span style={{ color: "#00ffff", fontWeight: 600 }}>4MTI</span> – 
                    Desenvolvedor Full-Stack Júnior
                  </Typography>
                </Stack>
              </Stack>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />

              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaLaptopCode color="#00ffff" />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Principais Hard Skills
                  </Typography>
                </Stack>
                <Typography sx={{ color: "#ccc" }}>
                  {user.skills?.hardskills.slice(0, 5).map((skill) => skill.title).join(", ")}
                </Typography>
              </Stack>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />

              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaLightbulb color="#FACC15" />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Soft Skills
                  </Typography>
                </Stack>
                
                <Stack spacing={1} sx={{ color: "#ccc" }}>
                  {user.skills?.softskills.slice(0, 5).map((skill, index) => (
                    <Stack direction="row" spacing={1} alignItems="center">
                      <skill.icon color={skill.color} />
                      <Typography>{skill.title}</Typography>
                    </Stack>
                  ))}
                </Stack>

              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      <Grid size={{ xs: 12, md: 12 }}>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: 2,
            padding: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            overflow: "hidden",
            minHeight: "8rem",
            color: "white",
          }}
        >
          <Title text="Sobre Mim" lineColor="#00ffff" />
          {user.about && user.about.map((item) => {
            return (
              <Typography
                paragraph
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: { xs: "0.96rem", md: "1rem" },
                  lineHeight: 1.7,
                }}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            );
          })}
        </Box>
      </Grid>
    </Grid>
  );
}
