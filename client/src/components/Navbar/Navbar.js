import React, {useState} from 'react';
import {AppBar, Avatar, Box,Tooltip, Toolbar, Typography, IconButton, Menu, Container, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/fitnesslogo.png';
import {MenuItems} from './MenuItems';
import useStyles from './styles';

const pages = ['Home', 'Meals', 'Workouts', 'Track Meals', 'Tooltip', 'Track Workouts'];
const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = () => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className={classes.appbar} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <img height='100px' src={logo} alt="Fitness"/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom',horizontal: 'left',}} keepMounted transformOrigin={{vertical: 'top',horizontal: 'left',}} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none' },}}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img height='100px' src={logo} alt="Fitness"/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right',}}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right',}}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
// const ResponsiveAppBar = () => {
//   const classes = useStyles();
//   const [anchorElNav, setAnchorElNav] = useState(null);     //True or false whether the navigation will be anchored

//   const handleOpenNavMenu = (event) => {    //Will open the menu where the mouse
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {    //Will close the menu
//    setAnchorElNav(null);
//   };

//   return (
//     <AppBar className={classes.appbar} position="fixed">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography variant="h6" noWrap sx={{ mr:2 , display: { xs: 'none', md: 'flex' }}}>
//             <img height='100px' src={logo} alt="Fitness"/>
//           </Typography>

//           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <img height='100px' src={logo} alt="Fitness"/>
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {MenuItems.map((item, index) => (
//               <Button key={index} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
//                 {item.title}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
//               <MenuIcon />
//             </IconButton>

//             <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left',}} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'flex', md: 'none' },}}>
//               {MenuItems.map((item, index) => (
//                 <MenuItem key={index} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{item.title}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;
