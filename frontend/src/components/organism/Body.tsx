"use client";

import { Grid, useMediaQuery } from "@mui/material";
import Aside from "./Aside";
import Main from "./Main";
// import { useEffect } from "react";

export default function Body() {
    const isMobile = useMediaQuery("(max-width: 1024px)");

    // useEffect(() => {
    //     // Ligar API do back-end
    // }, []);

    const containerStyle = {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        margin: 5,
        padding: 2,
    };

    const smallScreenContainerStyle = {
        height: "100vh", 
        margin: 0,
        padding: 0,
        display: "flex", 
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "stretch", 
        width: "100vw", 
    };

    if (isMobile) {
        return (
            <Grid sx={smallScreenContainerStyle}>
                <Aside size={{ xs: 12, md: 3 }}/> 
                <Main size={{ xs: 12, md: 9 }}/>
            </Grid>
        );
    }

    return (
        <Grid container spacing={2} sx={containerStyle}>
            <Aside size={{ xs: 12, md: 3 }}/>
            <Main size={{ xs: 12, md: 9 }}/>
        </Grid>
    );
}