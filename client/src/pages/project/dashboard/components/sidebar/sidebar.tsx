import React from "react";

import SidebarHeader from "./header/sidebar-header";
import SidebarSearch from "./search/sidebar-search";
import SidebarChat from "../components/chat/sidebar-chat";
import useSidebarController from "./sidebar-controller";
import { useAppStore } from "../../../../../store";

const Sidebar = () => {
  const { userChatHistory } = useAppStore();
  useSidebarController();

  return (
    <div className="sidebar-container">
      <SidebarHeader />
      <SidebarSearch />
      {userChatHistory && (
        <>
          {userChatHistory.map((chat) => (
            <div className="sidebar-chats-container" key={chat.uuid}>
              <SidebarChat chatInfo={chat} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Sidebar;
