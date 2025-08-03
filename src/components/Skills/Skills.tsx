'use client';

import {Box, Container, Stack, Typography} from '@mui/material';
import Tab from '@mui/material/Tab';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {useState} from 'react';
import {RiReactjsFill} from 'react-icons/ri';

const Skills = () => {
  const [value, setValue] = useState<string>('1');

  return (
    <div>
      <Container>
        <Box py={10}>
          <Typography fontSize={50} fontWeight={700}>
            TACK STACK
          </Typography>

          <TabContext value={value}>
            <Box>
              <TabList
                onChange={(e, newValue) => setValue(newValue)}
                aria-label="lab API tabs example">
                <Tab label="FRONTEND" value="1" />
                <Tab label="BACKEND" value="2" />
                <Tab label="TOOLS" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="grid grid-cols-3 md: grid-cols-5 gap-2">
                <Stack
                  spacing={1}
                  justifyContent="start"
                  border={2}
                  borderRadius={1}
                  p={1}
                  borderColor={'primary.main'}
                  color={'primary.main'}>
                  <Box>
                    <RiReactjsFill className="text-5xl" />
                  </Box>
                  <Typography
                    color="primary.main"
                    fontSize={25}
                    fontWeight={500}>
                    REACT JS
                  </Typography>
                </Stack>
              </div>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </div>
  );
};

export default Skills;
