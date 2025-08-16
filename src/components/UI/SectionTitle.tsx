import {Box, Typography} from '@mui/material';

interface SectionTitleProps {
  title: string;
  titleMain: string;
  desc: string;
}

const SectionTitle = ({title, titleMain, desc}: SectionTitleProps) => {
  return (
    <Box>
      <Typography
        fontSize={{xs: 30, md: 50}}
        fontWeight={700}
        color="text.primary">
        {title}{' '}
        <span className="text-primary-main dark:text-primary-dark">
          {titleMain}
        </span>
      </Typography>
      <Typography color="text.secondary">{desc}</Typography>
    </Box>
  );
};

export default SectionTitle;
