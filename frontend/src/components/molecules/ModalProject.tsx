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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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

export default function ModalProject({
  open,
  handleClose,
  selectedProject,
}: {
  open: boolean;
  handleClose: () => void;
  selectedProject?: Types.Project;
}) {
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
          <Image
            src={selectedProject.img}
            alt={selectedProject.title}
            loading="lazy"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
            }}
          />
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
          <Typography id="modal-titulo" variant="h5" sx={{ fontWeight: 700 }}>
            {selectedProject.title}
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

          <Typography
            id="modal-descricao"
            variant="body1"
            sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}
          >
            {selectedProject.description}
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" mt={2} width={"100%"}>
            <Button
              component="a"
              fullWidth
              variant="outlined"
              startIcon={<FaGithub />}
              href={selectedProject.links.github || undefined}
              target="_blank"
              rel="noopener noreferrer"
              disabled={!selectedProject.links.github}
              sx={{
                borderColor: !selectedProject.links.github
                  ? "grey.600"
                  : "#00ffff",
                color: !selectedProject.links.github ? "grey.500" : "#00ffff",
                "&:hover": {
                  borderColor: !selectedProject.links.github
                    ? "grey.600"
                    : "#00e6e6",
                  bgcolor: !selectedProject.links.github
                    ? "transparent"
                    : "rgba(0,255,255,0.1)",
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
              disabled={!selectedProject.links.demo}
              sx={{
                borderColor: !selectedProject.links.demo
                  ? "grey.600"
                  : "#00ffff",
                color: !selectedProject.links.demo ? "grey.500" : "#00ffff",
                "&:hover": {
                  borderColor: !selectedProject.links.demo
                    ? "grey.600"
                    : "#00e6e6",
                  bgcolor: !selectedProject.links.demo
                    ? "transparent"
                    : "rgba(0,255,255,0.1)",
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
