"use client";

import * as React from 'react';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BrushIcon from '@mui/icons-material/Brush';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    toggleDrawer();
  };

  const menuItems = [
    { text: 'Accueil', path: '/', icon: <HomeIcon /> },
    { text: 'Mon compte', path: '/account', icon: <AccountCircleIcon /> },
    { text: 'Produits', path: '/products', icon: <LocalOfferIcon /> },
    { text: 'Collections', path: '/collections', icon: <CollectionsIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactMailIcon /> },
    { text: 'Personnalisation', path: '/customization', icon: <BrushIcon /> },
    { text: 'Panier', path: '/cart', icon: <ShoppingCartIcon /> },
    { text: 'Déconnexion', path: '/logout', icon: <LogoutIcon /> },
  ];

  return (
    <html lang="fr">
      <body>
        <div style={{ display: 'flex' }}>
          {/* AppBar avec la palette de couleurs inversée */}
          <AppBar
            position="fixed"
            style={{ zIndex: 1201, backgroundColor: '#EE2677', color: '#FFFFFF', paddingLeft: open ? drawerWidth : 0 }}
          >
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconButton onClick={toggleDrawer} color="inherit" style={{ transition: 'transform 0.2s' }}>
                <MenuIcon style={{ fontSize: '30px', transition: 'transform 0.2s', color: '#FFFFFF' }} />
              </IconButton>
              <Typography variant="h6" noWrap style={{ flexGrow: 1, textAlign: 'center', color: '#FFFFFF', fontFamily: `'Dancing Script', cursive` }}>
                Bines-Bines
              </Typography>
            </Toolbar>
          </AppBar>

          {/* Drawer */}
          <Drawer
            variant="temporary"
            open={open}
            onClose={toggleDrawer}
            PaperProps={{ style: { width: drawerWidth, marginTop: '64px', backgroundColor: '#EE2677', color: '#FFFFFF' } }}
          >
            <List>
              {menuItems.map((item, index) => (
                <ListItem
                  component="div"
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  style={{ cursor: 'pointer', color: '#FFFFFF' }} // Couleur du texte des éléments du menu
                >
                  {item.icon}
                  <ListItemText primary={item.text} primaryTypographyProps={{ style: { color: '#FFFFFF', fontFamily: `'Open Sans', sans-serif` } }} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          {/* Contenu principal */}
          <main style={{ flexGrow: 1, padding: '20px', marginTop: '64px', paddingLeft: open ? drawerWidth : 0, backgroundColor: '#F3D3CD' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
