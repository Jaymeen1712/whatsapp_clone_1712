import React, { useEffect } from "react";
import io from "socket.io-client";

import { useAppStore } from "../../../../../store";
import { handleGetMatchedMessages } from "../../../../../api";
import { URL } from "../../../../../utils";

const socket = io(URL);

const useMessageController = () => {
  const { currentUserData, setSelectedChatMessages } = useAppStore();

  useEffect(() => {
    if (currentUserData) {
      socket.on("receive_message", async (data) => {
        if (data.receiverId === currentUserData.uuid) {
          const response = await handleGetMatchedMessages({
            senderId: currentUserData.uuid,
            receiverId: data.senderId,
          });
          setSelectedChatMessages(response.data.messages);
        }
      });
    }
  }, [socket]);

  return null;
};

export default useMessageController;
