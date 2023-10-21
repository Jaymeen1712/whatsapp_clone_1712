module.exports = function makeGetChatHistory({ getChatHistorydb }) {
  return async function getChatHistory({ params }) {
    const { userId } = params;

    const result = await getChatHistorydb({ userId });

    if (result[0]) {
      const response = {
        chats: result[0],
      };
      return response;
    } else {
      return { chats: "No chats!" };
    }
  };
};
