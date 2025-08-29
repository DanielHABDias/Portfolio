"use client";

import { Link } from "@mui/material";
import { Typography } from "@mui/material";

type AsideInfoProps = {
    children: React.ReactNode;
    info: {
      type: string;
      title: string;
      link: string;
    };
};

export default function AsideInfo({ children, info }: AsideInfoProps) {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "1.5rem"}}>
      {children}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", width: "100%"}}>
        <Typography sx={{ fontFamily: "Courier New, monospace", fontWeight: 700, color: "gray"}}>{info.type}</Typography>
        <Link href={info.link} underline="hover" color="inherit" target="_blank">
          {info.title}
        </Link>
      </div>
    </div>
  );
}