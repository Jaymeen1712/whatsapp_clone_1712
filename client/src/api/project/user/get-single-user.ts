import axios from "axios";
import { API_ROUTES } from "../../../utils";

const handleGetSingleUser = async ({ uuid }: { uuid: string }) => {
  const response = await axios.get(
    `http://localhost:4042/${API_ROUTES.GET_SINGLE_USER}/${uuid}`
  );
  return response;
};

export default handleGetSingleUser;
