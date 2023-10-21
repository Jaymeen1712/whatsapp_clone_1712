import { API_ROUTES } from "../../../utils";
import apiClient from "../../api-client";

const handleGetMatchedMessages = async (data: {
  senderId: string;
  receiverId: string;
}) => {
  const response = await apiClient.get(
    `${API_ROUTES.GET_MATCHED_MESSAGES}/${data.senderId}/${data.receiverId}`
  );
  return response;
};

export default handleGetMatchedMessages;
