import BannerCarousel from './components/BannerCarousel/BannerCarousel';
import Highlights from './components/Highlights/Highlights';
import InfoData from './components/InfoData/InfoData';
import Projects from './components/Projects/Projects';
import ProjectsMap from './components/ProjectsMap/ProjectsMap';
import Ventures from './components/Ventures/Ventures';
import './Home.scss';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box className="container">
      <BannerCarousel />
      <InfoData />
      <Highlights />
      <ProjectsMap />
      <Projects />
      <Ventures />
    </Box>
  );
}