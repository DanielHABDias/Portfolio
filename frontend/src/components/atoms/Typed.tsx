"use client";

import { Typography, useMediaQuery } from "@mui/material";
import { ReactTyped } from "react-typed";

type TypedProps = {
    strings: string[], 
    loop?: boolean, 
    showCursor?: boolean 
};

export default function Typed({ strings, loop=true, showCursor=true }: TypedProps) {
    const isMiniDesktop = useMediaQuery("(min-width: 1025px) and (max-width: 1325px)");
    let tempo: number = 0;
    strings.forEach((string) => {
        tempo += string.length * 0.06; 
    });
    tempo = tempo / 80; 
    const velocidade: number = strings.length / tempo; 
    return (
        <Typography
            variant="h6"
            sx={{ 
                fontFamily: "Courier New, monospace", 
                fontWeight: 700,
                whiteSpace: "nowrap",
                transform: isMiniDesktop ? "scale(0.8)" : "scale(1)",
            }}
        >
            <ReactTyped
                strings={strings}
                typeSpeed={velocidade}
                backDelay={5000}
                backSpeed={velocidade}
                showCursor={showCursor}
                cursorChar="█"
                loop={loop}
            />
        </Typography>
    );
}