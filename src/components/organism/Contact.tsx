"use client";

import * as Types from "@/types/user";
import React, { useState } from "react";
import {
  Grid,
  TextField,
  Box,
  Chip,
  Link,
  Typography,
  Button,
} from "@mui/material";
import useUser from "@/hooks/useUser"; 
import Title from "../atoms/Title";
import GoogleMap from "../molecules/GoogleMap";

export default function Contact() {
  const user: Types.UserContextType = useUser(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário Submetido:", formData);
    alert("Mensagem enviada! Dados: " + formData.name + formData.email + formData.message);
    // Aqui você integraria com um serviço de email, backend, etc.
  };

  return (
    <Grid
        container
        spacing={6}
        sx={{
            color: "#f0f0f0", 
            display: "flex",
            alignItems: "center", 
            justifyContent: "center", 
            padding: { xs: 2, md: 4 }, 
            maxWidth: "lg",
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
        }}
        size={{ xs: 12, md: 12 }}
    >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              p: { xs: 2, md: 4 }, 
              borderRadius: 2,
              bgcolor: "#2a2a2a", 
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)", 
              height: "100%", 
            }}
          >
            <Title text="Localization & Social" />
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2, 
                mt: 2,
              }}
            >
              {user.contacts?.map((contact: Types.Contact, i: number) => (
                <Link
                  href={contact.link}
                  underline="none" 
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer" 
                  key={i}
                >
                  <Chip
                    label={contact.type}
                    clickable 
                    sx={{
                      bgcolor: contact.color,
                      color: "#fff",
                      fontWeight: 600,
                      boxShadow: `0 2px 10px ${contact.color}`,
                      "&:hover": {
                        bgcolor: contact.color, 
                        opacity: 0.9,
                        transform: "scale(1.02)",
                        transition: "transform 0.2s ease-in-out",
                      },
                    }}
                  />
                </Link>
              ))}
            </Box>

            {user.location && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Where I am:
                    </Typography>
                    <Typography variant="body1">
                        {user.location.address}
                    </Typography>
                </Box>
            )}
            {user.location.iframe && (
                <GoogleMap url={user.location.iframe}/>
            )}

          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="form" 
            onSubmit={handleSubmit}
            sx={{
              p: { xs: 2, md: 4 }, 
              borderRadius: 2,
              bgcolor: "#2a2a2a", 
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)", 
              display: "flex",
              flexDirection: "column",
              gap: 3, 
              height: "100%",
            }}
          >
            <Title text="Contact-me" />
            <TextField
              id="name"
              name="name"
              label="Seu Nome"
              variant="outlined"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#9e9e9e" } }} 
              InputProps={{ style: { color: "#f0f0f0" } }} 
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#424242", 
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#61dafb", 
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#61dafb", 
                },
              }}
            />
            <TextField
              id="email"
              name="email"
              label="Seu Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#9e9e9e" } }}
              InputProps={{ style: { color: "#f0f0f0" } }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#424242",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#61dafb",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#61dafb",
                },
              }}
            />
            <TextField
              id="message"
              name="message"
              label="Sua Mensagem"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#9e9e9e" } }}
              InputProps={{ style: { color: "#f0f0f0" } }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#424242",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#61dafb",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#61dafb",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                bgcolor: "#61dafb", 
                "&:hover": {
                  bgcolor: "#4db8e6", 
                },
                color: "#1a1a1a", 
                fontWeight: 700,
                boxShadow: "0px 4px 15px rgba(97, 218, 251, 0.4)", 
              }}
            >
              Enviar Mensagem
            </Button>
          </Box>
        </Grid>
    </Grid>
  );
}