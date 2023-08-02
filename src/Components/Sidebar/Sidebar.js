import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { ChevronLeft, ChevronRight, Inbox, Menu } from '@mui/icons-material';

import SeracellLogo from '../../Resources/SidebarIcons/Seracell-Logo.png';
import SeraIcon from '../../Resources/SidebarIcons/sera-icon.png';
import DrenajIcon from '../../Resources/SidebarIcons/drenaj-ikon.png';
import FertilizerIcon from '../../Resources/SidebarIcons/fertilizer.png';
import ControllersIcon from '../../Resources/SidebarIcons/kontrolcüler-icon.png';
import LimitIcon from '../../Resources/SidebarIcons/limit.png';
import NotificationIcon from '../../Resources/SidebarIcons/notification.png';
import PestsIcon from '../../Resources/SidebarIcons/pests.png';
import SpeedometerIcon from '../../Resources/SidebarIcons/speedometer.png';
import DashboardIcon from '../../Resources/SidebarIcons/dashboard-icon.png';
import SettingsIcon from '../../Resources/SidebarIcons/settings.png';
import ProfileIcon from '../../Resources/SidebarIcons/avatar.png';
import AccountIcon from '../../Resources/SidebarIcons/avatar-settings.png';
import SignOutIcon from '../../Resources/SidebarIcons/SignOut.png';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const SidebarIcons = [
    SeraIcon,
    ControllersIcon,
    SpeedometerIcon,
    LimitIcon,
    DashboardIcon,
    DrenajIcon,
    PestsIcon,
    FertilizerIcon,
    NotificationIcon,
    SettingsIcon,
  ];
  const ProfileIcons = [ProfileIcon, AccountIcon, SignOutIcon];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <Menu />
          </IconButton>
          <img src={SeracellLogo} alt='seracellLogo' />
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            'Sektörler',
            'Kontrolcüler',
            'Kontrolcü Limit',
            'Bildirim Limit',
            'Grafikler',
            'HydroSense',
            'CropSense',
            'NutriSense',
            'Bildirimler',
            'Sera/Sensör Ayarları',
          ].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block', }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <img src={SidebarIcons[index]}></img>
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 , color:" #38C34E"}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Profil', 'Hesap Ayarları', 'Çıkış Yap'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <img src={ProfileIcons[index]}></img>
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </Box>
  );
}
