// models/Client.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Client extends Model {}

Client.init({
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telephone: {
    type: DataTypes.STRING,
  },
  adresse: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  modelName: 'Client',
  tableName: 'clients',
});

module.exports = Client;

