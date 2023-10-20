import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Typography } from "antd";

import { useAppStore } from "../../../../../../store";

const MessageHeader = () => {
  const { selectedChatUserData } = useAppStore();
  return (
    <div className="message-header-container flex items-center">
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
              {selectedChatUserData?.firstName} {selectedChatUserData?.lastName}
            </Typography.Text>
            <Typography.Text style={{ color: "white" }}>
              Click here for more info
            </Typography.Text>
          </div>
        </div>
        <div className="m-r-24">
          <Button
            type="link"
            icon={<SearchOutlined style={{ fontSize: 20 }} />}
            className="grayWhite"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
