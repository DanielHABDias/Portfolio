"use client";

import { Typography } from "@mui/material";
import { ReactTyped } from "react-typed";

type TypedProps = {
    strings: string[], 
    loop?: boolean, 
    showCursor?: boolean 
};

export default function Typed({ strings, loop=true, showCursor=true }: TypedProps) {
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
                "@media (max-width: 1024px)": { whiteSpace: "wrap" },
                whiteSpace: "nowrap"
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