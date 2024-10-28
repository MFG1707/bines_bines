// app/contact/page.tsx
"use client";

import * as React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
} from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const ContactPage = () => {
  // Numéro WhatsApp (remplacez par le numéro réel)
  const whatsappNumber = '+1234567890'; // Remplacez avec le numéro de téléphone
  const message = 'Bonjour, j\'ai des questions concernant vos produits.';

  const handleContact = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '40px', backgroundColor: '#000000' }}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#1a1a1a', color: '#FFD700' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#FFD700' }}>
          Contactez-Nous
        </Typography>
        
        <Typography variant="body1" sx={{ marginBottom: '20px', textAlign: 'center', color: '#FFD700' }}>
          Si vous avez des questions ou des préoccupations, n&apos;hésitez pas à nous contacter. 
          Nous sommes là pour vous aider !
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            variant="contained"
            startIcon={<ContactMailIcon />}
            onClick={handleContact}
            sx={{
              backgroundColor: '#FFD700',
              color: '#000000',
              '&:hover': { backgroundColor: '#FFC107' },
            }}
          >
            Contacter via WhatsApp
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactPage;
