import axios from "axios";
import { API_ROUTES } from "../../../utils";

const handleCreateMessage = async (data: {
  senderId: string;
  receiverId: string;
  message: string;
}) => {
  const response = await axios.post(
    `http://localhost:4042/${API_ROUTES.CREATE_MESSAGE}`,
    data
  );
  return response;
};

export default handleCreateMessage;
