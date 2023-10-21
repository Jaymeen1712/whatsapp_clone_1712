import { API_ROUTES } from "../../../utils";
import apiClient from "../../api-client";

const handleGetSingleUser = async ({ uuid }: { uuid: string }) => {
  const response = await apiClient.get(`${API_ROUTES.GET_SINGLE_USER}/${uuid}`);
  return response;
};

export default handleGetSingleUser;
