import './BannerCarousel.scss';
import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import banner1 from './images/banner1.png';
import banner2 from './images/banner2.png';
import banner3 from './images/banner3.png';
import { Link } from 'react-router-dom';
import Button1 from '../../../../components/Buttons/Button1/Button1';

export default function BannerCarousel() {
  const [loaded, setLoaded] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  const [banners, setBanners] = useState([
    {
      image: banner1,
      title: 'Excelência em<br/><b>desenvolvimento urbano</b>',
      text: 'Projetos que respeitam o lugar, valorizam pessoas e conectam comunidades.',
      url: '/teste',
      urlTitle: 'Conheça a cipasa',
      target: ''
    },
    {
      image: banner2,
      title: 'Imóveis com<br/><b>Arquitetura moderna</b>',
      text: 'Projetados com a mais alta qualidade para oferecer conforto, segurança e bem-estar.',
      url: '/teste2',
      urlTitle: 'Saiba mais',
      target: ''
    },
    {
      image: banner3,
      title: 'Condomínios fechados<br/><b>com toda segurança</b>',
      text: 'Projetos que priorizam a segurança e o bem-estar dos moradores.',
      url: '/teste3',
      urlTitle: 'Saiba mais',
      target: '_blank'
    },
  ]);

  return (
    <Box className={"banner_carousel "+(loaded ? 'loaded' : 'notLoaded')}>
      <Box className="content">
        <Box className="left">
          {banners.map((banner, index) => (
            <Box
              key={index}
              className={`content-layer ${index === currentBanner ? 'active' : ''}`}
            >
              <h2 dangerouslySetInnerHTML={{ __html: banner.title }} />
              <p>{banner.text}</p>
              {
                banner.url && (
                  <Button1 component={Link} to={banner.url} target={banner.target}>
                    {banner.urlTitle ? banner.urlTitle : 'Saiba mais'}
                  </Button1>
                )
              }
            </Box>
          ))}
        </Box>
        <Box className="right">
          {banners.map((banner, index) => (
            <Box
              key={index}
              className={`bg-image ${index === currentBanner ? 'active' : ''}`}
              style={{ backgroundImage: `url(${banner.image})` }}
            />
          ))}
        </Box>
      </Box>
      <Box className="controls">
        <Button onClick={() => setCurrentBanner((currentBanner - 1 + banners.length) % banners.length)}>
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.323129 7.20548C-0.106559 7.64493 -0.106559 8.35861 0.323129 8.79806L6.92313 15.5481C7.35282 15.9875 8.05063 15.9875 8.48032 15.5481C8.91 15.1086 8.91 14.3949 8.48032 13.9555L2.65719 8.00001L8.47688 2.04454C8.90657 1.60509 8.90657 0.891418 8.47688 0.451965C8.04719 0.0125122 7.34938 0.0125122 6.91969 0.451965L0.319691 7.20197L0.323129 7.20548Z" fill="#112A25"/></svg>
        </Button>
        <Button onClick={() => setCurrentBanner((currentBanner + 1) % banners.length)}>
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.67684 7.20548C9.10653 7.64493 9.10653 8.35861 8.67684 8.79806L2.07684 15.5481C1.64715 15.9875 0.949341 15.9875 0.519653 15.5481C0.0899658 15.1086 0.0899658 14.3949 0.519653 13.9555L6.34278 8.00001L0.523091 2.04454C0.0934033 1.60509 0.0934033 0.891418 0.523091 0.451965C0.952778 0.0125122 1.65059 0.0125122 2.08028 0.451965L8.68028 7.20197L8.67684 7.20548Z" fill="#112A25"/></svg>
        </Button>
      </Box>
    </Box>
  );
}