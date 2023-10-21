import { API_ROUTES } from "../../../utils";
import apiClient from "../../api-client";

const handleCreateMessage = async (data: {
  senderId: string;
  receiverId: string;
  message: string;
}) => {
  const response = await apiClient.post(API_ROUTES.CREATE_MESSAGE, data);
  return response;
};

export default handleCreateMessage;
