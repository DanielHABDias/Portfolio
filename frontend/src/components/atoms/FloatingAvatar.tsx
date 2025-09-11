"use client";

import useUser from '@/hooks/useUser';
import React from 'react';
import { Avatar, Fab, Box, useTheme } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

interface FloatingAvatarProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function FloatingAvatar({ onClick, isOpen }: FloatingAvatarProps) {
    const avatarSrc = useUser().avatar;
    const theme = useTheme();

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
                sx={{
                    width: 60, 
                    height: 60,
                    boxShadow: theme.shadows[6],
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                    },
                    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                {isOpen ? (
                <ChatIcon sx={{ transform: 'rotate(-90deg)' }} /> 
                ) : (
                <Avatar
                    src={avatarSrc}
                    sx={{
                    width: 54,
                    height: 54,
                    border: `2px solid ${theme.palette.primary.contrastText}`,
                    }}
                />
                )}
            </Fab>
        </Box>
    );
}