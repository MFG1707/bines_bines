// app/customization/page.tsx
"use client";

import * as React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ChromePicker } from 'react-color'; // Utiliser un color picker

const CustomizationPage = () => {
  const [selectedColors, setSelectedColors] = React.useState([]);
  const [selectedPattern, setSelectedPattern] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);
  const [customColor, setCustomColor] = React.useState('#ffffff'); // Pour la couleur personnalisée

  const patterns = ['Fleuri', 'Geometrique', 'Linéaire', 'Abstrait'];

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) => {
      if (prevColors.includes(color)) {
        return prevColors.filter((c) => c !== color);
      }
      return [...prevColors, color];
    });
  };

  const handleCustomColorChange = (color) => {
    setCustomColor(color.hex);
    handleColorChange(color.hex); // Ajouter la couleur personnalisée aux couleurs sélectionnées
  };

  const handleSubmit = () => {
    alert(`Vous avez choisi: ${selectedColors.join(', ')} avec le motif ${selectedPattern}. Quantité: ${quantity}`);
  };

  const predefinedColors = [
    '#FF5733', '#FFBD33', '#75FF33', '#33FF57', '#33FFBD',
    '#33A1FF', '#3357FF', '#5733FF', '#BD33FF', '#FF33A1',
    '#FFC0CB', '#FFD700', '#ADFF2F', '#20B2AA', '#FF69B4',
    '#8A2BE2', '#FF4500', '#2E8B57', '#FFA07A', '#D2691E',
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '40px', backgroundColor: '#000000' }}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#1a1a1a', color: '#FFD700' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#FFD700' }}>
          Personnalisez vos Bayas
        </Typography>
        
        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '20px', color: '#FFD700' }}>
          Choisissez vos couleurs et motifs pour créer votre propre style !
        </Typography>

        <Grid container spacing={4}>
          {/* Section de sélection des couleurs */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FFD700' }}>
              Sélectionnez vos couleurs
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {predefinedColors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColors.includes(color) ? 'contained' : 'outlined'}
                  onClick={() => handleColorChange(color)}
                  sx={{
                    backgroundColor: selectedColors.includes(color) ? color : 'white',
                    color: selectedColors.includes(color) ? 'white' : 'black',
                    '&:hover': {
                      backgroundColor: selectedColors.includes(color) ? color : '#e0e0e0',
                    },
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                  }}
                />
              ))}
            </Box>

            {/* Section de couleur personnalisée */}
            <Typography variant="h6" sx={{ marginTop: '20px', color: '#FFD700' }}>
              Ou choisissez une couleur personnalisée
            </Typography>
            <ChromePicker
              color={customColor}
              onChangeComplete={handleCustomColorChange}
              style={{ marginTop: '10px' }}
            />
          </Grid>

          {/* Section de sélection des motifs */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FFD700' }}>
              Sélectionnez un motif
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="pattern-select-label" sx={{ color: '#FFD700' }}>Motif</InputLabel>
              <Select
                labelId="pattern-select-label"
                value={selectedPattern}
                onChange={(e) => setSelectedPattern(e.target.value)}
                sx={{ color: '#FFD700', '& .MuiSelect-icon': { color: '#FFD700' }}}
              >
                {patterns.map((pattern) => (
                  <MenuItem key={pattern} value={pattern}>
                    {pattern}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Section pour choisir la quantité */}
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h6" sx={{ marginBottom: '10px', color: '#FFD700' }}>
            Quantité
          </Typography>
          <TextField
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            inputProps={{ min: 1, max: 10 }}
            sx={{ width: '100px', color: '#FFD700' }}
          />
        </Box>

        {/* Bouton de soumission */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleSubmit}
            sx={{
              backgroundColor: '#FFD700',
              color: '#000000',
              '&:hover': { backgroundColor: '#FFC107' },
            }}
          >
            Ajouter à mon panier
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CustomizationPage;
