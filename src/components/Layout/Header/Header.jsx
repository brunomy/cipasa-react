import Logo from '../../Logo/Logo';
import './Header.scss';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import portal_icon from './../../../assets/icons/portal_icon.svg';
import bottom_arrow from './../../../assets/icons/bottom_arrow.svg';

export default function Header({ ref }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box className="header" ref={ref}>
      <Box className={`header_fixed ${scrolled ? 'scrolled' : ''}`}>
        <Box className={"container" + (open ? " open" : " closed")}>
          <Button component={Link} to="/" className="logo_content">
            <Logo />
          </Button>
          <Box className="content">
            <Button component={Link} to="/empreendimentos">Empreendimentos</Button>
            <Button component={Link} to="/sobre">Sobre nós</Button>
            <Button component={Link} to="/servicos">Lotes multiúso</Button>
            <Button component={Link} to="/projetos">Tenho uma área</Button>
            <Button component={Link} to="/contato">R.I</Button>
            <Button component={Link} to="/contato">Contato</Button>
            <PortalButton />
          </Box>
          <Button className="menu" onClick={() => setOpen(!open)}>
            <span></span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function PortalButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      // Close dropdown if click is outside the portal_content
      if (!event.target.closest('.portal_content')) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <Box className="portal_content">
      <Button className="portal_button" onClick={() => setOpen(!open)}>
        <img src={portal_icon} />
        Portal do cliente
        <img src={bottom_arrow} />
      </Button>

      <Box className={`portal_dropdown ${open ? 'open' : 'closed'}`}>
        <Button onClick={() => setOpen(false)} component={Link} to="/login">Login</Button>
        <Button onClick={() => setOpen(false)} component={Link} to="/register">Registre-se</Button>
      </Box>
    </Box>
  );
}