const Joi = require("joi");
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

const { userTable, messageTable } = require("../data-access");

const makeCreateUser = require("./user/create-user");
const createUser = makeCreateUser({
  uuidv4,
  Joi,
  moment,
  createUserdb: userTable.createUser,
});

const makeGetAllUsers = require("./user/get-all-users");
const getAllUsers = makeGetAllUsers({
  getAllUsersdb: userTable.getAllUsers,
});

const makeCreatedMessage = require("./message/create-message");
const createMessage = makeCreatedMessage({
  uuidv4,
  moment,
  createMessagedb: messageTable.createMessage,
});

const makeLogin = require("./user/login");
const login = makeLogin({
  logindb: userTable.login,
});

const makeGetSingleUser = require("./user/get-single-user");
const getSingleUser = makeGetSingleUser({
  getSingleUserdb: userTable.getSingleUser,
});

const makeGetMatchedMessages = require("./message/get-matched-messages");
const getMatchedMessages = makeGetMatchedMessages({
  getMatchedMessagesdb: messageTable.getMatchedMessages,
});

const makeGetChatHistory = require("./message/get-chat-history")
const getChatHistory = makeGetChatHistory({
  getChatHistorydb: messageTable.getChatHistory
})

module.exports = Object.freeze({
  createUser,
  getAllUsers,
  createMessage,
  login,
  getSingleUser,
  getMatchedMessages,
  getChatHistory
});
