import React from "react";
import { Message } from "../../../../../../../types/user.";

interface MessageChatProps {
  message: Message;
  className: string;
}

const MessageChat: React.FC<MessageChatProps> = ({ message, className }) => {
  return (
    <div className={`message-chat message-chat-left ${className}`}>
      {message.message}
    </div>
  );
};

export default MessageChat;
