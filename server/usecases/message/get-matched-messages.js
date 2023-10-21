module.exports = function makeGetMatchedMessages({ getMatchedMessagesdb }) {
  return async function createUser({ params }) {
    const { senderId, receiverId } = params;

    const result = await createMessagedb({ senderId, receiverId });

    if (result[0]) {
      const response = {
        messages: result[0],
      };
      return response;
    } else {
      return { message: "No messages!" };
    }
  };
};
