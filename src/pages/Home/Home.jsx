import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import './Home.scss';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box className="container">
      <BannerCarousel />
    </Box>
  );
}