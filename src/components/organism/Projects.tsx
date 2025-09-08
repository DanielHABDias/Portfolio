"use client";

import * as Types from "@/types/user";
import { useState } from "react";
import { Grid } from "@mui/material";
import useUser from "@/hooks/useUser";
import CardProject from "../molecules/CardProject";
import ModalProject from "../molecules/ModalProject";

export default function Projects() {
  const projects: Types.Project[] = useUser()?.projects;
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Types.Project|null>(null);
  
  const handleOpen = (project: Types.Project) => {
    setSelectedProject(project);
    setOpen(true);
  }
  const handleClose = () => {
    setSelectedProject(null);
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
      {projects.map((project: Types.Project) => (
        <Grid size={{ xs: 12, md: 6 }}>
          <CardProject project={project} handleOpen={handleOpen}/>
        </Grid>
      ))}
      {open && selectedProject && <ModalProject open={open} handleClose={handleClose} selectedProject={selectedProject}/>}
    </Grid>
  );
}
