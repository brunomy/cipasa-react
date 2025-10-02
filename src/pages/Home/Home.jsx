import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import Highlights from './components/Highlights/Highlights';
import InfoData from './components/InfoData/InfoData';
import ProjectsMap from './components/ProjectsMap/ProjectsMap';
import './Home.scss';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box className="container">
      <BannerCarousel />
      <InfoData />
      <Highlights />
      <ProjectsMap />
    </Box>
  );
}