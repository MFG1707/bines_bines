// models/Personnalisation.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produit = require('./Produit');

class Personnalisation extends Model {}

Personnalisation.init({
  couleur: {
    type: DataTypes.STRING,
  },
  motif: {
    type: DataTypes.ENUM('avec_chaine', 'sans_chaine'),
    defaultValue: 'sans_chaine'
  },
  lettres: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  cout_lettres: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  }
}, {
  sequelize,
  modelName: 'Personnalisation',
  tableName: 'personnalisations',
});

Personnalisation.belongsTo(Produit, { foreignKey: 'produit_id', unique: true });

module.exports = Personnalisation;
