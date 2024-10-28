// app/cart/page.tsx
"use client";
import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  CircularProgress,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

// Exemple de données de produits dans le panier
const initialCartItems = [
  {
    id: 1,
    name: 'Baya Colorée',
    price: 25,
    image: '/images/baya1.jpg', // Remplacez par le chemin réel de l'image
    quantity: 1,
  },
  {
    id: 2,
    name: 'Baya Élégante',
    price: 30,
    image: '/images/baya2.jpg',
    quantity: 1,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [loading, setLoading] = useState(false);

  // Mise à jour de la logique pour le paramètre 'increment'
  const handleQuantityChange = (id: number, increment: boolean) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + (increment ? 1 : -1), 1) } // Utiliser increment ? 1 : -1
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setLoading(true);
    // Simuler une opération de paiement
    setTimeout(() => {
      setLoading(false);
      alert('Votre commande a été passée !');
      setCartItems([]); // Vider le panier après la commande
    }, 2000);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#000000' }}>
        <Toolbar>
          <ShoppingCartIcon sx={{ color: '#FFD700' }} />
          <Typography variant="h6" sx={{ marginLeft: '10px', color: '#FFD700' }}>
            Mon Panier
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: '64px', padding: '20px', backgroundColor: '#000000' }}>
        {cartItems.length === 0 ? (
          <Typography variant="h6" align="center" sx={{ color: '#FFD700' }}>
            Votre panier est vide !
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card sx={{ backgroundColor: '#1a1a1a', color: '#FFD700' }}>
                  <CardMedia
                    component="img"
                    alt={item.name}
                    height="140"
                    image={item.image}
                  />
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1">
                      Prix: {item.price} €
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton
                        onClick={() => handleQuantityChange(item.id, false)} // Passer false pour diminuer
                        disabled={item.quantity === 1}
                        sx={{ color: '#FFD700' }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ color: '#FFD700' }}>{item.quantity}</Typography>
                      <IconButton onClick={() => handleQuantityChange(item.id, true)} sx={{ color: '#FFD700' }}> {/* Passer true pour augmenter */}
                        <AddIcon />
                      </IconButton>
                    </div>
                    <IconButton
                      color="secondary"
                      onClick={() => handleRemoveItem(item.id)}
                      sx={{ color: '#FFD700' }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#FFD700', color: '#000000' }}
            onClick={handleCheckout}
            disabled={loading || cartItems.length === 0}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Passer à la commande'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
