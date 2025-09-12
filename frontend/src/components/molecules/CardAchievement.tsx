"use client";

import * as Types from "@/types/user";
import { Grid, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery } from "@mui/material";
import Button from '../atoms/Button';
import { IoMdDownload } from "react-icons/io";

const style = { 
    maxWidth: 345, 
    backgroundColor: "rgba(255, 255, 255, 0.08)", 
    borderRadius: 3, 
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
}

export default function CardAchievement({ achievement, handleDownload }: { achievement:Types.Achievement, handleDownload: (achievement:Types.Achievement) => void }) {
    const isMiniDesktop = useMediaQuery("(min-width: 1025px) and (max-width: 1600px)");
    return (
      <Grid size={{ xs: 12, sm: 6, md: isMiniDesktop ? 4 : 3 }}>
        <Card sx={style}>
            <CardMedia
                sx={{ height: 140 }}
                image={achievement.img}
                title={achievement.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {achievement.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    display: "-webkit-box",
                    WebkitLineClamp: 3, 
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minHeight: "4.5em" 
                  }}
                >
                  {achievement.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  width="50%"
                  handle={() => handleDownload(achievement)}
                >
                  <IoMdDownload size={20}/> Download
                </Button>
            </CardActions>
        </Card>
      </Grid>
    );
}
