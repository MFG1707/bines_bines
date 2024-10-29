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
    setLetterCount(input.length); // Mettre à jour le nombre de lettres en temps réel
  };

  const handleSubmit = () => {
    const totalCost = letterCount * 400;
    alert(`Vous avez choisi: ${selectedColors.join(', ')} avec le motif ${selectedPattern}. Quantité: ${quantity}. Coût total: ${totalCost} FCFA pour le nom "${nameInput}".`);
  };

  const predefinedColors = [
    '#F3D3CD', '#ED96B3', '#E86252', '#EE2677',
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: '40px', backgroundColor: '#F9F9F9', borderRadius: '10px' }}>
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '20px', backgroundColor: '#ED96B3', color: '#E86252' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#FFF', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
          Personnalisez vos Bayas
        </Typography>

        <Grid container spacing={4}>
          {/* Section Couleurs */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFF' }}>Couleurs</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
              {predefinedColors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColors.includes(color) ? 'contained' : 'outlined'}
                  onClick={() => handleColorChange(color)}
                  sx={{
                    backgroundColor: selectedColors.includes(color) ? color : 'white',
                    color: selectedColors.includes(color) ? 'white' : 'black',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    transition: '0.3s',
                  }}
                />
              ))}
            </Box>
            <Typography variant="body2" sx={{ color: '#FFF' }}>Couleur personnalisée :</Typography>
            <ChromePicker color={customColor} onChangeComplete={handleCustomColorChange} />
          </Grid>

          {/* Section Motifs */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFF' }}>Motif</Typography>
            <FormControl fullWidth sx={{ marginTop: '10px' }}>
              <InputLabel id="pattern-select-label" sx={{ color: '#FFF' }}>Choisissez un motif</InputLabel>
              <Select
                labelId="pattern-select-label"
                value={selectedPattern}
                onChange={(e) => setSelectedPattern(e.target.value)}
                sx={{ color: '#E86252', '& .MuiSelect-icon': { color: '#FFF' }}}
              >
                {patterns.map((pattern) => (
                  <MenuItem key={pattern} value={pattern}>{pattern}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Section Quantité */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFF' }}>Quantité</Typography>
            <TextField
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
              inputProps={{ min: 1, max: 10 }}
              sx={{ width: '100%', marginTop: '10px', backgroundColor: '#FFF', borderRadius: '5px' }}
            />
          </Grid>

          {/* Section Lettres Personnalisées */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: '#FFF' }}>Nom Personnalisé</Typography>
            <TextField
              type="text"
              value={nameInput}
              onChange={handleNameInputChange} // Utilisation de la fonction pour gérer le changement
              placeholder="Entrez votre nom"
              sx={{ width: '100%', marginTop: '10px', backgroundColor: '#FFF', borderRadius: '5px' }}
            />
            <Typography variant="body2" sx={{ color: '#FFF', marginTop: '10px' }}>
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
              backgroundColor: '#E86252',
              color: '#FFF',
              '&:hover': { backgroundColor: '#EE2677' },
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
