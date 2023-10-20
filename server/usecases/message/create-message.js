module.exports = function makeCreateMessage({ uuidv4, moment, createMessagedb }) {
  return async function createMessage({ body }) {
    const uuid = uuidv4();
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
    const updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");

    const { senderId, receiverId, message } = body;

    let insertObj = {
      uuid,
      senderId,
      receiverId,
      message,
      createdAt,
      updatedAt,
    };

    const result = await createMessagedb({ insertObj });

    if (result[0].affectedRows > 0) {
      const response = {
        message: "Message added successfully!",
        uuid: insertObj.uuid,
      };
      return response;
    } else {
      return { message: "Message is not added!" };
    }
  };
};
