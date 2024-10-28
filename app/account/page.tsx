// app/account/page.tsx
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

const AccountPage = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/logout');
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      {/* Titre de la page */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#FFD700' }}>
        Mon Compte
      </Typography>

      {/* Informations utilisateur */}
      <Card sx={{ marginBottom: '20px', backgroundColor: '#1c1c1c', color: '#FFD700' }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Informations personnelles
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nom"
                defaultValue="Nom Utilisateur" // À remplacer par les données utilisateur
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#FFD700' } }} // Label couleur or
                InputProps={{ style: { color: '#FFD700' } }} // Texte couleur or
                sx={{ backgroundColor: '#333' }} // Couleur de fond du champ
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                defaultValue="user@example.com" // À remplacer par les données utilisateur
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#FFD700' } }} // Label couleur or
                InputProps={{ style: { color: '#FFD700' } }} // Texte couleur or
                sx={{ backgroundColor: '#333' }} // Couleur de fond du champ
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Téléphone"
                defaultValue="+221 123 456 789" // À remplacer par les données utilisateur
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#FFD700' } }} // Label couleur or
                InputProps={{ style: { color: '#FFD700' } }} // Texte couleur or
                sx={{ backgroundColor: '#333' }} // Couleur de fond du champ
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Adresse"
                defaultValue="Adresse utilisateur" // À remplacer par les données utilisateur
                variant="outlined"
                margin="normal"
                InputLabelProps={{ style: { color: '#FFD700' } }} // Label couleur or
                InputProps={{ style: { color: '#FFD700' } }} // Texte couleur or
                sx={{ backgroundColor: '#333' }} // Couleur de fond du champ
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{ marginTop: '10px', backgroundColor: '#FFD700', color: '#000' }}
          >
            Mettre à jour les informations
          </Button>
        </CardContent>
      </Card>

      {/* Historique des commandes */}
      <Card sx={{ marginBottom: '20px', backgroundColor: '#1c1c1c', color: '#FFD700' }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Historique des commandes
          </Typography>
          <Box>
            {/* Exemple d'une commande - à remplacer par une boucle de données utilisateur */}
            <Box sx={{ marginBottom: '10px', padding: '10px', border: '1px solid #FFD700', borderRadius: '4px' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Commande #12345</Typography>
              <Typography variant="body2" color="text.secondary">Date: 15 Octobre 2024</Typography>
              <Typography variant="body2" color="text.secondary">Total: 50€</Typography>
              <Button
                variant="outlined"
                sx={{ marginTop: '5px', color: '#FFD700', borderColor: '#FFD700' }}
                onClick={() => router.push(`/order/12345`)}
              >
                Voir les détails
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Préférences de personnalisation */}
      <Card sx={{ marginBottom: '20px', backgroundColor: '#1c1c1c', color: '#FFD700' }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
            Préférences de personnalisation
          </Typography>
          <Box sx={{ marginBottom: '10px' }}>
            <Typography variant="body1">Couleurs préférées</Typography>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              placeholder="Ex: Rouge, Or, Noir"
              sx={{ backgroundColor: '#333', color: '#FFD700' }}
              InputLabelProps={{ style: { color: '#FFD700' } }} // Label couleur or
            />
          </Box>
          <Box sx={{ marginBottom: '10px' }}>
            <Typography variant="body1">Taille préférée (en cm)</Typography>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              placeholder="Ex: 80 cm"
              sx={{ backgroundColor: '#333', color: '#FFD700' }}
              InputLabelProps={{ style: { color: '#FFD700' } }} // Label couleur or
            />
          </Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#FFD700', color: '#000' }}
          >
            Enregistrer les préférences
          </Button>
        </CardContent>
      </Card>

      {/* Bouton de déconnexion */}
      <Button
        variant="outlined"
        sx={{ borderColor: '#FFD700', color: '#FFD700', '&:hover': { backgroundColor: '#444' } }}
        fullWidth
        onClick={handleLogout}
      >
        Déconnexion
      </Button>
    </Container>
  );
};

export default AccountPage;
