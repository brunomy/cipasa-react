import Logo from '../../Logo/Logo';
import './Footer.scss'
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { smoothScrollTo } from '../../../Util';

export default function Footer({ ref }) {
  


  return (
    <footer className="footer" ref={ref}>
      <Box className="footer_top">
        <Box className="container">
          <Box className="left">
            <Box className="logo_content"><Logo /></Box>
            <p>Edifício Ministro Jesuíno Cardoso Rua Ministro Jesuíno Cardoso, 633 10º andar, Sala 102 | Vila Olímpia CEP: 04544-051 São Paulo | SP</p>
            <Box className="contato">
              <Box className="item">
                <p>Entre em contato - São Paulo</p>
                <h3>(11) 4096-0500</h3>
              </Box>
              <Box className="item">
                <p>Entre em contato - Goiânia</p>
                <h3>(62) 3255-8416</h3>
              </Box>
            </Box>
          </Box>

          <Box className="right">
            <Box className="pages">
              <Box className="has_in_menu">
                <h4>Mapa do site</h4>
                <Button component={Link} to="/sobre">Empreendimentos</Button>
                <Button component={Link} to="/servicos">Sobre nós</Button>
                <Button component={Link} to="/contato">Lotes multúso</Button>
                <Button component={Link} to="/contato">Tenho uma área </Button>
                <Button component={Link} to="/contato">R.I</Button>
                <Button component={Link} to="/contato">Contato</Button>
              </Box>
              <Box className="has_in_menu">
                <h4>Portal do cliente</h4>
                <Button component={Link} to="/sobre">Cliente</Button>
                <Button component={Link} to="/servicos">Parceiro</Button>
                <Button component={Link} to="/contato">Corretor</Button>
              </Box>
              <Box>
                <h4>Quero Comprar</h4>
                <Button component={Link} to="/sobre">Condomínios Fechados</Button>
                <Button component={Link} to="/servicos">Loteamento fechado </Button>
                <Button component={Link} to="/contato">Loteamentos</Button>
              </Box>
              <Box className="social">
                <h4>Redes sociais</h4>
                <Box>
                  <Button component={Link} target="_blank" to="/sobre"><FacebookRoundedIcon /></Button>
                  <Button component={Link} target="_blank" to="/servicos"><InstagramIcon /></Button>
                  <Button component={Link} target="_blank" to="/contato"><LinkedInIcon /></Button>
                </Box>
              </Box>
            </Box>
            <Box className="newsletter">
              <Box>
                <h4>Notícias</h4>
                <form>
                  <input type="text" placeholder="Digite seu e-mail" />
                  <Button>Enviar</Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="footer_bottom">
        <Box>
          <Box className="container">
            <p>CIPASA URBANISMO® 00.000.000-0000 • © 2025</p>
            <Button onClick={() => smoothScrollTo(0)}>Voltar para o topo <span className="icon"><ExpandLessRoundedIcon /></span></Button>
          </Box>
        </Box>
      </Box>
    </footer>
  )
}