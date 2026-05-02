import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box sx={{ width: "max-width", marginTop: "auto"}}>
      <BottomNavigation
        showLabels
        sx={{ backgroundColor: "var(--color-footer)" }}
      >
        <BottomNavigationAction label="Resume" icon={<ArticleIcon />} href="/files/Cohen_Resume.pdf" target='_blank' rel='noopener noreferrer'/>
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href='https://www.linkedin.com/in/zipporah-cohen/' target='_blank' rel='noopener noreferrer'/>
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} href='https://github.com/zipporah-cohen/' target='_blank' rel='noopener noreferrer'/>
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
