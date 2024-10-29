"use client";

import * as React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const products = [
  {
    id: 1,
    name: 'Baya Or Classique',
    price: '20€',
    description: 'Baya classique en or avec des perles élégantes.',
    image: '/images/baya_or.jpg',
  },
  {
    id: 2,
    name: 'Baya Perle Rose',
    price: '25€',
    description: 'Baya délicate avec des perles roses.',
    image: '/images/baya_rose.jpg',
  },
  {
    id: 3,
    name: 'Baya Multicolore',
    price: '30€',
    description: 'Un mélange de perles colorées pour un look vibrant.',
    image: '/images/baya_multicolore.jpg',
  },
];

const ProductsPage = () => {
  const router = useRouter();

  const handleViewDetails = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  const handleAddToCart = (productId: number) => {
    alert(`Produit ${productId} ajouté au panier!`);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px', backgroundColor: '#FFFFFF', color: '#EE2677' }}>
      <Typography variant="h4" sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#EE2677',
        fontFamily: `'Dancing Script', cursive`,
      }}>
        Nos Produits
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(238, 38, 119, 0.1)',
              backgroundColor: '#FFFFFF',
            }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ borderRadius: '10px 10px 0 0' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{
                  fontWeight: 'bold',
                  color: '#EE2677',
                  fontFamily: `'Dancing Script', cursive`,
                }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" sx={{
                  marginBottom: '10px',
                  color: '#333',
                  fontFamily: `'Open Sans', sans-serif`,
                }}>
                  {product.description}
                </Typography>
                <Typography variant="h6" sx={{
                  fontWeight: 'bold',
                  color: '#EE2677',
                }}>
                  {product.price}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <Button
                    variant="contained"
                    onClick={() => handleAddToCart(product.id)}
                    sx={{
                      backgroundColor: '#EE2677',
                      color: '#FFFFFF',
                      '&:hover': { backgroundColor: '#F3D3CD' },
                      fontFamily: `'Open Sans', sans-serif`,
                    }}
                  >
                    Ajouter au panier
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleViewDetails(product.id)}
                    sx={{
                      borderColor: '#EE2677',
                      color: '#EE2677',
                      '&:hover': { backgroundColor: '#F3D3CD', color: '#EE2677' },
                      fontFamily: `'Open Sans', sans-serif`,
                    }}
                  >
                    Détails
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
