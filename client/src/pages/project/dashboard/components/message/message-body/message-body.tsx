import React from "react";
import MessageChat from "./message-chat/message-chat";

import { useAppStore } from "../../../../../../store";

const MessageBody = () => {
  const { selectedChatMessages, currentUserData } = useAppStore();

  return (
    <div>
      {selectedChatMessages && currentUserData && (
        <>
          {selectedChatMessages.map((message) => {
            if (message.senderId === currentUserData.uuid) {
              return (
                <div className="message-chat-container right-chat-container">
                  <MessageChat
                    message={message}
                    className="message-chat-right"
                  />
                </div>
              );
            } else {
              return (
                <div className="message-chat-container left-chat-container">
                  <MessageChat
                    message={message}
                    className="message-chat-left"
                  />
                </div>
              );
            }
          })}
        </>
      )}
    </div>
  );
};

export default MessageBody;
