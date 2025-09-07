"use client";

import { Box, Button, Modal, Typography } from "@mui/material";

export default function ModalProject({ open, handleClose, selectedProject }: any) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-titulo"
            aria-describedby="modal-descricao"
        >
            <Box
            sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 24,
                p: 4,
            }}
            >
            <Typography id="modal-titulo" variant="h6" component="h2">
                {selectedProject.title}
            </Typography>
            <Typography id="modal-descricao" sx={{ mt: 2 }}>
                {selectedProject.title}
            </Typography>
            <Button sx={{ mt: 2 }} variant="contained" onClick={handleClose}>
                Fechar
            </Button>
            </Box>
        </Modal>
    )
}