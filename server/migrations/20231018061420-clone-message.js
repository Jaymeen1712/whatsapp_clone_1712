"use strict";

const { Sequelize } = require("sequelize");

async function up({ context: queryInterface }) {
  return queryInterface.createTable("message", {
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
    senderId: {
      type: Sequelize.UUID,
    },
    receiverId: {
      type: Sequelize.UUID,
    },
    message: {
      type: Sequelize.STRING(255),
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
  return queryInterface.dropTable("message");
}

module.exports = { up, down };
