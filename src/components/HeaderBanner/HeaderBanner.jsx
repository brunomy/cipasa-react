import './HeaderBanner.scss';
import { Box } from '@mui/material';
import HeaderPadding from '../HeaderPadding/HeaderPadding';
import HeaderDescription from '../HeaderDescription/HeaderDescription';

export default function HeaderBanner({ title, breadcrumbs, text, banner }) {
  return (
    <Box className="header_banner">
      <HeaderPadding >
        <Box className="content">
          <HeaderDescription
            title={title}
            breadcrumbs={breadcrumbs}
            text={text}
          />
        </Box>
        <Box className="banner">
          <Box className="image">
            <img src={banner} />
          </Box>
        </Box>
      </HeaderPadding>
    </Box>
  );
}