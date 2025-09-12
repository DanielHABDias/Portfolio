"use client";

import { Chip, Box, Typography, useMediaQuery } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import * as Types from "@/types/user";

export default function LabelProject({ project }: { project: Types.Project }) {
    const isMiniDesktop = useMediaQuery("(min-width: 1025px) and (max-width: 1600px)");
    if(!project.situation) return null
    return (
        <Chip
            key={project.situation}
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}> 
                        {project.situation === "in progress" && <AccessTimeIcon sx={{ fontSize: 14 }} />} 
                        {project.situation === "completed" && <CheckCircleOutlineIcon sx={{ fontSize: 14 }} />} 
                    {!isMiniDesktop && <Typography variant="caption" sx={{ fontWeight: 700, textTransform: 'uppercase', lineHeight: 1 }}> 
                        {project.situation === "in progress" ? "In Progress" : "Completed"}
                    </Typography>}
                </Box>
            }
            sx={{
                color: "#fff",
                fontWeight: 700,
                backgroundColor: project.situation === "in progress" ? "#FFD700" : "#66BB6A",
                boxShadow: project.situation === "in progress"
                    ? `0 2px 8px rgba(255, 215, 0, 0.6)` 
                    : "0 3px 10px rgba(102, 187, 106, 0.4)", 
                padding: "4px 8px", 
                borderRadius: "4px", 
                fontSize: "9px", 
                height: "22px", 
                '& .MuiChip-label': {
                    paddingLeft: '0px',
                    paddingRight: '0px',
                }
            }}
        />
    );
}