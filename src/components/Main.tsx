"use client";

import useUser from "@/hooks/useUser";
import SessionMenu from "./SessionMenu";
import Title from "./Title";
import { Grid, Box } from "@mui/material";
import { useState } from "react";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import { keyframes } from "@emotion/react";

const style = {
  padding: 0,
  minHeight: "100%",
  background: "linear-gradient(135deg, #1d1d1d 0%, #202020 40%, #2c2c2c 100%)",
  borderRadius: "16px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: { xs: "column", md: "row" },
  gap: 2,
  padding: 2,
  borderRadius: "16px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(8px)",
  boxShadow: "0 4px 20px rgba(0,255,255,0.15)",
  position: "relative",
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
  background: `
    linear-gradient(
      90deg,
      transparent 0%,
      rgba(0,255,255,0.4) 20%,
      #00ffff 50%,
      rgba(0,255,255,0.4) 80%,
      transparent 100%
    )
  `,
  backgroundSize: "300% 100%",
  animation: `${glowMove} 5s linear infinite`,
  boxShadow: "0 0 12px #00ffff, 0 0 24px rgba(0,255,255,.5)",
};

export default function Main({ size }: { size: object }): React.ReactNode {
  const user = useUser();
  const [session, setSession] = useState<string>("About");

  return (
    <Grid sx={style} size={size}>
      <Box sx={headerStyle}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Title text={session} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: "center" }}>
          <SessionMenu value={session} setValue={setSession} />
        </Grid>

        <Box sx={neonLineSx} />
      </Box>

      <Grid
        size={12}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          padding: 2,
        }}
      >
        {session === "About" && <About />}
        {session === "Skills" && <Skills />}
        {session === "Experience" && <Experience />}
        {session === "Contact" && <Contact />}
      </Grid>
    </Grid>
  );
}