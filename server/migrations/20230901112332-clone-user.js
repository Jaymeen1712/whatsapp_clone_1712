"use strict";

const { Sequelize } = require("sequelize");

async function up({ context: queryInterface }) {
  return queryInterface.createTable("user", {
    id: {
      type: Sequelize.INTEGER(255),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
    },
    firstName: {
      type: Sequelize.STRING(255),
    },
    lastName: {
      type: Sequelize.STRING(255),
    },
    username: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.STRING(255),
    },
    updatedAt: {
      type: Sequelize.STRING(255),
    },
  });
}

async function down({ context: queryInterface }) {
  return queryInterface.dropTable("user");
}

module.exports = { up, down };
