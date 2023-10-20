import React from "react";

import MessageHeader from "./message-header";
import MessageBody from "./message-body";
import MessageFooter from "./message-footer";
import useMessageController from "./message-controller";

const Message = () => {
  useMessageController();
  return (
    <div className="content-body-container">
      <div>
        <MessageHeader />
      </div>
      <div className="content-message-container">
        <MessageBody />
      </div>
      <div className="content-footer-container">
        <MessageFooter />
      </div>
    </div>
  );
};

export default Message;
