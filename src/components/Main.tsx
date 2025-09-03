"use client";

import useUser from "@/hooks/useUser";
import SessionMenu from "./SessionMenu";
import Title from "./Title";
import { Grid, Divider } from "@mui/material";
import { useState } from "react";
import About from "./About";
import Habilits from "./Habilits";

const style = {
    padding: 4, 
    minheight: "100%", 
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
    background: "linear-gradient(90deg, rgba(29, 29, 29, 1) 0%, rgba(32, 32, 32, 1) 35%, rgba(44, 44, 44, 1) 100%)",
    borderRadius: "10px",
};

export default function Main ({size} : {size: object}) : React.ReactNode {
    const user = useUser();
    const [session, setSession] = useState<string>('About');
    return (
        <Grid sx={style} size={size}>
            <Grid size={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", padding: 2}}>
                <Grid size={{ xs: 12, md: 8}}>
                    <Title text={session}/>
                </Grid>
                <Grid size={{ xs: 12, md: 4}}>
                    <SessionMenu value={session} setValue={setSession}/>
                </Grid>
            </Grid>
            <Divider/>
            <Grid size={12} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "row", padding: 2}}>
                {session === 'About' && <About/>}
                {session === 'Habilits' && <Habilits/>}
                {session === 'Experience' && <div>Conteúdo da Seção Experiência</div>}
                {session === 'Contact-me' && <div>Conteúdo da Seção Contato</div>}
            </Grid>
        </Grid>
    )
}