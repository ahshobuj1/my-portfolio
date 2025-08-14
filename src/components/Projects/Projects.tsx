'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Pagination,
  Typography,
} from '@mui/material';
import React, {useState} from 'react';
import ScrollHoverImage from './ScrollHoverImage';
import SectionTitle from '../UI/SectionTitle';
import {MdOutlineMemory} from 'react-icons/md';
import {FaEye} from 'react-icons/fa';
import {FaArrowUpRightFromSquare} from 'react-icons/fa6';
import {projects} from '@/data/projects';
import {TProject} from '@/types';
import Link from 'next/link';

const Projects = () => {
  console.log(projects);

  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 1;
  const totalPage = Math.ceil(projects.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <Container sx={{bgcolor: 'primary.light'}}>
        <Box py={5}>
          <SectionTitle
            title="LATEST"
            titleMain="PROJECTS"
            desc="Explore my Frontend, Backend, and MERN STACK work."
          />

          <div>
            {currentProjects.map((project: TProject) => (
              <div
                key={project.slug}
                className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="order-2 md:order-1">
                  <Typography
                    color="secondary.main"
                    fontSize={40}
                    fontWeight={700}
                    fontFamily={'monospace'}>
                    {project.category.toUpperCase()}
                  </Typography>

                  <Typography
                    fontSize={25}
                    fontWeight={700}
                    color="secondary.main">
                    {project.name}
                  </Typography>

                  <Typography mb={4}>{project.description}</Typography>

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
                    {project?.skills?.map((tech) => (
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
                    ))}
                  </Box>

                  <Divider sx={{mt: '10px', mb: 4}} />

                  <Button
                    LinkComponent={Link}
                    href={project.liveLink}
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
                    LinkComponent={Link}
                    href={`/projects/${project.id}`}
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
                  <ScrollHoverImage src={project?.image} alt="project image" />
                </div>
              </div>
            ))}
          </div>

          <Box
            display={'flex'}
            justifyContent={{xs: 'center', md: 'end'}}
            my={5}>
            <Pagination
              color="primary"
              shape="rounded"
              size="large"
              count={totalPage}
              variant="outlined"
              page={page}
              onChange={handleChange}
            />
          </Box>

          <Box justifyContent={'center'} display={'flex'}>
            <Button
              LinkComponent={Link}
              href={`/projects`}
              startIcon={<FaEye />}
              sx={{
                textTransform: 'none',
                px: 3,
                py: 1,
                borderRadius: 2,
                fontWeight: 500,
                bgcolor: 'primary.main',
              }}>
              View All Projects
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Projects;
