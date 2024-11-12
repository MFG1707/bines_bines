// controllers/collectionController.js
const Collection = require('../models/Collection');

// Créer une collection
const createCollection = async (req, res) => {
  try {
    const { nom, description, image_url } = req.body;
    const collection = await Collection.create({ nom, description, image_url });
    res.status(201).json(collection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher toutes les collections
const getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.findAll();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher une collection par ID
const getCollectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const collection = await Collection.findByPk(id);
    if (!collection) return res.status(404).json({ message: "Collection non trouvée" });
    res.status(200).json(collection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une collection par ID
const updateCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, description, image_url } = req.body;
    const [updated] = await Collection.update({ nom, description, image_url }, { where: { id } });
    if (!updated) return res.status(404).json({ message: "Collection non trouvée" });
    res.status(200).json({ message: "Collection mise à jour avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une collection par ID
const deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Collection.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Collection non trouvée" });
    res.status(200).json({ message: "Collection supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCollection,
  getAllCollections,
  getCollectionById,
  updateCollection,
  deleteCollection,
};
