"use client";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const style = {
  bgcolor: "transparent",
  color: "white",
  borderRadius: "999px",
  p: 0.5,
  border: "1px solid rgba(255,255,255,0.15)",
  backdropFilter: "blur(6px)",
};

const styleButtons = {
  border: "none",
  borderRadius: "999px !important",
  textTransform: "uppercase",
  fontWeight: 600,
  letterSpacing: "0.05em",
  px: 2.5,
  py: 1,
  transition: "all 0.3s ease",
  color: "rgba(255,255,255,0.7)",

  "&.Mui-selected": {
    bgcolor: "linear-gradient(90deg, #00ffff, #0ef)",
    color: "#000",
    boxShadow: "0 0 12px #00ffff88",
    fontWeight: 700,
  },

  "&:hover": {
    bgcolor: "rgba(0, 255, 255, 0.1)",
    color: "#00ffff",
  },
};

export default function SessionMenu({ value, setValue }: any) {
  return (
    <ToggleButtonGroup
      value={value}
      color="primary"
      exclusive
      onChange={(event, newValue) => {
        if (newValue !== null) {
          setValue(newValue);
        }
      }}
      aria-label="menu"
      size="small"
      sx={style}
    >
      <ToggleButton value="About" sx={styleButtons}>
        About
      </ToggleButton>
      <ToggleButton value="Skills" sx={styleButtons}>
        Skills
      </ToggleButton>
      <ToggleButton value="Experience" sx={styleButtons}>
        Experience
      </ToggleButton>
      <ToggleButton value="Contact-me" sx={styleButtons}>
        Contact
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
