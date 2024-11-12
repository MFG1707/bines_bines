// controllers/bayasSpecificationController.js
const BayasSpecification = require('../models/BayasSpecification');

// Créer une spécification de baya
const createBayasSpecification = async (req, res) => {
  try {
    const { tour_hanche, nombre_tours, image_tour_hanche_url, produit_id } = req.body;
    const bayasSpecification = await BayasSpecification.create({ tour_hanche, nombre_tours, image_tour_hanche_url, produit_id });
    res.status(201).json(bayasSpecification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher toutes les spécifications de bayas
const getAllBayasSpecifications = async (req, res) => {
  try {
    const specifications = await BayasSpecification.findAll();
    res.status(200).json(specifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher une spécification de baya par ID
const getBayasSpecificationById = async (req, res) => {
  try {
    const { id } = req.params;
    const bayasSpecification = await BayasSpecification.findByPk(id);
    if (!bayasSpecification) return res.status(404).json({ message: "Spécification non trouvée" });
    res.status(200).json(bayasSpecification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une spécification de baya par ID
const updateBayasSpecification = async (req, res) => {
  try {
    const { id } = req.params;
    const { tour_hanche, nombre_tours, image_tour_hanche_url, produit_id } = req.body;
    const [updated] = await BayasSpecification.update({ tour_hanche, nombre_tours, image_tour_hanche_url, produit_id }, {
      where: { id }
    });
    if (!updated) return res.status(404).json({ message: "Spécification non trouvée" });
    res.status(200).json({ message: "Spécification mise à jour avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une spécification de baya par ID
const deleteBayasSpecification = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await BayasSpecification.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Spécification non trouvée" });
    res.status(200).json({ message: "Spécification supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBayasSpecification,
  getAllBayasSpecifications,
  getBayasSpecificationById,
  updateBayasSpecification,
  deleteBayasSpecification,
};
