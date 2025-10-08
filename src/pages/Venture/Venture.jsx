import './Venture.scss';
import { Box } from '@mui/material';
import VentureHeader from './components/VentureHeader/VentureHeader';
import VentureInfo from './components/VentureInfo/VentureInfo';

export default function Venture() {
  return (
    <Box className="venture">
      <Box className="container">
        <VentureHeader />
        <VentureInfo />
      </Box>
    </Box>
  )
}