module.exports = function makeGetChatHistory({
  getChatHistorydb,
  getSingleUserdb,
}) {
  return async function getChatHistory({ params }) {
    const { userId } = params;

    const result = await getChatHistorydb({ userId });

    if (result[0]) {
      const uniqueChatInfo = result[0].reduce((result, chat) => {
        const otherUserId =
          chat.senderId === userId ? chat.receiverId : chat.senderId;
        const message = chat.message;

        const existingChatIndex = result.findIndex(
          (chatInfo) => chatInfo.id === otherUserId
        );

        if (existingChatIndex === -1) {
          result.push({ id: otherUserId, message });
        } else {
          result[existingChatIndex].message = message;
        }

        return result;
      }, []);

      const chatInfo = await Promise.all(
        uniqueChatInfo.map(async (chat) => {
          const response = await getSingleUserdb({ uuid: chat.id });
          return { ...chat, ...response[0][0] };
        })
      );

      const response = {
        chats: chatInfo,
      };
      return response;
    } else {
      return { chats: "No chats!" };
    }
  };
};
