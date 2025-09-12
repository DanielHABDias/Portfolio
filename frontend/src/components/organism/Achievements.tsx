"use client";

import * as Types from "@/types/user";
import { Grid } from "@mui/material";
import useUser from "@/hooks/useUser";
import CardAchievement from "../molecules/CardAchievement";

export default function Achievements() {
    const achievements: Types.Achievement[] = useUser()?.achievements;

    const handleDownload = (achievements: Types.Achievement) => {
        const link = document.createElement('a');
        link.href = achievements.document;
        link.download = achievements.title.replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '_') + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Grid
            size={12}
            container
            spacing={3}
            justifyContent={{xs: "center", md: "start"}}
            sx={{
                padding: { xs: 2, md: 4 }
            }}
            >
            {achievements.map((achievement: Types.Achievement, index: number) => (
                <CardAchievement achievement={achievement} handleDownload={handleDownload}  key={index}/>
            ))}
        </Grid>
    );
}
