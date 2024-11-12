// routes/clientRoutes.js
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Créer un client
router.post('/', clientController.createClient);

// Afficher tous les clients
router.get('/', clientController.getAllClients);

// Afficher un client par ID
router.get('/:id', clientController.getClientById);

// Mettre à jour un client par ID
router.put('/:id', clientController.updateClient);

// Supprimer un client par ID
router.delete('/:id', clientController.deleteClient);

module.exports = router;
