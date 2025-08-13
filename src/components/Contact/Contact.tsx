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
import React, {useState} from 'react';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {MdLocationPin, MdOutlineAlternateEmail} from 'react-icons/md';
import SocialLinks from '../UI/SocialLinks';
import {useForm, SubmitHandler, FieldValues} from 'react-hook-form';
import SectionTitle from '../UI/SectionTitle';
import {FaPaperPlane} from 'react-icons/fa';

const Contact = () => {
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | ''>(
    ''
  );

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setStatus('loading');
    console.log(data);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch('/api/contact', options);
      const result = await response.json();

      if (!result.success) {
        setStatus('error');
        setMessage(result?.message || 'Something went wrong');
        return null;
      }

      setStatus('success');
      setMessage(result?.message || 'Your message was sent successfully!');
      reset();

      console.log(result);
    } catch (error) {
      console.log(error);
      setStatus('error');
      setMessage('Something went wrong');
    }
  };

  return (
    <div>
      <Container>
        <Box pb={5}>
          <SectionTitle
            title="GET IN"
            titleMain="TOUCH"
            desc="Feel free to reach out, Let's chat and collaborate!"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-7 md:mt-0">
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
                  <InputLabel>Project Type</InputLabel>
                  <Select
                    label="Project Type"
                    defaultValue=""
                    {...register('projectType', {
                      required: 'Please select projects',
                    })}>
                    <MenuItem value="frontend">Frontend Development</MenuItem>
                    <MenuItem value="backend">Backend API&apos;s</MenuItem>
                    <MenuItem value="fullstack">Full-Stack Website</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label="Send Notes *"
                  {...register('message', {
                    required: 'Message is required',
                  })}
                  error={!!errors.message}
                  multiline
                  rows={3}
                  placeholder="Share your idea!"
                  defaultValue=""
                  sx={{mb: 4, mt: 2}}
                  fullWidth
                />

                <Button
                  type="submit"
                  color="secondary"
                  sx={{marginBottom: 1}}
                  fullWidth
                  disabled={status === 'loading'}
                  startIcon={<FaPaperPlane />}>
                  {status === 'loading' ? 'Sending..' : "LET'S CONNECT"}
                </Button>

                {status === 'success' ? (
                  <Typography color="green">{message}</Typography>
                ) : (
                  ''
                )}

                {status === 'error' ? (
                  <Typography color="red">{message}</Typography>
                ) : (
                  ''
                )}
              </Box>
            </Stack>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
