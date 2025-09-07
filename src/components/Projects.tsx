"use client";

import { useState } from "react";
import { Grid, Modal } from "@mui/material";
import useUser from "@/hooks/useUser";
import CardProject from "./CardProject";
import ModalProject from "./ModalProject";

export default function Projects() {
  const projects = useUser()?.projects;
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  
  const handleOpen = (project: any) => {
    setSelectedProject(project);
    setOpen(true);
  }
  const handleClose = () => {
    setSelectedProject({});
    setOpen(false);
  }

  return (
    <Grid
      size={12}
      container
      spacing={3}
      sx={{
        padding: { xs: 2, md: 4 }
      }}
    >
      {projects.map((project: any) => (
        <Grid size={{ xs: 12, md: 6 }}>
          <CardProject project={project} handleOpen={handleOpen}/>
        </Grid>
      ))}
      {open && <ModalProject open={open} handleClose={handleClose} selectedProject={selectedProject}/>}
    </Grid>
  );
}
