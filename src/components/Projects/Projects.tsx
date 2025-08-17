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
import {FaEye} from 'react-icons/fa';
import {FaArrowUpRightFromSquare} from 'react-icons/fa6';
import {projects} from '@/data/projects';
import {TProject} from '@/types';
import Link from 'next/link';

const Projects = () => {
  // console.log(projects);

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
      <Container>
        <Box py={5}>
          <SectionTitle
            title="LATEST"
            titleMain="PROJECTS"
            desc="Explore my Frontend, Backend, and MERN STACK work."
          />

          <div className="mt-4">
            <Box
              border={2}
              borderColor={'#e5e7eb'}
              bgcolor={'background.paper'}
              borderRadius={2}
              py={1}
              px={2}
              sx={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                // boxShadow: '4px 4px 4px rgba(0, 153, 255, 0.25)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 10px 15px rgba(37, 99, 235, 0.1)',
                  borderColor: 'primary.main',
                  bgcolor: 'background.paper/10',
                },
              }}>
              {currentProjects.map((project: TProject) => (
                <div
                  key={project.slug}
                  className="grid md:grid-cols-2 gap-8 my-4">
                  <div className="order-2 md:order-1">
                    <Link href={`/projects/${project.id}`}>
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
                        color="text.primary"
                        // sx={(theme) => ({
                        //   color:
                        //     theme.palette.mode === 'light'
                        //       ? '#12304b'
                        //       : '#ffffff',
                        // })}
                      >
                        {project.name}
                      </Typography>

                      <Typography mb={4}>{project.description}</Typography>
                    </Link>

                    {/* <Divider sx={{width: '175px', mb: 1}} /> */}

                    <Box my={1} display="flex" flexWrap="wrap" gap={1}>
                      {project?.skills?.slice(0, 4)?.map((tech) => (
                        <span
                          key={tech}
                          className=" flex items-center justify-center bg-primary-main dark:bg-primary-dark text-white px-2 py-1 rounded text-xs font-semibold">
                          {tech}
                        </span>
                      ))}

                      {project?.skills?.length > 4 && (
                        <span className="text-gray-500 text-xs py-1">
                          +{project.skills.length - 4} more
                        </span>
                      )}
                    </Box>

                    <Divider sx={{mt: '20px', mb: 4}} />

                    <Button
                      LinkComponent={Link}
                      href={project.liveLink}
                      startIcon={<FaArrowUpRightFromSquare />}
                      sx={{
                        textTransform: 'none',
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 500,
                        mr: 1,
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
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 500,
                        bgcolor: 'secondary.main',
                      }}>
                      View
                    </Button>
                  </div>

                  <div className="order-1 md:order-2">
                    <ScrollHoverImage
                      src={project?.image}
                      alt="project image"
                    />
                  </div>
                </div>
              ))}
            </Box>
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
