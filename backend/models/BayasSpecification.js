// models/BayasSpecification.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produit = require('./Produit');

class BayasSpecification extends Model {}

BayasSpecification.init({
  tour_hanche: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre_tours: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image_tour_hanche_url: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'BayasSpecification',
  tableName: 'bayas_specifications',
});

BayasSpecification.belongsTo(Produit, { foreignKey: 'produit_id', unique: true });

module.exports = BayasSpecification;
