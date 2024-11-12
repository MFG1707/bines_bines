// routes/collectionRoutes.js
const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

// Créer une collection
router.post('/', collectionController.createCollection);

// Afficher toutes les collections
router.get('/', collectionController.getAllCollections);

// Afficher une collection par ID
router.get('/:id', collectionController.getCollectionById);

// Mettre à jour une collection par ID
router.put('/:id', collectionController.updateCollection);

// Supprimer une collection par ID
router.delete('/:id', collectionController.deleteCollection);

module.exports = router;
