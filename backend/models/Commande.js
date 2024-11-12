// models/Commande.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Client = require('./Client');

class Commande extends Model {}

Commande.init({
  date_commande: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  statut: {
    type: DataTypes.ENUM('en_attente', 'expédiée', 'livrée'),
    defaultValue: 'en_attente'
  }
}, {
  sequelize,
  modelName: 'Commande',
  tableName: 'commandes',
});

Commande.belongsTo(Client, { foreignKey: 'client_id' });

module.exports = Commande;
