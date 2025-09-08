"use client";

import SessionMenu from "../molecules/SessionMenu";
import Title from "../atoms/Title";
import { Grid, Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";
import { keyframes } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Fragment } from "react";


const desktopMainContainerStyle = {
  padding: { xs: 2, md: 0 }, 
  minHeight: "100%",
  background: "linear-gradient(135deg, #1d1d1d 0%, #202020 40%, #2c2c2c 100%)",
  borderRadius: "16px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  overflow: "hidden",
};

const desktopHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row", 
  gap: 2,
  padding: 2,
  borderRadius: "16px 16px 0px 0px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(8px)",
  boxShadow: "0 4px 20px rgba(0,255,255,0.15)",
  position: "relative",
  overflow: "hidden",
};

const glowMove = keyframes`
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;
const neonLineSx = {
  position: "absolute",
  bottom: 0,
  left: 0,
  height: 3,
  width: "100%",
  background: `linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.4) 20%, #00ffff 50%, rgba(0,255,255,0.4) 80%, transparent 100%)`,
  backgroundSize: "300% 100%",
  animation: `${glowMove} 5s linear infinite`,
  boxShadow: "0 0 12px #00ffff, 0 0 24px rgba(0,255,255,.5)",
};

const desktopContentWrapperStyle = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "row", 
  flexGrow: 1,
  overflowY: "auto",
};

const mobileMainContainerStyle = {
  padding: { xs: 1, sm: 2 }, 
  minHeight: "100%",
  backgroundColor: "transparent", 
  display: "flex",
  flexDirection: "column", 
  gap: { xs: 4, sm: 6 }, 
};

const mobileSectionTitleStyle = {
    textAlign: "center",
    marginBottom: 2,
    marginTop: 4,
    color: "var(--foreground)",
    fontSize: { xs: "1.8rem", sm: "2.5rem" },
    fontWeight: "bold",
};

const sessionComponents = {
  About: About,
  Skills: Skills,
  Experience: Experience,
  Projects: Projects,
  Achievements: Achievements,
  Contact: Contact,
};

export default function Main({ size }: { size: object }): React.ReactNode {
  const [session, setSession] = useState<string>("About");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile) {
    return (
      <Grid  size={size} sx={mobileMainContainerStyle}>
        {Object.entries(sessionComponents).map(([key, Component]) => (
          <Fragment key={key}>
            <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.1)" }} />
            <Typography variant="h4" component="h2" sx={mobileSectionTitleStyle}>
                {key.toUpperCase()}
            </Typography>
            <Box sx={{ paddingX: { xs: 1, sm: 2 }}}>
                <Component />
            </Box>
          </Fragment>
        ))}
      </Grid>
    );
  }

  return (
    <Grid size={size} sx={desktopMainContainerStyle}>
      <Box sx={desktopHeaderStyle}>
        <Grid  size={{ xs: 12, md: 5 }}>
          <Title text={session} />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <SessionMenu value={session} setValue={setSession} />
        </Grid>
        <Box sx={neonLineSx} />
      </Box>

      <Grid  size={{ xs: 12 }} sx={desktopContentWrapperStyle}>
        {session === "About" && <About />}
        {session === "Skills" && <Skills />}
        {session === "Experience" && <Experience />}
        {session === "Projects" && <Projects />}
        {session === "Achievements" && <Achievements />}
        {session === "Contact" && <Contact />}
      </Grid>
    </Grid>
  );
}