import TitleBreadcrumbs from '../../../../components/TitleBreadcrumbs/TitleBreadcrumbs';
import { Butterfly1, Butterfly2 } from '../../../Home/components/BannerCarousel/BannerCarousel';
import './AboutHeader.scss';
import { Box } from '@mui/material';

import banner from './images/banner[1920x400].png';

export default function AboutHeader() {
  return (
    <Box className="about_header">
      <Box className="content">
        <Box className="left">
          <TitleBreadcrumbs title={<>Nossa <b>História</b></>} breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sobre nós' }]} />
          <Butterfly1 />
          <Butterfly2 />
        </Box>
        <Box className="right">
          <Box className="text_content">
            <p>
              A Cipasa, como uma das maiores desenvolvedoras de projetos urbanos no Brasil, tem como missão aliar a alta qualidade urbanística ao respeito às características locais e à natureza, por meio de seus empreendimentos Alvorá, Altavis, Verana e Vívea.
              <br /><br />
              Durante esses anos, a Cipasa ganhou destaque pela sua capacidade técnica e solidez. Baseada nas premissas de valorizar as pessoas e agir de maneira ética e sustentável, tem como objetivo tornar-se uma referência no mercado imobiliário brasileiro e uma marca desejada por todos seus stakeholders.
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="banner">
        <Box className="image">
          <img src={banner} />
        </Box>
      </Box>
    </Box>
  );
}