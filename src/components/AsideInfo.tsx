"use client";

import { Link } from "@mui/material";
import { Typography } from "@mui/material";

type AsideInfoProps = {
    info: {
      type: string;
      title: string;
      link: string;
      icon: React.ElementType;
    };
};

export default function AsideInfo({ info }: AsideInfoProps) {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "1.5rem"}}>
      {/* <info.icon size="2rem"/> CONSERTAR ICONS*/}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", width: "100%"}}>
        <Typography sx={{ fontFamily: "Courier New, monospace", fontWeight: 700, color: "gray"}}>{info.type}</Typography>
        <Link href={info.link} underline="hover" color="inherit" target="_blank">
          {info.title}
        </Link>
      </div>
    </div>
  );
}