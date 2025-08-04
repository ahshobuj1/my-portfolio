'use client';

import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {MdLocationPin, MdOutlineAlternateEmail} from 'react-icons/md';
import SocialLinks from '../UI/SocialLinks';
import {useForm, SubmitHandler, FieldValues} from 'react-hook-form';
import SectionTitle from '../UI/SectionTitle';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Container>
        <SectionTitle
          title="GET IN"
          titleMain="TOUCH"
          desc="Feel free to reach out, Let's chat and collaborate!"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Contact Details */}
          <Box>
            <Typography
              fontSize={{xs: 20, md: 30}}
              fontWeight={700}
              mb={1}
              color="secondary.main"
              textTransform={'uppercase'}>
              Contact Me For Collaborate
            </Typography>
            <Typography>
              I&apos;m excited to collaborate on innovative projects and bring
              your ideas to life. Let&apos;s work together to create something
              amazing.
            </Typography>

            <Box>
              <Box>
                <div className="flex items-center gap-2 p-2 mt-2">
                  <span className="text-2xl text-secondary-main">
                    <FaPhoneSquareAlt />
                  </span>
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <p className="text-xs text-gray-500">1318-357290</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2">
                  <span className="text-2xl text-secondary-main">
                    <MdOutlineAlternateEmail />
                  </span>
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-xs text-gray-500">
                      ahshobuj11@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2">
                  <span className="text-2xl text-secondary-main">
                    <MdLocationPin />
                  </span>
                  <div>
                    <p className="font-semibold text-sm">Location</p>
                    <p className="text-xs text-gray-500">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </Box>
            </Box>

            <Box justifyContent={'start'} display={'flex'} my={2}>
              <SocialLinks />
            </Box>
          </Box>

          {/* Forms */}
          <Stack
            flexDirection={'column'}
            gap={3}
            bgcolor={'#f0f4f9'}
            px={5}
            py={3}
            borderRadius={2}>
            <Box
              component={'form'}
              borderRadius={2}
              onSubmit={handleSubmit(onSubmit)}
              px={2}>
              <div className="flex gap-5 mb-3">
                <TextField
                  label="First Name"
                  {...register('firstName', {
                    required: 'FirstName is required',
                  })}
                  error={!!errors.firstName}
                  variant="standard"
                />
                <TextField
                  label="Last Name"
                  {...register('lastName', {
                    required: 'LastName is required',
                  })}
                  error={!!errors.lastName}
                  variant="standard"
                />
              </div>
              <TextField
                type="email"
                label="Email"
                {...register('email', {
                  required: 'Email is required',
                })}
                error={!!errors.email}
                variant="standard"
                fullWidth
              />

              <FormControl
                variant="standard"
                fullWidth
                sx={{my: 2}}
                error={!!errors.projectType}>
                <InputLabel>Project Type (optional)</InputLabel>
                <Select
                  label="Project Type (optional)"
                  defaultValue=""
                  {...register('projectType')}>
                  <MenuItem value="frontend">Frontend Development</MenuItem>
                  <MenuItem value="backend">Backend API&apos;s</MenuItem>
                  <MenuItem value="fullstack">Full-Stack Website</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Notes *"
                {...register('message', {
                  required: 'Write is required',
                })}
                error={!!errors.email}
                multiline
                rows={3}
                defaultValue="Send Message"
                sx={{mb: 4, mt: 2}}
                fullWidth
              />

              <Button type="submit" fullWidth>
                CONNECT
              </Button>
            </Box>
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
