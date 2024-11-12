// models/CommandesProduits.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Commande = require('./Commande');
const Produit = require('./Produit');
const Personnalisation = require('./Personnalisation');

class CommandesProduits extends Model {}

CommandesProduits.init({
  quantite: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prix_total: {
    type: DataTypes.DECIMAL(10, 2),
  }
}, {
  sequelize,
  modelName: 'CommandesProduits',
  tableName: 'commandes_produits',
});

CommandesProduits.belongsTo(Commande, { foreignKey: 'commande_id' });
CommandesProduits.belongsTo(Produit, { foreignKey: 'produit_id' });
CommandesProduits.belongsTo(Personnalisation, { foreignKey: 'personnalisation_id' });

module.exports = CommandesProduits;
