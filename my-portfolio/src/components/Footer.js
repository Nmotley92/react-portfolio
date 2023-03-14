import React from 'react';
import { useTheme } from '@material-ui/core/styles';

function Footer() {
  const theme = useTheme();

  return (
    <footer style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
      <div className="social-links">
        <a href="https://github.com/nathanielmotley" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/nathanielmotley/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/nathanielmotley" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="legal-info">
        <p>&copy; 2023 Nathaniel Motley</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;




