import { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import io from "socket.io-client";

import {
  handleCreateMessage,
  handleGetMatchedMessages,
} from "../../../../../../api";
import { useAppStore } from "../../../../../../store";
import { URL } from "../../../../../../utils";

const socket = io(URL);

const MessageFooter = () => {
  const { currentUserData, selectedChatUserData, setSelectedChatMessages } =
    useAppStore();
  const [message, setMessage] = useState<string>("");

  const [form] = Form.useForm();

  const handleSendButton = async () => {
    try {
      if (currentUserData && selectedChatUserData) {
        await handleCreateMessage({
          senderId: currentUserData?.uuid,
          receiverId: selectedChatUserData?.uuid,
          message,
        });
        setMessage("");
        const response = await handleGetMatchedMessages({
          senderId: currentUserData.uuid,
          receiverId: selectedChatUserData.uuid,
        });
        setSelectedChatMessages(response.data.messages);
        socket.emit("send_message", {
          senderId: currentUserData?.uuid,
          receiverId: selectedChatUserData?.uuid,
        });
      }
    } catch (error) {}
  };

  return (
    <Form
      form={form}
      name="messageForm"
      onFinish={handleSendButton}
      className="message-footer-content"
    >
      <Input
        type="text"
        className="message-footer-input"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <Button
        type="link"
        icon={
          <SendOutlined
            style={{ color: "#8696A0", fontSize: "20px" }}
            className="m-l-8"
          />
        }
      />
    </Form>
  );
};

export default MessageFooter;
