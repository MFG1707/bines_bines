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
  const whatsappNumber = '+1234567890'; // Remplacez avec le numéro de téléphone
  const message = 'Bonjour, j\'ai des questions concernant vos produits.';

  const handleContact = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '40px', backgroundColor: '#F3D3CD' }}>
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#ED96B3', color: '#E86252' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color: '#E86252' }}>
          Contactez-Nous
        </Typography>
        
        <Typography variant="body1" sx={{ marginBottom: '20px', textAlign: 'center', color: '#E86252' }}>
          Si vous avez des questions ou des préoccupations, n&apos;hésitez pas à nous contacter. 
          Nous sommes là pour vous aider !
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            variant="contained"
            startIcon={<ContactMailIcon />}
            onClick={handleContact}
            sx={{
              backgroundColor: '#E86252',
              color: '#FFF',
              '&:hover': { backgroundColor: '#EE2677' },
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
