// routes/commandesProduitsRoutes.js
const express = require('express');
const router = express.Router();
const commandesProduitsController = require('../controllers/commandesProduitsController');

// Ajouter une nouvelle association commande-produit
router.post('/', commandesProduitsController.addCommandeProduit);

// Afficher toutes les associations commande-produit
router.get('/', commandesProduitsController.getAllCommandesProduits);

// Afficher une association commande-produit par ID
router.get('/:id', commandesProduitsController.getCommandeProduitById);

// Mettre à jour une association commande-produit par ID
router.put('/:id', commandesProduitsController.updateCommandeProduit);

// Supprimer une association commande-produit par ID
router.delete('/:id', commandesProduitsController.deleteCommandeProduit);

module.exports = router;
