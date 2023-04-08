require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, BDD } = process.env;
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${BDD}`,
  { logging: false, native: false }
);

FavoriteModel(database);
UserModel(database);

const { User, Favorite } = database.models;
Favorite.belongsToMany(User, { through: 'user_favorite' });
User.belongsToMany(Favorite, { through: 'user_favorite' });

module.exports = {
  database,
  ...database.models,
};
