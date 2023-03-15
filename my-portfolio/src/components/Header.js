import React, { useState } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  h1: {
    flexGrow: 1,
    color: 'whitesmoke',
    fontSize: '4rem',
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  },
  button: {
    fontSize: '1.5rem',
    marginRight: '1rem',
    marginBottom: '0', // Add this line
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
      marginRight: '0.5rem',
      marginBottom: '10px', // Add this line
    },
  },
}));


function Header({ activePage, handleNavClick }) {
  const theme = useTheme();
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerItemClick = (page) => {
    handleNavClick(page);
    setDrawerOpen(false);
  };

  const navButtons = [
    { label: 'About Me', page: 'About' },
    { label: 'Portfolio', page: 'Portfolio' },
    { label: 'Contact Me', page: 'Contact' },
    { label: 'Resume', page: 'Resume' },
  ];

  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <h1 className={classes.h1}>Nathaniel Motley</h1>

          <Hidden xsDown>
            <div>
              {navButtons.map((navButton) => (
                <Button
                  key={navButton.page}
                  variant="contained"
                  color={activePage === navButton.page ? 'secondary' : 'primary'}
                  onClick={() => handleNavClick(navButton.page)}
                  style={{
                    backgroundColor: activePage !== navButton.page ? theme.palette.success.main : '',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                  }}
                  className={classes.button}
                >
                  {navButton.label}
                </Button>
              ))}
            </div>
          </Hidden>
          <Hidden smUp>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          {navButtons.map((navButton) => (
            <ListItem
              button
              key={navButton.page}
              onClick={() => handleDrawerItemClick(navButton.page)}
            >
              <ListItemText primary={navButton.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
