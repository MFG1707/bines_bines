// routes/personnalisationRoutes.js
const express = require('express');
const router = express.Router();
const personnalisationController = require('../controllers/personnalisationController');

// Ajouter une nouvelle personnalisation
router.post('/', personnalisationController.addPersonnalisation);

// Afficher toutes les personnalisations
router.get('/', personnalisationController.getAllPersonnalisations);

// Afficher une personnalisation par ID
router.get('/:id', personnalisationController.getPersonnalisationById);

// Mettre à jour une personnalisation par ID
router.put('/:id', personnalisationController.updatePersonnalisation);

// Supprimer une personnalisation par ID
router.delete('/:id', personnalisationController.deletePersonnalisation);

module.exports = router;
