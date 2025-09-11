// components/Body.tsx (Arquivo principal)

"use client";

import { Grid, useMediaQuery } from "@mui/material";
import Aside from "./Aside";
import Main from "./Main";
import { useAPI } from "@/hooks/useAPI";
import { useEffect, useState } from "react"; 
import FloatingAvatar from "../atoms/FloatingAvatar"; 
import ChatWindow from "../molecules/ChatWindow";     

export default function Body() {
    const isMobile = useMediaQuery("(max-width: 1024px)");
    const { successMessage, onAPI } = useAPI();
    const [isChatOpen, setIsChatOpen] = useState(false); 

    useEffect(() => {
        if (!successMessage) {
        onAPI();
        }
    }, [successMessage, onAPI]);

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

    const handleAvatarClick = () => {
        setIsChatOpen((prev) => !prev); 
    };

    if (isMobile) {
        return (
            <>
                <Grid sx={smallScreenContainerStyle}>
                    <Aside size={{ xs: 12, md: 3 }} />
                    <Main size={{ xs: 12, md: 9 }} />
                </Grid>
                <FloatingAvatar onClick={handleAvatarClick} isOpen={isChatOpen} />
                <ChatWindow onClose={handleAvatarClick} isOpen={isChatOpen} />
            </>
        );
    }

    return (
        <>
            <Grid container spacing={2} sx={containerStyle}>
                <Aside size={{ xs: 12, md: 3 }} />
                <Main size={{ xs: 12, md: 9 }} />
            </Grid>
            <FloatingAvatar onClick={handleAvatarClick} isOpen={isChatOpen} />
            <ChatWindow onClose={handleAvatarClick} isOpen={isChatOpen} />
        </>
    );
}