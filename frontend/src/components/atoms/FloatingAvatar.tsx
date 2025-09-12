"use client";

import useUser from '@/hooks/useUser';
import React, { useEffect, useState } from 'react';
import { Avatar, Fab, Box, useTheme, CircularProgress, useMediaQuery } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

interface FloatingAvatarProps {
  onClick: () => void;
  isOpen: boolean;
  isLoaded?: boolean;
}

export default function FloatingAvatar({ onClick, isOpen, isLoaded=false }: FloatingAvatarProps) {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const avatarSrc = useUser().avatar;
  const theme = useTheme();
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setPulse(true);
      const timer = setTimeout(() => setPulse(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: { xs: 10, sm: 20, md: 20 },
        zIndex: 1600,
      }}
    >
      <Fab
        color="primary"
        aria-label="chat"
        onClick={onClick}
        disabled={!isLoaded} 
        sx={{
          width: isMobile ? 60 : 80,
          height: isMobile ? 60 : 80,
          boxShadow: theme.shadows[6],
          backgroundColor: theme.palette.grey[800],
          '&:hover': {
            backgroundColor: theme.palette.grey[600],
          },
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out',
          animation: pulse ? 'pulse 0.6s ease-in-out 3' : 'none',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.15)' },
            '100%': { transform: 'scale(1)' },
          },
        }}
      >
        {!isLoaded ? (
          <CircularProgress size={30} sx={{ color: theme.palette.grey[800] }} />
        ) : isOpen ? (
          <ChatIcon sx={{ transform: 'rotate(-90deg)' }} />
        ) : (
          <Avatar
            src={avatarSrc}
            sx={{
              width: isMobile ? 54 : 74,
              height: isMobile ? 54 : 74,
              border: `2px solid ${theme.palette.grey}`,
            }}
          />
        )}
      </Fab>
    </Box>
  );
}
