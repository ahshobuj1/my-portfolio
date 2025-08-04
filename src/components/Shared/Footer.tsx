import {Container, Stack, Typography} from '@mui/material';
import React from 'react';
import SocialLinks from '../UI/SocialLinks';

const Footer = () => {
  return (
    <div className="bg-secondary-main text-white">
      <Container>
        <Stack
          py={1}
          justifyContent={'space-between'}
          flexDirection={{xs: 'column-reverse', md: 'row'}}
          gap={2}>
          <Typography color="lightgray" fontSize={14}>
            All rights reserved @ A H Shobuj
          </Typography>

          <SocialLinks />
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
