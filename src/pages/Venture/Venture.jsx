import './Venture.scss';
import { Box } from '@mui/material';
import VentureHeader from './VentureHeader/VentureHeader';

export default function Venture() {
  return (
    <Box className="venture">
      <Box className="container">
        <VentureHeader />
      </Box>
    </Box>
  )
}