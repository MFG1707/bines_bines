// controllers/personnalisationController.js
const Personnalisation = require('../models/Personnalisation');
const Produit = require('../models/Produit');

// Ajouter une personnalisation
const addPersonnalisation = async (req, res) => {
  try {
    const { produit_id, couleur, motif, lettres, cout_lettres } = req.body;
    const personnalisation = await Personnalisation.create({
      produit_id,
      couleur,
      motif,
      lettres,
      cout_lettres
    });
    res.status(201).json(personnalisation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher toutes les personnalisations
const getAllPersonnalisations = async (req, res) => {
  try {
    const personnalisations = await Personnalisation.findAll({
      include: [Produit]
    });
    res.status(200).json(personnalisations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher une personnalisation par ID
const getPersonnalisationById = async (req, res) => {
  try {
    const { id } = req.params;
    const personnalisation = await Personnalisation.findByPk(id, {
      include: [Produit]
    });
    if (!personnalisation) return res.status(404).json({ message: "Personnalisation non trouvée" });
    res.status(200).json(personnalisation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une personnalisation par ID
const updatePersonnalisation = async (req, res) => {
  try {
    const { id } = req.params;
    const { couleur, motif, lettres, cout_lettres } = req.body;
    const [updated] = await Personnalisation.update(
      { couleur, motif, lettres, cout_lettres },
      { where: { id } }
    );
    if (!updated) return res.status(404).json({ message: "Personnalisation non trouvée" });
    res.status(200).json({ message: "Personnalisation mise à jour avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une personnalisation par ID
const deletePersonnalisation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Personnalisation.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Personnalisation non trouvée" });
    res.status(200).json({ message: "Personnalisation supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPersonnalisation,
  getAllPersonnalisations,
  getPersonnalisationById,
  updatePersonnalisation,
  deletePersonnalisation
};
