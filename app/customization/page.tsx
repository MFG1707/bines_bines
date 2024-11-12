"use client";

import * as React from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Box,
  InputAdornment,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const CustomizeProductPage = () => { // Retiré productId des props
  const router = useRouter();
  const [hipSize, setHipSize] = React.useState<number | ''>('');
  const [rounds, setRounds] = React.useState<number>(1);
  const [customText, setCustomText] = React.useState<string>('');
  const [photo, setPhoto] = React.useState<File | null>(null);
  const [totalCost, setTotalCost] = React.useState<number>(0);

  // Constants for customization cost
  const basePrice = 30; // Example base price for baya in Euros
  const costPerLetter = 400; // FCFA

  React.useEffect(() => {
    // Calculate total cost based on text length
    const textCost = customText.length * costPerLetter;
    setTotalCost(basePrice + textCost);
  }, [customText]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleAddToCart = () => {
    alert(`Produit personnalisé ajouté au panier ! Prix total: ${totalCost} FCFA`);
    router.push('/cart');
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '40px', color: '#EE2677' }}>
      <Typography variant="h4" sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#EE2677',
        fontFamily: `'Dancing Script', cursive`,
      }}>
        Personnaliser votre Baya
      </Typography>

      <Box sx={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(238, 38, 119, 0.1)' }}>
        <Grid container spacing={3}>
          {/* Hip Size Field */}
          <Grid item xs={12}>
            <TextField
              label="Tour de hanche (cm)"
              type="number"
              variant="outlined"
              fullWidth
              value={hipSize}
              onChange={(e) => setHipSize(Number(e.target.value))}
              InputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              }}
            />
          </Grid>

          {/* Number of Rounds Field */}
          <Grid item xs={12}>
            <TextField
              label="Nombre de tours"
              type="number"
              variant="outlined"
              fullWidth
              value={rounds}
              onChange={(e) => setRounds(Number(e.target.value))}
              inputProps={{ min: 1 }}
            />
          </Grid>

          {/* Custom Text Field */}
          <Grid item xs={12}>
            <TextField
              label="Texte personnalisé (400 FCFA par lettre)"
              variant="outlined"
              fullWidth
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
            />
          </Grid>

          {/* Photo Upload */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
              sx={{ backgroundColor: '#EE2677', color: '#FFFFFF', '&:hover': { backgroundColor: '#F3D3CD' } }}
            >
              Télécharger une photo (optionnel)
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handlePhotoUpload}
              />
            </Button>
            {photo && (
              <Typography variant="body2" sx={{ color: '#EE2677', marginTop: '10px' }}>
                Fichier sélectionné: {photo.name}
              </Typography>
            )}
          </Grid>

          {/* Total Cost Display */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#EE2677', marginTop: '10px' }}>
              Prix total: {totalCost} FCFA
            </Typography>
          </Grid>

          {/* Add to Cart Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handleAddToCart}
              sx={{ width: '100%', backgroundColor: '#EE2677', color: '#FFFFFF', '&:hover': { backgroundColor: '#F3D3CD' } }}
            >
              Ajouter au panier
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CustomizeProductPage;
