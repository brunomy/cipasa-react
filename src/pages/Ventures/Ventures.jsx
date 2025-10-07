import { Box } from '@mui/material'
import Blog from '../Home/components/Blog/Blog'
import VenturesHeader from './components/VenturesHeader/VenturesHeader'

export default function Ventures() {
  return (
    <Box className="container">
      <VenturesHeader />
      <Blog />
    </Box>
  )
}