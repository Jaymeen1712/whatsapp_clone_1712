import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";

import { useAppStore } from "../../../../../../store";
import AddChatIcon from "../../../../../../images/icons/add-chat-icon";

const SidebarHeader = () => {
  const { setNewChatSidebar } = useAppStore();
  return (
    <div className="sidebar-header-container flex justify-between items-center">
      <Avatar
        style={{ backgroundColor: "black" }}
        icon={<UserOutlined />}
        className="m-l-24"
      />
      <Button
        className="m-r-24"
        onClick={() => setNewChatSidebar(true)}
        icon={<AddChatIcon />}
      ></Button>
    </div>
  );
};

export default SidebarHeader;
