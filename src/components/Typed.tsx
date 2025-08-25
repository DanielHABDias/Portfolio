"use client";

import { Typography } from "@mui/material";
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";

type TypedProps = {
    id: string,
    strings: string[], 
    loop?: boolean, 
    showCursor?: boolean 
};

export default function Typed({ id, strings, loop=false, showCursor=true }: TypedProps) {
    const [start, onStart] = useState(false);

    let time: number = 0;
    strings.forEach((string) => {
        time += string.length;
    });
    time = 1000 / time;

    useEffect(() => {
        const target = document.getElementById(id);
        if (!target) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                onStart(true);
                observer.disconnect();
            }
        },
        { threshold: 0.25 }
        );

        observer.observe(target);

        return () => observer.disconnect();
    }, [id]);

    return (
        <Typography
            variant="h6"
            sx={{ fontFamily: "Courier New, monospace", fontWeight: 700 }}
        >
            {start && 
                <ReactTyped
                    strings={strings}
                    typeSpeed={time}
                    backSpeed={time}
                    showCursor={showCursor}
                    cursorChar="█"
                    loop={loop}
                />
            }
        </Typography>
    );
}