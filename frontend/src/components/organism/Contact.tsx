"use client";

import * as Types from "@/types/user";
import React, { useState } from "react";
import { Grid, TextField, Box, Chip, Link, Typography, CircularProgress, Alert, Snackbar } from "@mui/material";
import useUser from "@/hooks/useUser";
import { useEmail } from "@/hooks/useEmail";
import Title from "../atoms/Title";
import Button from "../atoms/Button";
import GoogleMap from "../molecules/GoogleMap";

export default function Contact() {
  const user: Types.UserContextType = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { isLoading, error, successMessage, sendEmail, resetFeedback } = useEmail();
  const [openSnackbar, setOpenSnackbar] = useState(false); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnackbar(false); 

    try {
      await sendEmail(formData); 
      if (successMessage) { 
        setOpenSnackbar(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
    resetFeedback();
  };

  return (
    <Grid
      container
      spacing={6}
      justifyContent={"center"}
      sx={{
        color: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, md: 4 },
        width: "100%",
        flexDirection: { xs: "column", md: "row" },
      }}
      size={12} 
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
          {user.location && user.location.iframe && (
            <GoogleMap url={user.location.iframe} />
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <CircularProgress size={24}/>
            ) : (
              "Enviar Mensagem"
            )}
          </Button>
        </Box>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={error ? "error" : "success"}
          sx={{ width: '100%', bgcolor: error ? "#d32f2f" : "#2e7d32", color: "#fff" }}
        >
          {error || successMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
}