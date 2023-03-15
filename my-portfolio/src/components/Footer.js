import React from 'react';
import { useTheme } from '@material-ui/core/styles';

function Footer() {
  const theme = useTheme();

  return (
    <footer style={{ color: theme.palette.primary.contrastText, zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="social-links" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '40%', fontSize: '2em' }}>
        <a href="https://github.com/nathanielmotley" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" style= {{color: 'whitesmoke'}}></i>
        </a>
        <a href="https://www.linkedin.com/in/nathanielmotley/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" style= {{color: 'whitesmoke'}}></i>
        </a>
        <a href="https://twitter.com/nathanielmotley" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style= {{color: 'whitesmoke'}}></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

