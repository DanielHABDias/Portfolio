"use client";

import * as Types from "@/types/user";
import useUser from "@/hooks/useUser";
import Typed from "../atoms/Typed";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import { Grid, Avatar, Divider, Box, Chip, Typography } from "@mui/material";
import React from "react";
import AsideInfo from "../molecules/AsideInfo";
import { useMediaQuery } from "@mui/material";

const desktopAsideContainerStyle = {
    padding: 4,
    minHeight: "100%",
    background: "linear-gradient(135deg, #1d1d1d 0%, #202020 40%, #2c2c2c 100%)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
};

const mobileAsideContainerStyle = {
    padding: { xs: 2, md: 4 },
    minHeight: "fit-content",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    gap: 2,
};

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
    const isMobile = useMediaQuery("(max-width: 1024px)");

    return (
        <Grid
            size={size}
            sx={isMobile ? mobileAsideContainerStyle : desktopAsideContainerStyle}
        >
            <Grid size={{ xs: 12, md: 12 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 1 }}>
                <Avatar
                    sx={{
                        width: { xs: "8rem", md: "10rem" },
                        height: { xs: "8rem", md: "10rem" },
                        marginBottom: "0.5rem"
                    }}
                    alt={user.name}
                    src={user.avatar}
                />
                <Title text={user.name}/>
                <Typed strings={user.titles}/>

                <Typography variant="body2" textAlign="center">
                    {`${user.years} anos`}
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
                <Divider variant="middle" sx={{ width: "100%", marginY: 2 }}/>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
                {user.contacts.map((contact: Types.Contact, i: number) => { return <AsideInfo info={contact} key={i} />})}
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <Divider variant="middle" sx={{ width: "100%", marginY: 2 }}/>
                <Button width={isMobile ? "80%" : "100%"} handle={() => handleDownload(user)}>Baixar Currículo</Button>
            </Grid>
        </Grid>
    )
}