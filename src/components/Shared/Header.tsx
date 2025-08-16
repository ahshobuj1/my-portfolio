'use client';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {Avatar, Stack} from '@mui/material';
import Link from 'next/link';
import myLogo from '@/assets/images/my-logo.png';
import Image from 'next/image';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useState} from 'react';
import {useThemeMode} from '@/lib/Providers/Providers';
// import {useTheme} from '@/lib/theme/ThemeContext';

const pages = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

function Header() {
  const {mode, toggleTheme} = useThemeMode();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

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
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}>
      <Container>
        <Toolbar disableGutters>
          {/* Logo large device */}
          {/* <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} /> */}
          <Link href={'/'}>
            <Image
              src={myLogo}
              alt="logo"
              height={40}
              width={40}
              className="hidden md:flex"
            />
          </Link>
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
          <Link href={'/'}>
            <Image
              src={myLogo}
              alt="logo"
              height={40}
              width={40}
              className="md:hidden"
            />
          </Link>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mx: 1,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}>
            SHOBUJ
          </Typography>

          {/* Nav Items */}
          <Stack
            sx={{
              flexGrow: 1,
              display: {xs: 'none', md: 'flex'},
            }}
            justifyContent={'end'}
            spacing={4}>
            {pages.map((page) => (
              <Typography
                key={page.label}
                component={Link}
                href={page.href}
                sx={{
                  transition: 'all 0.3s ease',
                  borderBottom: '2px solid transparent',
                  '&:hover': {
                    color: 'primary.main',
                    cursor: 'pointer',
                    borderBottom: '2px solid #2aa9ff',
                  },
                }}>
                {page.label}
              </Typography>
            ))}
          </Stack>

          {/** Toggle theme button */}

          <Box ml={{xs: 0, md: 4}} sx={{cursor: 'pointer'}}>
            <Avatar
              sx={{
                bgcolor: 'transparent',
                // borderColor: 'primary.main',
                // border: '1px solid transparent',
                // transition: ' 0.3s',
                // '&:hover': {
                //   borderColor: 'primary.main',
                // },
              }}>
              <span onClick={toggleTheme}>
                {mode === 'dark' ? (
                  <LightModeIcon className="text-white transition-colors hover:text-primary-dark" />
                ) : (
                  <BedtimeIcon className="text-black transition-colors hover:text-primary-main " />
                )}
              </span>
              {/* <Button onClick={() => setToggleThemeIcon(!toggleThemeIcon)}>
                {toggleThemeIcon ? <BedtimeIcon /> : <LightModeIcon />}
              </Button> */}
            </Avatar>
          </Box>

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
                <div className="p-4 flex flex-col gap-2 pr-20">
                  {pages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="hover:text-primary-main hover:dark:text-primary-dark border-l-2 border-transparent hover:border-primary-main hover:dark:border-primary-dark transition-all">
                      {page.label}
                    </Link>
                  ))}
                </div>
                {/* {pages.map((page) => (
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
                ))} */}
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
