import {Box, Stack, Typography} from '@mui/material';

interface ISkillProps {
  name: string;
  desc: string;
  icon: React.ReactNode;
}

const SkillCard = ({item}: {item: ISkillProps}) => {
  return (
    <>
      <Stack
        spacing={{xs: 0.5, md: 1}}
        height={'100%'}
        justifyContent={'start'}
        borderRadius={2}
        border={1}
        borderColor={'primary.main'}
        sx={{
          boxShadow: '0 8px 16px rgba(0, 153, 255, 0.4)',
          transition: 'all 0.3s ease',

          '&:hover': {
            boxShadow: '4px 4px 4px rgba(0, 153, 255, 0.25)',
            borderColor: 'lightgray',
            scale: '1.02',
            cursor: 'pointer',
          },
        }}>
        <Box bgcolor={'gray-50'} borderRadius={1} padding={1}>
          <span className="text-secondary-main dark:text-primary-dark text-4xl md:text-5xl">
            {item.icon}
          </span>
        </Box>

        <Box>
          <Typography>{item.name}</Typography>
          <Typography sx={{fontSize: '12px', color: 'gray'}}>
            {item.desc}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default SkillCard;
