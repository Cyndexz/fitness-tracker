import React, { useState, useEffect } from 'react';
import {AppBar, Avatar, Box,Tooltip, Toolbar, Typography, IconButton, Menu, Container, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/fitnesslogo.png';
import useStyles from './styles';
import {Link, useNavigate, useLocation,} from 'react-router-dom';
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
  const path = location.pathname === '/auth';


  const logout = () => {
    dispatch({type: LOGOUT});
    navigate('/');
    setUser(null);
  };

  const [visibility, setVisibility] = useState('flex');
  const visRef = React.useRef();
  visRef.current = visibility

  useEffect((logout, user) => {
    path ? setVisibility('none') : setVisibility('flex');
    console.log(path);
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location, path]);

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

  const [navBg, setNavBg] = useState('rgba(0, 143, 255, 1)');
  const navRef = React.useRef();
  navRef.current = navBg;

  /* Will check if the scroll passes 100 and if it does it will change the opacity of the navbar
   * done by adding a listening and the use effect to keep listening to the scroll of the window
   */
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100
      show ? setNavBg('rgba(0, 145, 255, 0.51)') : setNavBg('rgba(0, 143, 255, 1)');
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
    <AppBar className={classes.appBar} sx={{backgroundColor: [navRef.current]}} position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'inline',  } }}>
            <a href="/"> <img height='100px' src={logo} alt="Fitness"/> </a>
          </Typography>

      {user?.result ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                  <MenuIcon />
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}} keepMounted transformOrigin={{vertical: 'top',horizontal: 'left',}} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none' }, fontColor: 'Black'}}>
                  {MenuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center"><a className={classes.navLinksv3} href={item.url}>{item.title}</a></Typography>
                      </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <img height='100px' src={logo} alt="Fitness"/>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                {MenuItems.map((item, index) => (
                  <Button key={index} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    <a className={classes.navLinks} href={item.url}>{item.title}</a>
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open user settings">
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
            </>
          ) : (
            <>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img height='100px' src={logo} alt="Fitness"/>
            </Typography>
            <Box className={classes.signIn} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'}, flexDirection: 'row-reverse'}}>
              <Button component={Link} to="/auth" variant="contained" color="primary" sx={{display: [visRef.current]}} onClick={e => handleSignIn}>Sign Up</Button>
            </Box>
            </>
          )}
      </Toolbar>
      </Container>
    </AppBar>
    <Toolbar className={classes.appSpace}/>
    </>
  );
};
export default ResponsiveAppBar;