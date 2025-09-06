"use client";

import { Padding } from "@mui/icons-material";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";

type AsideInfoProps = {
    info: {
      type: string;
      title: string;
      link: string;
      icon: React.ElementType;
      color: string;
    };
};

const styleIcon = {
  fontSize: "1.5rem",
  background: "#443e3e98",
  Padding: "2rem",
  borderRadius: "20%",
  height: "2rem",
  width: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} 

export default function AsideInfo({ info }: AsideInfoProps) {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "1.5rem"}}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", width: "100%"}}>
        <Typography sx={{ fontFamily: "Courier New, monospace", fontWeight: 700, color: "gray"}}>
          {info.type}
        </Typography>
        <Link href={info.link} underline="hover" color="inherit" target="_blank" sx={{ display: "flex", alignItems: "center", justifyContent: "start", gap: 1 }}>
          <Typography sx={styleIcon}>
            <info.icon style={{ color: info.color }}/>
          </Typography>
          {info.title}
        </Link>
      </div>
    </div>
  );
}