import {Box, Container, Stack, Typography} from '@mui/material';
import {FaLaptopCode} from 'react-icons/fa6';
import {TbWorldCode} from 'react-icons/tb';
import {IoServer} from 'react-icons/io5';
import SectionTitle from '../UI/SectionTitle';

const Services = () => {
  return (
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
            border={2}
            borderColor={'lightgray'}
            bgcolor={'secondary.main'}
            borderRadius={2}
            py={1}
            px={2}
            sx={{
              boxShadow: '4px 4px 4px rgba(0, 153, 255, 0.25)',
              transition: 'all 0.3s ease',

              '&:hover': {
                boxShadow: '0 8px 16px rgba(0, 153, 255, 0.4)',
                borderColor: 'primary.main',
              },
            }}>
            <Box>
              <TbWorldCode className="text-3xl text-primary-main w-24 h-full" />

              <Typography fontSize={20} my={1} fontWeight={600} color="white">
                FULL STACK DEVELOPMENT
              </Typography>

              <Typography color="lightgray">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
                maiores minima. Corporis dignissimos animi exercitationem, nulla
                eius soluta ea eligendi.
              </Typography>
            </Box>
          </Stack>

          <Stack
            height={'100%'}
            border={2}
            borderColor={'lightgray'}
            bgcolor={'secondary.main'}
            borderRadius={2}
            py={1}
            px={2}
            sx={{
              boxShadow: '4px 4px 4px rgba(0, 153, 255, 0.25)',
              transition: 'all 0.3s ease',

              '&:hover': {
                boxShadow: '0 8px 16px rgba(0, 153, 255, 0.4)',
                borderColor: 'primary.main',
              },
            }}>
            <Box>
              {/* <div className="w-24 border-1 rounded-r-full border-primary-main ">    </div> */}
              <FaLaptopCode className="text-2xl text-primary-main w-24 h-full" />

              <Typography fontSize={20} my={1} fontWeight={600} color="white">
                FRONTEND DEVELOPMENT
              </Typography>

              <Typography color="lightgray">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
                maiores minima. Corporis dignissimos animi exercitationem, nulla
                eius soluta ea eligendi.
              </Typography>
            </Box>
          </Stack>

          <Stack
            height={'100%'}
            border={2}
            borderColor={'lightgray'}
            bgcolor={'secondary.main'}
            borderRadius={2}
            py={1}
            px={2}
            sx={{
              boxShadow: '4px 4px 4px rgba(0, 153, 255, 0.25)',
              transition: 'all 0.3s ease',

              '&:hover': {
                boxShadow: '0 8px 16px rgba(0, 153, 255, 0.4)',
                borderColor: 'primary.main',
              },
            }}>
            <Box>
              {/* <div className="w-24 border-1 rounded-r-full border-primary-main ">    </div> */}
              <IoServer className="text-3xl text-primary-main w-24 h-full" />

              <Typography fontSize={20} my={1} fontWeight={600} color="white">
                BACKEND DEVELOPMENT
              </Typography>

              <Typography color="lightgray">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
                maiores minima. Corporis dignissimos animi exercitationem, nulla
                eius soluta ea eligendi.
              </Typography>
            </Box>
          </Stack>
        </div>
      </Box>
    </Container>
  );
};

export default Services;
