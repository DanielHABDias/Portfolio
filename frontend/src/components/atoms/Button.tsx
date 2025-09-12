"use client";

import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
    children: React.ReactNode,
    handle?: (args?: object) => void,
    type?: "submit" | "reset" | "button",
    size?: "small" | "medium" | "large",
    width?: string,
    disabled?: boolean
}


export default function Button({ children, handle, type = "button", size="medium", width="100%", disabled=false }: ButtonProps) {
    const onClick = () => { if (handle) handle() }
    const style = {
        width: width,
        bgcolor: "rgba(0, 0, 0, 0.74)",
        color: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 8px 0 #ffffffc7, 0 6px 20px 0 rgba(252, 252, 252, 0.51)",
    }
    return (
        <MuiButton variant="contained" onClick={onClick} sx={style} type={type} size={size} disabled={disabled}>
            {children}
        </MuiButton>
    )
}