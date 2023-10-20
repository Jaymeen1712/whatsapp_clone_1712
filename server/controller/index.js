const useCases = require("../usecases");

const makeCreateUserActionController = require("./user/create-user-controller");
const createUserActionController = makeCreateUserActionController({
  createUser: useCases.createUser,
});

const makeGetAllUsersActionController = require("./user/get-all-users-controller");
const getAllUsersActionController = makeGetAllUsersActionController({
  getAllUsers: useCases.getAllUsers,
});

const makeCreateMessageActionController = require("./message/create-message-controller");
const createMessageActionController = makeCreateMessageActionController({
  createMessage: useCases.createMessage,
});

const makeLoginActionController = require("./user/login-controller");
const loginActionController = makeLoginActionController({
  login: useCases.login,
});

const makeGetSingleUserActionController = require("./user/get-single-user");
const getSingleUserActionController = makeGetSingleUserActionController({
  getSingleUser: useCases.getSingleUser,
});

const makeGetMatchedMessagesActionController = require("./message/get-matched-messages");
const getMatchedMessagesActionController =
  makeGetMatchedMessagesActionController({
    getMatchedMessages: useCases.getMatchedMessages,
  });

module.exports = Object.freeze({
  createUserActionController,
  getAllUsersActionController,
  createMessageActionController,
  loginActionController,
  getSingleUserActionController,
  getMatchedMessagesActionController
});
