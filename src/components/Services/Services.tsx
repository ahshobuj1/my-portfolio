'use client';

import {Box, Container, Stack, Typography} from '@mui/material';
import {FaLaptopCode} from 'react-icons/fa6';
import {TbWorldCode} from 'react-icons/tb';
import {IoServer} from 'react-icons/io5';
import SectionTitle from '../UI/SectionTitle';

const Services = () => {
  return (
    <div id="services">
      <Container>
        <Box py={5}>
          <SectionTitle
            title="PROVIDE"
            titleMain="SERVICES"
            desc="From pixel-perfect frontend to robust backend APIs"
          />

          {/* <Divider /> */}

          <div className="space-y-4 my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-stretch">
            <Stack
              height={'100%'}
              border={2} // Light border
              borderColor={'#e5e7eb'}
              borderRadius={2}
              py={1}
              px={2}
              sx={{
                bgcolor: 'background.paper/30',
                // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                boxShadow: '4px 4px 4px rgba(0, 153, 255, 0.25)', // subtle shadow
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 10px 15px rgba(37, 99, 235, 0.1)',
                  borderColor: 'primary.main',
                  bgcolor: 'background.paper/60',
                },
              }}>
              <Box>
                <TbWorldCode className="text-3xl text-primary-main dark:text-primary-dark w-24 h-full" />{' '}
                {/* // primary blue icon */}
                <Typography fontSize={20} my={1} fontWeight={600}>
                  FULL STACK DEVELOPMENT
                </Typography>
                <Typography color="#64748b">
                  End-to-end web application development using modern
                  technologies. From UI design to server logic and database
                  management, I handle the complete development lifecycle.
                </Typography>
              </Box>
            </Stack>

            <Stack
              height={'100%'}
              border={2} // Light border
              borderColor={'#e5e7eb'}
              borderRadius={2}
              py={1}
              px={2}
              sx={{
                bgcolor: 'background.paper/30',
                // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                boxShadow: '4px 4px 4px rgba(0, 153, 255, 0.25)', // subtle shadow
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 10px 15px rgba(37, 99, 235, 0.1)',
                  borderColor: 'primary.main',
                  bgcolor: 'background.paper/60',
                },
              }}>
              <Box>
                <FaLaptopCode className="text-3xl text-primary-main dark:text-primary-dark w-24 h-full" />{' '}
                {/* // primary blue icon */}
                <Typography fontSize={20} my={1} fontWeight={600}>
                  FRONTEND DEVELOPMENT
                </Typography>
                <Typography color="#64748b">
                  Building responsive, interactive user interfaces with React,
                  Next.js and modern CSS. Focus on performance, accessibility
                  and seamless user experiences.
                </Typography>
              </Box>
            </Stack>

            <Stack
              height={'100%'}
              border={2} // Light border
              borderColor={'#e5e7eb'}
              borderRadius={2}
              py={1}
              px={2}
              sx={{
                bgcolor: 'background.paper/30',
                // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                boxShadow: '4px 4px 4px rgba(0, 153, 255, 0.25)', // subtle shadow
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 10px 15px rgba(37, 99, 235, 0.1)',
                  borderColor: 'primary.main',
                  bgcolor: 'background.paper/60',
                },
              }}>
              <Box>
                <IoServer className="text-3xl text-primary-main dark:text-primary-dark w-24 h-full" />{' '}
                {/* // primary blue icon */}
                <Typography fontSize={20} my={1} fontWeight={600}>
                  BACKEND DEVELOPMENT
                </Typography>
                <Typography color="#64748b">
                  Robust server-side solutions with Node.js, Express and
                  databases. API development, authentication systems and
                  efficient data processing.
                </Typography>
              </Box>
            </Stack>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Services;
