"use client";

import { Grid } from "@mui/material";
import Aside from "./Aside";
import Main from "./Main";

const style = {
    height: "90vh", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    margin: 5, 
    padding: 2,
}

export default function Body() : React.ReactNode {
    return (
        <Grid container spacing={2} sx={style}>
            <Aside size={3}/>
            <Grid size={9}  sx={{ backgroundColor: "red", height: "100%" }}>
                <Main />
            </Grid>
        </Grid>
    );
}