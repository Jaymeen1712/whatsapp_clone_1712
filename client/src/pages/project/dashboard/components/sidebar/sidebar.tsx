import React from "react";

import SidebarHeader from "./header/sidebar-header";
import SidebarSearch from "./search/sidebar-search";
import SidebarChat from "../components/chat/sidebar-chat";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <SidebarHeader />
      <SidebarSearch />
      <div className="sidebar-chats-container">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
