import React, { useState, useEffect } from 'react';
import { Box, Paper, TextField, IconButton, Typography, CircularProgress, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useChat, ChatMessage } from '@/hooks/useChat';

interface ChatWindowProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function ChatWindow({ onClose, isOpen = false }: ChatWindowProps) {
  const { messages, isLoading, error, sendMessage, clearChat, chatContainerRef } = useChat();
  const [inputMessage, setInputMessage] = useState('');
  const theme = useTheme();

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      await sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatContainerRef]);

  return (
    <Paper
      elevation={5}
      sx={{
        position: 'fixed',
        bottom: { xs: 90, sm: 110 },
        right: { xs: 10, sm: 20, md: 20 },
        width: { xs: '90vw', sm: 350, md: 400 },
        height: { xs: '70vh', sm: 500, md: 550 },
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        borderRadius: theme.shape.borderRadius,
        bgcolor: '#212121',
        boxShadow: theme.shadows[8],
        zIndex: 1500,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          p: 1.5,
          bgcolor: theme.palette.grey[800],
          color: theme.palette.primary.contrastText,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Chat
        </Typography>
        <Box>
          <IconButton size="small" color="inherit" onClick={clearChat} disabled={isLoading || messages.length === 0 || !messages}>
            <DeleteForeverIcon />
          </IconButton>
          <IconButton size="small" color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        ref={chatContainerRef}
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          bgcolor: '#303030',
        }}
      >
        {messages.length === 0 && !isLoading && (
          <Typography
            variant="body2"
            color="rgba(255,255,255,0.7)"
            sx={{ textAlign: 'center', mt: 'auto', mb: 'auto' }}
          >
            Olá! Como posso ajudar você hoje?
          </Typography>
        )}
        {messages.map((msg: ChatMessage) => (
          <Box
            key={msg.id}
            sx={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <Paper
              variant="outlined"
              sx={{
                p: 1.2,
                borderRadius: '18px',
                maxWidth: '75%',
                bgcolor:
                  msg.sender === 'user'
                    ? theme.palette.text.primary
                    : '#424242',
                color: '#fff',
                boxShadow: msg.sender === 'user' ? '0 2px 5px rgba(0,0,0,0.2)' : 'none',
              }}
            >
              <Typography variant="body2" sx={{ wordWrap: 'break-word' }}>
                {msg.text}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textAlign: msg.sender === 'user' ? 'right' : 'left',
                  mt: 0.5,
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.7rem',
                }}
              >
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Typography>
            </Paper>
          </Box>
        ))}
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 1 }}>
            <CircularProgress size={20} />
          </Box>
        )}
        {error && (
          <Typography variant="body2" color="error" sx={{ textAlign: 'center', mt: 1 }}>
            Erro: {error}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          p: 1.5,
          borderTop: `1px solid ${theme.palette.divider}`,
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#212121',
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Digite sua mensagem..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          sx={{
            mr: 1,
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
              pr: '0 !important',
              bgcolor: '#424242',
              color: '#fff',
            },
            '& .MuiInputBase-input': {
              pl: 2,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent !important',
            },
            '& .MuiInputLabel-root': {
              color: '#bdbdbd',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: theme.palette.primary.light,
            },
          }}
        />
        <IconButton
          color="primary"
          onClick={handleSendMessage}
          disabled={isLoading || !inputMessage.trim()}
          sx={{
            bgcolor: theme.palette.grey[800],
            color: theme.palette.primary.contrastText,
            '&:hover': {
              bgcolor: theme.palette.grey[600],
            },
            width: 40,
            height: 40,
            '& .MuiSvgIcon-root': {
              fontSize: 20,
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
