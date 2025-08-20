"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const sessions = ['About', 'Timeline', 'HardSkills', 'SoftSkills', 'Projects', 'Contact'];

interface HeaderProps {
  name: string;
}

export default function Header({name}: HeaderProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = React.useState(false);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md')); 

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => setAnchorElNav(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar position="sticky" elevation={scrolled ? 4 : 0} sx={{backgroundColor: scrolled ? 'black' : 'transparent', color: 'white'}}>
      <Container maxWidth="xl">
        <Toolbar sx={{ minHeight: 48, paddingX: 0}}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexGrow: 0 }}>
            <CodeIcon fontSize='large' sx={{ mr: 1}} />
            <Typography
                variant={isMdUp ? "h6" : "h5"}
                noWrap
                component="a"
                sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            >
                {name}
            </Typography>
          </Box>

          {!isMdUp && (
            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {sessions.map((session) => (
                  <MenuItem key={session} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{session}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {isMdUp && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {sessions.map((session) => (
                <Button
                  key={session}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {session}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}