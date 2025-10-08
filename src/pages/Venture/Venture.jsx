import './Venture.scss';
import { Box } from '@mui/material';
import VentureHeader from './components/VentureHeader/VentureHeader';
import VentureInfo from './components/VentureInfo/VentureInfo';
import VentureGalery from './components/VentureGalery/VentureGalery';

export default function Venture() {
  return (
    <Box className="venture">
      <Box className="container">
        <VentureHeader />
        <VentureInfo />
        <VentureGalery />
      </Box>
    </Box>
  )
}