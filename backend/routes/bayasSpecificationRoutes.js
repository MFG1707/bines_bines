// routes/bayasSpecificationRoutes.js
const express = require('express');
const router = express.Router();
const bayasSpecificationController = require('../controllers/bayasSpecificationController');

// Créer une spécification de baya
router.post('/', bayasSpecificationController.createBayasSpecification);

// Afficher toutes les spécifications de bayas
router.get('/', bayasSpecificationController.getAllBayasSpecifications);

// Afficher une spécification de baya par ID
router.get('/:id', bayasSpecificationController.getBayasSpecificationById);

// Mettre à jour une spécification de baya par ID
router.put('/:id', bayasSpecificationController.updateBayasSpecification);

// Supprimer une spécification de baya par ID
router.delete('/:id', bayasSpecificationController.deleteBayasSpecification);

module.exports = router;
