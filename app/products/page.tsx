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
  // Ajoutez plus de produits ici
];

const ProductsPage = () => {
  const router = useRouter();

  const handleViewDetails = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  const handleAddToCart = (productId: number) => {
    // Logique pour ajouter au panier (à implémenter)
    alert(`Produit ${productId} ajouté au panier!`);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px', backgroundColor: '#F3D3CD', color: '#E86252' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#E86252' }}>
        Nos Produits
      </Typography>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0px 4px 8px rgba(232, 98, 82, 0.1)', backgroundColor: '#ED96B3' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ borderRadius: '10px 10px 0 0' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#E86252' }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ marginBottom: '10px', color: '#333' }}>
                  {product.description}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#E86252' }}>
                  {product.price}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <Button
                    variant="contained"
                    onClick={() => handleAddToCart(product.id)}
                    sx={{
                      backgroundColor: '#E86252',
                      color: '#FFF',
                      '&:hover': { backgroundColor: '#EE2677' },
                    }}
                  >
                    Ajouter au panier
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => handleViewDetails(product.id)}
                    sx={{
                      borderColor: '#E86252',
                      color: '#E86252',
                      '&:hover': { backgroundColor: '#ED96B3', color: '#E86252' },
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
