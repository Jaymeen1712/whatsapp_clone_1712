import React, { useCallback } from "react";

import NewChatSidebarHeader from "./header/new-chat-sidebar-header";
import NewChatSearch from "./search/new-chat-search";
import SidebarChat from "../components/chat/sidebar-chat";
import useNewChatSidebarController from "./new-chat-sidebar-controller";
import { useAppStore } from "../../../../../store";
import { User } from "../../../../../types/user.";
import { handleGetMatchedMessages } from "../../../../../api";

const NewChatSidebar = () => {
  const { allUsers } = useNewChatSidebarController();
  const {
    setSelectedChatUserData,
    setEmptyMessageContainer,
    currentUserData,
    selectedChatUserData,
    setSelectedChatMessages,
  } = useAppStore();

  const handleChatClick = useCallback(
    async (user: User) => {
      setSelectedChatUserData(user);
      setEmptyMessageContainer(false);
      if (currentUserData) {
        try {
          const response = await handleGetMatchedMessages({
            senderId: currentUserData.uuid,
            receiverId: user.uuid,
          });
          setSelectedChatMessages(response.data.messages);
        } catch (error) {
          console.log("🚀 ~ file: new-chat-sidebar.tsx:31 ~ error:", error);
        }
      }
    },
    [selectedChatUserData]
  );

  return (
    <div className="new-chat-sidebar-container">
      <NewChatSidebarHeader />
      <div className="new-chat-sidebar-body">
        <div className="flex justify-center">
          <NewChatSearch />
        </div>
        <div className="sidebar-chats-container">
          {allUsers?.map((user) => (
            <div onClick={() => handleChatClick(user)} key={user.uuid}>
              <SidebarChat chatInfo={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewChatSidebar;
