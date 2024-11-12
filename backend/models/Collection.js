// models/Collection.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Collection extends Model {}

Collection.init({
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  },
  image_url: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'Collection',
  tableName: 'collections',
});

module.exports = Collection;
