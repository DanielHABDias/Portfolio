// GlitchTextMotion.tsx
"use client";

import { Box, Typography } from "@mui/material";
import { trace } from "console";
import { AnimationType, motion, Transition } from "framer-motion";

interface GlitchTextProps {
  text: string;
  fontSize?: string;
}


const glitchTransion: Transition = {
    duration: 0.25,
    repeat: Infinity,        
    repeatType: "loop",
}

const glitchAnimation: any = {
    x: [0, -10, 15, -20, 10, 0],
    y: [0, 0, -2, 5, -2, 0],
    skewX: [0, -1, 1, -0.5, 0.5, 0],
    skewY: [0, 1, -1, 0.5, -0.5, 0],
    color: ["#fafafaff", "#ff00eaff", "#00ffffff", "#ff00eaff", "#00ffffff", "#fafafaff"],
}

export default function GlitchTextMotion({ text, fontSize = "3rem" }: GlitchTextProps) {
  return (
    <Box sx={{ position: "relative", display: "inline-block", fontSize, fontWeight: "bold" }}>
      <motion.span
        style={{ position: "relative", color: "white", display: "inline-block" }}
        animate= {glitchAnimation}
        transition={glitchTransion}
      >
        {text}
      </motion.span>
    </Box>
  );
}
