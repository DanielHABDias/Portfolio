"use client";

import { Typography } from "@mui/material";

export default function Title({ text, lineColor }: { text: string, lineColor?: string }) {
    return (
        <Typography
            variant="h4"
            component="h1"
            sx={{ 
                marginBottom: 2, 
                ...(lineColor && { 
                    textDecoration: "underline", 
                    textDecorationColor: lineColor,
                    textDecorationThickness: "3px", 
                }),
                fontFamily: "Courier New, monospace", 
                fontWeight: 700 
            }}
        >
            {text.toUpperCase()}
        </Typography>
    );
}