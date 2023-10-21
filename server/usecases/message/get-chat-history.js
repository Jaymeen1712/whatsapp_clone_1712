module.exports = function makeGetChatHistory({ getChatHistorydb }) {
  return async function getChatHistory({ params }) {
    const { userId } = params;

    const result = await getChatHistorydb({ userId });

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
