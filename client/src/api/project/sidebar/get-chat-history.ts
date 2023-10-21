import { API_ROUTES } from "../../../utils";
import apiClient from "../../api-client";

const handleGetChatHistoryAPI = async ({ userId }: { userId: string }) => {
  const response = await apiClient.get(
    `${API_ROUTES.GET_CHAT_HISTORY}/${userId}`
  );
  return response;
};

export default handleGetChatHistoryAPI;
