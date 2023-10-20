import React, { useEffect, useState } from "react";
import { message } from "antd";

import { handleGetAllUsers } from "../../../../../api";
import { useAppStore } from "../../../../../store";
import { User } from "../../../../../types/user.";

const useNewChatSidebarController = () => {
  const { setIsLoading, currentUserData } = useAppStore();
  const [allUsers, setAllUsers] = useState<User[] | null>(null);

  const getAllUsers = async () => {
    try {
      const response = await handleGetAllUsers();
      const updatedUser = response.data.users.filter(
        (user: User) => user.uuid !== currentUserData?.uuid
      );
      setAllUsers(updatedUser);
    } catch (error) {
      message.error("Technical error occured!");
      console.error(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await getAllUsers();
      setIsLoading(false);
    };
    getData();
  }, []);

  return { allUsers };
};

export default useNewChatSidebarController;
