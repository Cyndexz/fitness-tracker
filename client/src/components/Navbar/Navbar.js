import React, { useState, useEffect } from 'react';
import {AppBar, Avatar, Box,Tooltip, Toolbar, Typography, IconButton, Menu, Container, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/fitnesslogo.png';
import useStyles from './styles';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { MenuItems, Settings } from './MenuItems';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import icon from '../../images/user.png'

const ResponsiveAppBar = () => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  
  //This controls initial page for user to login or logout
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({type: LOGOUT});
    navigate('/');
    setUser(null);
  };

  useEffect((logout, user) => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location]);

  const handleSignIn = (() =>{},[location]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event, index) => {
    if(index === 1){
      logout();
    }
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar className={classes.appbar} sx={{backgroundColor: 'rgba(0, 143, 255, 1)'}} position="fixed">
      <Container maxWidth="xl">
      {user?.result ? (
            <Toolbar disableGutters>
              <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                <img height='100px' src={logo} alt="Fitness"/>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                  <MenuIcon />
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}} keepMounted transformOrigin={{vertical: 'top',horizontal: 'left',}} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none' },}}>
                  {MenuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center"><a className={classes.navLinks} href={item.url}>{item.title}</a></Typography>
                      </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <img height='100px' src={logo} alt="Fitness"/>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {MenuItems.map((item, index) => (
                  <Button key={index} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    <a className={classes.navLinks} href={item.url}>{item.title}</a>
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{height:'70px', width:'70px'}} alt="Undefined" src={icon}/>
                  </IconButton>
                </Tooltip>

                <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right',}} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right',}} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                  {Settings.map((setting, index) => (
                    <MenuItem key={index} onClick={event => handleCloseUserMenu(event, index)}>
                      <Typography textAlign="center"><a className={classes.navLinksv2} href={setting.url}> {setting.title} </a></Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              </Toolbar>
          ) : (
            <Toolbar className={classes.signIn}>
              <Button  component={Link} to="/auth" variant="contained" color="primary" onClick={e => handleSignIn}>Sign In</Button>
            </Toolbar>
          )}
      </Container>
    </AppBar>
    <Toolbar className={classes.appSpace}/>
    </>
  );
};
export default ResponsiveAppBar;