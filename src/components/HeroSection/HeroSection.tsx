import {Box, Button, Container, Stack, Typography} from '@mui/material';
import TypeWriter from '../UI/TypeWriter';
import Photo from './Photo';
import {IoMdCloudDownload} from 'react-icons/io';
import SocialLinks from '../UI/SocialLinks';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
      <Container>
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
              <SocialLinks />

              <Button
                component={Link}
                href="https://drive.google.com/file/d/1S4PekLxvbVJj3Z1H9amTePBG6WpzqIur/view"
                startIcon={<IoMdCloudDownload />}
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
