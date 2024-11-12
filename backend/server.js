const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./config/database'); // Assurez-vous que vous avez la configuration correcte pour Sequelize

// Importation des routes
const produitRoutes = require('./routes/produitRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const clientRoutes = require('./routes/clientRoutes');
const commandeRoutes = require('./routes/commandeRoutes');
const commandesProduitsRoutes = require('./routes/commandesProduitsRoutes');
const personnalisationRoutes = require('./routes/personnalisationRoutes');
const bayasSpecificationRoutes = require('./routes/bayasSpecificationRoutes');

// Initialisation de l'application Express
const app = express();

// Middleware pour analyser le corps des requêtes en JSON
app.use(bodyParser.json());
app.use(cors()); // CORS pour autoriser les requêtes depuis n'importe quelle origine

// Enregistrement des routes
app.use('/api/produits', produitRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/commandes', commandeRoutes);
app.use('/api/commandesProduits', commandesProduitsRoutes);
app.use('/api/personnalisations', personnalisationRoutes);
app.use('/api/bayasSpecifications', bayasSpecificationRoutes);

// Route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API Bines-Bines!');
});

// Gestion des erreurs 404 pour les routes non définies
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

// Gestion des erreurs générales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erreur interne du serveur', error: err.message });
});

// Synchronisation avec la base de données (avec Sequelize)
sequelize.sync({ force: false }).then(() => {
  console.log('Base de données synchronisée');
  // Démarrer le serveur après la synchronisation de la base de données
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
  });
});
