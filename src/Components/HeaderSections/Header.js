import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container'; 
import Button from '@mui/material/Button'; 
import MenuItem from '@mui/material/MenuItem';  

import Modal from '@mui/material/Modal';
 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from 'styled-components';

const BoxMOdals = styled.div`
    position: absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%,-50%);
    width: 400px;
    backdrop-filter: blur(15px);
    padding: 3rem 2rem;
    border: 1px dashed #275f48;
    border-radius: 15px;
    color:#fff;
    text-align:center;
    @media only screen and (max-width:425px) {
        padding: 2rem 1rem; 
        width: 81%;
    }
`
const MetaMask = styled.div` 
    padding: 2rem 0

`

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1a2f35',
      },
    },
  });


const pages = ['Marketplace',];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <div>
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color='primary'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, }}
                    >
                        <img src="./img/logo512.png" width="200px" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src="./img/logo512.png"  width="120px"  />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {<Button variant="contained" color="error" onClick={handleOpen} 
                         style={{width:'100%', boxShadow:'none', padding:'8px 20px', fontSize:'15px',}}
                        >Connect</Button>} 

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            >
                            <BoxMOdals>
                                <Typography id="modal-modal-title" variant="h5" component="h2">
                                    Conntect Wallet
                                </Typography>
                                 <MetaMask>
                                    <Button variant="contained" color="error" className='MetaMask' style={{width:'100%', margin:'10px 0', boxShadow:'none',
                                        padding:'10px 20px', fontSize:'16px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                        <div>MetaMask</div>
                                        <div><img src='./img/MetaMask.png' width="30px" /></div> 
                                    </Button> 
                                    <Button variant="contained" color="error" className='MetaMask' style={{width:'100%', margin:'10px 0', boxShadow:'none',
                                        padding:'10px 20px', fontSize:'16px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                                        <div>Wallet Connect</div>
                                        <div><img src='./img/WalletConnect.png' width="30px" /></div>
                                        
                                    </Button>  
                                 </MetaMask>
                            </BoxMOdals>
                        </Modal>
                    </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    </div>
  );
};

export default ResponsiveAppBar;