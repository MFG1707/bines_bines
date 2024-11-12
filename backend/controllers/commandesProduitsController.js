// controllers/commandesProduitsController.js
const CommandesProduits = require('../models/CommandesProduits');
const Commande = require('../models/Commande');
const Produit = require('../models/Produit');
const Personnalisation = require('../models/Personnalisation');

// Ajouter une association entre commande et produit
const addCommandeProduit = async (req, res) => {
  try {
    const { commande_id, produit_id, personnalisation_id, quantite, prix_total } = req.body;
    const commandeProduit = await CommandesProduits.create({
      commande_id,
      produit_id,
      personnalisation_id,
      quantite,
      prix_total
    });
    res.status(201).json(commandeProduit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher toutes les associations commandes-produits
const getAllCommandesProduits = async (req, res) => {
  try {
    const commandesProduits = await CommandesProduits.findAll({
      include: [Commande, Produit, Personnalisation]
    });
    res.status(200).json(commandesProduits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher une association par ID
const getCommandeProduitById = async (req, res) => {
  try {
    const { id } = req.params;
    const commandeProduit = await CommandesProduits.findByPk(id, {
      include: [Commande, Produit, Personnalisation]
    });
    if (!commandeProduit) return res.status(404).json({ message: "Association non trouvée" });
    res.status(200).json(commandeProduit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une association par ID
const updateCommandeProduit = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantite, prix_total } = req.body;
    const [updated] = await CommandesProduits.update(
      { quantite, prix_total },
      { where: { id } }
    );
    if (!updated) return res.status(404).json({ message: "Association non trouvée" });
    res.status(200).json({ message: "Association mise à jour avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une association par ID
const deleteCommandeProduit = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CommandesProduits.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Association non trouvée" });
    res.status(200).json({ message: "Association supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCommandeProduit,
  getAllCommandesProduits,
  getCommandeProduitById,
  updateCommandeProduit,
  deleteCommandeProduit
};
