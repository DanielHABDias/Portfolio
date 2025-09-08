"use client";

import { Box, Button, Modal, Typography, Card, CardContent, CardMedia, CardActions, AvatarGroup, Avatar } from "@mui/material";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    height: "auto",
    bgcolor: "rgba(14, 12, 12, 1)",
    color: "white" ,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 2,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}

export default function ModalProject({ open, handleClose, selectedProject }: any) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-titulo"
            aria-describedby="modal-descricao"
        >
            <Card sx={style}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={selectedProject.img}
                    title={selectedProject.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {selectedProject.title}
                    </Typography>
                    <Typography variant="body2">
                    {selectedProject.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", gap:1 }}>
                    <AvatarGroup
                        max={20}
                        total={selectedProject.skills.length}
                        spacing={-1} 
                        sx={{
                            "& .MuiAvatar-root": {
                            width: 28,
                            height: 28,
                            fontSize: 12, 
                            border: "2px solid #f0f0f0", 
                            boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                            },
                            "& .MuiAvatarGroup-avatar": {
                            bgcolor: "transparent",
                            },
                            "& .MuiAvatarGroup-avatar:hover": {
                            transform: "scale(1.1)",
                            transition: "0.2s",
                            },
                        }}
                        >
                        {selectedProject.skills.map((skill: any) => (
                            <Avatar
                                key={skill.title}
                                sx={{
                                    bgcolor: skill.color,
                                    width: 28,
                                    height: 28,
                                    boxShadow: `0 2px 6px ${skill.color}66`, 
                                }}
                                >
                                <skill.icon fontSize="small" />
                            </Avatar>
                        ))}
                    </AvatarGroup>
                    <Button
                        size="small"
                        sx={{
                            "&:hover": {
                                bgcolor: "#000000ff", 
                            },
                            bgcolor: "#000000a8",
                            color: "#fcfbfbff", 
                            fontWeight: 700,
                            boxShadow: "0px 4px 15px rgba(0, 8, 10, 0.4)", 
                        }}
                        onClick={() => handleClose()}
                    >
                        Fechar
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    )
}