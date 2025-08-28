"use client";

import { Typography } from "@mui/material";
import { ReactTyped } from "react-typed";

type TypedProps = {
    strings: string[], 
    loop?: boolean, 
    showCursor?: boolean 
};

export default function Typed({ strings, loop=false, showCursor=true }: TypedProps) {
    let time: number = 0;
    strings.forEach((string) => {
        time += string.length;
    });
    time = 1000 / time;
    return (
        <Typography
            variant="h6"
            sx={{ fontFamily: "Courier New, monospace", fontWeight: 700 }}
        >
            <ReactTyped
                strings={strings}
                typeSpeed={time}
                backSpeed={time}
                showCursor={showCursor}
                cursorChar="█"
                loop={loop}
                startWhenVisible
            />
        </Typography>
    );
}