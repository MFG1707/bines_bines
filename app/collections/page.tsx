// app/collections/page.tsx
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

  // Ajout du type string pour le paramètre collectionId
  const handleViewCollection = (collectionId: number) => {
    router.push(`/collections/${collectionId}`);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px', backgroundColor: '#000000' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#FFD700' }}>
        Nos Collections
      </Typography>

      <Grid container spacing={4}>
        {collections.map((collection) => (
          <Grid item xs={12} sm={6} md={4} key={collection.id}>
            <Card sx={{ borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#1a1a1a', color: '#FFD700' }}>
              <CardMedia
                component="img"
                height="200"
                image={collection.image}
                alt={collection.name}
                sx={{ borderRadius: '10px 10px 0 0' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
                  {collection.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px', color: '#FFD700' }}>
                  {collection.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    onClick={() => handleViewCollection(collection.id)} // Passer l'ID de la collection
                    sx={{
                      backgroundColor: '#FFD700',
                      color: '#000000',
                      '&:hover': { backgroundColor: '#FFC107' },
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
