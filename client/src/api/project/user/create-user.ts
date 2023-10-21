import { API_ROUTES } from "../../../utils";
import apiClient from "../../api-client";

const handleCreateUser = async (data: {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}) => {
  const response = await apiClient.post(API_ROUTES.SIGNUP, data);
  return response;
};

export default handleCreateUser;
