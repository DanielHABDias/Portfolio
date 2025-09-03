"use client";

import { Grid } from "@mui/material";
import Aside from "./Aside";
import Main from "./Main";

const style = {
    height: "90vh", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "start",
    margin: 5, 
    padding: 2
}

export default function Body() : React.ReactNode {
    return (
        <Grid container spacing={2} sx={style}>
            <Aside size={{ xs: 12, md: 3 }}/>
            <Main size={{ xs: 12, md: 9 }}/>
        </Grid>
    );
}