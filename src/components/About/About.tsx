import React from 'react';
import {Box, Container, Stack, Typography} from '@mui/material';
import Photo from '../HeroSection/Photo';

const About = () => {
  return (
    <div>
      <Container sx={{bgcolor: 'primary.light'}}>
        <Stack
          spacing={10}
          justifyContent={'space-between'}
          alignItems={'flex-start'}>
          <Box>
            <Photo />
          </Box>
          <Box>
            <Typography fontSize={50} fontWeight={700}>
              ABOUT ME
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate saepe autem quisquam ab modi dolor doloremque omnis
              placeat quae velit?
            </Typography>

            <Box>
              
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default About;
