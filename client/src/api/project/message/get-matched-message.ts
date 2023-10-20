import axios from "axios";
import { API_ROUTES } from "../../../utils";

const handleGetMatchedMessages = async (data: {
  senderId: string;
  receiverId: string;
}) => {
  const response = await axios.get(
    `http://localhost:4042/${API_ROUTES.GET_MATCHED_MESSAGES}/${data.senderId}/${data.receiverId}`
  );
  return response;
};

export default handleGetMatchedMessages;
