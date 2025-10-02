import IconLogo from '../../../../components/IconLogo/IconLogo';
import './ProjectsMap.scss';
import { Box, Button } from '@mui/material';
import mapa from './icons/map.svg'
import logo from './icons/logo_bg.svg'
import { Link } from 'react-router-dom';

export default function ProjectsMap() {
  return (
    <Box component="section" className="projects_map">
      <img className="logo_bg" src={logo} alt="" />
      <Box className="content">
        <Box className="left">
          <h2>
            Descubra nossos<br />
            <b>projetos por todo Brasil</b>
          </h2>
          <p>
            Descubra os nossos projetos pelo Brasil e, especialmente, aqueles mais próximos de você. 
            <br /><br />
            Clique em um estado para explorar nossos projetos próximos a você
          </p>
          <Box className="selectors">
            <select name="estado" id="">
              <option value="">Estados</option>
              <option value="GO">GO</option>
            </select>

            <select name="cidade" id="">
              <option value="">Cidades</option>
              <option value="Goiânia">Goiânia</option>
            </select>
          </Box>
        </Box>
        <Box className="right">
          <BrazilMap />
        </Box>
      </Box>
    </Box>
  );
}

function BrazilMap() {
  return (
    <Box className="brazil_map">
      <img src={mapa} alt="Mapa do Brasil" />
      <Box className="pin_content">
        <Button className="RS" component={Link} to="/"><IconLogo /></Button>
        <Button className="SC" component={Link} to="/"><IconLogo /></Button>
        <Button className="PR" component={Link} to="/"><IconLogo /></Button>
        <Button className="SP" component={Link} to="/"><IconLogo /></Button>
        <Button className="RJ" component={Link} to="/"><IconLogo /></Button>
        <Button className="ES" component={Link} to="/"><IconLogo /></Button>
        <Button className="MG" component={Link} to="/"><IconLogo /></Button>
        <Button className="MS" component={Link} to="/"><IconLogo /></Button>
        <Button className="GO" component={Link} to="/"><IconLogo /></Button>
        <Button className="DF" component={Link} to="/"><IconLogo /></Button>
        <Button className="MT" component={Link} to="/"><IconLogo /></Button>
        <Button className="BA" component={Link} to="/"><IconLogo /></Button>
        <Button className="RO" component={Link} to="/"><IconLogo /></Button>
        <Button className="AC" component={Link} to="/"><IconLogo /></Button>
        <Button className="AM" component={Link} to="/"><IconLogo /></Button>
        <Button className="PR" component={Link} to="/"><IconLogo /></Button>
        <Button className="PA" component={Link} to="/"><IconLogo /></Button>
        <Button className="AP" component={Link} to="/"><IconLogo /></Button>
        <Button className="TO" component={Link} to="/"><IconLogo /></Button>
        <Button className="MA" component={Link} to="/"><IconLogo /></Button>
        <Button className="PI" component={Link} to="/"><IconLogo /></Button>
        <Button className="CE" component={Link} to="/"><IconLogo /></Button>
        <Button className="RN" component={Link} to="/"><IconLogo /></Button>
        <Button className="PB" component={Link} to="/"><IconLogo /></Button>
        <Button className="PE" component={Link} to="/"><IconLogo /></Button>
        <Button className="AL" component={Link} to="/"><IconLogo /></Button>
        <Button className="SE" component={Link} to="/"><IconLogo /></Button>
      </Box>
    </Box>
  );
}