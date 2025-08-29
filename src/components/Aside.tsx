"use client";

import useUser from "@/hooks/useUser";
import Typed from "./Typed";
import Title from "./Title";
import { Grid, Avatar, Divider } from "@mui/material";
import React from "react";
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AsideInfo from "./AsideInfo";

const style = {
    padding: 4, 
    height: "100%", 
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", 
    background: "linear-gradient(90deg, rgba(29, 29, 29, 1) 0%, rgba(32, 32, 32, 1) 35%, rgba(44, 44, 44, 1) 100%)",
    borderRadius: "10px"
};

const styleInfo = {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: '20%',
    padding: 1,
    marginRight: 1,
    width: '3rem', 
    height: '3rem',
}

export default function Aside ({size} : {size: number}) : React.ReactNode {
    const user = useUser();
    return (
        <Grid sx={style} size={size}>
            <Grid size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
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
                <Divider variant="middle" sx={{ width: "100%", margin: 2 }}/>
            </Grid>
            <Grid size={6}>
                <AsideInfo info={user.email} >
                    <AlternateEmailRoundedIcon
                        fontSize="large"
                        sx={styleInfo}
                    />
                </AsideInfo>
                <AsideInfo info={user.linkedin} >
                    <LinkedInIcon
                        fontSize="large"
                        sx={styleInfo}
                    />
                </AsideInfo>
                <AsideInfo info={user.whatsapp} >
                    <WhatsAppIcon
                        fontSize="large"
                        sx={styleInfo}
                    />
                </AsideInfo>
            </Grid>
        </Grid>
    )
}