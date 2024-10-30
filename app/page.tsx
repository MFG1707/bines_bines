"use client";

import * as React from 'react';
import { Typography, Button, Grid, Box, Container, Card, CardMedia, CardContent } from '@mui/material';
import { useRouter } from 'next/navigation';

// Importation de la police Google Font avec next/font/google
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
});

const HomePage = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Container 
      maxWidth="lg" 
      style={{ 
        marginTop: '20px', 
        backgroundColor: '#FFFFFF', 
        color: '#000', 
        fontFamily: dancingScript.style.fontFamily // Application de la police
      }}
    >
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
          fontFamily: dancingScript.style.fontFamily
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#FFFFFF', fontFamily: dancingScript.style.fontFamily }}>
          Bienvenue chez Bines-Bines
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: '20px', color: '#FFFFFF', fontFamily: dancingScript.style.fontFamily }}>
          Découvrez notre collection unique de bayas pour toutes les occasions
        </Typography>
        <Button
          variant="contained"
          onClick={() => handleNavigation('/products')}
          sx={{
            backgroundColor: '#EE2677',
            color: '#FFFFFF',
            fontFamily: dancingScript.style.fontFamily,
            '&:hover': { backgroundColor: '#EE2677' },
          }}
        >
          Explorer notre collection
        </Button>
      </Box>

      {/* Section de Présentation des Collections */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginY: '40px', color: '#EE2677', fontFamily: dancingScript.style.fontFamily }}>
        Collections Exclusives
      </Typography>
      <Grid container spacing={4}>
        {[
          { title: 'Élégance Festive', img: '/images/elegance.jpg' },
          { title: 'Classique Intemporel', img: '/images/classique.jpg' },
          { title: 'Charme Moderne', img: '/images/moderne.jpg' },
        ].map((collection, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card onClick={() => handleNavigation(`/collections/${collection.title.toLowerCase()}`)} sx={{ cursor: 'pointer', backgroundColor: '#EE2677', fontFamily: dancingScript.style.fontFamily }}>
              <CardMedia component="img" height="250" image={collection.img} alt={collection.title} />
              <CardContent>
                <Typography variant="h5" textAlign="center" sx={{ color: '#FFFFFF', fontFamily: dancingScript.style.fontFamily }}>{collection.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Section Personnalisation */}
      <Box
        sx={{
          backgroundColor: '#EE2677',
          padding: '40px',
          marginTop: '60px',
          textAlign: 'center',
          borderRadius: '8px',
          fontFamily: dancingScript.style.fontFamily
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#FFFFFF', fontFamily: dancingScript.style.fontFamily }}>
          Personnalisez vos bayas
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px', color: '#FFFFFF', fontFamily: dancingScript.style.fontFamily }}>
          Créez des bayas sur-mesure en choisissant les couleurs, perles et tailles qui vous correspondent.
        </Typography>
        <Button
          variant="outlined"
          onClick={() => handleNavigation('/customization')}
          sx={{
            borderColor: '#FFFFFF',
            color: '#FFFFFF',
            fontFamily: dancingScript.style.fontFamily,
            '&:hover': { backgroundColor: '#F0E6F6' },
          }}
        >
          Personnaliser maintenant
        </Button>
      </Box>

      {/* Témoignages des Clients */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginY: '40px', color: '#EE2677', fontFamily: dancingScript.style.fontFamily }}>
        Ce que disent nos clientes
      </Typography>
      <Grid container spacing={4} sx={{ marginBottom: '60px' }}>
        {[
          { name: 'Aïcha', text: 'Les bayas sont magnifiques et la personnalisation est parfaite pour moi !', img: '/images/client1.jpg' },
          { name: 'Fatou', text: 'Une qualité incroyable et un service client au top !', img: '/images/client2.jpg' },
          { name: 'Mariam', text: 'J\'adore mes nouvelles bayas, elles sont uniques et élégantes.', img: '/images/client3.jpg' },
        ].map((testimony, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: '#EE2677', fontFamily: dancingScript.style.fontFamily }}>
              <CardMedia component="img" height="140" image={testimony.img} alt={testimony.name} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" textAlign="center" sx={{ color: '#FFFFFF', fontFamily: dancingScript.style.fontFamily }}>{testimony.name}</Typography>
                <Typography variant="body2" textAlign="center" sx={{ color: '#000', fontFamily: dancingScript.style.fontFamily }}>
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
