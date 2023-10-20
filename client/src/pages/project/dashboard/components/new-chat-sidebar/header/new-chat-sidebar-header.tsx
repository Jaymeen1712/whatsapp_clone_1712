import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Typography from "antd/es/typography/Typography";

import { useAppStore } from "../../../../../../store";

const NewChatSidebarHeader = () => {
  const { setNewChatSidebar } = useAppStore();
  return (
    <div className="new-chat-sidebar-header-container flex justify-start items-center">
      <div
        className="flex justify-start items-center"
        style={{ width: "100%", margin: "10px 10px 10px 24px" }}
      >
        <Button
          type="link"
          className="flex justify-center items-center m-l-8"
          onClick={() => setNewChatSidebar(false)}
        >
          <ArrowLeftOutlined
            className="m-r-8"
            style={{
              color: "white",
              fontSize: "18px",
            }}
          />
        </Button>
        <Typography
          style={{
            color: "white",
            fontSize: "18px",
          }}
        >
          New Chat
        </Typography>
      </div>
    </div>
  );
};

export default NewChatSidebarHeader;
