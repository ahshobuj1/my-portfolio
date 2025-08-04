import {Avatar, Stack} from '@mui/material';
import Link from 'next/link';
import {FaGithub, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa';

const SocialLinksHref = [
  {
    href: 'https://www.linkedin.com/in/ahshobuj/',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://github.com/ahshobuj1',
    icon: <FaGithub />,
  },
  {
    href: 'https://facebook.com/ahshobuj11',
    icon: <FaFacebook />,
  },
  {
    href: 'https://github.com/ahshobuj1?tab=repositories',
    icon: <FaTwitter />,
  },
];

const SocialLinks = () => {
  return (
    <>
      <Stack direction="row" spacing={3}>
        {SocialLinksHref.map((item) => (
          <Avatar
            key={item.href}
            component={Link}
            href={item.href}
            sx={{
              border: '2px solid',
              borderColor: 'primary.main',
              bgcolor: 'transparent',
              color: 'primary.main',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              width: 40,
              height: 40,
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
              },
            }}>
            {item.icon}
          </Avatar>
        ))}
      </Stack>
    </>
  );
};

export default SocialLinks;
