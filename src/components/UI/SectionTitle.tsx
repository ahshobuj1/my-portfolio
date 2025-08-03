import {Box, Typography} from '@mui/material';

interface SectionTitleProps {
  title: string;
  titleMain: string;
  desc: string;
}

const SectionTitle = ({title, titleMain, desc}: SectionTitleProps) => {
  return (
    <Box>
      <Typography fontSize={{xs: 30, md: 50}} fontWeight={700}>
        {title} <span className="text-primary-main">{titleMain}</span>
      </Typography>
      <Typography>{desc}</Typography>
    </Box>
  );
};

export default SectionTitle;
