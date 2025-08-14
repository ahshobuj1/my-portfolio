'use client';

import {Box, Container} from '@mui/material';
import Tab from '@mui/material/Tab';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {useState} from 'react';
import SectionTitle from '../UI/SectionTitle';
import {backendSkills, frontendSkills, otherSkills} from '@/constant/global';
import SkillCard from '../UI/SkillCard';

const Skills = () => {
  const [value, setValue] = useState<string>('1');

  return (
    <div id="skills">
      <Container sx={{bgcolor: 'primary.light'}}>
        <Box py={5}>
          <SectionTitle
            title="TECH"
            titleMain="STACK"
            desc="The technologies powering my projects."
          />

          <Box pt={3}>
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
                  {frontendSkills.map((item) => (
                    <SkillCard item={item} key={item.name} />
                  ))}

                  {/* {frontendSkills.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 border-dashed border-2 rounded-lg border-primary-main p-2 hover:border-solid hover:scale-102 transition-transform duration-300 ease-in-out">
                      <span className="text-5xl text-primary-main">
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))} */}
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
                  {backendSkills.map((item) => (
                    <SkillCard item={item} key={item.name} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
                  {otherSkills.map((item) => (
                    <SkillCard item={item} key={item.name} />
                  ))}
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Skills;
