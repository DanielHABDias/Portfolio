"use client";

import * as Types from "@/types/user";
import {
  Box,
  Button,
  Modal,
  Typography,
  AvatarGroup,
  Avatar,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import LabelProject from "../atoms/LabelProject";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "40rem" },
  bgcolor: "rgba(14, 12, 12, 1)",
  color: "white",
  boxShadow:
    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  borderRadius: 2,
  overflow: "hidden",
};

export default function ModalProject({ open, handleClose, selectedProject,}: { open: boolean; handleClose: () => void; selectedProject?: Types.Project; }) {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  
  if (!selectedProject) return null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-titulo"
      aria-describedby="modal-descricao"
    >
      <Box sx={style}>
        <Box sx={{ position: "relative" }}>
          {!selectedProject.video &&
          <Image
            src={selectedProject.img}
            alt={selectedProject.title}
            loading="lazy"
            width={4000}
            height={4000}
            style={{
              objectFit: "cover",
            }}
          />}
          {selectedProject.video &&
          <a href={selectedProject.video} target="_blank" rel="noopener noreferrer">
            <video
              src={selectedProject.video}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </a>}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "white",
              bgcolor: "rgba(0,0,0,0.4)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2, alignItems: "flex-start" }}>
          <Typography
            id="modal-titulo"
            variant="h5"
            sx={{
              fontWeight: 700,
              display: "flex",           
              alignItems: "center",      
              justifyContent: "space-between", 
              width: "100%",             
              gap: 1 
            }}
          >
            {selectedProject.title}
            <LabelProject project={selectedProject} />
          </Typography>

          <AvatarGroup
            max={10}
            total={selectedProject.skills.length}
            spacing={-4}
            sx={{
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                fontSize: 14,
                border: "2px solid #111",
                bgcolor: "rgba(255,255,255,0.05)",
              },
            }}
          >
            {selectedProject.skills.map((skill: Types.Skill, i: number) => (
              <Avatar key={i} alt={skill.title}>
                <skill.icon size={16} color={skill.color} />
              </Avatar>
            ))}
          </AvatarGroup>
          
          {isMobile && (
            <Typography
              id="modal-descricao"
              variant="body1"
              overflow={"auto"}
              sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.0 }}
              height={100}
            >
              {selectedProject.description}
            </Typography>
          )}
          {!isMobile && (
            <Typography
              id="modal-descricao"
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}
            >
              {selectedProject.description}
            </Typography>
          )}

          <Stack direction="row" spacing={2} justifyContent="center" mt={2} width={"100%"}>
            <Button
              component="a"
              fullWidth
              variant="outlined"
              startIcon={<FaGithub />}
              href={selectedProject.links.github || undefined}
              target="_blank"
              rel="noopener noreferrer"
              disableRipple={!selectedProject.links.github}
              sx={{
                borderColor: !selectedProject.links.github
                  ? "#ccc" 
                  : "#ffffffff",
                color: !selectedProject.links.github
                  ? "#666" 
                  : "#ffffffff",
                opacity: !selectedProject.links.github ? 0.5 : 1,
                cursor: !selectedProject.links.github ? "default" : "pointer",
                "&:hover": {
                  borderColor: !selectedProject.links.github
                    ? "#ccc" 
                    : "#ffffffff",
                  bgcolor: !selectedProject.links.github
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Github
            </Button>

            <Button
              component="a"
              fullWidth
              variant="outlined"
              startIcon={<FaExternalLinkAlt />}
              href={selectedProject.links.demo || undefined}
              target="_blank"
              rel="noopener noreferrer"
              disableRipple={!selectedProject.links.demo}
              sx={{
                borderColor: !selectedProject.links.demo
                  ? "#ccc" 
                  : "#ffffffff",
                color: !selectedProject.links.demo
                  ? "#666" 
                  : "#ffffffff",
                opacity: !selectedProject.links.demo ? 0.5 : 1,
                cursor: !selectedProject.links.demo ? "default" : "pointer",
                "&:hover": {
                  borderColor: !selectedProject.links.demo
                    ? "#ccc" 
                    : "#ffffffff",
                  bgcolor: !selectedProject.links.demo
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Demo
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
}
