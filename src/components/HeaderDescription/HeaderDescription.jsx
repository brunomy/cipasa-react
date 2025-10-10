import './HeaderDescription.scss';
import { Box } from '@mui/material';
import TitleBreadcrumbs from '../TitleBreadcrumbs/TitleBreadcrumbs';
import { Butterfly1, Butterfly2 } from './../../pages/Home/components/BannerCarousel/BannerCarousel';


export default function HeaderDescription({ title, breadcrumbs, text }) {
  return (
    <Box className="header_description">
      <Box className="left">
        <TitleBreadcrumbs title={title} breadcrumbs={breadcrumbs} />
        <Butterfly1 />
        <Butterfly2 />
      </Box>
      <Box className="right">
        <Box className="text_content">
          {text}
        </Box>
      </Box>
    </Box>
  )
}