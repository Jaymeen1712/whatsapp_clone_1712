import { UserOutlined } from "@ant-design/icons";
import { Avatar, Typography } from "antd";
import React from "react";
import { User } from "../../../../../../types/user.";

interface Props {
  user?: User;
  isNewChat?: boolean;
}

const SidebarChat: React.FC<Props> = ({ user, isNewChat = true }) => {
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
              {user?.firstName} {user?.lastName}
            </Typography.Text>
            <Typography.Text style={{ color: "white" }}>
              Message description
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
