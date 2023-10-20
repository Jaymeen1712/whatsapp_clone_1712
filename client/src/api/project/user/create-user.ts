import axios from "axios";
import { API_ROUTES, URL } from "../../../utils";

const handleCreateUser = async (data: {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}) => {
  const response = await axios.post(
    `${URL}/${API_ROUTES.SIGNUP}`,
    data
  );
  return response;
};

export default handleCreateUser;
