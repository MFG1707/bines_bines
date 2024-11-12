// routes/produitRoutes.js
const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');

// Ajouter un nouveau produit
router.post('/', produitController.addProduit);

// Afficher tous les produits
router.get('/', produitController.getAllProduits);

// Afficher un produit par ID
router.get('/:id', produitController.getProduitById);

// Mettre à jour un produit par ID
router.put('/:id', produitController.updateProduit);

// Supprimer un produit par ID
router.delete('/:id', produitController.deleteProduit);

module.exports = router;
