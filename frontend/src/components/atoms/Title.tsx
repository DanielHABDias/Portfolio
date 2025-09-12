"use client";

import { Typography, useMediaQuery } from "@mui/material";

export default function Title({ text, lineColor }: { text: string, lineColor?: string }) {
    const isMiniDesktop = useMediaQuery("(min-width: 1025px) and (max-width: 1325px)");

    return (
        <Typography
            align= {isMiniDesktop ? "center" : "inherit"}
            variant= {isMiniDesktop ? "h5" : "h4"}
            component="h1"
            sx={{ 
                marginBottom: 2, 
                ...(lineColor && { 
                    textDecoration: "underline", 
                    textDecorationColor: lineColor,
                    textDecorationThickness: "3px", 
                }),
                fontFamily: "Courier New, monospace", 
                fontWeight: 700,
                "@media (max-width: 1024px)": { whiteSpace: "wrap" },
            }}
        >
            {text.toUpperCase()}
        </Typography>
    );
}