"use client";

import * as React from 'react';
import { Typography, Button, Grid, Box, Container, Card, CardMedia, CardContent } from '@mui/material';
import { useRouter } from 'next/navigation';


const HomePage = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px', backgroundColor: '#FFFFF', color: '#000' }}>
      {/* Section Bannière */}
      <Box
        sx={{
          backgroundImage: 'url(/images/banner-baya.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          padding: '60px',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#FFFFFF' }}>
          Bienvenue chez Bines-Bines
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '20px', color: '#FFFFFF' }}>
          Découvrez notre collection unique de bayas pour toutes les occasions
        </Typography>
        <Button
          variant="contained"
          onClick={() => handleNavigation('/products')}
          sx={{
            backgroundColor: '#E86252',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: '#ED96B3' },
          }}
        >
          Explorer notre collection
        </Button>
      </Box>

      {/* Section de Présentation des Collections */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginY: '40px', color: '#FFFFFF' }}>
        Collections Exclusives
      </Typography>
      <Grid container spacing={4}>
        {[
          { title: 'Élégance Festive', img: '/images/elegance.jpg' },
          { title: 'Classique Intemporel', img: '/images/classique.jpg' },
          { title: 'Charme Moderne', img: '/images/moderne.jpg' },
        ].map((collection, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card onClick={() => handleNavigation(`/collections/${collection.title.toLowerCase()}`)} sx={{ cursor: 'pointer', backgroundColor: '#ED96B3' }}>
              <CardMedia component="img" height="250" image={collection.img} alt={collection.title} />
              <CardContent>
                <Typography variant="h5" textAlign="center" sx={{ color: '#F3D3CD' }}>{collection.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Section Personnalisation */}
      <Box
        sx={{
          backgroundColor: '#E86252',
          padding: '40px',
          marginTop: '60px',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#FFFFFF' }}>
          Personnalisez vos bayas
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', color: '#F3D3CD' }}>
          Créez des bayas sur-mesure en choisissant les couleurs, perles et tailles qui vous correspondent.
        </Typography>
        <Button
          variant="outlined"
          onClick={() => handleNavigation('/customization')}
          sx={{
            borderColor: '#F3D3CD',
            color: '#F3D3CD',
            '&:hover': { backgroundColor: '#F0E6F6' },
          }}
        >
          Personnaliser maintenant
        </Button>
      </Box>

      {/* Témoignages des Clients */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginY: '40px', color: '#FFFFFF' }}>
        Ce que disent nos clientes
      </Typography>
      <Grid container spacing={4} sx={{ marginBottom: '60px' }}>
        {[
          { name: 'Aïcha', text: 'Les bayas sont magnifiques et la personnalisation est parfaite pour moi !', img: '/images/client1.jpg' },
          { name: 'Fatou', text: 'Une qualité incroyable et un service client au top !', img: '/images/client2.jpg' },
          { name: 'Mariam', text: 'J\'adore mes nouvelles bayas, elles sont uniques et élégantes.', img: '/images/client3.jpg' },
        ].map((testimony, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: '#ED96B3' }}>
              <CardMedia component="img" height="140" image={testimony.img} alt={testimony.name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" textAlign="center" sx={{ color: '#F3D3CD' }}>{testimony.name}</Typography>
                <Typography variant="body2" textAlign="center" sx={{ color: '#000' }}>
                  &quot;{testimony.text}&quot;
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
