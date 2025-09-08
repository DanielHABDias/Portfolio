"use client";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, AvatarGroup } from '@mui/material';

type typeProject = {
  title: string;
  description: string;
  links: {
    github?: string;
    demo?: string;
  };
  skills: Skill[];
  img: string;
  situation: "ongoing" | "finished";
}

type Skill = {
  icon: React.ElementType;
  title: string;
  color: string;
}

const style = { 
    maxWidth: 345, 
    backgroundColor: "rgba(255, 255, 255, 0.08)", 
    borderRadius: 3, 
    color: "white" ,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

export default function CardProject({ project, handleOpen }: { project:typeProject, handleOpen: (project:typeProject) => void }) {
    return (
        <Card sx={style}>
            <CardMedia
                sx={{ height: 140 }}
                image={project.img}
                title={project.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {project.title}
                </Typography>
                <Typography variant="body2">
                {project.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <AvatarGroup
                    max={4}
                    total={project.skills.length}
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
                    {project.skills.map((skill: Skill) => (
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
                    onClick={() => handleOpen(project)}
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}