"use client";

import * as Types from "@/types/user";
import useUser from "@/hooks/useUser";
import Typed from "../atoms/Typed";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import { Grid, Avatar, Divider, Box, Chip, Typography } from "@mui/material";
import React from "react";
import AsideInfo from "../molecules/AsideInfo";

const style = {
    padding: 4, 
    minheight: "100%", 
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
    background: "linear-gradient(90deg, rgba(29, 29, 29, 1) 0%, rgba(32, 32, 32, 1) 35%, rgba(44, 44, 44, 1) 100%)",
    borderRadius: "10px"
};

const styleButton = {
    width: "80%", 
    bgcolor: "rgba(0, 0, 0, 0.74)", 
    color: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px 0 #00ffff88, 0 6px 20px 0 #00ffff88",
}

const handleDownload = (user: Types.UserContextType) => {
    const link = document.createElement('a');
    link.href = user.curriculum;
    link.download = 'curriculo_' + user.name.replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '_') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default function Aside ({size} : {size: object}) : React.ReactNode {
    const user: Types.UserContextType = useUser();
    return (
        <Grid sx={style} size={size}>
            <Grid size={{ xs: 12, md: 12}} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <Avatar 
                    sx={{
                        width: "10rem", 
                        height: "10rem",
                        marginBottom: "0.5rem"
                    }} 
                    alt={user.name} 
                    src={user.avatar} 
                />
                <Title text={user.name}/>
                <Typed strings={user.titles}/>

                <Typography variant="body2" textAlign="center">
                    {`Age: ${user.years} years`}
                </Typography>
                <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
                    {user.skills?.hardskills.slice(0, 5).map((skill: Types.Skill, i: number) => (
                        <Chip
                            key={i}
                            label={skill.title}
                            sx={{
                            bgcolor: skill.color,
                            color: "#fff",
                            fontWeight: 600,
                            boxShadow: `0 2px 8px ${skill.color}`,
                            }}
                        />
                    ))}
                </Box>
                <Divider variant="middle" sx={{ width: "100%", margin: 2 }}/>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
                {user.contacts.map((contact: Types.Contact, i: number) => { return <AsideInfo info={contact} key={i} />})}
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <Divider variant="middle" sx={{ width: "100%", margin: 2 }}/>
                <Button handle={() => handleDownload(user)}>Baixar Currículo</Button>
            </Grid>
        </Grid>
    )
}