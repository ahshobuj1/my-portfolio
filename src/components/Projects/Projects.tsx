import {
  Box,
  Button,
  Container,
  Divider,
  Pagination,
  Typography,
} from '@mui/material';
import React from 'react';
import ScrollHoverImage from './ScrollHoverImage';
import projectImage from '@/assets/images/projects-image.jpg';
import SectionTitle from '../UI/SectionTitle';
import {MdOutlineMemory} from 'react-icons/md';
import {FaEye} from 'react-icons/fa';
import {FaArrowUpRightFromSquare} from 'react-icons/fa6';

const Projects = () => {
  return (
    <div>
      <Container sx={{bgcolor: 'primary.light'}}>
        <Box py={5}>
          <SectionTitle
            title="LATEST"
            titleMain="PROJECTS"
            desc="Explore my Frontend, Backend, and MERN STACK work."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="order-2 md:order-1">
              <Typography
                color="secondary.main"
                fontSize={50}
                fontWeight={700}
                fontFamily={'monospace'}>
                01
              </Typography>

              <Typography fontSize={40} fontWeight={700} color="secondary.main">
                Frontend Project
              </Typography>

              <Typography mb={4}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum, voluptate.
              </Typography>

              <Typography
                color="secondary.main"
                fontSize={22}
                fontWeight={700}
                letterSpacing={1}
                fontFamily="monospace"
                textTransform="uppercase"
                sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                <MdOutlineMemory
                  size={30}
                  // color="#2aa9ff"
                />
                Technology:
              </Typography>

              {/* <Divider sx={{width: '175px', mb: 1}} /> */}

              <Box my={1} display="flex" flexWrap="wrap" gap={1}>
                {['React.js', 'Next.js', 'Node.js', 'Nextjs', 'Next.Js'].map(
                  (tech) => (
                    <Box
                      key={tech}
                      px={2}
                      py={0.5}
                      borderRadius={1}
                      border="1px solid"
                      borderColor="primary.main"
                      color="primary.main"
                      fontSize={14}
                      fontWeight={500}
                      sx={{
                        transition: 'all 0.3s',
                        cursor: 'default',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                          cursor: 'pointer',
                        },
                      }}>
                      {tech}
                    </Box>
                  )
                )}
              </Box>

              <Divider sx={{mt: '10px', mb: 4}} />

              <Button
                startIcon={<FaArrowUpRightFromSquare />}
                sx={{
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 500,
                  mr: 2,
                  bgcolor: 'secondary.main',
                }}>
                Live Preview
              </Button>

              <Button
                startIcon={<FaEye />}
                sx={{
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  fontWeight: 500,
                  bgcolor: 'secondary.main',
                }}>
                View Details
              </Button>
            </div>

            <div className="order-1 md:order-2">
              <ScrollHoverImage src={projectImage} alt="project image" />
            </div>
          </div>

          <Box
            display={'flex'}
            justifyContent={{xs: 'center', md: 'end'}}
            my={5}>
            <Pagination
              color="primary"
              shape="rounded"
              size="large"
              count={10}
              variant="outlined"
              //  page={page} onChange={handleChange}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Projects;
