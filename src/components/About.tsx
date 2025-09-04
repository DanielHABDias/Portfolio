"use client";

import { Grid, Box, Paper, Stack, Typography, Link, Divider } from "@mui/material";
import { FaUser, FaBriefcase, FaEnvelope, FaLinkedin, FaWhatsapp, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import Typed from "./Typed";
import Title from "./Title";
import useUser from "@/hooks/useUser";

export default function About() {
  const user = useUser();
  const aboutBlocks = user.about;

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
              p: 3,
              bgcolor: "rgba(255,255,255,0.05)",
              borderRadius: 3,
              height: "100%",
              width: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              color: "white",
            }}
          >
            <Stack spacing={2}>
              <Title text={user.name} lineColor="#00ffff" />
              <Typography variant="h6" sx={{ color: "#ccc" }}>
                {user.title}
              </Typography>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaUser />
                  <Typography>{`${user.years} years old`}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaGraduationCap />
                  <Typography>PUC Minas - ADS</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaBriefcase />
                  <Typography>4MTI - Full-Stack Júnior</Typography>
                </Stack>
              </Stack>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <FaLaptopCode />
                <Typography>
                    {user.habilits?.hardskills.slice(0, 5).map(skill => skill.title).join(", ")}
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Link href={user.email.link} target="_blank" sx={{ color: "#00ffff" }}>
                  <FaEnvelope size={24} />
                </Link>
                <Link href={user.linkedin.link} target="_blank" sx={{ color: "#0A66C2" }}>
                  <FaLinkedin size={24} />
                </Link>
                <Link href={user.whatsapp.link} target="_blank" sx={{ color: "#25D366" }}>
                  <FaWhatsapp size={24} />
                </Link>
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
            color: "white",
          }}
        >
          <Typed strings={aboutBlocks} loop={true} showCursor={true} />
        </Box>
      </Grid>
    </Grid>
  );
}