import React, { useEffect } from "react";

import { handleGetChatHistoryAPI } from "../../../../../api";
import { useAppStore } from "../../../../../store";

const useSidebarController = () => {
  const {
    currentUserData,
    setIsLoading,
    incomingChatFlag,
    setUserChatHistory,
  } = useAppStore();

  const getChatHistory = async () => {
    try {
      if (currentUserData) {
        const chatHistoryResponse = await handleGetChatHistoryAPI({
          userId: currentUserData?.uuid,
        });
        setUserChatHistory(chatHistoryResponse.data.chats);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await getChatHistory();
      setIsLoading(false);
    };
    getData();
  }, [currentUserData, incomingChatFlag]);

  return null;
};

export default useSidebarController;
