import { Box } from '@mui/material';
import AboutHeader from './components/AboutHeader/AboutHeader';
import AboutData from './components/AboutData/AboutData';

export default function AboutUs() {
  return (
    <Box className="container">
      <AboutHeader />
      <AboutData />
    </Box>
  );
}
