// models/Produit.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Produit extends Model {}

Produit.init({
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  },
  prix: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.ENUM('baya_classique', 'baya_seduction', 'autre'),
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'Produit',
  tableName: 'produits',
});

module.exports = Produit;
