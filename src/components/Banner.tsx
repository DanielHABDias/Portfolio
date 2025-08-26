import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import GlitchText from "./GlitchText";

export default function Banner({name} : {name: string}) {
  return (
    <Box sx={{ width: "100%", height: "100vh", overflow: "hidden" , top: 0}}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1
        }}
      >
        <source src="/banner.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "white",
          textAlign: "center",
          flexDirection: "column",
          flexWrap: "wrap"
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 200, height: 200}}/>
        <Typography variant="h3" component="div">
            {name}
        </Typography>
        <GlitchText text="Full Stack Developer" fontSize="5rem" />
      </Box>
    </Box>
  );
}