"use client";

import * as React from 'react';
import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/navigation';

// Importation de la police Google Font
import { Dancing_Script } from '@next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: '400',
});

const AccountPage = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Ajoutez une logique pour effacer la session utilisateur
    router.push('/logout');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '40px', fontFamily: dancingScript.style.fontFamily }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#FFFFFF',
          fontSize: '2.5rem',
        }}
      >
        Mon Compte
      </Typography>

      <Card sx={{ marginBottom: '20px', backgroundColor: '#EE2677', color: '#FFFFFF' }}>
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
              fontSize: '1.8rem',
            }}
          >
            Informations personnelles
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nom"
                defaultValue="Nom Utilisateur" // Remplacez par les données réelles de l'utilisateur
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#FFFFFF' } }}
                InputProps={{ style: { color: '#FFFFFF' } }}
                sx={{ backgroundColor: '#EE2677' }}
              />
            </Grid>
            {/* Ajoutez d'autres champs ici */}
          </Grid>
          <Button
            variant="contained"
            sx={{
              marginTop: '10px',
              backgroundColor: '#FFFFFF',
              color: '#EE2677',
              fontWeight: 'bold',
            }}
          >
            Mettre à jour les informations
          </Button>
        </CardContent>
      </Card>

      {/* Section Historique des commandes */}
      <Card sx={{ marginBottom: '20px', backgroundColor: '#EE2677', color: '#FFFFFF' }}>
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              marginBottom: '10px',
              fontSize: '1.8rem',
            }}
          >
            Historique des commandes
          </Typography>
          <Box>
            <Box sx={{ marginBottom: '10px', padding: '10px', border: `1px solid #FFFFFF`, borderRadius: '4px' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>Commande #12345</Typography>
              <Typography variant="body2" color="inherit">Date: 15 Octobre 2024</Typography>
              <Typography variant="body2" color="inherit">Total: 50€</Typography>
              <Button
                variant="outlined"
                sx={{
                  marginTop: '5px',
                  color: '#FFFFFF',
                  borderColor: '#FFFFFF',
                }}
                onClick={() => router.push(`/order/12345`)}
              >
                Voir les détails
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Bouton de déconnexion */}
      <Button
        variant="outlined"
        sx={{
          borderColor: '#FFFFFF',
          color: '#FFFFFF',
          '&:hover': { backgroundColor: '#EE2677' },
        }}
        fullWidth // Déplacez fullWidth ici
        onClick={handleLogout}
      >
        Déconnexion
      </Button>
    </Container>
  );
};

export default AccountPage;
