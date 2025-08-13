'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {Stack} from '@mui/material';
import Link from 'next/link';
import myLogo from '@/assets/images/my-logo.png';
import Image from 'next/image';

const pages = [
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Skills',
    href: '/',
  },
  {
    label: 'Pricing',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/',
  },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        // bgcolor: '#2aa9ff20',
        // bgcolor: '#ffffff70',
        // bgcolor: '#90caf960',
        bgcolor: '#bbdefb40',
      }}>
      <Container>
        <Toolbar disableGutters>
          {/* Logo large device */}
          {/* <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} /> */}
          <Image
            src={myLogo}
            alt="logo"
            height={40}
            width={40}
            className="hidden md:flex"
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mx: 1,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}>
            SHOBUJ
          </Typography>

          {/* Logo mini device */}
          <Image
            src={myLogo}
            alt="logo"
            height={40}
            width={40}
            className="md:hidden"
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mx: 1,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'cursive',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}>
            SHOBUJ
          </Typography>

          {/* Nav Items */}
          <Stack
            sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}
            justifyContent={'end'}
            spacing={4}>
            {pages.map((page) => (
              <Typography
                key={page.label}
                onClick={handleCloseNavMenu}
                component={Link}
                href={page.href}
                sx={{
                  my: 2,
                  display: 'block',
                  transition: 'all 0.3s ease',
                  pb: 1,
                  '&:hover': {
                    color: 'primary.main',
                    cursor: 'pointer',
                  },
                }}>
                {page.label}
              </Typography>
            ))}
          </Stack>

          {/* ----------menu bar---------------- */}
          <Box
            sx={{
              display: {xs: 'flex', md: 'none'},
              justifyContent: 'flex-end',
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: {xs: 'block', md: 'none'}}}>
              <Box>
                {pages.map((page) => (
                  <Box key={page.label} onClick={handleCloseNavMenu}>
                    <Typography
                      pr={10}
                      pl={2}
                      component={Link}
                      href={page.href}
                      sx={{
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                          cursor: 'pointer',
                        },
                      }}>
                      {page.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
