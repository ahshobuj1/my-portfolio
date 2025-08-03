import {Avatar, Box, Button, Container, Stack, Typography} from '@mui/material';
import TypeWriter from '../UI/TypeWriter';
import Photo from './Photo';
import {IoMdCloudDownload} from 'react-icons/io';
import Link from 'next/link';
import {FaGithub, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa';

const SocialLinks = [
  {
    href: 'https://www.linkedin.com/in/ahshobuj/',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://github.com/ahshobuj1',
    icon: <FaGithub />,
  },
  {
    href: 'https://facebook.com/ahshobuj11',
    icon: <FaFacebook />,
  },
  {
    href: 'https://github.com/ahshobuj1?tab=repositories',
    icon: <FaTwitter />,
  },
];

const HeroSection = () => {
  return (
    <>
      <Container sx={{bgcolor: '#e4f6fd40'}}>
        <Stack
          direction={{xs: 'column-reverse', md: 'row'}}
          justifyContent="space-between"
          py={{xs: 5, lg: 10}}>
          <Box
            sx={{
              maxWidth: 600,
              py: {xs: 4, md: 6},
              px: {xs: 2, md: 0},
              justifyContent: {xs: 'center'},
            }}>
            <Typography
              variant="h6"
              textAlign={{xs: 'center', md: 'start'}}
              fontWeight={500}
              color="secondary.main"
              sx={{letterSpacing: 1, lineHeight: 1.5, ml: 1.5}}>
              Hello, it&apos;s me
            </Typography>

            <Typography
              textAlign={{xs: 'center', md: 'start'}}
              fontWeight={700}
              fontSize={{xs: 40, md: 60}}
              color="secondary.main"
              sx={{letterSpacing: 1.2, lineHeight: 1}}>
              A H SHOBUJ
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={{xs: 'center', md: 'start'}}
              spacing={1}
              textAlign={{xs: 'center', md: 'start'}}
              mb={2}>
              <TypeWriter />
            </Stack>

            <Typography
              variant="body1"
              color="text.secondary"
              mb={3}
              textAlign={{xs: 'center', md: 'start'}}
              sx={{maxWidth: 500}}>
              MERN Stack Developer, building full-stack, responsive web apps
              with — React, Next.js, TypeScript, MongoDB & Node.js.
            </Typography>

            <Stack
              spacing={2}
              justifyContent={'start'}
              direction={{xs: 'column', md: 'row-reverse'}}>
              <Stack direction="row" spacing={3}>
                {SocialLinks.map((item) => (
                  <Avatar
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={{
                      border: '2px solid',
                      borderColor: 'primary.main',
                      bgcolor: 'transparent',
                      color: 'primary.main',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      width: 40,
                      height: 40,
                      '&:hover': {
                        bgcolor: 'primary.main',
                        color: 'white',
                      },
                    }}>
                    {item.icon}
                  </Avatar>
                ))}
              </Stack>

              <Button
                startIcon={<IoMdCloudDownload />}
                variant="contained"
                color="primary"
                sx={{
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 500,
                }}>
                My Resume
              </Button>
            </Stack>
          </Box>

          <Box>
            <Photo />
          </Box>
        </Stack>
      </Container>

      {/* <div className="grid lg:grid-cols-2 gap-4 justify-center lg:justify-between py-10 bg-white/20 items-center"></div> */}
    </>
  );
};

export default HeroSection;
