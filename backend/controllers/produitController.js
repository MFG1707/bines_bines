// controllers/produitController.js
const Produit = require('../models/Produit');

// Ajouter un produit
const addProduit = async (req, res) => {
  try {
    const { nom, description, prix, image_url, type } = req.body;
    const produit = await Produit.create({ nom, description, prix, image_url, type });
    res.status(201).json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher tous les produits
const getAllProduits = async (req, res) => {
  try {
    const produits = await Produit.findAll();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher un produit par ID
const getProduitById = async (req, res) => {
  try {
    const { id } = req.params;
    const produit = await Produit.findByPk(id);
    if (!produit) return res.status(404).json({ message: "Produit non trouvé" });
    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un produit par ID
const updateProduit = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, description, prix, image_url, type } = req.body;
    const [updated] = await Produit.update({ nom, description, prix, image_url, type }, { where: { id } });
    if (!updated) return res.status(404).json({ message: "Produit non trouvé" });
    res.status(200).json({ message: "Produit mis à jour avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un produit par ID
const deleteProduit = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Produit.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Produit non trouvé" });
    res.status(200).json({ message: "Produit supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addProduit,
  getAllProduits,
  getProduitById,
  updateProduit,
  deleteProduit
};
