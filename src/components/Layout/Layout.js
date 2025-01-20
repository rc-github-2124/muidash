import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom'; // React Router Outlet
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { List, ListItem } from '@mui/material';
import newlogo from '../../assets/newlogo.png';
import GridViewIcon from '@mui/icons-material/GridView';
import InventoryIcon from '@mui/icons-material/Inventory';
import GradingIcon from '@mui/icons-material/Grading';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import bellicon from '../../assets/bellicon.png'
import useer from '../../assets/useer.png'
const drawerWidth = 240;

function Layout(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const theme = createTheme({
        components: {
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        // Custom styles for the Drawer paper
                        backgroundColor: '#363740', // Light grey background
                        color: '#DBDADE', // Dark text color
                        width: 280, // Custom width for the drawer
                        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)', // Subtle shadow
                    },
                    root: {
                        // Styles for the root container of the Drawer
                        borderRight: '1px solid #ddd', // Add a border on the right
                    },
                },
            },
        },
    });
    const Search = styled('div')(({ theme }) => ({
        width: "100%",
        height: "36px",
        border: "1px solid #DBDADE",
        borderRadius: "8px",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '-1px',

    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            borderRadius: "8px",
            position: 'relative',
            top: '-2px',
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    const drawer = (
        <div>
            <Box sx={{
                position: 'relative',
                top: '12px',
                left: '12px',
                width: '180px',
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                alignItems: 'center',


            }}>
                <MenuIcon sx={{
                   color:'white'
                }} />
                <Box sx={{
                    width: "180px",
                    height: "50px",
                    objectFit: 'contain',
                    backgroundBlendMode: 'screen',
                    filter:
                        "brightness(0) saturate(100%) invert(93%) sepia(100%) saturate(28%) hue-rotate(119deg) brightness(107%) contrast(108%)"
                }} component='img' src={newlogo}></Box>
            </Box>

            <Toolbar />


            <Box sx={{
                marginTop: '88px'
            }}>
                <List>
                    <ListItem>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            gap: '10px',
                            height: '53px',

                        }}>

                            <GridViewIcon />
                            <NavLink style={{
                                textDecoration: 'none'
                            }} to='/overview'>

                                <Typography sx={{
                                    fontFamily: "'Roboto'",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    lineHeight: "22px",
                                    letterSpacing: "0.43px",
                                    color: "#FFFFFF",
                                    width: "139px",
                                    height: "22px",

                                }}>Overview</Typography>
                            </NavLink>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            gap: '10px',
                            height: '53px',


                        }}>

                            <InventoryIcon />
                            <NavLink style={{
                                textDecoration: 'none'
                            }} to='/Cars'>

                                <Typography sx={{
                                    fontFamily: "'Roboto'",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    lineHeight: "22px",
                                    letterSpacing: "0.43px",
                                    color: "#FFFFFF",
                                    width: "139px",
                                    height: "22px",


                                }}>Cars</Typography>
                            </NavLink>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            gap: '10px',
                            height: '53px',


                        }}>

                            <GradingIcon />
                            <NavLink style={{
                                textDecoration: 'none'
                            }} to='/orders'>

                                <Typography sx={{
                                    fontFamily: "'Roboto'",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    lineHeight: "22px",
                                    letterSpacing: "0.43px",
                                    color: "#FFFFFF",
                                    width: "139px",
                                    height: "22px",


                                }}>Orders</Typography>
                            </NavLink>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            gap: '10px',
                            height: '53px',


                        }}>

                            <DynamicFormIcon />
                            <NavLink style={{
                                textDecoration: 'none'
                            }} to='/profile'>

                                <Typography sx={{
                                    fontFamily: "'Roboto'",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    lineHeight: "22px",
                                    letterSpacing: "0.43px",
                                    color: "#FFFFFF",
                                    width: "139px",
                                    height: "22px",


                                }}>Profile</Typography>
                            </NavLink>
                        </Box>
                    </ListItem>
                </List>
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>


            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        background: { lg: '#F4F4F4', xl: '#F4F4F4', xs: '#363740', sm: '#363740', md: "#F4F4F4" },
                        color: 'black',
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{
                                 color:{xs:'white',lg:'black',md:'black',sm:'white',xl:'black'}
                            }} />
                        </IconButton>
                        <Box sx={{
                            width: '1230px',
                            display: { lg: 'block', md: 'block', xs: 'none', sm: 'none' }
                        }}>


                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: { lg: 'flex-end', sm: 'center', md: 'flex-end', xs: 'center' }, flexDirection: 'row', width: '100%' }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                gap: '16px'
                            }}>
                                <Box sx={{
                                    width: '36px',
                                    height: '36px',
                                    objectFit: 'contain',
                                    aspectRatio: 3 / 2,
                                    filter:
                                    {xs:"brightness(0) saturate(100%) invert(93%) sepia(100%) saturate(28%) hue-rotate(119deg) brightness(107%) contrast(108%)",lg:'none',sm:"brightness(0) saturate(100%) invert(93%) sepia(100%) saturate(28%) hue-rotate(119deg) brightness(107%) contrast(108%)",md:'none',xl:'none'} 
                                }} component='img' src={bellicon}></Box>
                                <Box>

                                    <Typography sx={{
                                        fontStyle: "normal",
                                        fontWeight: 700,
                                        fontSize: "12px",
                                        lineHeight: "18px",
                                        textAlign: "center",
                                        color: { lg: "#4B465C", xl: '#4B465C', md: '#4B465C', xs: 'white', sm: 'white' },
                                    }}>Puma Official Store </Typography>
                                    <Typography sx={{
                                        fontFamily: "'Roboto'",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: "10px",
                                        lineHeight: "14px",
                                        textAlign: "center",
                                        color: { lg: "#979797", xl: '#979797', md: '#979797', xs: 'white', sm: 'white' },
                                    }}>Change Seller </Typography>
                                </Box>
                                <Box sx={{
                                    width: '36px',
                                    height: '36px',
                                    objectFit: 'contain'
                                }} component='img' src={useer}></Box>
                            </Box>

                        </Box>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="sidebar"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, },


                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Outlet /> {/* Dynamically render components here */}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

Layout.propTypes = {
    window: PropTypes.func,
};

export default Layout;
