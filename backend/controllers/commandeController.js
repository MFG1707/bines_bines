// controllers/commandeController.js
const Commande = require('../models/Commande');
const Client = require('../models/Client');

// Créer une commande
const createCommande = async (req, res) => {
  try {
    const { client_id, statut } = req.body;
    const commande = await Commande.create({ client_id, statut });
    res.status(201).json(commande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher toutes les commandes
const getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.findAll({ include: Client });
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher une commande par ID
const getCommandeById = async (req, res) => {
  try {
    const { id } = req.params;
    const commande = await Commande.findByPk(id, { include: Client });
    if (!commande) return res.status(404).json({ message: "Commande non trouvée" });
    res.status(200).json(commande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une commande par ID
const updateCommande = async (req, res) => {
  try {
    const { id } = req.params;
    const { statut } = req.body;
    const [updated] = await Commande.update({ statut }, { where: { id } });
    if (!updated) return res.status(404).json({ message: "Commande non trouvée" });
    res.status(200).json({ message: "Commande mise à jour avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une commande par ID
const deleteCommande = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Commande.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Commande non trouvée" });
    res.status(200).json({ message: "Commande supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCommande,
  getAllCommandes,
  getCommandeById,
  updateCommande,
  deleteCommande,
};
