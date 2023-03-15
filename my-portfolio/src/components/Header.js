import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import backgroundImage from '../Assets/headergreen.jpg';

function Header({ activePage, handleNavClick }) {
  const theme = useTheme();

  return (
    <header style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      height: '8rem' }}>
      <h1 style={{ color: 'theme.palette.primary.main', fontSize: '4rem', margin: '0 0 0 6rem' }}>Nathaniel Motley</h1>

      <nav>
        <Button variant="contained" color={activePage === 'About' ? 'secondary' : 'primary'} onClick={() => handleNavClick('About')} style={{ fontSize: '1.5rem', marginRight: '4rem', backgroundColor: activePage !== 'About' ? theme.palette.success.main : '', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>About Me</Button>
        <Button variant="contained" color={activePage === 'Portfolio' ? 'secondary' : 'primary'} onClick={() => handleNavClick('Portfolio')} style={{ fontSize: '1.5rem', marginRight: '4rem', backgroundColor: activePage !== 'Portfolio' ? theme.palette.success.main : '', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>Portfolio</Button>
        <Button variant="contained" color={activePage === 'Contact' ? 'secondary' : 'primary'} onClick={() => handleNavClick('Contact')} style={{ fontSize: '1.5rem', marginRight: '4rem', backgroundColor: activePage !== 'Contact' ? theme.palette.success.main : '', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>Contact Me</Button>
        <Button variant="contained" color={activePage === 'Resume' ? 'secondary' : 'primary'} onClick={() => handleNavClick('Resume')} style={{ fontSize: '1.5rem', marginRight: '6rem', backgroundColor: activePage !== 'Resume' ? theme.palette.success.main : '', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>Resume</Button>
      </nav>
    </header>
  );
}

export default Header;
