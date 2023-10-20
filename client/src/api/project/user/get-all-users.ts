import axios from "axios";
import { API_ROUTES } from "../../../utils";

const handleGetAllUsers = async () => {
  const response = await axios.get(
    `http://localhost:4042/${API_ROUTES.GET_ALL_USERS}`
  );
  return response;
};

export default handleGetAllUsers;
