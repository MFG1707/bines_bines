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

const collections = [
  {
    id: 1,
    name: 'Collection Éclat d’Or',
    description: 'Des bayas en or et en perles scintillantes pour un style luxueux.',
    image: '/images/collection_or.jpg',
  },
  {
    id: 2,
    name: 'Collection Floral',
    description: 'Des bayas inspirées de la nature et des fleurs.',
    image: '/images/collection_floral.jpg',
  },
  {
    id: 3,
    name: 'Collection Multicolore',
    description: 'Un mélange de couleurs vibrantes pour un look audacieux.',
    image: '/images/collection_multicolore.jpg',
  },
  // Ajoutez d'autres collections ici
];

const CollectionsPage = () => {
  const router = useRouter();

  const handleViewCollection = (collectionId: number) => {
    router.push(`/collections/${collectionId}`);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px', backgroundColor: '#FFFFFF' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#EE2677',
          fontFamily: `'Dancing Script', cursive`,
        }}
      >
        Nos Collections
      </Typography>

      <Grid container spacing={4}>
        {collections.map((collection) => (
          <Grid item xs={12} sm={6} md={4} key={collection.id}>
            <Card
              sx={{
                borderRadius: '10px',
                boxShadow: '0px 4px 8px rgba(238, 38, 119, 0.2)',
                backgroundColor: '#FFFFFF',
                color: '#EE2677',
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={collection.image}
                alt={collection.name}
                sx={{ borderRadius: '10px 10px 0 0' }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    color: '#EE2677',
                    fontFamily: `'Dancing Script', cursive`,
                  }}
                >
                  {collection.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: '10px', color: '#EE2677' }}
                >
                  {collection.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    onClick={() => handleViewCollection(collection.id)}
                    sx={{
                      backgroundColor: '#EE2677',
                      color: '#FFFFFF',
                      '&:hover': {
                        backgroundColor: '#FFFFFF',
                        color: '#EE2677',
                        border: '1px solid #EE2677',
                      },
                    }}
                  >
                    Voir la collection
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

export default CollectionsPage;
