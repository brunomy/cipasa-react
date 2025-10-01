import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import './Home.scss';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box className="container">
      <BannerCarousel />
      <Box sx={{ width: '100%', height: '100vh' }}></Box>
    </Box>
  );
}