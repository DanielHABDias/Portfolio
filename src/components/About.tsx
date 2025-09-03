'use client';

import useUser from "@/hooks/useUser";
import { Grid } from "@mui/material";
import { RadarChart } from "@mui/x-charts"
import Typed from "./Typed";
import Title from "./Title";

const style =  {
    height: "100%",
    width: "100%"
}

const styleRadar = {
  bgcolor: 'rgba(255, 255, 255, 0.08)',
  borderRadius: 2, 
  padding: 2, 
  margin: 2,
  opacity: 1
};

export default function About() {
    const user = useUser(); 
    return (
        <Grid container spacing={1} sx={style}>
            <Grid size={12}>
                <Title text="How I Am?"/>
            </Grid>
            <Grid size={8}>
                <Grid size={12}>
                    <Typed
                        strings={
                            [
                                user.about
                            ]
                        }
                        loop={false}
                    />
                </Grid>
            </Grid>
            <Grid size={4}>
                <RadarChart
                    height={250}
                    series={[{ label: 'Habilits', data: [90, 90, 85, 95, 60, 78] }]}
                    radar={{
                        max: 100,
                        metrics: ['Programação', 'Comunicação', 'Colaboração', 'Lógica', 'Design', 'Inovação'],
                    }}
                    sx={styleRadar}
                />
            </Grid>
        </Grid>
    );
}