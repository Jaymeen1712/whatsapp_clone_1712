import axios from "axios";

const apiClient = axios.create({
  // baseURL: `${process.env.REACT_APP_BASE_URL}`,
  baseURL: `https://flow-chat-backend.vercel.app`,
});

export default apiClient;
