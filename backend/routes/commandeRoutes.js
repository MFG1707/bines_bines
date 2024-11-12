// routes/commandeRoutes.js
const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');

// Créer une commande
router.post('/', commandeController.createCommande);

// Afficher toutes les commandes
router.get('/', commandeController.getAllCommandes);

// Afficher une commande par ID
router.get('/:id', commandeController.getCommandeById);

// Mettre à jour une commande par ID
router.put('/:id', commandeController.updateCommande);

// Supprimer une commande par ID
router.delete('/:id', commandeController.deleteCommande);

module.exports = router;
