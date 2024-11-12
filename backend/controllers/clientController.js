// controllers/clientController.js
const Client = require('../models/Client');

// Créer un client
const createClient = async (req, res) => {
  try {
    const { nom, email, telephone, adresse } = req.body;
    const client = await Client.create({ nom, email, telephone, adresse });
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher tous les clients
const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Afficher un client par ID
const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);
    if (!client) return res.status(404).json({ message: "Client non trouvé" });
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un client par ID
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, email, telephone, adresse } = req.body;
    const [updated] = await Client.update({ nom, email, telephone, adresse }, { where: { id } });
    if (!updated) return res.status(404).json({ message: "Client non trouvé" });
    res.status(200).json({ message: "Client mis à jour avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un client par ID
const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Client.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Client non trouvé" });
    res.status(200).json({ message: "Client supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
};
