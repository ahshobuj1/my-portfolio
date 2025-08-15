import {Box, Container, Stack, Typography} from '@mui/material';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-secondary-main text-white">
      <Container>
        <Stack
          py={2}
          justifyContent={'space-between'}
          flexDirection={{xs: 'column-reverse', md: 'row'}}
          gap={2}>
          <Typography color="lightgray" fontSize={14}>
            All rights reserved &copy; A H Shobuj
          </Typography>

          <Box sx={{display: 'flex', gap: 2, color: 'lightgray'}}>
            <Link
              className="hover:text-primary-main transition-colors"
              href={'/'}>
              Home
            </Link>

            <Link
              className="hover:text-primary-main transition-colors"
              href={'/projects'}>
              Projects
            </Link>

            <Link
              className="hover:text-primary-main transition-colors"
              href={'#skills'}>
              Contact
            </Link>

            <Link
              className="hover:text-primary-main transition-colors"
              href={'#services'}>
              Services
            </Link>

            <Link
              className="hover:text-primary-main transition-colors"
              href={'#contact'}>
              Contact
            </Link>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
