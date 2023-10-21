import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import React from "react";
import { ChatHistory } from "../../../../../../types/user.";

interface Props {
  chatInfo?: ChatHistory;
  isNewChat?: boolean;
}

const SidebarChat: React.FC<Props> = ({ chatInfo, isNewChat = true }) => {
  return (
    <div className="sidebar-chat-container flex justify-center">
      <div
        className="flex justify-between items-center"
        style={{
          width: "100%",
        }}
      >
        <div className="flex justify-center items-center">
          <Avatar
            style={{ backgroundColor: "black" }}
            icon={<UserOutlined />}
            className="m-l-24"
          />
          <div className="flex m-l-16" style={{ flexDirection: "column" }}>
            <Typography.Text style={{ color: "white" }}>
              {chatInfo?.firstName} {chatInfo?.lastName}
            </Typography.Text>
            <Typography.Text style={{ color: "white" }}>
              {chatInfo?.message}
            </Typography.Text>
          </div>
        </div>
        {!isNewChat && (
          <div className="m-r-24">
            <Typography.Text style={{ color: "white" }}>1112</Typography.Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarChat;
