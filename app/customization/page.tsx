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
import { ChromePicker } from 'react-color';

const CustomizationPage = () => {
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);
  const [selectedPattern, setSelectedPattern] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);
  const [customColor, setCustomColor] = React.useState('#ffffff');
  const [letterCount, setLetterCount] = React.useState(0);
  const [nameInput, setNameInput] = React.useState('');

  const patterns = ['Fleuri', 'Géométrique', 'Linéaire', 'Abstrait'];

  const handleColorChange = (color: string) => {
    setSelectedColors((prevColors) => {
      if (prevColors.includes(color)) {
        return prevColors.filter((c) => c !== color);
      }
      return [...prevColors, color];
    });
  };

  const handleCustomColorChange = (color: { hex: string }) => {
    setCustomColor(color.hex);
    handleColorChange(color.hex);
  };

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setNameInput(input);
    setLetterCount(input.length);
  };

  const handleSubmit = () => {
    const totalCost = letterCount * 400;
    alert(`Vous avez choisi: ${selectedColors.join(', ')} avec le motif ${selectedPattern}. Quantité: ${quantity}. Coût total: ${totalCost} FCFA pour le nom "${nameInput}".`);
  };

  const predefinedColors = ['#EE2677', '#FFFFFF'];

  return (
    <Container maxWidth="lg" sx={{ marginTop: '40px', backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '20px', backgroundColor: '#EE2677', color: '#FFFFFF' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#FFFFFF', fontFamily: `'Dancing Script', cursive`, textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
          Personnalisez vos Bayas
        </Typography>

        <Grid container spacing={4}>
          {/* Section Couleurs */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontFamily: `'Dancing Script', cursive` }}>Couleurs</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
              {predefinedColors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColors.includes(color) ? 'contained' : 'outlined'}
                  onClick={() => handleColorChange(color)}
                  sx={{
                    backgroundColor: selectedColors.includes(color) ? color : '#FFFFFF',
                    color: selectedColors.includes(color) ? '#FFFFFF' : '#EE2677',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    transition: '0.3s',
                  }}
                />
              ))}
            </Box>
            <Typography variant="body2" sx={{ color: '#FFFFFF', fontFamily: `'Dancing Script', cursive` }}>Couleur personnalisée :</Typography>
            <ChromePicker color={customColor} onChangeComplete={handleCustomColorChange} />
          </Grid>

          {/* Section Motifs */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontFamily: `'Dancing Script', cursive` }}>Motif</Typography>
            <FormControl fullWidth sx={{ marginTop: '10px' }}>
              <InputLabel id="pattern-select-label" sx={{ color: '#FFFFFF', fontFamily: `'Dancing Script', cursive` }}>Choisissez un motif</InputLabel>
              <Select
                labelId="pattern-select-label"
                value={selectedPattern}
                onChange={(e) => setSelectedPattern(e.target.value)}
                sx={{ color: '#FFFFFF', '& .MuiSelect-icon': { color: '#FFFFFF' } }}
              >
                {patterns.map((pattern) => (
                  <MenuItem key={pattern} value={pattern}>{pattern}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Section Quantité */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontFamily: `'Dancing Script', cursive` }}>Quantité</Typography>
            <TextField
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
              inputProps={{ min: 1, max: 10 }}
              sx={{ width: '100%', marginTop: '10px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}
            />
          </Grid>

          {/* Section Lettres Personnalisées */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontFamily: `'Dancing Script', cursive` }}>Nom Personnalisé</Typography>
            <TextField
              type="text"
              value={nameInput}
              onChange={handleNameInputChange}
              placeholder="Entrez votre nom"
              sx={{ width: '100%', marginTop: '10px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}
            />
            <Typography variant="body2" sx={{ color: '#FFFFFF', marginTop: '10px', fontFamily: `'Dancing Script', cursive` }}>
              Nombre de lettres : {letterCount} (Coût: {letterCount * 400} FCFA)
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleSubmit}
            sx={{
              backgroundColor: '#EE2677',
              color: '#FFFFFF',
              '&:hover': { backgroundColor: '#EE2677', opacity: 0.9 },
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '50px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
