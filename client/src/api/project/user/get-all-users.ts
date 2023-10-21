import { API_ROUTES } from "../../../utils";
import apiClient from "../../api-client";

const handleGetAllUsers = async () => {
  const response = await apiClient.get(API_ROUTES.GET_ALL_USERS);
  return response;
};

export default handleGetAllUsers;
