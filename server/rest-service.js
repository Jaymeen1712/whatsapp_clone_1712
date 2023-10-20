const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.post("/signup", controller.createUserActionController);
router.get("/getAllUsers", controller.getAllUsersActionController);
router.post("/createMessage", controller.createMessageActionController);
router.post("/login", controller.loginActionController);
router.get("/singleUser/:uuid", controller.getSingleUserActionController);
router.get(
  "/matchedMessages/:senderId/:receiverId",
  controller.getMatchedMessagesActionController
);

module.exports = { router };
