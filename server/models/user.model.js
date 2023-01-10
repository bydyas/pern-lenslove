const sequelize = require('../db.config');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  roles: { type: DataTypes.STRING, defaultValue: 'USER' },
});

module.exports = User;
