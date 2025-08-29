"use client";

import { Grid } from "@mui/material";
import useUser from "@/hooks/useUser";

export default function Main() {
    const user = useUser();

    return (
        <h1>{user.name}</h1>
    );
}